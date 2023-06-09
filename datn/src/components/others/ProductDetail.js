import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AddCart } from '../../store/action/cart';
import {store} from '../../store/store'

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const ProductDetail = (props) => {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleHover = (e) => {
    const img = e.target;
    const { width, height } = img.getBoundingClientRect();
    const x = width / 2;
    const y = height / 2;
    setCoords({ x, y });
    setImgSrc(img.src);
    setIsHovered(true);
  };
  
  const handleLeave = () => {
    setIsHovered(false);
  };
  
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  const handleImageClick = (event) => {
    setCurrentImage(event.target.src);
  };
  const addToViewedProducts = (product) => {
    const viewedProducts = JSON.parse(localStorage.getItem('viewedProducts')) || [];
    const isProductViewed = viewedProducts.some((viewedProduct) => viewedProduct.id === product.id);
    if (isProductViewed) {
      return;
    }
    const updatedViewedProducts = [product, ...viewedProducts.slice(0, 23)];
    localStorage.setItem('viewedProducts', JSON.stringify(updatedViewedProducts));
  };

  useEffect(() => {
    fetch(`http://localhost:8080/api/product/${props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        addToViewedProducts(data);
      })
      .catch((error) => console.error(error));

    fetch(`http://localhost:8080/api/image/${props.id}`)
      .then((response) => response.json())
      .then((data) => setImage(data))
      .catch((error) => console.error(error));
  }, [props.id]);

  function addToCartClickHandle(e, id, name, image, price, sale, quantity) {
    e.preventDefault();
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
        <div id="contents" className="normal-detail">
          <div className="xans-product xans-product-headcategory">
            <div className="root_width">
              <div className="xans-product xans-product-detail">
                <div className="detailArea">
                  <div className="xans-product xans-product-image imgArea">
                    <div className="keyImg">
                      <div className="thumbnail">
                        <Link to="" alt="P0000BBD">
                          <img
                            src={
                              currentImage === null
                                ? `http://localhost:3000/assets/imgs/${product.image}`
                                : currentImage
                            }
                            alt={product.productName}
                            className="BigImage"
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                            onMouseMove={handleMouseMove}
                          />
                          <span
                            id="zoomMouseGiude"
                            style={{
                              display: "block",
                              position: "relative",
                              width: "170px",
                              margin: "0px auto",
                            }}
                          >
                            <img
                              src="http://localhost:3000/assets/imgs/txt_product_zoom.gif"
                              id="zoomGuideImage"
                              alt="Hãy di chuyển con trỏ chuột lên trên."
                              style={{
                                position: "absolute",
                                top: "-27px",
                                right: "0px",
                              }}
                            />
                          </span>
                        </Link>
                        <div id="zoom_wrap">
                          <p
                            className={
                              isHovered
                                ? "image_zoom_large"
                                : "image_zoom_large displaynone"
                            }
                          >
                            <span className="image_zoom_large_relative">
                              <img
                                id="zoom_image"
                                alt=""
                                src={imgSrc}
                                style={{
                                  transform: `scale(2)`,
                                  transformOrigin: `${coords.x}px ${coords.y}px`,
                                }}
                              />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      id="thumbnail"
                      className="xans-product xans-product-addimage listImg"
                    >
                      <ul>
                        <li>
                          <div>
                            <img
                              src={`http://localhost:3000/assets/imgs/${product.image}`}
                              className="ThumbImage"
                              onClick={handleImageClick}
                              alt=""
                            />
                          </div>
                        </li>
                        {image.map((img) => (
                          <li>
                            <div>
                              <img
                                src={`http://localhost:3000/assets/imgs/${img.image}`}
                                className="ThumbImage"
                                onClick={handleImageClick}
                                alt=""
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="infoArea">
                    <div className="headingArea">
                      <h2>{product.productName}</h2>
                      <div className="xans-product xans-product-detaildesign product_detaildesign prdBoard info">
                        <ul>
                          <li className="xans-record-">
                            <span>
                              <span>
                                <span
                                  style={{
                                    fontSize: "16px",
                                    color: "#0090f0",
                                    fontWeight: "bold",
                                  }}
                                >
                                  <span id="span_product_price_sale">
                                    đ313,000
                                    <span
                                      style={{
                                        fontSize: "20px",
                                        color: "#ff3604",
                                      }}
                                    >
                                      10%
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </li>
                          <li className="xans-record-">
                            <span>
                              <span
                                style={{ fontSize: "16px", color: "#3481cf" }}
                              >
                                <strong
                                  id="span_product_price_text"
                                  style={{ textDecoration: "line-through" }}
                                >
                                  đ348,000
                                </strong>
                                <input
                                  id="product_price"
                                  name="product_price"
                                  defaultValue
                                  type="hidden"
                                />
                              </span>
                            </span>
                          </li>
                          <li className="xans-record-">
                            <span>
                              <span
                                style={{ fontSize: "12px", color: "#555555" }}
                              >
                                <span className="delv_price_B">
                                  <input
                                    id="delivery_cost_prepaid"
                                    name="delivery_cost_prepaid"
                                    defaultValue="P"
                                    type="hidden"
                                  />
                                  đ30,000 ~ <strong>đ1,920,000</strong>
                                  <div className="btnTooltip ec-front-shop-delivery-defferent-shipping">
                                    <Link to="">
                                      <img
                                        src="http://localhost:3000/assets/imgs/ico_tooltip.gif"
                                        alt="도움말"
                                      />
                                    </Link>
                                    <div className="differentialShipping layerTheme">
                                      <h3 className="title">
                                        Phí vận chuyển có điều kiện
                                      </h3>
                                      <div className="content">
                                        <ul>
                                          <li>
                                            <strong>
                                              0.10kg hoặc hơn ~ 2.00kg dưới
                                            </strong>
                                            <span>đ30,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              2.00kg hoặc hơn ~ 4.00kg dưới
                                            </strong>
                                            <span>đ45,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              4.00kg hoặc hơn ~ 6.00kg dưới
                                            </strong>
                                            <span>đ65,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              6.00kg hoặc hơn ~ 8.00kg dưới
                                            </strong>
                                            <span>đ85,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              8.00kg hoặc hơn ~ 10.00kg dưới
                                            </strong>
                                            <span>đ100,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              10.00kg hoặc hơn ~ 12.00kg dưới
                                            </strong>
                                            <span>đ120,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              12.00kg hoặc hơn ~ 15.00kg dưới
                                            </strong>
                                            <span>đ150,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              15.00kg hoặc hơn ~ 17.00kg dưới
                                            </strong>
                                            <span>đ170,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              17.00kg hoặc hơn ~ 20.00kg dưới
                                            </strong>
                                            <span>đ180,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              20.00kg hoặc hơn ~ 25.00kg dưới
                                            </strong>
                                            <span>đ220,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              25.00kg hoặc hơn ~ 30.00kg dưới
                                            </strong>
                                            <span>đ260,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              30.00kg hoặc hơn ~ 35.00kg dưới
                                            </strong>
                                            <span>đ290,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              35.00kg hoặc hơn ~ 40.00kg dưới
                                            </strong>
                                            <span>đ330,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              40.00kg hoặc hơn ~ 45.00kg dưới
                                            </strong>
                                            <span>đ360,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              45.00kg hoặc hơn ~ 50.00kg dưới
                                            </strong>
                                            <span>đ400,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              50.00kg hoặc hơn ~ 55.00kg dưới
                                            </strong>
                                            <span>đ440,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              55.00kg hoặc hơn ~ 60.00kg dưới
                                            </strong>
                                            <span>đ480,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              60.00kg hoặc hơn ~ 65.00kg dưới
                                            </strong>
                                            <span>đ520,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              65.00kg hoặc hơn ~ 70.00kg dưới
                                            </strong>
                                            <span>đ560,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              70.00kg hoặc hơn ~ 75.00kg dưới
                                            </strong>
                                            <span>đ600,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              75.00kg hoặc hơn ~ 80.00kg dưới
                                            </strong>
                                            <span>đ640,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              80.00kg hoặc hơn ~ 85.00kg dưới
                                            </strong>
                                            <span>đ680,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              85.00kg hoặc hơn ~ 90.00kg dưới
                                            </strong>
                                            <span>đ720,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              90.00kg hoặc hơn ~ 95.00kg dưới
                                            </strong>
                                            <span>đ760,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              95.00kg hoặc hơn ~ 100.00kg dưới
                                            </strong>
                                            <span>đ800,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              100.00kg hoặc hơn ~ 105.00kg dưới
                                            </strong>
                                            <span>đ840,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              105.00kg hoặc hơn ~ 110.00kg dưới
                                            </strong>
                                            <span>đ880,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              110.00kg hoặc hơn ~ 115.00kg dưới
                                            </strong>
                                            <span>đ920,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              115.00kg hoặc hơn ~ 120.00kg dưới
                                            </strong>
                                            <span>đ960,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              120.00kg hoặc hơn ~ 125.00kg dưới
                                            </strong>
                                            <span>đ1,000,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              125.00kg hoặc hơn ~ 130.00kg dưới
                                            </strong>
                                            <span>đ1,040,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              130.00kg hoặc hơn ~ 135.00kg dưới
                                            </strong>
                                            <span>đ1,060,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              135.00kg hoặc hơn ~ 140.00kg dưới
                                            </strong>
                                            <span>đ1,080,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              140.00kg hoặc hơn ~ 145.00kg dưới
                                            </strong>
                                            <span>đ1,120,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              145.00kg hoặc hơn ~ 150.00kg dưới
                                            </strong>
                                            <span>đ1,160,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              150.00kg hoặc hơn ~ 155.00kg dưới
                                            </strong>
                                            <span>đ1,200,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              155.00kg hoặc hơn ~ 160.00kg dưới
                                            </strong>
                                            <span>đ1,240,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              160.00kg hoặc hơn ~ 165.00kg dưới
                                            </strong>
                                            <span>đ1,280,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              165.00kg hoặc hơn ~ 170.00kg dưới
                                            </strong>
                                            <span>đ1,320,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              170.00kg hoặc hơn ~ 175.00kg dưới
                                            </strong>
                                            <span>đ1,350,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              175.00kg hoặc hơn ~ 180.00kg dưới
                                            </strong>
                                            <span>đ1,390,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              180.00kg hoặc hơn ~ 190.00kg dưới
                                            </strong>
                                            <span>đ1,450,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              190.00kg hoặc hơn ~ 200.00kg dưới
                                            </strong>
                                            <span>đ1,500,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              200.00kg hoặc hơn ~ 210.00kg dưới
                                            </strong>
                                            <span>đ1,560,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              210.00kg hoặc hơn ~ 220.00kg dưới
                                            </strong>
                                            <span>đ1,620,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              220.00kg hoặc hơn ~ 230.00kg dưới
                                            </strong>
                                            <span>đ1,680,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              230.00kg hoặc hơn ~ 240.00kg dưới
                                            </strong>
                                            <span>đ1,740,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              240.00kg hoặc hơn ~ 250.00kg dưới
                                            </strong>
                                            <span>đ1,800,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              250.00kg hoặc hơn ~ 260.00kg dưới
                                            </strong>
                                            <span>đ1,860,000</span>
                                          </li>
                                          <li>
                                            <strong>
                                              260.00kg hoặc hơn ~ 270.00kg dưới
                                            </strong>
                                            <span>đ1,920,000</span>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="close">
                                        <Link to="">
                                          <img
                                            src="http://localhost:3000/assets/imgs/btn_close.gif"
                                            alt="Đóng"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>{" "}
                                </span>
                              </span>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="xans-product xans-product-detail headingArea-bottom on-sale">
                        <span className="sale_text">{product.sale}%</span>
                        <span className="span_product_price on1">
                          {formatter.format(product.price)}
                        </span>
                        <span className="on1">
                          {formatter.format(
                            product.price -
                              product.price * (0.01 * product.sale)
                          )}
                        </span>
                      </div>
                    </div>
                    <table
                      border={1}
                      className="xans-product xans-product-option xans-record-"
                    >
                      <caption>Phân Loại Sản Phẩm</caption>
                      <tbody className="xans-product xans-product-detail delivery_price">
                        <tr className="delivery-tr">
                          <td>
                            <div className="delivery_price_div">
                              <span className="delivery_price_span">
                                Nhà vận chuyển
                              </span>
                              Ninja Van
                            </div>
                          </td>
                        </tr>
                        <tr className="delivery-tr">
                          <td>
                            <div className>
                              <span className="delivery_price_span">
                                Phí Vận chuyển
                              </span>
                              <span
                                style={{ fontSize: "12px", color: "#555555" }}
                              >
                                <span className="delv_price_B">
                                  <input
                                    id="delivery_cost_prepaid"
                                    name="delivery_cost_prepaid"
                                    defaultValue="P"
                                    type="hidden"
                                  />
                                  đ30,000 ~ <strong>đ1,920,000</strong>
                                  <div className="btnTooltip ec-front-shop-delivery-defferent-shipping">
                                    <Link to="">
                                      <img
                                        src="http://localhost:3000/assets/imgs/ico_tooltip.gif"
                                        alt="도움말"
                                      />
                                    </Link>
                                    <div className="differentialShipping layerTheme">
                                      <h3 className="title">
                                        Phí vận chuyển có điều kiện
                                      </h3>
                                      <div className="close">
                                        <Link to="">
                                          <img
                                            src="http://localhost:3000/assets/imgs/btn_close.gif"
                                            alt="Đóng"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>{" "}
                                </span>
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      <tbody />
                    </table>
                    <div className="xans-product xans-product-action">
                      <div
                        className="ec-base-button gColumn"
                        style={{ marginTop: "200px" }}
                      >
                        <Link
                          to=""
                          className="btnNormal btnBlack sizeL"
                          onClick={(e) =>
                            addToCartClickHandle(
                              e,
                              product.id,
                              product.productName,
                              product.image,
                              product.price,
                              product.sale,
                              product.quantity
                            )
                          }
                        >
                          Thêm vào giỏ hàng
                        </Link>
                        <Link to="" className="btnSubmit btnBlue sizeL">
                          <span id="btnBuy">Mua ngay</span>
                        </Link>
                      </div>
                      <div id="appPaymentButtonBox" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xans-product xans-product-additional">
              <div id="prdDetail" className="ec-base-tab gFlex">
                <div className="root_width">
                  <div className="cont">
                    <div
                      className="edibot-product-detail"
                      style={{
                        width: "1000px",
                        maxWidth: "100%",
                        margin: "0 auto",
                      }}
                    >
                      <div
                        style={{ position: "relative" }}
                        className="edb-img-tag-w"
                      >
                        <img
                          alt="Hình ảnh mô tả"
                          style={{
                            margin: "0 auto",
                            display: "block",
                            maxWidth: "100%",
                          }}
                          hidden={product.detailImage === null ? true : false}
                          src={`http://localhost:3000/assets/imgs/${product.detailImage}`}
                        />
                        <br />
                        <div
                          dangerouslySetInnerHTML={{ __html: product.detail }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="layout" />
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ProductDetail;
