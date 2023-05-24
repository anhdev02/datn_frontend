import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

const NewAddress = () => {
  const userId = parseInt(localStorage.getItem("id"), 10);
  const user = localStorage.getItem("username");
  const [orders, setOrders] = useState([]);
  const [phone, setPhone] = useState(" ");
  const [address, setAddress] = useState();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [districtsDefault, setDistrictsDefault] = useState([]);
  const [wards, setWards] = useState([]);
  const [wardsDefault, setWardsDefault] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/api/order/user/${user}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((err) => console.log(err));
  }, []);
 
  useEffect(() => {
    const fetchDataAsync = async () => {
      const provincesData = await fetchData("https://provinces.open-api.vn/api/p");
      setProvinces(provincesData);

      const districtsData = await fetchData("https://provinces.open-api.vn/api/d");
      setDistrictsDefault(districtsData);

      const wardsData = await fetchData("https://provinces.open-api.vn/api/w");
      setWardsDefault(wardsData);
    };

    fetchDataAsync();
  }, []);

  

  const handleProvinceChange = e => {
    const selectedIndex = e.target.selectedIndex;
    const selectedOption = e.target.options[selectedIndex];
    const provinceId = selectedOption.getAttribute('data-code');
    setSelectedProvince(e.target.value);
    setSelectedDistrict('');
    setSelectedWard('');
    setWards([]);
    const filteredDistricts = districtsDefault.filter(district => district.province_code === parseInt(provinceId));
    setDistricts(filteredDistricts);
  };

  const handleDistrictChange = e => {
    const selectedIndex = e.target.selectedIndex;
    const selectedOption = e.target.options[selectedIndex];
    const districtId = selectedOption.getAttribute('data-code');
    setSelectedDistrict(e.target.value);
    setSelectedWard('');

    const filteredWards = wardsDefault.filter(ward => ward.district_code === parseInt(districtId));
    setWards(filteredWards);
  };

  const handleSubmitAddress = (e) => {
    e.preventDefault();
    const pattern =
      /^\s*[\p{L}\d\s]+,\s*[\p{L}\d\s]+$/u;
    if (phone === " ") {
      toast.error("Vui lòng nhập số điện thoại", { position: "top-right" });
    } else if (phone.length !== 9) {
      toast.error("Vui lòng nhập đúng định dạng số điện thoại", {
        position: "top-right",
      });
    }else if(selectedProvince === '') {
      toast.error("Vui lòng chọn Tỉnh/Thành", { position: "top-right" });
    }else if(selectedDistrict === '') {
      toast.error("Vui lòng chọn Quận/Huyện", { position: "top-right" });
    }else if(selectedWard === '') {
      toast.error("Vui lòng chọn Phường/Xã", { position: "top-right" });
    }else if (address === undefined) {
      toast.error("Vui lòng nhập địa chỉ", { position: "top-right" });
    } else if (!pattern.test(address)) {
      toast.error("Vui lòng nhập đúng định dạng địa chỉ", {
        position: "top-right",
      });
    } else {
      const addressParts = address.split(",");
      const houseNumber = addressParts[0].trim();
      const street = addressParts[1].trim();

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        userId: userId,
        phoneNumber: phone,
        houseNumber: houseNumber,
        street: street,
        ward: selectedWard,
        district: selectedDistrict,
        city: selectedProvince,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:8080/api/address/add", requestOptions)
        .then((response) => {
          if (response.ok) {
            toast.success("Thêm địa chỉ thành công!", {
              position: "top-right",
            });
            setTimeout(() => navigate("/addressbook"), 1000);
          } else {
            toast.error("Thêm địa chỉ không thành công!", {
              position: "top-right",
            });
          }
          response.text();
        })
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
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
                <li>
                  <Link to="/account">Tài khoản của tôi</Link>
                </li>
                <li title="Current Page">
                  <strong>Danh sách địa chỉ</strong>
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
                  <h2>Tạo sổ địa chỉ</h2>
                </div>
                <form
                  id="frmAddr"
                  name
                  action="/exec/front/Myshop/Addr/?mode=Insert&return_url=%2Fmyshop%2Faddr%2Flist.html"
                  method="post"
                  target="_self"
                  encType="multipart/form-data"
                >
                  <div className="xans-element- xans-myshop xans-myshop-addrregister ">
                    {/*
                $return_url = /myshop/addr/list.html
                $isRuleBasedAddrForm = T
            */}
                    <div className="ec-base-table typeWrite">
                      <table border={1} summary>
                        <caption>Thêm Địa Chỉ</caption>
                        <colgroup>
                          <col style={{ width: "140px" }} />
                          <col style={{ width: "auto" }} />
                        </colgroup>
                        <tbody>
                          <tr>
                            <th scope="row">
                              Số điện thoại di động{" "}
                              <span>
                                <img
                                  src="//img.echosting.cafe24.com/skin/base/common/ico_required_blue.gif"
                                  alt="Required"
                                />
                              </span>
                            </th>
                            <td className="phone-td">
                              <input
                                id="ma_rcv_mobile_no2"
                                name="ma_rcv_mobile_no[]"
                                maxLength={15}
                                required
                                pattern="[0-9]{9}"
                                placeholder="Nhập 9 chữ số"
                                onChange={(e) => setPhone(e.target.value)}
                                type="text"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              Địa Chỉ{" "}
                              <img
                                src="//img.echosting.cafe24.com/skin/base/common/ico_required_blue.gif"
                                alt="Required"
                              />
                            </th>
                            <td>
                              <ul className="ec-address">
                                <li
                                  id="shippingRegist_area_wrap"
                                  className="ec-address-area"
                                >
                                  <select onChange={handleProvinceChange} id="si_name_addr" name="si_name_addr">
                                    <option value='' selected disabled >Tỉnh/Thành</option>
                                    {provinces.map((province) => (
                                      <option
                                        key={province.code}
                                        value={province.name}
                                        data-code={province.code}
                                      >
                                        {province.name}
                                      </option>
                                    ))}
                                  </select>
                                  <select onChange={handleDistrictChange} id="ci_name_addr" name="ci_name_addr">
                                    <option value='' selected disabled >Quận/Huyện</option>
                                    {districts.map((district) => (
                                      <option
                                        key={district.code}
                                        value={district.name}
                                        data-code={district.code}
                                      >
                                        {district.name}
                                      </option>
                                    ))}
                                  </select>
                                  <select onChange={e => setSelectedWard(e.target.value)} id="gu_name_addr" name="gu_name_addr">
                                    <option value='' selected disabled >Phường/Xã</option>
                                    {wards.map((ward) => (
                                      <option key={ward.code} value={ward.name}>
                                        {ward.name}
                                      </option>
                                    ))}
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
                                    placeholder="Số nhà, Đường"
                                    className="inputTypeText"
                                    type="text"
                                    size={60}
                                    onChange={(e) => setAddress(e.target.value)}
                                    maxLength={255}
                                  />
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="ec-base-button">
                      <a
                        href="#st"
                        className="btnBlack btn150"
                        onClick={handleSubmitAddress}
                        onclick="myshopAddr.formCheck();"
                      >
                        Lưu
                      </a>
                      <Link to="/addressbook" className="btnWhite btn150">
                        Hủy
                      </Link>
                    </div>
                  </div>
                </form>
                <div className="ec-base-help">
                  <h3>Về Sổ Địa Chỉ</h3>
                  <div className="inner">
                    <ol>
                      <li className="item1">
                        Bạn có thể thêm tối đa 3 địa chỉ. Nếu bạn không thêm các
                        địa chỉ, sổ địa chỉ của bạn sẽ tự động cập nhật địa chỉ
                        nhận hàng của đơn hàng gần nhất.
                      </li>
                      <li className="item2">
                        Nếu bạn không muốn cập nhật tự động, mở Danh Sách Địa
                        Chỉ và thay đổi cài đặt cập nhật tự động thành “Cố
                        định”.
                      </li>
                      <li className="item3">
                        Để cài đặt địa chỉ nhận hàng mặc định, tìm địa chỉ nhận
                        hàng bạn muốn và nhấn “Chỉnh sửa”. Chọn “Lưu làm địa chỉ
                        nhận hàng mặc định”, rồi nhấn “Lưu”.
                      </li>
                    </ol>
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
            <Link to="">0</Link> Sản Phẩm
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
      <ToastContainer />
    </div>
  );
};

export default NewAddress;
