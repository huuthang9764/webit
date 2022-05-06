import React from "react";
import logo from "../../asset/img/logo1.png";
import "./header.scss";
import { FaRegUser, FaPhoneAlt, FaCartPlus, FaNewspaper } from "react-icons/fa";

export default function header() {
  return (
    <div className="header">
      <img src={logo} alt={logo} class="center" height={130} width={130} />
      <form>
        <input type="text" name="name" placeholder="Tìm kiếm sản phẩm ..." />
        <input type="submit" value="Tìm Kiếm" />
      </form>
      <ul>
        <li className="item-hotline">
          <FaPhoneAlt size={40} style={{ marginTop: 20 }} />
          <span className="hotline-content">
            <label>Hotline</label>
            <span>039.406.9764</span>
          </span>
        </li>
        <li className="header-news">
          <a href="/tintuc">
            <FaNewspaper size={40} style={{ marginTop: 10, width: "100%" }} />
            <span>Tin Tức</span>
          </a>
        </li>
        <li className="header-news">
          <a href="./giohang">
            <FaCartPlus size={40} style={{ marginTop: 10, width: "100%" }} />
            <span>Giỏ hàng</span>
          </a>
        </li>
        <li className="header-news">
          <a href="./login">
            <FaRegUser size={40} style={{ marginTop: 10, width: "100%" }} />
            <span>Đăng nhập</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
