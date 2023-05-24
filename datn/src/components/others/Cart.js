import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import {store} from '../../store/store';
import {DeleteCart, IncreaseQuantity, DecreaseQuantity } from '../../store/action/cart'
import { useState } from "react";
import { useSelector } from "react-redux";
const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});
const Cart = () => {
  const number = useSelector(state => state.cart.carts.length);
  const [carts, setCarts] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);
  const [Checked, setChecked] = useState(0);
  var totalPriceSale = 0, totalPrice = 0, totalItem = 0;

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      loadDataCart();
    });
    loadDataCart();
    return () => {
      unsubscribe();
    }
  }, []);

  const loadDataCart = () => {
    const { numberCart, carts } = store.getState().cart;
    setCartNumber(numberCart);
    setCarts(carts);
  };

  const isChecked = (id) => {
    if(document.getElementById(id) != null)
      return document.getElementById(id).checked;
  }

  const handleCheckboxChange = (event) => {
    setChecked(Checked+1);
    totalPriceSale = 0;
    totalPrice = 0;
    totalItem = 0;
  };

  const handleSelectAllChange = (event) => {
    const newSelectAll = event.target.checked;
    const option = document.querySelectorAll('.basket_chk');
    if(newSelectAll) {
      option.forEach((checkbox) => {
        checkbox.checked = true;
      });
    }else {
      option.forEach((checkbox) => {
        checkbox.checked = false;
      });
    }
    setChecked(Checked+1);
  };

  const deleteSelectAllChange = (event) => {
    event.preventDefault();
    const alloption = document.getElementById('allCheckbox');
    const option = document.querySelectorAll('.basket_chk');
    alloption.checked = false;
    option.forEach((checkbox) => {
      checkbox.checked = false;
    });
    setChecked(Checked+1);
  };

  if (localStorage.getItem("id")===null) {
    return <Navigate to="/login" />;
  }

  return (
    <div id="wrap">
      <div id="container">
        <div id="contents">
          <div className="root_width">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n              .root_width {\n                width: 100%;\n              }\n              .wrap-basket-width {\n                max-width: 1140px;\n                margin: 0 auto;\n              }\n            ",
              }}
            />
            <div className="wrap-basket-width">
              <div className="path">
                <span>Trang Hiện Tại</span>
                <ol>
                  <li>
                    <Link to="/">Trang Chủ</Link>
                  </li>
                  <li title="Current Page">
                    <strong>Giỏ Hàng</strong>
                  </li>
                </ol>
              </div>
              <div className="titleArea-new">
                <h2>Sản phẩm trong giỏ hàng</h2>
              </div>
              <div className="wrap-basket">
                <div className="wrap-basket-top">
                  <span className="xans-order xans-order-normoversea Baskrt_new">
                    <input type="checkbox" id="allCheckbox" onChange={handleSelectAllChange} />
                    Chọn tất cả
                    <span className="xans-order xans-order-normoverseatitle">
                      ({number})
                    </span>
                  </span>
                  <span className="xans-element- xans-order xans-order-selectorder ec-base-button">
                    <Link to='#st' onClick={deleteSelectAllChange} className="order_list_Delete">
                      Xóa mục đã chọn
                    </Link>
                  </span>
                  <a className="more-wish" href="/myshop/wish_list.html">
                    Xem danh sách yêu thích
                  </a>
                </div>
                <div className="xans-element- xans-order xans-order-basketpackage Baskrt_new">
                  <div className="xans-element- xans-order xans-order-dcinfo ec-base-box typeMember">
                    <div className="information">
                      <h3 className="title">Quyền lợi</h3>
                      <div className="description">
                        <ul className="mileage">
                          <li className="displaynone">
                            <Link to="">
                              Tiền tích lũy : <strong />
                            </Link>
                          </li>
                          <li>
                            <Link to="">
                              Mã giảm giá : <strong>0 Mã giảm giá</strong>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="orderListArea ec-base-table typeList gBorder">
                    <table
                      border={1}
                      summary
                      className="xans-element- xans-order xans-order-normoversea xans-record-"
                    >
                      <caption>Sản phẩm</caption>
                      <colgroup>
                        <col style={{ width: "27px" }} className />
                        <col style={{ width: "92px" }} />
                        <col style={{ width: "auto" }} />
                        <col style={{ width: "75px" }} />
                        <col style={{ width: "120px" }} />
                        <col style={{ width: "88px" }} />
                        <col style={{ width: "110px" }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col" className />
                          <th scope="col" />
                          <th scope="col">Sản phẩm / Option</th>
                          <th scope="col" className="Order-count">
                            Số Lượng
                          </th>
                          <th scope="col">Giá</th>
                          <th scope="col">Giảm còn</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody className="xans-element- xans-order xans-order-list center">
                          {
                          carts.map((product, i) =>{
                            if(isChecked('basket_chk_id_'+i)){
                              totalItem = totalItem + parseInt(product.quantity);
                              totalPriceSale = totalPriceSale + (product.price * (0.01 * product.sale))*product.quantity;
                              totalPrice = totalPrice + product.price * product.quantity;
                            }
                            return (
                              <tr key={i}>
                                <td className>
                                  <input
                                    type="checkbox"
                                    id={`basket_chk_id_${i}`}
                                    className="basket_chk"
                                    name="basket_product_normal_type_oversea"
                                    onChange={handleCheckboxChange}
                                  />
                                </td>
                                <td className="thumb gClearLine">
                                  <Link to={`/productdetail/${product.id}`}>
                                    <img
                                      src={`assets/imgs/${product.image}`}
                                      alt={product.name}
                                    />
                                  </Link>
                                </td>
                                <td className="left gClearLine">
                                  <strong className="name">
                                    <Link
                                      to={`/productdetail/${product.id}`}
                                      className="ec-product-name"
                                    >
                                      {product.name}
                                    </Link>
                                  </strong>
                                </td>
                                <td>
                                  <span className>
                                    <span className="ec-base-qty">
                                      <input
                                        id="quantity_id_1"
                                        name="quantity_name_1"
                                        size={2}
                                        value={product.quantity}
                                        defaultValue={product.quantity}
                                        type="text"
                                      />
                                      <button onClick={() =>store.dispatch(IncreaseQuantity(product.id))} className="up">
                                        <img
                                          src="assets/imgs/btn_quantity_up.gif"
                                          alt="Up"
                                        />
                                      </button>
                                      <button onClick={() =>store.dispatch(DecreaseQuantity(product.id))} className="down">
                                        <img
                                          src="assets/imgs/btn_quantity_down.gif"
                                          alt="Down"
                                        />
                                      </button>
                                    </span>
                                    <a href="#st" className="btnNormal gBlank5">
                                      Sửa
                                    </a>
                                  </span>
                                </td>
                                <td>
                                  <div className="product_purchase_price_div">
                                    <strong>{formatter.format(product.price * product.quantity)}</strong>
                                  </div>
                                </td>
                                <td rowSpan={1} className>
                                  <span />
                                  <div id className>
                                    <strong className="txtWarnB">
                                      <span id="product_discount_price_front1">
                                      {formatter.format((product.price - product.price * (0.01 * product.sale))*product.quantity)
                                      }
                                      </span>
                                    </strong>
                                  </div>
                                </td>
                                <td className="button">
                                  <button
                                    className="btnNormal btn_deleteBasketItem"
                                    onClick={() => store.dispatch(DeleteCart(i))}
                                  >
                                    Xoá
                                  </button>
                                </td>
                              </tr>                              
                            )
                          } )}
                      </tbody>
                    </table>
                  </div>
                  <div className="xans-element- xans-order xans-order-basketpriceinfoguide">
                    <p className="info displaynone">
                      Bạn có thể kiểm tra mức giảm giá được áp dụng tại mục ước
                      tính thanh toán ở mẫu đặt hàng.
                    </p>
                    <p className="info displaynone">
                      Số tiền phải trả cuối cùng sẽ được tính với phí vận chuyển
                      và được hiển thị trên trang thanh toán.
                    </p>
                    <p className="info displaynone">
                      Bạn có thể thay đổi phân loại sản phẩm hoặc số lượng sản
                      phẩm tại trang 'chi tiết sản phẩm'.
                    </p>
                  </div>
                  <div className="xans-element- xans-order xans-order-weight displaynone">
                    <div className="totalWeight">
                      Tổng khối lượng :
                      <span>
                        <span id="total_weight">8.90</span>kg
                      </span>
                    </div>
                  </div>
                  <div
                    style={{ display: "none" }}
                    className="xans-element- xans-order xans-order-selectorder ec-base-button"
                  >
                    <span className="gLeft">
                      <strong className="text">Sửa sản phẩm đã chọn</strong>
                      <Link to="" className="btnEm">
                        <i className="icoDelete" /> Xoá
                      </Link>
                      <Link to="" className="btnNormal displaynone">
                        Thêm vào
                        <br />
                        Yêu thích
                      </Link>
                      <Link to="" className="btnNormal displaynone">
                        Chia Sẻ Danh Sách Yêu Thích Của Tôi
                      </Link>
                    </span>
                    <span className="gRight">
                      <span className>
                        <Link to="" className="btnNormal displaynone">
                          Chọn sản phẩm nhận tại cửa hàng
                        </Link>
                      </span>
                      <Link to="" className="btnNormal">
                        In Đơn Hàng
                      </Link>
                    </span>
                  </div>
                  <div className="xans-element- xans-order xans-order-totaloversea ec-base-table typeList gBorder total">
                    <table border={1} summary>
                      <caption>Tổng</caption>
                      <colgroup>
                        <col style={{ width: "23%" }} />
                        <col style={{ width: "21%" }} className="displaynone" />
                        <col style={{ width: "21%" }} className />
                        <col style={{ width: "auto" }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">
                            <span>Tổng</span>
                          </th>
                          <th scope="col" className="displaynone">
                            <strong>Tax</strong>
                          </th>
                          <th
                            scope="col"
                            id="oversea_total_benefit_price_title_area"
                            className
                          >
                            <Link to="">Giảm Giá</Link>
                          </th>
                          <th scope="col">Tổng tiền thanh toán</th>
                        </tr>
                      </thead>
                      <tbody className="center">
                        <tr>
                          <td>
                            <div className="box txt16">
                              <strong>
                                <span className="txt23">
                                  <span className="total_product_price_display_front">
                                  {formatter.format(totalPrice)}
                                  </span>
                                </span>
                              </strong>
                              <span className="txt14 displaynone">
                                <span className="total_product_price_display_back" />
                              </span>
                            </div>
                          </td>
                          <td className="displaynone">
                            <div className="box txt16">
                              <strong>
                                đ
                                <span className="txt23">
                                  <span className="total_product_vat_price_front">
                                    0
                                  </span>
                                </span>
                              </strong>
                              <span className="txt14 displaynone">
                                <span className="total_product_vat_price_back" />
                              </span>
                            </div>
                          </td>
                          <td id="oversea_total_benefit_price_area" className>
                            <div className="box txt16">
                              <strong>
                                <span className="total-discount">-</span>
                                <span
                                  id="oversea_total_product_discount_price_front"
                                  className="txt23"
                                >
                                  {formatter.format(totalPriceSale)}
                                </span>
                              </strong>
                            </div>
                          </td>
                          <td>
                            <div className="box txtEm txt16">
                              <strong className="txt23">
                                <span className="total-equal">=</span>
                              </strong>
                              <strong>
                                <span
                                  id="oversea_total_order_price_front"
                                  className="txt23"
                                >
                                  {formatter.format(totalPrice - totalPriceSale)}
                                </span>
                              </strong>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="xans-element- xans-order xans-order-totalorder ec-base-button justify">
                    <Link to="/pay" className="btnBlue">
                      Thanh Toán tất cả sản phẩm
                    </Link>
                    <Link to={"/pay"} className="btnBlack">
                      Thanh toán sản phẩm đã chọn
                    </Link>
                    <span className="gRight">
                      <Link to="" className="btnNormal sizeM">
                        Tiếp Tục Mua Sắm
                      </Link>
                    </span>
                    <div id="appPaymentButtonBox" />
                  </div>
                </div>
                <div
                  id="ec-basketOptionModifyLayer"
                  className="optionModify ec-base-layer"
                  style={{ display: "none" }}
                >
                  <div className="header">
                    <h3>Sửa Phân Loại</h3>
                  </div>
                  <div className="content">
                    <ul className="prdInfo">
                      <li className="ec-basketOptionModifyLayer-productName">
                        {"{"}$product_name{"}"}
                      </li>
                      <li className="ec-basketOptionModifyLayer-optionStr">
                        {"{"}$layer_option_str{"}"}
                      </li>
                    </ul>
                    <div className="prdModify">
                      <h4>Phân Loại Sản Phẩm</h4>
                      <ul>
                        <li
                          className="ec-basketOptionModifyLayer-options"
                          style={{ display: "none" }}
                        >
                          <span>
                            {"{"}$option_name{"}"}
                          </span>{" "}
                          {"{"}$form.option_value{"}"}
                        </li>
                        <li
                          className="ec-basketOptionModifyLayer-addOptions"
                          style={{ display: "none" }}
                        >
                          <span>
                            {"{"}$option_name{"}"}
                          </span>{" "}
                          {"{"}$form.option_value{"}"}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ec-base-button">
                    <a
                      href="#none"
                      className="btnSubmitFix sizeS ec-basketOptionModifyLayer-add"
                    >
                      Thêm
                    </a>
                    <a
                      href="#none"
                      className="btnNormalFix sizeS ec-basketOptionModifyLayer-modify"
                    >
                      Sửa
                    </a>
                  </div>
                  <a href="#none" className="close">
                    <img src="assets/imgs/btn_close.gif" alt="Close" />
                  </a>
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
            <a href="/order/basket.html">3</a> Sản Phẩm
          </span>
        </div>
        <div className="xans-element- xans-layout xans-layout-productrecent">
          <h2>
            <Link to="/seeb">Đã Xem Gần Đây</Link>
          </h2>
          <ul>
            <li className="displaynone xans-record-">
              <Link to="">
                <img src="about:blank" alt="" />
                <span>##name##</span>
              </Link>
            </li>
            <li className="displaynone xans-record-">
              <Link to="">
                <img src="about:blank" alt="" />
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
    </div>
  );
};

export default Cart;
