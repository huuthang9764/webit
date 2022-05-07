import React from "react";
import Content_item from "../Content_item/Content_item";
import "./content.scss";

const Contents = () => {
  return (
    <div className="Container">
      <section>
        <div className="title-product">
          <h2>Bàn phím</h2>
        </div>
        <div className="box-products">
          <Content_item />
        </div>
      </section>
      <section>
        <div className="title-product">
          <h2>Bàn phím</h2>
        </div>
        <div className="box-products">
          <Content_item />
        </div>
      </section>
    </div>
  );
};
export default Contents;
