import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const LoginRes = () => {
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [loggedIn, setLoggedIn] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    if (data.username === "") toast.error("Vui lòng nhập tên đăng nhập!");
    else if (data.password === "") toast.error("Vui lòng nhập mật khẩu!");
    else {
      const response = await fetch("http://localhost:8080/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((result) => {
          localStorage.setItem("accessToken", result.accessToken);
          localStorage.setItem("username", result.username);
          localStorage.setItem("id", result.id);
          localStorage.setItem("email", result.email);
          localStorage.setItem("phone", result.phone);
          result.roles.forEach((element) => {
            if (element === "ROLE_ADMIN") localStorage.setItem("role", element);
          });
          toast.success("Đăng nhập thành công!", { position: "top-right" });
          setTimeout(() => setLoggedIn(true), 1000);
        })
        .catch((error) => {
          toast.error("Tên đăng nhập hoặc mật khẩu không chính xác!", {
            position: "top-right",
          });
        });
    }
  }
  if (loggedIn) return <Navigate to="/" />;
  return (
    <div id="contents">
      <div className="root_width myshop_width">
        <div className="wrap-login">
          <form id="member_form_8610745609" onSubmit={handleLogin}>
            <div className="xans-element- xans-member xans-member-login ec-base-box typeThin">
              <div className="login">
                <h1>
                  <Link to="">
                    <img src="./assets/imgs/logo.png" alt="LocknLock" />
                  </Link>
                </h1>
                <div className="text-login">
                  Chào mừng đến với LocknLock. Đăng nhập ngay!
                </div>
                <fieldset>
                  <legend>Đăng Nhập</legend>
                  <label className="id ePlaceholder" title="E-mail">
                    <input
                      id="member_id"
                      name="member_id"
                      value={username}
                      onChange={(e) => setUserName(e.target.value)}
                      className="inputTypeText"
                      placeholder="Nhập tên đăng nhập"
                      type="text"
                    />
                  </label>
                  <label className="password ePlaceholder" title="Mật khẩu">
                    <input
                      id="member_passwd"
                      name="member_passwd"
                      autoComplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Nhập mật khẩu"
                      type="password"
                    />
                  </label>
                  <div className="login-security clearBoth">
                    <Link to="/forgotpassword">Quên Mật Khẩu</Link>
                  </div>
                  <ul className="ul_login">
                    <li>
                      <button
                        type="submit"
                        className="btnLogin"
                        style={{
                          background: "#1d1d1c",
                          color: "#fff",
                          lineHeight: "48px",
                          height: "48px",
                          fontSize: "16px",
                          display: "block",
                          textAlign: "center",
                          fontWeight: 600,
                          borderRadius: "2px",
                        }}
                      >
                        Đăng Nhập
                      </button>
                    </li>
                    <li>
                      <Link to="/register">Đăng Ký</Link>
                    </li>
                  </ul>
                  <p className="or-text">Hoặc đăng nhập bằng</p>
                  <ul className="snsArea clearBoth">
                    <li>
                      <Link to="">
                        <img
                          src="./assets/imgs/facebook.png"
                          alt="Login with Facebook"
                        />
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <img
                          src="./assets/imgs/google.png"
                          alt="Login with Google"
                        />
                        Google
                      </Link>
                    </li>
                  </ul>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginRes;
