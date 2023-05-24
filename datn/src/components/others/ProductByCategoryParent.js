import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AddCart } from '../../store/action/cart';
import {store} from '../../store/store'

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const ProductByCategoryParent = (props) => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  useEffect(() => {
    fetch(`http://localhost:8080/api/product/parentcategory/${props.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setCurrentPage(1);
      })
      .catch((err) => console.log(err));
  }, [location]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
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

  function sortOrderNew(e) {
    e.preventDefault();
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      return b.id - a.id;
    });
    setProducts(sortedProducts);
  }

  function sortOrderAsc(e) {
    e.preventDefault();
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      const priceA = a.price - a.price * (a.sale*0.01);
      const priceB = b.price - b.price * (b.sale*0.01);
      return priceA - priceB;
    });
    setProducts(sortedProducts);
  }

  function sortOrderDesc(e) {
    e.preventDefault();
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      const priceA = a.price - a.price * (a.sale*0.01);
      const priceB = b.price - b.price * (b.sale*0.01);
      return priceB - priceA;
    });
    setProducts(sortedProducts);
  }

  function sortOrderFavorite(e) {
    e.preventDefault();
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      return b.favoriteCount - a.favoriteCount;
    });
    setProducts(sortedProducts);
  }

  return (
    <div id="wrap">
      <div id="container">
        <div id="contents">
          <div className="root_width">
            <div className="xans-product xans-product-menupackage">
              <div className="xans-product xans-product-headcategory path">
                <span>Trang Hiện Tại</span>
                <ol className="path4displaynone path3displaynone path2displaynone path1">
                  <li>
                    <Link to="/">Trang Chủ</Link>
                  </li>
                  <li className="path_li path_li1">
                    <a
                      className="path-a"
                      href="/category/bình-giữ-nhiệt-bình-nước/24/"
                    >
                      {props.name}
                    </a>
                  </li>
                  <li className="path_li path_li2 displaynone"></li>
                  <li className="path_li path_li3 displaynone"></li>
                  <li className="path_li path_li4 displaynone"></li>
                </ol>
              </div>
              <div className="xans-product xans-product-headcategory title">
                <p className="banner" />
                <h2 className="product_headcategory_h2">{props.name}</h2>
              </div>
            </div>
            <div className="xans-product xans-product-normalpackage product_main_section main_section_list">
              <div className="xans-product xans-product-normalmenu">
                <div className="function" id="Product_ListMenu">
                  <p className="prdCount">
                    Tổng <strong>{products.length}</strong> cái
                  </p>
                  <ul
                    id="type"
                    className="xans-product xans-product-orderby"
                  >
                    <li className="xans-record-">
                      <Link onClick={sortOrderNew} to="">Sản phẩm mới</Link>
                    </li>
                    <li className="xans-record-">
                      <Link onClick={sortOrderAsc} to="">Giá thấp</Link>
                    </li>
                    <li className="xans-record-">
                      <Link onClick={sortOrderDesc} to="">Giá cao</Link>
                    </li>
                    <li className="xans-record-">
                      <Link onClick={sortOrderFavorite} to="">Sản phẩm yêu thích</Link>
                    </li>
                  </ul>
                  <span className="compare displaynone">
                    <Link to="" className="btnCompare">
                      So Sánh Sản Phẩm
                    </Link>
                  </span>
                </div>
                <fieldset className="condition displaynone">
                  <legend>Tìm Nâng Cao</legend>
                  <p>
                    <select className="xans-product xans-product-firstselect FirstSelect">
                      <option value>-Chọn Tiêu Chí-</option>
                      <option value className />
                    </select>
                    <select className="xans-product xans-product-secondselect SecondSelect">
                      <option value>-Chọn Tiêu Chí-</option>
                      <option value className />
                    </select>
                    <Link to="/search" className="btnSubmit">
                      Tìm Kiếm
                    </Link>
                  </p>
                </fieldset>
              </div>
              <div className="xans-product xans-product-listnormal wrap-mProduct Product-list">
                <ul className="prdList grid4">
                  {currentItems.map((product) => (
                    <li id="anchorBoxId_640" className="xans-record-">
                      <div className="inner">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <div className="wrap-thumbnail">
                              <Link
                                className="BG-thumbnail"
                                to={`/productdetail/${product.id}`}
                              >
                                <img
                                  src={`http://localhost:3000/assets/imgs/${product.image}`}
                                  id="eListPrdImage640_1"
                                  alt={product.productName}
                                />
                              </Link>
                            </div>
                            <div className="wrap-list-icon">
                              <span className="cart-icon">
                                <img
                                  src="http://localhost:3000/assets/imgs/btn_list_cart.gif"
                                  alt="Thêm vào giỏ hàng"
                                  style={{ cursor: "pointer" }}
                                  className="ec-admin-icon cart"
                                  onClick={() => addToCartClickHandle(product.id, product.productName, product.image, product.price, product.sale, product.quantity)}
                                />
                              </span>
                              <span className="view-icon">
                                <img
                                  src="http://localhost:3000/assets/imgs/btn_prd_zoom.gif"
                                  style={{ cursor: "pointer" }}
                                  alt="Phóng to hình ảnh sản phẩm"
                                />
                              </span>
                              <span className="wish-span">
                                <img
                                  src="http://localhost:3000/assets/imgs/btn_wish_before.png"
                                  className="icon_img ec-product-listwishicon"
                                  alt="Trước đăng ký Sản phẩm yêu thích"
                                  icon_status="off"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="description">
                          <div className="color displaynone" />
                          <h4 className="name">
                            <Link
                              to={`/productdetail/${product.id}`}
                            >
                              <span
                                style={{
                                  fontSize: "12px",
                                  color: "#555555",
                                  fontWeight: "bold",
                                }}
                              >
                                {product.productName}
                              </span>
                            </Link>
                          </h4>
                          <ul className="xans-product xans-product-listitem spec">
                            <li className="xans-record-">
                              <span
                                style={{
                                  fontSize: "16px",
                                  color: "#098ee6",
                                  fontWeight: "bold",
                                  textDecoration: "line-through",
                                }}
                              >
                                {formatter.format(product.price)}
                              </span>
                              <span
                                id="span_product_tax_type_text"
                                style={{ textDecoration: "line-through" }}
                              ></span>
                            </li>
                            <li className="xans-record-">
                              <span
                                style={{ fontSize: "16px", color: "#555555" }}
                              >
                                {formatter.format(
                                  product.price -
                                    product.price * (0.01 * product.sale)
                                )}
                                <span
                                  style={{ fontSize: "12px", color: "#f20000" }}
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
              <div className="xans-product xans-product-normalpaging ec-base-paginate">
                <ol>
                  {/* load trang */}
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
        <div className="xans-layout xans-layout-orderbasketcount">
          <strong>Giỏ Hàng</strong>
          <span>
            <a href="/order/basket.html">3</a> Sản Phẩm
          </span>
        </div>
        <div className="xans-layout xans-layout-productrecent">
          <h2>
            <Link to="/seen">Đã Xem Gần Đây</Link>
          </h2>
          <ul>
            <li className="displaynone xans-record-">
              <a href="/product/detail.html##param##">
                <img src="about:blank" alt="" />
                <span>##name##</span>
              </a>
            </li>
            <li className="displaynone xans-record-">
              <a href="/product/detail.html##param##">
                <img src="about:blank" alt="" />
                <span>##name##</span>
              </a>
            </li>
          </ul>
          <p className="player">
            <img
              src="http://localhost:3000/assets/imgs/btn_recent_prev.gif"
              alt="Prev"
              className="prev"
            />
            <img
              src="http://localhost:3000/assets/imgs/btn_recent_next.gif"
              alt="Next"
              className="next"
            />
          </p>
        </div>
        <p className="pageTop">
          <a href="#header" title="Back to Top">
            <img
              src="http://localhost:3000/assets/imgs/btn_top1.gif"
              alt="Top"
            />
          </a>
        </p>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ProductByCategoryParent;
