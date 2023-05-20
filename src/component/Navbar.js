import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";

//contect
import { ProductsContext } from "../context/ProductContextProvider";
import { CardContext } from "../context/CardContextProvider";

//css
import styles from "./css/Navbar.module.css";

//image
import shoppingSvg from "../images/shopping.svg";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const products = useContext(ProductsContext);
  const { state } = useContext(CardContext);
  console.log(state);
  useEffect(() => {
    products.forEach((product) => {
      if (!categories.includes(product.category)) {
        setCategories([...categories, product.category]);
      }
    });
  });
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <h1>FakeStore</h1>
      <div className={styles.box}>
        <ul className={`${styles.liContainer} ${styles.ulDisplay}`}>
          <li>
            <Link to="/products">Home</Link>
          </li>
          <li className={styles.categoriesLi}>
            <Link to="/products">Products</Link>
            <div className={styles.categories}>
              {categories.map((category, index) => {
                if (category === "men's clothing") {
                  return (
                    <Link to="/men" key={index}>
                      {category}
                    </Link>
                  );
                } else if (category === "women's clothing") {
                  return (
                    <Link to="/women" key={index}>
                      {category}
                    </Link>
                  );
                } else {
                  return (
                    <Link to={category} key={index}>
                      {category}
                    </Link>
                  );
                }
              })}
            </div>
          </li>
          <li>
            <Link to="/blogs">Blog</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
        <div className={styles.shoppingIcon}>
          <Link onClick={() => setOpen(false)} to="/card">
            <img src={shoppingSvg} alt="shoppingIcon" />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>

        <div className={styles.hamburgerManuDisplay}>
          <Hamburger rounded color="#FFFF" toggled={isOpen} toggle={setOpen} />
        </div>

        {isOpen === true ? (
          <div className={styles.hamburgerManu}>
            <ul className={styles.liContainer}>
              <li>
                <Link onClick={() => setOpen(false)} to="/products">
                  Home
                </Link>
              </li>
              <li className={styles.categoriesLi}>
                <Link onClick={() => setOpen(false)} to="/products">
                  Products
                </Link>
                <div className={styles.categories}>
                  {categories.map((category, index) => {
                    if (category === "men's clothing") {
                      return (
                        <Link
                          onClick={() => setOpen(false)}
                          to="/men"
                          key={index}
                        >
                          {category}
                        </Link>
                      );
                    } else if (category === "women's clothing") {
                      return (
                        <Link
                          onClick={() => setOpen(false)}
                          to="/women"
                          key={index}
                        >
                          {category}
                        </Link>
                      );
                    } else {
                      return (
                        <Link
                          onClick={() => setOpen(false)}
                          to={category}
                          key={index}
                        >
                          {category}
                        </Link>
                      );
                    }
                  })}
                </div>
              </li>
              <li>
                <Link onClick={() => setOpen(false)} to="/blogs">
                  Blog
                </Link>
              </li>
              <li>
                <Link onClick={() => setOpen(false)} to="/contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
