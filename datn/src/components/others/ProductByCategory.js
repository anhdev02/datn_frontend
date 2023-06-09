import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AddCart } from "../../store/action/cart";
import { store } from "../../store/store";
import axios from "axios";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const ProductByCategory = (props) => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [productFavorites, setProductFavorites] = useState([]);
  const userId = localStorage.getItem("id");

  useEffect(() => {
    fetch(`http://localhost:8080/api/product/category/${props.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setCurrentPage(1);
      })
      .catch((err) => console.log(err));

    fetchFavoriteProducts();
  }, [location]);

  const productIds = productFavorites.map((favorite) => favorite.productId);

  const updatedProducts = products.map((product) => {
    const icon_status = productIds.includes(product.id) ? "on" : "off";
    return { ...product, icon_status };
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = updatedProducts.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(updatedProducts.length / itemsPerPage); i++) {
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
        <Link onClick={handleClick} id={number} to="" className={activeClass}>
          {number}
        </Link>
      </li>
    );
  });

  const fetchFavoriteProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/favorite/user/${userId}`
      );
      setProductFavorites(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách sản phẩm yêu thích:", error);
    }
  };

  const handleImageClick = async (product) => {
    if (product.icon_status === "on") {
      removeFromFavorites(userId, product.id);
    } else {
      addToFavorites(userId, product.id);
    }
  };

  const addToFavorites = async (userId, productId) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/favorite/add",
        {
          userId: userId,
          productId: productId,
        }
      );

      await axios.put(
        `http://localhost:8080/api/product/favorite/${productId}`,
        {
          favoriteCount: 1,
        }
      );

      const favoriteId = response.data.id;
      fetchFavoriteProducts();
      return favoriteId;
    } catch (error) {
      console.error("Lỗi khi thêm vào danh sách yêu thích:", error);
    }
  };

  const removeFromFavorites = async (userId, productId) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/favorite/${userId}/${productId}`
      );
      await axios.put(
        `http://localhost:8080/api/product/favorite/${productId}`,
        {
          favoriteCount: -1,
        }
      );
      fetchFavoriteProducts();
    } catch (error) {
      console.error("Lỗi khi xóa khỏi danh sách yêu thích:", error);
    }
  };

  function addToCartClickHandle(id, name, image, price, sale, quantity) {
    if (quantity === 0) {
      toast.error("Đã hết sản phẩm", { position: "bottom-left" });
    } else {
      store.dispatch(
        AddCart({
          id: id,
          name: name,
          quantity: 1,
          price: price,
          sale: sale,
          image: image,
        })
      );
      toast.success("Đã thêm sản phẩm vào giỏ hàng", {
        position: "bottom-left",
      });
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
      const priceA = a.price - a.price * (a.sale * 0.01);
      const priceB = b.price - b.price * (b.sale * 0.01);
      return priceA - priceB;
    });
    setProducts(sortedProducts);
  }

  function sortOrderDesc(e) {
    e.preventDefault();
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      const priceA = a.price - a.price * (a.sale * 0.01);
      const priceB = b.price - b.price * (b.sale * 0.01);
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
            <div className="xans-element- xans-product xans-product-menupackage">
              <div className="xans-element- xans-product xans-product-headcategory path">
                <span>Trang Hiện Tại</span>
                <ol className="path4displaynone path3displaynone path2displaynone path1">
                  <li>
                    <Link to="/">Trang Chủ</Link>
                  </li>
                  <li className="path_li path_li1">
                    <Link
                      className="path-a"
                      to=""
                    >
                      {props.name}
                    </Link>
                  </li>
                </ol>
              </div>
              <div className="xans-element- xans-product xans-product-headcategory title">
                <p className="banner" />
                <h2 className="product_headcategory_h2">{props.name}</h2>
              </div>
            </div>
            <div className="xans-element- xans-product xans-product-normalpackage product_main_section main_section_list">
              <div className="xans-element- xans-product xans-product-normalmenu">
                <div className="function" id="Product_ListMenu">
                  <p className="prdCount">
                    Tổng <strong>{products.length}</strong> cái
                  </p>
                  <ul
                    id="type"
                    className="xans-element- xans-product xans-product-orderby"
                  >
                    <li className="xans-record-">
                      <Link onClick={sortOrderNew} to="/newproducts">
                        Sản phẩm mới
                      </Link>
                    </li>
                    <li className="xans-record-">
                      <Link onClick={sortOrderAsc} to="">
                        Giá thấp
                      </Link>
                    </li>
                    <li className="xans-record-">
                      <Link onClick={sortOrderDesc} to="">
                        Giá cao
                      </Link>
                    </li>
                    <li className="xans-record-">
                      <Link onClick={sortOrderFavorite} to="">
                        Sản phẩm yêu thích
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="xans-element- xans-product xans-product-listnormal wrap-mProduct Product-list">
                <ul className="prdList grid4">
                  {currentItems.map((product) => (
                    <li id="anchorBoxId_705" className="xans-record-">
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
                                  id="eListPrdImage705_1"
                                  alt={product.productName}
                                />
                              </Link>
                            </div>
                            <div className="wrap-list-icon">
                              <span className="cart-icon">
                                <img
                                  src="assets/imgs/btn_list_cart.gif"
                                  alt="Thêm vào giỏ hàng"
                                  style={{ cursor: "pointer" }}
                                  onClick={() =>
                                    addToCartClickHandle(
                                      product.id,
                                      product.productName,
                                      product.image,
                                      product.price,
                                      product.sale,
                                      product.quantity
                                    )
                                  }
                                  className="ec-admin-icon cart"
                                />
                              </span>
                              <span className="view-icon">
                                <img
                                  src="assets/imgs/btn_prd_zoom.gif"
                                  style={{ cursor: "pointer" }}
                                  alt="Phóng to hình ảnh sản phẩm"
                                />
                              </span>
                              <span className="wish-span">
                                <img
                                  src="assets/imgs/btn_wish_before.png"
                                  className="icon_img ec-product-listwishicon"
                                  alt="Trước đăng ký Sản phẩm yêu thích"
                                  style={{ cursor: "pointer" }}
                                  icon_status={product.icon_status}
                                  onClick={() => handleImageClick(product)}
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
                                  fontWeight: "bold",
                                }}
                              >
                                {product.productName}
                              </span>
                            </Link>
                          </h4>
                          <ul className="xans-element- xans-product xans-product-listitem spec">
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
              <div className="xans-element- xans-product xans-product-normalpaging ec-base-paginate">
                <Link to="" className="first">
                  <i className="fa-solid fa-angles-left" />
                </Link>
                <ol>{renderPageNumbers}</ol>
                <Link to="" className="last">
                  <i className="fa-solid fa-angles-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="layout" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductByCategory;
