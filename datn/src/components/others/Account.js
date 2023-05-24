import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Account = () => {
  const user = localStorage.getItem("username");
  const [orders, setOrders] = useState([]);
  const [trashOrders, setTrashOrders] = useState([]);
  const [status01, setStatus01] = useState(0);
  const [status02, setStatus02] = useState(0);
  const [status03, setStatus03] = useState(0);
  const [status04, setStatus04] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:8080/api/order/user/${user}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        loadOrderStatus(data);
      })
      .catch((err) => console.log(err));

      fetch(`http://localhost:8080/api/order/usertrash/${user}`)
      .then((res) => res.json())
      .then((data) => setTrashOrders(data))
      .catch((err) => console.log(err));

  }, []);

  const loadOrderStatus = (order) => {
    let count01 = 0;
    let count02 = 0;
    let count03 = 0;
    let count04 = 0;
    order.forEach(element => {
      if(element.status === 'Chờ Thanh Toán'){
        count01++;
      }else if(element.status === 'Chuẩn Bị Giao Hàng') {
        count02++;
      }else if(element.status === 'Đang Vận Chuyển') {
        count03++;
      }else if(element.status === 'Đã Giao') {
        count04++;
      }
    });
    setStatus01(count01);
    setStatus02(count02);
    setStatus03(count03);
    setStatus04(count04);
  };

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
                <li title="Current Page">Tài Khoản Của Tôi</li>
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
                          ( <span id="xans_myshop_total_orders">{orders.length}</span>)
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
                  <h2>
                    Xin chào
                    <span className="xans-element- xans-layout xans-layout-statelogon">
                      <span className="xans-member-var-name" />
                    </span>
                  </h2>
                </div>
                <div className="xans-element- xans-layout xans-layout-logincheck" />
                <div className="xans-element- xans-myshop xans-myshop-asyncbenefit">
                  <div className="ec-base-box typeMember gMessage displaynone">
                    <div className="information">
                      <p className="thumbnail">
                        <img
                          className="myshop_benefit_group_image_tag"
                          alt=""
                        />
                      </p>
                      <div className="description">
                        <span>
                          Cám ơn bạn đã mua sắm cùng chúng tôi.
                          <strong className="txtEm">
                            <span className="authssl_member_name">*****</span>
                          </strong>
                          Hạng thành viên của bạn là
                          <strong>
                            [
                            <span className="displaynone">
                              <img
                                className="myshop_benefit_group_icon_tag"
                                alt=""
                              />
                            </span>
                            <span className="xans-member-var-group_name" />
                            <span className="myshop_benefit_ship_free_message" />
                            ]
                          </strong>
                          .
                        </span>
                        <p className="displaynone myshop_benefit_display_no_benefit">
                          Nhận <span className="myshop_benefit_use_dc" /> của
                          <strong className="txtEm">
                            <span className="myshop_benefit_dc_price" />
                            <span className="myshop_benefit_dc_type" />
                          </strong>
                          khi bạn mua hàng
                          <strong className="txtEm">
                            <span className="myshop_benefit_dc_pay" />
                            <span className="myshop_benefit_dc_min_price" />
                          </strong>
                          . <span className="myshop_benefit_dc_max_percent" />
                        </p>
                        <p className="displaynone myshop_benefit_display_with_all">
                          Nhận
                          <span className="myshop_benefit_use_dc_mileage" />
                          của
                          <strong className="txtEm">
                            <span className="myshop_benefit_dc_price_mileage" />
                            <span className="myshop_benefit_dc_type_mileage" />
                          </strong>
                          khi bạn mua hàng
                          <strong className="txtEm">
                            <span className="myshop_benefit_dc_pay" />
                            <span className="myshop_benefit_dc_min_price_mileage" />
                          </strong>
                          .
                          <span className="myshop_benefit_dc_max_mileage_percent" />
                        </p>
                        <div className="displaynone gBlank5" id>
                          <p className="displaynone">
                            Mua <strong /> để được quảng cáo
                            <strong>
                              [
                              <span className="displaynone">
                                <img src alt="" className />
                              </span>
                              ]
                            </strong>
                            .( : Tổng giá trị mua hàng )
                          </p>
                          <p className="displaynone">
                            <strong /> thêm đơn hàng để quảng cáo
                            <strong>
                              [
                              <span className="displaynone">
                                <img src alt="" className />
                              </span>
                              ]
                            </strong>
                            .( : Tổng Đơn)
                          </p>
                          <p className="displaynone">
                            Mua <strong /> và địa điểm
                            <strong /> thêm đơn hàng để quảng cáo
                            <strong>
                              [
                              <span className="displaynone">
                                <img src alt="" className />
                              </span>
                              ]
                            </strong>
                            .( : Tổng giá trị mua hàng ｜Tổng đơn)
                          </p>
                          <p className="displaynone">
                            Mua <strong /> và địa điểm
                            <strong /> thêm đơn hàng để quảng cáo
                            <strong>
                              [
                              <span className="displaynone">
                                <img src alt="" className />
                              </span>
                              ]
                            </strong>
                            .( : Tổng ｜Tổng đơn)
                          </p>
                          <p id className="displaynone">
                            Mua <strong /> để duy trì
                            <strong>
                              [
                              <span className="displaynone">
                                <img src alt="" className />
                              </span>
                              ]
                            </strong>
                            Cấp độ. ( : Tổng giá trị mua hàng )
                          </p>
                          <p id className="displaynone">
                            <strong /> thêm đơn hàng để duy trì
                            <strong>
                              [
                              <span className="displaynone">
                                <img src alt="" className />
                              </span>
                              ]
                            </strong>
                            Cấp độ. ( : Tổng giá trị mua hàng )
                          </p>
                          <p id className="displaynone">
                            Mua <strong /> và địa điểm
                            <strong /> thêm đơn hàng để duy trì
                            <strong>
                              [
                              <span className="displaynone">
                                <img src alt="" className />
                              </span>
                              ]
                            </strong>
                            Cấp độ. ( : Tổng giá trị mua hàng )
                          </p>
                          <p id className="displaynone">
                            Mua <strong /> hoặc địa điểm
                            <strong /> thêm đơn hàng để duy trì
                            <strong>
                              [
                              <span className="displaynone">
                                <img src alt="" className />
                              </span>
                              ]
                            </strong>
                            Cấp độ. ( : Tổng giá trị mua hàng )
                          </p>
                          <p className="txtInfo txt11">
                            Các khoản tiền được ước tính dựa trên chính sách
                            thành viên. Các khoản này có thể khác với giá trị
                            đơn hàng thực tế.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="invite ec-base-box typeThinBg gMerge displaynone">
                    <strong className="txtEm">
                      Mời bạn bè đến với mall của chúng tôi qua đường link giới
                      thiệu bạn bè.
                    </strong>
                    <p className="copy">
                      <input type="text" defaultValue="///?reco_id=" readOnly />
                      <a href="#st" className="btnSubmit">
                        Sao chép
                      </a>
                    </p>
                    <ul>
                      <li>- Bạn bè được giới thiệu sẽ nhận sau khi đăng ký.</li>
                      <li>-</li>
                    </ul>
                  </div>
                </div>
                <div
                  style={{ display: "none" }}
                  className="xans-element- xans-myshop xans-myshop-asyncbankbook ec-base-box gHalf"
                >
                  <ul>
                    <li className=" ">
                      <strong className="title">Điểm thưởng khả dụng</strong>
                      <strong className="data use">
                        <span id="xans_myshop_bankbook_avail_mileage" />
                      </strong>
                      <a href="#st" className="btnNormal">
                        Kết quả
                      </a>
                    </li>
                    <li className>
                      <strong className="title">Điểm thưởng số dư</strong>
                      <strong className="data">
                        <span id="xans_myshop_bankbook_total_mileage" />
                      </strong>
                    </li>
                    <li className>
                      <strong className="title">Điểm thưởng đã sử dụng</strong>
                      <strong className="data">
                        <span id="xans_myshop_bankbook_used_mileage" />
                      </strong>
                    </li>
                    <li className="displaynone">
                      <strong className="title" />
                      <strong className="data use"> </strong>
                      <a href="#st" className="btnNormal">
                        Kết quả
                      </a>
                    </li>
                    <li>
                      <strong className="title">Đơn hàng</strong>
                      <strong className="data">
                        <span id="xans_myshop_bankbook_order_price" />(
                        <span id="xans_myshop_bankbook_order_count" />
                        đơn hàng)
                      </strong>
                    </li>
                    <li className>
                      <strong className="title">Mã giảm giá</strong>
                      <strong className="data">
                        <span id="xans_myshop_bankbook_coupon_cnt" />
                        <span>Mã giảm giá</span>
                      </strong>
                      <a href="#st" className="btnNormal">
                        Kết quả
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="xans-element- xans-myshop xans-myshop-orderstate">
                  <div className="title">
                    <h3>
                      Tình Trạng Đơn Hàng
                    </h3>
                  </div>
                  <div className="state">
                    <ul className="order">
                      <li>
                        <strong>Chờ Thanh Toán</strong>
                          <span className="count" id="xans_myshop_orderstate_shppied_before_count">
                            {status01}
                          </span>
                      </li>
                      <li>
                        <strong>Chuẩn Bị Giao Hàng</strong>
                          <span className="count" id="xans_myshop_orderstate_shppied_standby_count">
                            {status02}
                          </span>
                      </li>
                      <li>
                        <strong>Đang Vận Chuyển</strong>
                          <span className="count" id="xans_myshop_orderstate_shppied_begin_count">
                            {status03}
                          </span>
                      </li>
                      <li>
                        <strong>Đã Giao</strong>
                          <span className="count" id="xans_myshop_orderstate_shppied_complate_count">
                            {status04}
                          </span>
                      </li>
                    </ul>
                    <ul className="cs">
                      <li>
                        <span className="icoDot" />
                        <strong>Đơn Đã Hủy </strong>
                        <a href="#st" className="count">
                          <span id="xans_myshop_orderstate_order_cancel_count">
                            {trashOrders.length}
                          </span>
                        </a>
                      </li>
                      <li>
                        <span className="icoDot" />
                        <strong>Đổi Hàng </strong>
                        <a href="#st" className="count">
                          <span id="xans_myshop_orderstate_order_exchange_count">
                            0
                          </span>
                        </a>
                      </li>
                      <li>
                        <span className="icoDot" />
                        <strong>Trả Hàng </strong>
                        <a href="#st" className="count">
                          <span id="xans_myshop_orderstate_order_return_count">
                            0
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-section">
                  <h3>
                    Danh sách yêu thích
                    <a className="order-section-more" href="#st">
                      Xem thêm
                    </a>
                  </h3>
                  <div className="box-coupon">
                    <div className="xans-element- xans-myshop xans-myshop-wishlist ec-base-table typeList Product-list xans-record-">
                      <div className="Order_Empty">
                        <p
                          className="empty-basket"
                          style={{ margin: "10px 0 50px" }}
                        >
                          Bạn không có sản phẩm nào trong danh sách yêu thích.
                        </p>
                        <a className="btnWhite" href="#st">
                          Tiếp tục mua sắm
                        </a>
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
          <ul>
            <li className="displaynone xans-record-">
              <a href="#st">
                <img src="about:blank" alt="" />
                <span>##name##</span>
              </a>
            </li>
            <li className="displaynone xans-record-">
              <a href="#st">
                <img src="about:blank" alt="" />
                <span>##name##</span>
              </a>
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
          <a href="#st" title="Back to Top">
            <img src="assets/imgs/btn_top1.gif" alt="Top" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Account;
