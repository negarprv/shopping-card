import { Route, Routes, Navigate } from "react-router-dom";

//components
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Store from "./component/Store";
import Blogs from "./component/Blogs";
import ContactUs from "./component/ContactUs";
import ProductsDetails from "./component/ProductsDetails";
import ShopCards from "./component/ShopCards";
import Checkout from "./component/Checkout";

//context
import ProductContextProvider from "./context/ProductContextProvider";
import CardContextProvider from "./context/CardContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <CardContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route
            path="/products"
            element={<Store title="All Products" type="all" />}
          />
          <Route path="/*" element={<Navigate to="/products" />} />
          <Route
            path="/men"
            element={<Store title="Men's Clothes" type="men" />}
          />
          <Route
            path="/women"
            element={<Store title="Women's Clothes" type="women" />}
          />
          <Route
            path="/jewelery"
            element={<Store title="Jewelery" type="jewelery" />}
          />
          <Route
            path="/electronics"
            element={<Store title="Electronics" type="electronics" />}
          />
          <Route path="/card" element={<ShopCards />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer></Footer>
      </CardContextProvider>
    </ProductContextProvider>
  );
}

export default App;
