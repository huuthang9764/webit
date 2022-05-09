import React, { useEffect, useState } from "react";

import ProductApi from "service/Product";
import Content_item from "../Content_item/Content_item";
import "./content.scss";

const Contents = () => {
  const [products, setProducts] = useState([]);

  // axios({
  //   method: "GET",
  //   url: ProductApi.getAll(),
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   data: null,
  // })
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  useEffect(() => {
    (async () => {
      try {
        const res = await ProductApi.getAll();
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="Container">
      <section>
        <div className="title-product">
          <h2>Bàn phím</h2>
        </div>
        <div className="box-products">
          {/* <Content_item products={products} /> */}
        </div>
      </section>
    </div>
  );
};
export default Contents;
