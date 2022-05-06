import React from "react";
import { Menu } from "components";
import { Header } from "components";
export default function homemain() {
  const MENUS = [
    { text: "BÀN PHÍM", url: "/trangchu" },
    { text: "CHUỘT", url: "/gioithieu" },
    { text: "TAI NGHE", url: "http://blog.thebaodev.me" },
    { text: "LOA", url: "http://blog.thebaodev.me" },
  ];
  return (
    <div>
      <Header />
      <Menu menus={MENUS} />
    </div>
  );
}
