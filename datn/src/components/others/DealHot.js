import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AddCart } from '../../store/action/cart';
import {store} from '../../store/store'

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const DealHot = () => {
  const [productsDealHot, setProductsDealHot] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  useEffect(() => {
    fetch("http://localhost:8080/api/product/dealhot/36")
      .then((res) => res.json())
      .then((data) => setProductsDealHot(data))
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productsDealHot.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(productsDealHot.length / itemsPerPage); i++) {
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

  function addToCartClickHandle(id, name, image, price, sale, quantity) {
    if(quantity===0) {
      toast.error('Đã hết sản phẩm',{position: "bottom-left"});
    }else {
      store.dispatch(AddCart({id: id, name: name, quantity: 1, price: price, sale: sale, image: image}));
      toast.success('Đã thêm sản phẩm vào giỏ hàng',{position: "bottom-left"});
    }
  }

  return (
    <div id="wrap">
      <div id="container">
        <div id="contents">
          <div className="root_width">
            <div className="xans-element- xans-product xans-product-menupackage">
              <div className="xans-element- xans-product xans-product-headcategory path">
                <span>Trang Hiện Tại</span>
                <ol>
                  <li>
                    <Link to="/">Trang Chủ</Link>
                  </li>
                  <li title="Current Page">
                    <strong>Deal Hot</strong>
                  </li>
                </ol>
              </div>
              <div className="xans-element- xans-product xans-product-headcategory title">
                <p className="banner">
                  <img src="assets/imgs/Deal hot_1140x282_0621.jpg" alt="" />
                </p>
                <h2>
                  <span>Deal Hot</span>
                </h2>
              </div>
            </div>
            <div className="wrap-tab-product-section">
              <div id="tab1" className="tab-section menuTab_on">
                <article className="wrap-mProduct Product-list">
                  <div className="in-article">
                    <div className="root_width">
                      <div className="xans-element- xans-product xans-product-listmain-21 xans-product-listmain xans-product-21 productList mProduct typeThumb">
                        <ul className="prdList">
                          {currentItems.map((product) => (
                            <li>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <Link
                                        className="BG-thumbnail"
                                        to={`/productdetail/${product.id}`}
                                      >
                                        <img
                                          src={`assets/imgs/${product.image}`}
                                          alt={product.productName}
                                        />
                                      </Link>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon">
                                        <img
                                          src="assets/imgs/btn_list_cart.gif"
                                          style={{ cursor: "pointer" }}
                                          onClick={() => addToCartClickHandle(product.id, product.productName, product.image, product.price, product.sale, product.quantity)}
                                          alt="Thêm vào giỏ hàng"
                                          className="ec-admin-icon cart"
                                        />
                                      </span>
                                      <span className="view-icon">
                                        <img
                                          src="assets/imgs/btn_prd_zoom.gif"
                                          onclick="zoom('652', '1', '22','', '');"
                                          style={{ cursor: "pointer" }}
                                          alt="Phóng to hình ảnh sản phẩm"
                                        />
                                      </span>
                                      <span className="wish-span">
                                        <img
                                          src="assets/imgs/btn_wish_before.png"
                                          className="icon_img ec-product-listwishicon"
                                          alt="Trước đăng ký Sản phẩm yêu thích"
                                          icon_status="off"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <h4 className="name">
                                    <Link to={`/productdetail/${product.id}`}>
                                      <span
                                        style={{
                                          fontSize: "12px",
                                          color: "#555555",
                                        }}
                                      >
                                        {product.productName}
                                      </span>
                                    </Link>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-21 xans-product-listitem xans-product-21 spec">
                                    <li className="xans-record-">
                                      <span
                                        style={{
                                          fontSize: "12px",
                                          color: "#555555",
                                          textDecoration: "line-through",
                                        }}
                                      >
                                        {formatter.format(product.price)}
                                      </span>
                                      <span
                                        id="span_product_tax_type_text"
                                        style={{
                                          textDecoration: "line-through",
                                        }}
                                      ></span>
                                    </li>
                                    <li className="xans-record-">
                                      <span
                                        style={{
                                          fontSize: "12px",
                                          color: "#555555",
                                        }}
                                      >
                                        {formatter.format(
                                          product.price -
                                            product.price *
                                              (0.01 * product.sale)
                                        )}
                                        <span
                                          style={{
                                            fontSize: "12px",
                                            color: "#f20000",
                                          }}
                                        >
                                          {product.sale}%
                                        </span>
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="xans-product xans-product-normalpaging ec-base-paginate">
                <ol>
                  {renderPageNumbers}
                </ol>
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
            <a href="#st">1</a> Sản Phẩm
          </span>
        </div>
        <div className="xans-element- xans-layout xans-layout-productrecent">
          <h2>
            <Link to="/seen">Đã Xem Gần Đây</Link>
          </h2>
          <ul>
            <li className="displaynone xans-record-">
              <Link to="">
                <img src="#" alt="" />
                <span>##name##</span>
              </Link>
            </li>
            <li className="displaynone xans-record-">
              <Link to="">
                <img src="#" alt="" />
                <span>##name##</span>
              </Link>
            </li>
          </ul>
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
      <ToastContainer/>
    </div>
  );
};

export default DealHot;