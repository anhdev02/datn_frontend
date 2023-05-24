import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const Seen = () => {
  const [viewedProducts, setViewedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  useEffect(() => {
    const viewedProductsData = JSON.parse(localStorage.getItem('viewedProducts')) || [];
    setViewedProducts(viewedProductsData);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = viewedProducts.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(viewedProducts.length / itemsPerPage); i++) {
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

  return (
    <div id="wrap">
      <div id="container">
        <div id="contents">
          <div className="root_width">
            <div className="path">
              <span>Trang Hiện Tại</span>
              <ol>
                <li>
                  <Link to="/">Trang Chủ</Link>
                </li>
                <li title="Current Page">
                  <strong>Đã Xem Gần Đây</strong>
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
                          (<span id="xans_myshop_total_orders">0</span>)
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
                  <h2>Đã Xem Gần Đây</h2>
                </div>
                <div className="xans-element- xans-product xans-product-recentlist ec-base-table typeList Product-list xans-record-">
                  <ul className="xans-element- xans-product xans-product-listitem prdList recent_List">
                    {
                      currentItems.map((product) => (
                        <li>
                          <div className="inner">
                            <div className="thumbnail">
                              <div className="prdImg">
                                <div className="wrap-thumbnail">
                                  <Link className="BG-thumbnail" to={`/productdetail/${product.id}`}>
                                    <img
                                      src={`http://localhost:3000/assets/imgs/${product.image}`}
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="description">
                              <h4 className="name">
                                <Link to={`/productdetail/${product.id}`}>
                                  {product.productName}
                                </Link>
                              </h4>
                              <p className="strike price1">
                                <strong className="txtEm">{formatter.format(product.price)}</strong>
                              </p>
                              <p className="txtEm">
                                <strong>{formatter.format(
                                    product.price -
                                      product.price * (0.01 * product.sale)
                                  )}</strong>
                              </p>
                              <div className="wrap-new-icon">
                                <span className="wrap-new-span"> </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                  <p className="message displaynone">
                    Bạn không có sản phẩm nào được xem gần đây.
                  </p>
                </div>
                <div className="xans-product xans-product-normalpaging ec-base-paginate">
                <ol>
                  {renderPageNumbers}
                </ol>
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
          <Link to="" title="Back to Top">
            <img src="assets/imgs/btn_top1.gif" alt="Top" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Seen;
