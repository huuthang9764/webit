import React from "react";
import { Content, Footer, Menu } from "components";
import { Header } from "components";

const MENUS = [
  { text: "BÀN PHÍM", url: "/trangchu" },
  { text: "CHUỘT", url: "/gioithieu" },
  { text: "TAI NGHE", url: "http://blog.thebaodev.me" },
  { text: "LOA", url: "http://blog.thebaodev.me" },
];

const HomeMain = () => {
  return (
    <>
      <Header />
      <Menu menus={MENUS} />
      <Content />
      {/* <Footer /> */}
    </>
  );
};
export default HomeMain;
