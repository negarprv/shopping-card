import React, { useContext } from "react";
import { CardContext } from "../context/CardContextProvider";
import styles from "../component/css/Checkout.module.css";
import styles2 from "../component/css/ProductDetail.module.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { state } = useContext(CardContext);
  return (
    <div className={styles.container}>
      {state.checkout === true ? (
        <>
          <p>Checked out successfully</p>
          <Link to="/products">
            <button className={styles2.addBtn}>Buy more</button>
          </Link>
        </>
      ) : (
        <p>An error occured. please try again!</p>
      )}
    </div>
  );
};

export default Checkout;
