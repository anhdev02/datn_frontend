import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { confirm } from "react-confirm-box";
import { ToastContainer, toast } from "react-toastify";

const TrashGuide = () => {
  const [guide, setGuide] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    fetch("http://localhost:8080/api/guide/trash")
      .then((res) => res.json())
      .then((data) => {
        setGuide(data);
      })
      .catch((err) => console.log(err));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = guide.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(guide.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    event.preventDefault();
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    const activeClass = number === currentPage ? "active" : "";
    return (
      <li
        className={`page-item ${activeClass}`}
        style={{ display: "inline-block" }}
      >
        <a onClick={handleClick} id={number} className="page-link" href="#st">
          {number}
        </a>
      </li>
    );
  });

  const addTrash = async (event) => {
    event.preventDefault();
    var id = event.target.id;
    var url = "http://localhost:8080/api/guide/" + id;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      status: true,
      trash: false,
    });

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        toast.success("Hướng dẫn đã được khôi phục!", { position: "top-right" });
        loadData();
      })
      .catch((error) => console.log("error", error));
  };

  const Delete = async (event) => {
    event.preventDefault();
    const result = await confirm("Hướng dẫn sẽ bị xóa vĩnh viễn?", event);
    if (result) {
      var id = event.target.id;
      var url = "http://localhost:8080/api/guide/" + id;
      var requestOptions = {
        method: "DELETE",
        redirect: "follow",
      };

      fetch(url, requestOptions)
        .then((response) => {
          response.text();
          if (response.ok) {
            toast.success("Đã xóa vĩnh viễn hướng dẫn!", {
              position: "top-right",
            });
          } else {
            toast.error("Xóa vĩnh viễn hướng dẫn không thành công!", {
              position: "top-right",
            });
          }
        })
        .then((result) => {
          console.log(result);
          loadData();
        })
        .catch((error) => console.log("error", error));
    }
  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Hướng dẫn</h4>
      <div className="card">
        <h5 className="card-header">Thùng rác</h5>
        <div
          style={{ height: "75vh" }}
          className="table-responsive text-nowrap"
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Hình ảnh</th>
                <th>Tên hướng dẫn</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {currentItems &&
                currentItems.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>
                        <img
                          width={60}
                          src={`../../assets/imgs/${item.image}`}
                          alt=""
                        />
                      </td>
                      <td>
                        <div style={{ width: "200px", marginTop: "2vh" }}>
                          <p
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            <strong>{item.name}</strong>
                          </p>
                        </div>
                      </td>
                      <td>
                        {item.status === false ? (
                          <span className="badge bg-label-primary me-1">
                            Inactive
                          </span>
                        ) : (
                          <span className="badge bg-label-success me-1">
                            Active
                          </span>
                        )}
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
                            <Link
                              className="dropdown-item"
                              to=""
                              id={item.id}
                              onClick={addTrash}
                            >
                              <i class="bx bx-share"></i> Khôi phục
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="#"
                              id={item.id}
                              onClick={Delete}
                            >
                              <i className="bx bx-trash me-1" /> Xóa
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <nav
        aria-label="Page navigation"
        style={{ textAlign: "center", marginTop: "10px" }}
      >
        <ul className="pagination" style={{ display: "inline-block" }}>
          {renderPageNumbers}
        </ul>
      </nav>
      <ToastContainer />
    </div>
  );
};

export default TrashGuide;
