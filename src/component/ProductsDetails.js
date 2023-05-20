import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

//context
import { ProductsContext } from "../context/ProductContextProvider";

//css
import styles from "../component/css/ProductDetail.module.css";

const ProductsDetails = () => {
  const params = useParams();
  const id = params.id;
  const data = useContext(ProductsContext);
  const product = data[id - 1];
  const { image, title, description, price, category } = product;
  return (
    <div className={styles.mainSontainer}>
      <div className={styles.container}>
        <img src={image} alt={title} />
        <div className={styles.details}>
          <h3>{title}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.category}>
            <span className={styles.categoryTag}>Category: </span>
            {category}
          </p>
          <div className={styles.addBox}>
            <span>{price}$</span>
            <Link to="/products">
              <button className={styles.addBtn}>Go back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
