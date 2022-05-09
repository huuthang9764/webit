import React from "react";

import "./content_item.scss";
export default function Content_item(products) {
  return (
    <div className="list-products">
      {products.map((item, i) => (
        <div className="item-product" key={i}>
          <div className="item-product__box-img">
            <a href="#">
              <img
                className="cpslazy loaded"
                alt="iPhone 13 Pro Max 128GB | Chính hãng VN/A"
                data-ll-status="loaded"
                src={item.url_product}
              />
            </a>
          </div>
          <div className="item-product__box-name">
            <a href="#">
              <p>{item.name_product}</p>
            </a>
          </div>
          <div className="item-product__box-price">
            <p className="special-price">{item.price}</p>
          </div>
          <div className="item-product__box-detail">
            <a href="/detail">Xem chi tiết</a>
          </div>
        </div>
      ))}
    </div>
  );
}
