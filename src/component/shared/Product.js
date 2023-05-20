import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Css
import styles from "../css/Product.module.css";

//Context
import { CardContext } from "../../context/CardContextProvider";

//Functions
import { isInCard, quantityCount } from "../helpers/functions";

//icon
import trash from "../../images/trash.svg";

const Product = ({ data }) => {
  const { state, dispatch } = useContext(CardContext);
  return (
    <div className={styles.container}>
      <Link to={`/products/${data.id}`}>
        <img src={data.image} alt={data.title} />
      </Link>
      <h3>{data.title}</h3>
      <p>{data.price}$</p>
      <div>
        {isInCard(state, data.id) ? (
          <div className={styles.btnsContainer}>
            {quantityCount(state, data.id) > 1 ? (
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

            <button className={styles.numberBtn}>
              {quantityCount(state, data.id)}
            </button>
            <button
              className={`${styles.addBtn} ${styles.increaseDecreaseBtn}`}
              onClick={() => dispatch({ type: "INCREASE", payload: data })}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className={styles.addBtn}
            onClick={() => dispatch({ type: "ADD_ITEM", payload: data })}
          >
            Add to card
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
