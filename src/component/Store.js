import React, { useContext } from "react";

//css
import styles from "./css/Store.module.css";

//context
import { ProductsContext } from "../context/ProductContextProvider";

//components
import Product from "./shared/Product";

//git
import loading from "../images/loading.gif";

const Store = ({ title, type }) => {
  const products = useContext(ProductsContext);
  console.log(products);
  return (
    <div className={styles.mainContainer}>
      {products.length !== 0 ? (
        <div>
          <h1>{title}</h1>
          <div className={styles.container}>
            {products.map((product) => {
              if (type === "all") {
                return <Product key={product.id} data={product}></Product>;
              } else if (
                type === "women" &&
                product.category === "women's clothing"
              ) {
                return <Product key={product.id} data={product}></Product>;
              } else if (
                type === "men" &&
                product.category === "men's clothing"
              ) {
                return <Product key={product.id} data={product}></Product>;
              } else if (
                type === "jewelery" &&
                product.category === "jewelery"
              ) {
                return <Product key={product.id} data={product}></Product>;
              } else if (
                type === "electronics" &&
                product.category === "electronics"
              ) {
                return <Product key={product.id} data={product}></Product>;
              } else return false;
            })}
          </div>
        </div>
      ) : (
        <div className={styles.loading}>
          <img src={loading} alt="loading" />
          <p>loading</p>
        </div>
      )}
    </div>
  );
};

export default Store;
