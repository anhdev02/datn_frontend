import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div className="inner">
        <div className="xans-element- xans-layout xans-layout-footer">
          <ul className="utilMenu clearBoth">
            <li>
              <Link to={"/aboutus"}>Về Chúng Tôi</Link>
            </li>
            <li>
              <Link to="/policy">Chính sách bảo hành</Link>
            </li>
            <li>
              <Link to="/termsconditions">Điều Khoản và Điều Kiện</Link>
            </li>
            <li>
              <Link to="/customercare">Chăm sóc khách hàng </Link>
            </li>
            <li>
              <Link to="/stores">Cửa hàng </Link>
            </li>
            <li>
              <Link to="" className="verti_img">
                <img
                  src="http://localhost:3000/assets/imgs/yt_1.png"
                  alt="Youtube"
                />
              </Link>
            </li>
            <li>
              <Link to="" className="verti_img">
                <img
                  src="http://localhost:3000/assets/imgs/fb_1.png"
                  alt="Facebook"
                />
              </Link>
            </li>
            <li>
              <Link to="" className="verti_img">
                <img
                  src="http://localhost:3000/assets/imgs/it_1.png"
                  alt="Instargam"
                />
              </Link>
            </li>
          </ul>
          <div className="foot_flex">
            <div className="foot-box foot-box1">
              <ul>
                <li>
                  <span>Tên doanh nghiệp:</span> Lock&amp;Lock Mall
                </li>
                <li>
                  <span>CEO:</span> MC-AN
                </li>
                <li>
                  <span>Địa chỉ:</span> Số 1, P. Tăng Nhơn Phú B, TP. Thủ Đức,
                  TP.HCM
                </li>
                <li>
                  <span>Quản lý thông tin cá nhân:</span> MC-AN
                </li>
              </ul>
            </div>
            <div className="foot-box foot-box2">
              <ul>
                <li>
                  <span>C/S Center:</span> 028 5413 5750 (425)
                </li>
                <li>
                  <span>Week days:</span> 09:00 - 17:00
                </li>
                <li>
                  <span>Lunch:</span> 12:00 - 13:00
                </li>
                <li>
                  <span>Sat, Sun, Holiday:</span> Off
                </li>
              </ul>
            </div>
            <div className="foot-box foot-box3">
              <ul>
                <li>
                  <span>Liên hệ:</span> 028 5413 5750 (425)
                </li>
                <li>
                  <span>Email:</span> ngan.dnt@locknlock.com
                </li>
              </ul>
            </div>
          </div>
          <div className="div_onlinegovvn">
            <img
              src="http://localhost:3000/assets/imgs/onlinegovvn%20sticker.png"
              alt=""
            />
          </div>
          <p className="copyright">
            Copyright © <strong>Lock&amp;Lock Mall</strong>. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
