import React, { useContext } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

//css
import styles from "../component/css/ShopCards.module.css";
import styles2 from "../component/css/ProductDetail.module.css";

//context
import { CardContext } from "../context/CardContextProvider";

const ShopCards = () => {
  const { state, dispatch } = useContext(CardContext);
  return (
    <div className={styles.mainContainer}>
      {state.selectedItems.length !== 0 ? (
        <>
          <div className={styles.paymentContainer}>
            <h3>
              Total Items:&nbsp; <span>{state.itemsCounter}</span>
            </h3>
            <h3>
              Total Payments:&nbsp; <span>{state.total}</span>
            </h3>
            <div className={styles.btnsContainer}>
              <button
                className={styles.clearBtn}
                onClick={() => dispatch({ type: "CLEAR" })}
              >
                Clear
              </button>
              <Link to="/checkout">
                <button
                  className={styles2.addBtn}
                  onClick={() => dispatch({ type: "CHECKOUT" })}
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.cardsContainer}>
            {state.selectedItems.map((item) => {
              return <Card key={item.id} data={item} />;
            })}
          </div>
        </>
      ) : (
        <>
          <div className={styles.noItem}>
            <h2>You haven't selected any item</h2>
            <Link to="/products">
              <button className={styles2.addBtn}>Back to store</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ShopCards;
