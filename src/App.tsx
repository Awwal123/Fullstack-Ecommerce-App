import { ToastContainer } from "react-toastify";
import { Exclusive } from "./components/Exclusive";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
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
