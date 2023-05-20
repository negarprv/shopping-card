import React, { useContext } from "react";

import { CardContext } from "../context/CardContextProvider";

//Css
import styles from "../component/css/Product.module.css";
import styles2 from "../component/css/Card.module.css";

//icon
import trash from "../images/trash.svg";

const Card = ({ data }) => {
  const { dispatch } = useContext(CardContext);
  const { image, title, price, quantity } = data;
  return (
    <div className={styles2.container}>
      <div>
        <img src={image} alt={title} />
      </div>
      <div className={styles2.details}>
        <h3>{title}</h3>
        <p>{price}$</p>
      </div>
      <div className={styles2.btnContainer}>
        {quantity > 1 ? (
          <button
            className={`${styles.addBtn} ${styles.increaseDecreaseBtn}`}
            onClick={() => dispatch({ type: "DECREASE", payload: data })}
          >
            -
          </button>
        ) : (
          <button
            className={`${styles.addBtn} ${styles.increaseDecreaseBtn}`}
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}
          >
            <img className={styles.trashBtn} src={trash} alt="trash icon" />
          </button>
        )}
        <button className={styles.numberBtn}>{quantity}</button>
        <button
          className={`${styles.addBtn} ${styles.increaseDecreaseBtn}`}
          onClick={() => dispatch({ type: "INCREASE", payload: data })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
