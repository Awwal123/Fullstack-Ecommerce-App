import { ToastContainer } from "react-toastify";
import { Exclusive } from "./components/Exclusive";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import { Cart } from "./components/Cart";
import { Shop } from "./components/Shop";
import { BestSelling } from "./components/BestSelling";
import { ExploreOurProduct } from "./components/Explore";
import { AboutUs } from "./components/AboutUs";
// import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <div>
        <Header />

        <Router>
          <CartProvider>
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />

              <Route
                path="/home"
                element={
                  // <PrivateRoute>
                  <Exclusive />
                  // </PrivateRoute>
                }
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/best-selling" element={<BestSelling />} />
              <Route path="/our-product" element={<ExploreOurProduct />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
            <ToastContainer position="bottom-left" />
            <Footer />
          </CartProvider>
        </Router>
      </div>
    </>
  );
}

export default App;
