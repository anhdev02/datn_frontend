import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const Order = () => {
  const user = localStorage.getItem("username");
  const [orders, setOrders] = useState([]);
  const [originalOrders, setOriginalOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("all");
  useEffect(() => {
    fetch(`http://localhost:8080/api/order/user/${user}`)
      .then((res) => res.json())
      .then((data) => {
        setOriginalOrders(data);
        setOrders(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(orders.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    event.preventDefault();
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    const activeClass = number === currentPage ? "this" : "other";
    return (
      <li>
        <a onClick={handleClick} id={number} href="#st" className={activeClass}>
          {number}
        </a>
      </li>
    );
  });

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
    filterOrders(event.target.value);
  };

  const filterOrders = (status) => {
    if (status === 'all') {
      setOrders(originalOrders);
    } else {
      const filteredOrders = originalOrders.filter((order) => order.status === status);
      setOrders(filteredOrders);
    }
  };

  const fetchData = async (orderId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/orderdetail/${orderId}`
      );
      const data = await response.json();
      setOrderDetails((prevState) => ({
        ...prevState,
        [orderId]: data,
      }));
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    orders.forEach((order) => {
      fetchData(order.id);
    });
  }, [orders]);

  return (
    <div id="wrap">
      <div id="container">
        <div id="contents">
          <div className="root_width">
            <div className="path">
              <span>Trang Hiện Tại</span>
              <ol>
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
                <li>
                  <Link to="/account">Tài Khoản Của Tôi</Link>
                </li>
                <li title="Trang Hiện Tại">
                  <strong>Đơn hàng</strong>
                </li>
              </ol>
            </div>
            <div className="clearBoth">
              <div className="myshpp-left">
                <div className="customer_sidenav">
                  <h3 className="customer_h3">
                    <Link to="/account" className="on">
                      Tài khoản của tôi
                    </Link>
                  </h3>
                  <ul className="xans-element- xans-myshop xans-myshop-main my_ul">
                    <li className="my_li1">
                      <Link to="/order">
                        Đơn hàng
                        <span className="xans-element- xans-myshop xans-myshop-orderhistorytab">
                          (
                          <span id="xans_myshop_total_orders">
                            {orders.length}
                          </span>
                          )
                        </span>
                      </Link>
                    </li>
                    <li className="my_li2">
                      <Link to="/addressbook">Sổ địa chỉ</Link>
                    </li>
                    <li className="my_li3">
                      <Link to="/favouriteslist">
                        Danh sách yêu thích
                        <span className="count">
                          (
                          <span className="xans_myshop_main_interest_prd_cnt">
                            0
                          </span>
                          )
                        </span>
                      </Link>
                    </li>
                    <li className="my_li4">
                      <Link to="/seen">Đã xem</Link>
                    </li>
                    <li style={{ display: "none" }} className="my_li6">
                      <Link to="">Nhận xét của tôi</Link>
                    </li>
                    <li className="my_li7">
                      <Link to="/accountinfo">Thông tin tài khoản</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="myshpp-right">
                <div className="titleArea">
                  <h2>Đơn hàng</h2>
                </div>
                <form
                  method="GET"
                  id="OrderHistoryForm"
                  name="OrderHistoryForm"
                >
                  <div className="xans-element- xans-myshop xans-myshop-orderhistoryhead">
                    <fieldset className="ec-base-boxB">
                      <legend>Khoảng Thời Gian</legend>
                      <div className="stateSelect">
                        <select
                          id="order_status"
                          name="order_status"
                          className="fSelect"
                          onChange={handleStatusChange}
                        >
                          <option value="all">
                            Tình trạng xử lý tất cả đơn hàng
                          </option>
                          <option value="Chờ Thanh Toán">
                            Chờ Thanh Toán
                          </option>
                          <option value="Chuẩn Bị Giao Hàng">
                            Chuẩn Bị Giao Hàng
                          </option>
                          <option value="Đang Vận Chuyển">Đang Vận Chuyển</option>
                          <option value="Đã Giao">
                            Đã Giao
                          </option>
                        </select>
                      </div>
                    </fieldset>
                  </div>
                  <input id="mode" name="mode" defaultValue type="hidden" />
                  <input id="term" name="term" defaultValue type="hidden" />
                </form>
                <div className="xans-element- xans-myshop xans-myshop-orderhistorylistitem ec-base-table typeList">
                  <table border={1}>
                    <caption>Thông tin sản phẩm đặt hàng</caption>
                    <thead>
                      <tr>
                        <th className="historylist1" scope="col">
                          Sản phẩm
                        </th>
                        <th className="historylist2" scope="col">
                          Số tiền
                        </th>
                        <th className="historylist3" scope="col">
                          Tình Trạng
                        </th>
                      </tr>
                    </thead>
                    <tbody className="center">
                      {currentItems.map((order) => (
                        <React.Fragment key={order.id}>
                          <tr>
                            <td colSpan={3}>
                              <div className="number">
                                <a href={`detail.html?order_id=${order.id}`}>
                                  <strong>Mã đơn hàng | </strong>
                                  {order.id}
                                </a>
                                <strong>Ngày đặt | </strong>
                                {order.date}
                              </div>
                            </td>
                          </tr>
                          {orderDetails[order.id]?.map((item) => (
                            <tr>
                              <td colSpan={3}>
                                <div className="wrap-historylist">
                                  <div className="historylist1">
                                    <div className="thumb">
                                      <Link to={`/productdetail/${item.id}`}>
                                        <img
                                          src={`http://localhost:3000/assets/imgs/${item.image}`}
                                          alt=""
                                        />
                                      </Link>
                                    </div>
                                    <div className="product left top">
                                      <strong className="name">
                                        <Link
                                          to={`/productdetail/${item.id}`}
                                          className="ec-product-name"
                                        >
                                          {item.productName}
                                        </Link>
                                      </strong>
                                    </div>
                                  </div>
                                  <div className="historylist2">
                                    <strong>
                                      {formatter.format(
                                        (item.price -
                                          item.price * (0.01 * item.sale)) *
                                          item.quantity
                                      )}
                                    </strong>
                                  </div>
                                  <div className="historylist3">
                                    <div className="state">
                                      <p className="txtEmB">{order.status}</p>
                                    </div>
                                    <div>
                                      <p className>-</p>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                  <p className="message displaynone">
                    Bạn không có lịch sử đặt hàng.
                  </p>
                </div>
                <div className="xans-product xans-product-normalpaging ec-base-paginate">
                  <ol>{renderPageNumbers}</ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="layout" />
      </div>
      <hr className="layout" />
      <div id="quick">
        <div className="xans-element- xans-layout xans-layout-orderbasketcount">
          <strong>Giỏ Hàng</strong>
          <span>
            <a href="#st">0</a> Sản Phẩm
          </span>
        </div>
        <div className="xans-element- xans-layout xans-layout-productrecent">
          <h2>
            <Link to="/seen">Đã Xem Gần Đây</Link>
          </h2>
          <p className="player">
            <img
              src="assets/imgs/btn_recent_prev.gif"
              alt="Prev"
              className="prev"
            />
            <img
              src="assets/imgs/btn_recent_next.gif"
              alt="Next"
              className="next"
            />
          </p>
        </div>
        <p className="pageTop">
          <a href="#header" title="Back to Top">
            <img src="assets/imgs/btn_top1.gif" alt="Top" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Order;