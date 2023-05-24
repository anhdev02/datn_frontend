import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

var emailBody = "";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const tokenCode = uuidv4();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Vui lòng nhập email!", { position: "bottom-left" });
    } else {
      fetch(`http://localhost:8080/api/user/email/${email}`)
        .then((res) => res.json())
        .then((data) => {
          emailBody = `
          Xin chào,
          Bạn đã yêu cầu đặt lại mật khẩu. Nhấp vào nút bên dưới để tiếp tục quá trình đặt lại mật khẩu:
          http://localhost:3000/resetpassword/${tokenCode}?userId=${data.id}
          Nếu bạn không yêu cầu đặt lại mật khẩu, xin vui lòng bỏ qua email này.
          Trân trọng,
          Đội ngũ hỗ trợ của chúng tôi
        `;
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({
            emailAddress: email,
            emailSubject: "Quên mật khẩu",
            emailBody: emailBody,
          });

          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };
          fetch("http://localhost:8080/api/auth/send-email", requestOptions)
            .then((response) => response.text())
            .then((result) =>
              toast.success("Đã gửi email!", { position: "bottom-left" })
            )
            .catch((error) =>
              toast.error("Email chưa được gửi!", { position: "bottom-left" })
            );

          var url = "http://localhost:8080/api/user/verify/" + data.id;
          myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          raw = JSON.stringify({
            verify: tokenCode,
          });

          requestOptions = {
            method: "PATCH",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

          fetch(url, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
        })
        .catch((err) => console.log(err));
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
                  <Link to="/">Trang Chủ</Link>
                </li>
                <li title="Current Page">
                  <strong>Quên mật khẩu</strong>
                </li>
              </ol>
            </div>
            <div className="titleArea">
              <h2>Quên mật khẩu</h2>
            </div>
            <form id="findPasswdForm" name="findPasswdForm" method="post">
              <div className="xans-element- xans-member xans-member-findpasswd ec-base-box typeThin">
                <div className="findPw">
                  <h3 className="boxTitle">Quên mật khẩu</h3>
                  <fieldset>
                    <legend>Quên mật khẩu</legend>
                    <ul className="ec-base-desc">
                      <li id="email_view" className="email">
                        <strong style={{ marginLeft: "15px" }} className="term">
                          Địa chỉ email
                        </strong>
                        <span className="desc">
                          <input
                            id="email"
                            name="email"
                            className="lostInput"
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                          />
                        </span>
                      </li>
                    </ul>
                    <div id="emailMsg" className="emailMssage" />
                    <div className="ec-base-button gColumn">
                      <Link
                        to="#st"
                        onClick={handleSubmit}
                        className="btnSubmit sizeL"
                      >
                        Gửi
                      </Link>
                    </div>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr className="layout" />
      </div>
      <hr className="layout" />
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
