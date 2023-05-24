import React, { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const DealHotRes = () => {
  const [productsDealHot, setProductsDealHot] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/product/dealhot")
      .then((res) => res.json())
      .then((data) => setProductsDealHot(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="contents">
      <div className="root_width">
        <div className="xans-element- xans-product xans-product-menupackage">
          <div className="path">
            <h2 className="Current-Page">Deal Hot</h2>
          </div>
          <div className="xans-element- xans-product xans-product-headcategory title">
            <p className="banner">
              <img
                src="./assets/imgs/BANNER_dealhot_1140x724_0621.jpg"
                alt=""
              />
            </p>
          </div>
        </div>
        <div className="wrap-tab-product-section">
          <div id="tab1" className="tab-section menuTab_on">
            <article className="wrap-mProduct Product-list">
              <div className="in-article">
                <div className="root_width">
                  <div className="xans-element- xans-product xans-product-listmain-21 xans-product-listmain xans-product-21 productList mProduct typeThumb">
                    <ul className="prdList">
                      {productsDealHot.map((product) => (
                        <li id="anchorBoxId_658" className="xans-record-">
                          <div className="inner">
                            <div className="thumbnail">
                              <div className="prdImg">
                                <div className="wrap-thumbnail">
                                  <a
                                    className="BG-thumbnail"
                                    href="/product/máy-xay-sinh-tố-locklock-dung-tích-tối-đa-3l-Đa-tốc-độ-3-chế-độ-cài-sẵ/658/category/1/display/22/"
                                    name="anchorBoxName_658"
                                  >
                                    <img
                                      src={`assets/imgs/${product.image}`}
                                      id="eListPrdImage658_22"
                                      alt={product.productName}
                                    />
                                  </a>
                                </div>
                                <div className="salebox yet_slaebox displaynone">
                                  <div className="sale_bg">
                                    <span className="sale_text" />
                                  </div>
                                  <span className="displaynone hidden_pcustom" />
                                  <span className="displaynone hidden_pprice">
                                    4990000
                                  </span>
                                </div>
                                <div className="wrap-list-icon">
                                  <span className="wish-span">
                                    <img
                                      src="./assets/imgs/btn_wish_before.png"
                                      className="icon_img ec-product-listwishicon"
                                      alt="Trước đăng ký Sản phẩm yêu thích"
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="description">
                              <div className="color displaynone" />
                              <h4 className="name">
                                <a
                                  href="/product/máy-xay-sinh-tố-locklock-dung-tích-tối-đa-3l-Đa-tốc-độ-3-chế-độ-cài-sẵ/658/category/1/display/22/"
                                  className
                                >
                                  {product.productName}
                                </a>
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
                                    style={{ textDecoration: "line-through" }}
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
                                        product.price * (0.01 * product.sale)
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
        </div>
      </div>
    </div>
  );
};

export default DealHotRes;
