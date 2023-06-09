import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { confirm } from "react-confirm-box";

const ConfirmOrder = () => {
  const [order, setOrder] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);


  useEffect(()=>{
    loadData();
  }, []);

  const loadData = () => {
    fetch('http://localhost:8080/api/order/confirm')
    .then((res) => res.json())
    .then((data) => {
      setOrder(data);
    })
    .catch((err) => console.log(err));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = order.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(order.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    event.preventDefault();
    setCurrentPage(Number(event.target.id));
  };

  const handleSelectChange = (event) => {
    const dataId = event.target.dataset.id;
    const selectedOption = event.target.value;
    var url = "http://localhost:8080/api/order/status/" + dataId;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      status: selectedOption,
    });

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) =>{
        console.log(result);
        toast.success("Đã cập nhật trạng thái đơn hàng!", { position: "top-right" });
        loadData();
      })
      .catch((error) => console.log("error", error));
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    const activeClass = number === currentPage ? "active" : "";
    return (
        <li className={`page-item ${activeClass}`} style={{display: "inline-block"}}>
          <a onClick={handleClick} id={number} className="page-link" href="#st">{number}</a>
        </li>
    );
  });

  const addTrash = async (event) => {
    event.preventDefault();
    const result = await confirm("Bạn có chắc muốn xóa đơn hàng?", event);
    if (result) {
      var id = event.target.id;
      var url = "http://localhost:8080/api/order/" + id;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
        confirm: false,
        trash: true,
      });
  
      var requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
  
      fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) =>{
          console.log(result);
          toast.success("Đã xóa tạm thời đơn hàng!", { position: "top-right" });
          loadData();
        })
        .catch((error) => console.log("error", error));
    }
    
  }
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
    <h4 className="fw-bold py-3 mb-4">Đơn hàng</h4>
    <div className="card">
      <h5 className="card-header">Danh sách đã xác nhận</h5>
      <div
        style={{ height: "50vh"}}
        className="table-responsive text-nowrap"
      >
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Tên người nhận</th>
              <th>Địa chỉ</th>
              <th>Điện thoại</th>
              <th>Tổng tiền</th>
              <th>Trạng thái</th>
              <th>Ngày tạo</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
            {
              currentItems && 
                currentItems.map((item,index)=>{
                  return (
                  <tr key={index}>
                    <td>
                      <strong>{item.username}</strong>
                    </td>
                    <td>
                    <div style={{width: '200px', marginTop: '2vh'}}>
                        <p style={{overflow:'hidden', textOverflow: 'ellipsis'}}>{item.address}</p>
                    </div>
                    </td>
                    <td>{item.phone}</td>
                    <td>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(item.total)}</td>
                    <td>
                    <select
                      className="form-select"
                      data-id={item.id}
                      onChange={handleSelectChange}
                    >
                      <option selected={item.status === 'Chờ Thanh Toán'} value="Chờ Thanh Toán">Chờ Thanh Toán</option>
                      <option selected={item.status === 'Chuẩn Bị Giao Hàng'} value="Chuẩn Bị Giao Hàng">Chuẩn Bị Giao Hàng</option>
                      <option selected={item.status === 'Đang Vận Chuyển'} value="Đang Vận Chuyển">Đang Vận Chuyển</option>
                      <option selected={item.status === 'Đã Giao'} value="Đã Giao">Đã Giao</option>

                    </select>
                    </td>
                    <td>
                        {item.date}
                    </td>
                    <td>
                    <div className="dropdown">
                        <button
                          type="button"
                          className="btn p-0 dropdown-toggle hide-arrow"
                          data-bs-toggle="dropdown"
                        >
                          <i className="bx bx-dots-vertical-rounded" />
                        </button>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" to={"/dashboard/order/"+item.id}>
                          <i class='bx bx-detail'></i> Chi tiết
                          </Link>
                          <Link className="dropdown-item" to="#" id={item.id} onClick={addTrash}>
                            <i className="bx bx-trash me-1" /> Xóa
                          </Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                  )
                })
            }
          </tbody>
        </table>
      </div>
    </div>
    <nav aria-label="Page navigation" style={{textAlign: "center", marginTop: "10px"}}>
        <ul className="pagination" style={{display: "inline-block"}}>
          {renderPageNumbers}
        </ul>
      </nav>
    <ToastContainer />
  </div>
  )
}

export default ConfirmOrder