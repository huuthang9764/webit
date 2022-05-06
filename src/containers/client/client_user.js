import React from "react";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/header";
export default function client_user() {
  const MENUS = [
    { text: "BÀN PHÍM", url: "/trangchu" },
    { text: "CHUỘT", url: "/gioithieu" },
    { text: "TAI NGHE", url: "http://blog.thebaodev.me" },
    { text: "LOA", url: "http://blog.thebaodev.me" },
  ];
  return (
    <>
      <Header />
      <Menu menus={MENUS} />
    </>
  );
}
