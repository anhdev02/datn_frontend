import React from 'react'

const EditAddressRes = () => {
  return (
    <div id="contents">
      <div className="root_width mobile_width">
        <div className="titleArea-new">
          <h2>Thêm Địa Chỉ Mới</h2>
        </div>
        <form
          id="frmAddr"
          name
          action="/exec/front/Myshop/Addr/?mode=Insert&return_url=%2Fmyshop%2Faddr%2Flist.html"
          method="post"
          target="_self"
          encType="multipart/form-data"
        >
          <input
            id="__address_addr1"
            name="__address_addr1"
            defaultValue
            type="hidden"
          />
          <input
            id="__city_name"
            name="__city_name"
            defaultValue
            type="hidden"
          />
          <input
            id="__state_name"
            name="__state_name"
            defaultValue
            type="hidden"
          />
          <input
            id="__isRuleBasedAddrForm"
            name="__isRuleBasedAddrForm"
            defaultValue="T"
            type="hidden"
          />
          <input
            id="__use_foreign_country_list"
            name="__use_foreign_country_list"
            defaultValue="T"
            type="hidden"
          />
          <input
            id="__ma_rcv_contry_code"
            name="__ma_rcv_contry_code"
            defaultValue
            type="hidden"
          />
          <input id="__country" name="__country" defaultValue type="hidden" />
          <input id="__province" name="__province" defaultValue type="hidden" />
          <input id="__city" name="__city" defaultValue type="hidden" />
          <input id="__district" name="__district" defaultValue type="hidden" />
          <input
            id="is_display_phone"
            name="is_display_phone"
            defaultValue
            type="hidden"
          />
          <input
            id="is_display_mobile"
            name="is_display_mobile"
            defaultValue="T"
            type="hidden"
          />
          <input
            id="sUseCountryNumberFlag"
            name="sUseCountryNumberFlag"
            defaultValue="T"
            type="hidden"
          />
          <input
            id="66b1"
            name="66b1"
            defaultValue="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJtIjoibG9ja25sb2Nrdm4iLCJzIjoiYjk4MTlhMDc5ZmQxMzMwY2JlNmU1YmE1ZDcwMjZjYmIiLCJ0IjoxNjg0Mjk3ODU3LCJyIjoiaHR0cHM6XC9cL20ubG9ja25sb2NrLnZuXC9teXNob3BcL2FkZHJcL3JlZ2lzdGVyLmh0bWwifQ._gF9LnxUPl4n3TL-hg261pcq48ogzZXiR_PMCZzbVitf0upSgvIroHjoO7iF8jvjc0r9HKg43WwKVfCfz6iYcw"
            type="hidden"
          />
          <div className="xans-element- xans-myshop xans-myshop-addrregister ">
            {/*
    $return_url = /myshop/addr/list.html
    $isRuleBasedAddrForm = T
*/}
            <div className="ec-base-table typeWrite gClearBorderTop">
              <ul>
                <li>
                  <h3>
                    Nhãn Địa Chỉ{" "}
                    <img
                      src="//img.echosting.cafe24.com/skin/mobile_vi_VN/myshop/ico_required.png"
                      alt="Required"
                      width={5}
                      height={5}
                    />
                  </h3>
                  <div>
                    <input
                      id="ma_rcv_title"
                      name="ma_rcv_title"
                      fw-filter="isFill&isMaxByte[90]"
                      fw-label="Địa chỉ"
                      fw-msg
                      className="inputTypeText"
                      placeholder
                      defaultValue
                      type="text"
                    />
                  </div>
                </li>
                <li>
                  <h3>
                    Tên{" "}
                    <img
                      src="//img.echosting.cafe24.com/skin/mobile_vi_VN/myshop/ico_required.png"
                      alt="Required"
                      width={5}
                      height={5}
                    />
                  </h3>
                  <div>
                    <input
                      id="ma_rcv_name"
                      name="ma_rcv_name"
                      fw-filter="isFill&isMaxByte[90]"
                      fw-label="Họ tên"
                      fw-msg
                      className="ec-member-name"
                      placeholder
                      defaultValue
                      type="text"
                    />
                  </div>
                </li>
                <li className="displaynone">
                  <h3>
                    Tên Tiếng Anh{" "}
                    <img
                      src="//img.echosting.cafe24.com/skin/mobile_vi_VN/myshop/ico_required.png"
                      alt="Required"
                      width={5}
                      height={5}
                      id="icon_english_name"
                    />
                  </h3>
                  <div>
                    <input
                      id="ma_rcv_name_en"
                      name="ma_rcv_name_en"
                      fw-filter="isAlphaSpace&isMax[30]"
                      fw-label="Tên"
                      fw-msg
                      className="ec-member-name"
                      placeholder
                      defaultValue
                      type="text"
                    />
                  </div>
                </li>
                <li className="displaynone">
                  <h3>
                    Tên Phiên Âm{" "}
                    <img
                      src="//img.echosting.cafe24.com/skin/mobile_vi_VN/myshop/ico_required.png"
                      alt="Required"
                      width={5}
                      height={5}
                      id="icon_pron_name"
                    />
                  </h3>
                  <div>
                    <input
                      id="ma_rcv_name_phonetic"
                      name="ma_rcv_name_phonetic"
                      fw-filter
                      fw-label="Tên (Phiên âm)"
                      fw-msg
                      className="ec-member-name"
                      placeholder
                      defaultValue
                      type="text"
                    />
                  </div>
                </li>
                <li>
                  <h3>
                    Địa Chỉ{" "}
                    <img
                      src="//img.echosting.cafe24.com/skin/mobile_vi_VN/myshop/ico_required.png"
                      alt="Required"
                      width={5}
                      height={5}
                    />
                  </h3>
                  <div>
                    <ul className="ec-address">
                      <li id="shippingRegist_country_wrap" className style={{}}>
                        <select
                          id="ma_rcv_contry_code"
                          name="ma_rcv_contry_code"
                          className="gCheckbox60"
                          fw-label="Quốc Gia"
                          style={{}}
                        >
                          <option value>Vui lòng chọn.</option>
                          <option value="VN" selected>
                            VIET NAM
                          </option>
                        </select>
                        <span
                          id="shippingRegist_directInputCheck_wrap"
                          className="ec-base-label displaynone"
                        >
                          <input
                            id="shippingRegist_directInputCheck"
                            name="shippingRegist_directInputCheck"
                            type="checkbox"
                          />
                          <label
                            id="shippingRegist_directInputCheckLabel"
                            htmlFor="shippingRegist_directInputCheckLabel"
                          >
                            Nhập trực tiếp
                          </label>
                        </span>
                      </li>
                      <li
                        id="shippingRegist_area_wrap"
                        className="ec-address-area"
                        style={{}}
                      >
                        <select
                          id="si_name_addr"
                          name="si_name_addr"
                          className
                          fw-label="Tỉnh/Thành"
                          style={{}}
                        >
                          <option value>Tỉnh/Thành</option>
                          <option value="TP. Hồ Chí Minh">
                            TP. Hồ Chí Minh
                          </option>
                          <option value="Hà Nội">Hà Nội</option>
                          <option value="Đà Nẵng">Đà Nẵng</option>
                          <option value="Cần Thơ">Cần Thơ</option>
                          <option value="Hải Phòng">Hải Phòng</option>
                          <option value="An Giang">An Giang</option>
                          <option value="Bà Rịa - Vũng Tàu">
                            Bà Rịa - Vũng Tàu
                          </option>
                          <option value="Bạc Liêu">Bạc Liêu</option>
                          <option value="Bắc Kạn">Bắc Kạn</option>
                          <option value="Bắc Giang">Bắc Giang</option>
                          <option value="Bắc Ninh">Bắc Ninh</option>
                          <option value="Bến Tre">Bến Tre</option>
                          <option value="Bình Dương">Bình Dương</option>
                          <option value="Bình Định">Bình Định</option>
                          <option value="Bình Phước">Bình Phước</option>
                          <option value="Bình Thuận">Bình Thuận</option>
                          <option value="Cà Mau">Cà Mau</option>
                          <option value="Cao Bằng">Cao Bằng</option>
                          <option value="Đắk Lắk">Đắk Lắk</option>
                          <option value="Đắk Nông">Đắk Nông</option>
                          <option value="Điện Biên">Điện Biên</option>
                          <option value="Đồng Nai">Đồng Nai</option>
                          <option value="Đồng Tháp">Đồng Tháp</option>
                          <option value="Gia Lai">Gia Lai</option>
                          <option value="Hà Giang">Hà Giang</option>
                          <option value="Hà Nam">Hà Nam</option>
                          <option value="Hà Tĩnh">Hà Tĩnh</option>
                          <option value="Hải Dương">Hải Dương</option>
                          <option value="Hậu Giang">Hậu Giang</option>
                          <option value="Hòa Bình">Hòa Bình</option>
                          <option value="Hưng Yên">Hưng Yên</option>
                          <option value="Khánh Hòa">Khánh Hòa</option>
                          <option value="Kiên Giang">Kiên Giang</option>
                          <option value="Kon Tum">Kon Tum</option>
                          <option value="Lai Châu">Lai Châu</option>
                          <option value="Lạng Sơn">Lạng Sơn</option>
                          <option value="Lào Cai">Lào Cai</option>
                          <option value="Lâm Đồng">Lâm Đồng</option>
                          <option value="Long An">Long An</option>
                          <option value="Nam Định">Nam Định</option>
                          <option value="Nghệ An">Nghệ An</option>
                          <option value="Ninh Bình">Ninh Bình</option>
                          <option value="Ninh Thuận">Ninh Thuận</option>
                          <option value="Phú Thọ">Phú Thọ</option>
                          <option value="Phú Yên">Phú Yên</option>
                          <option value="Quảng Bình">Quảng Bình</option>
                          <option value="Quảng Nam">Quảng Nam</option>
                          <option value="Quảng Ngãi">Quảng Ngãi</option>
                          <option value="Quảng Ninh">Quảng Ninh</option>
                          <option value="Quảng Trị">Quảng Trị</option>
                          <option value="Sóc Trăng">Sóc Trăng</option>
                          <option value="Sơn La">Sơn La</option>
                          <option value="Tây Ninh">Tây Ninh</option>
                          <option value="Thái Bình">Thái Bình</option>
                          <option value="Thái Nguyên">Thái Nguyên</option>
                          <option value="Thanh Hóa">Thanh Hóa</option>
                          <option value="Thừa Thiên - Huế">
                            Thừa Thiên - Huế
                          </option>
                          <option value="Tiền Giang">Tiền Giang</option>
                          <option value="Trà Vinh">Trà Vinh</option>
                          <option value="Tuyên Quang">Tuyên Quang</option>
                          <option value="Vĩnh Long">Vĩnh Long</option>
                          <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                          <option value="Yên Bái">Yên Bái</option>
                        </select>
                        <select
                          id="ci_name_addr"
                          name="ci_name_addr"
                          className
                          fw-label="Quận/Huyện"
                          style={{}}
                        >
                          <option value>Quận/Huyện</option>
                        </select>
                        <select
                          id="gu_name_addr"
                          name="gu_name_addr"
                          className
                          fw-label="Phường/Xã"
                          style={{}}
                        >
                          <option value>Phường/Xã</option>
                        </select>
                      </li>
                      <li
                        id="shippingRegist_detailAddr_wrap"
                        className
                        style={{}}
                      >
                        <input
                          id="address_addr2"
                          name="address_addr2"
                          placeholder="Địa chỉ chi tiết(không bắt buộc)"
                          fw-filter
                          className="inputTypeText"
                          type="text"
                          size={60}
                          maxLength={255}
                          fw-label="Địa chỉ chi tiết(không bắt buộc)"
                          style={{}}
                        />
                      </li>
                      <li
                        id="shippingRegist_zipcode_wrap"
                        className="ec-address-zipcode"
                        style={{}}
                      >
                        <input
                          id="address_zip1"
                          name="address_zip1"
                          placeholder="Mã bưu chính"
                          fw-filter
                          className="inputTypeText"
                          type="text"
                          maxLength={14}
                          fw-label="Mã bưu chính"
                          style={{}}
                        />{" "}
                        <button
                          id="SearchAddress"
                          className="btnBasic displaynone"
                          type="button"
                          disabled
                          fw-filter
                          style={{ display: "none", cursor: "pointer" }}
                        >
                          ZIPCODEBTN.VN
                        </button>
                        <span className="ec-base-label">
                          <input
                            id="nozip"
                            name="nozip"
                            className
                            type="checkbox"
                            style={{ cursor: "unset" }}
                          />
                          <label
                            id="shipping_regist_zipcode_check_label"
                            htmlFor="nozip"
                            className
                            disabled
                            style={{}}
                          >
                            Không có mã bưu chính
                          </label>
                        </span>
                        <span
                          id="shippingRegist_zipcodeNotFoundMsg_wrap"
                          className="ec-base-label displaynone"
                        >
                          Mã bưu chính không chính xác. Vui lòng kiểm tra lại.
                        </span>
                      </li>
                      <li
                        id="shippingRegist_baseAddr_wrap"
                        className="displaynone"
                        style={{ display: "none" }}
                      >
                        <input
                          id="address_addr1"
                          name="address_addr1"
                          placeholder="Phường/Xã"
                          fw-filter
                          className="inputTypeText displaynone"
                          type="text"
                          size={60}
                          maxLength={100}
                          disabled
                          style={{ display: "none" }}
                        />
                      </li>
                      <li
                        id="shippingRegist_state_wrap"
                        className="displaynone"
                        style={{ display: "none" }}
                      >
                        <select
                          id="stateListUs"
                          name="stateListUs"
                          className="displaynone"
                          disabled
                          fw-filter
                          style={{ display: "none" }}
                        >
                          <option value>Tiểu bang</option>
                        </select>
                        <select
                          id="stateListCa"
                          name="stateListCa"
                          className="displaynone"
                          disabled
                          fw-filter
                          style={{ display: "none" }}
                        >
                          <option value>Tỉnh bang/Vùng lãnh thổ</option>
                        </select>
                        <input
                          id="state_name"
                          name="state_name"
                          placeholder="Tỉnh/Thành"
                          fw-filter
                          className="inputTypeText displaynone"
                          type="text"
                          size={30}
                          maxLength={50}
                          disabled
                          style={{ display: "none" }}
                        />
                      </li>
                      <li
                        id="shippingRegist_city_wrap"
                        className="displaynone"
                        style={{ display: "none" }}
                      >
                        <input
                          id="city_name"
                          name="city_name"
                          placeholder="Quận/Huyện"
                          fw-filter
                          className="inputTypeText displaynone"
                          type="text"
                          size={30}
                          maxLength={50}
                          disabled
                          style={{ display: "none" }}
                        />
                      </li>
                      <li
                        id="shippingRegist_street_wrap"
                        className="displaynone"
                      >
                        <input
                          id="street_name"
                          name="street_name"
                          placeholder="Phường/Xã"
                          fw-filter
                          className="inputTypeText displaynone"
                          type="text"
                          size={30}
                          maxLength={50}
                          disabled
                          style={{ display: "none" }}
                        />
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="displaynone">
                  <h3>
                    Điện Thoại{" "}
                    <span className="displaynone">
                      <img
                        src="//img.echosting.cafe24.com/skin/mobile_vi_VN/myshop/ico_required.png"
                        alt="Required"
                        width={5}
                        height={5}
                      />
                    </span>
                  </h3>
                  <div>
                    <select
                      id="ma_rcv_phone1"
                      name="ma_rcv_phone[]"
                      fw-filter="isNumber"
                      fw-label="SĐT"
                      fw-alone="N"
                      fw-msg
                    >
                      <option value={84}>Viet Nam(+84)</option>
                    </select>
                    -
                    <input
                      id="ma_rcv_phone2"
                      name="ma_rcv_phone[]"
                      maxLength={15}
                      fw-filter="isNumber"
                      fw-label="SĐT"
                      fw-alone="N"
                      fw-msg
                      defaultValue
                      type="text"
                    />
                  </div>
                </li>
                <li className>
                  <h3>
                    Điện Thoại Di Động{" "}
                    <span className>
                      <img
                        src="//img.echosting.cafe24.com/skin/mobile_vi_VN/myshop/ico_required.png"
                        alt="Required"
                        width={5}
                        height={5}
                      />
                    </span>
                  </h3>
                  <div className="phone-td">
                    <select
                      id="ma_rcv_mobile_no1"
                      name="ma_rcv_mobile_no[]"
                      fw-filter="isNumber&isFill"
                      fw-label="Di Động"
                      fw-alone="N"
                      fw-msg
                    >
                      <option value={84}>Viet Nam(+84)</option>
                    </select>
                    -
                    <input
                      id="ma_rcv_mobile_no2"
                      name="ma_rcv_mobile_no[]"
                      maxLength={15}
                      fw-filter="isNumber&isFill"
                      fw-label="Di Động"
                      fw-alone="N"
                      fw-msg
                      defaultValue
                      type="text"
                    />
                  </div>
                </li>
                <li className="shipping">
                  <div>
                    <input
                      id="ma_main_flag0"
                      name="ma_main_flag"
                      fw-filter
                      fw-label="Lưu làm địa chỉ vận chuyển mặc định"
                      fw-msg
                      defaultValue="T"
                      type="checkbox"
                    />
                    <label htmlFor="ma_main_flag0">
                      Lưu làm địa chỉ vận chuyển mặc định
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="ec-base-button gColumn">
              <a
                href="#none"
                onclick="myshopAddr.formCheck();"
                className="btnBlack"
              >
                Thêm
              </a>
              <a href="list.html" className="btnBlue">
                Huỷ
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditAddressRes