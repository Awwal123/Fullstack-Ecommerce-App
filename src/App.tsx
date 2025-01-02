import { Exclusive } from "./components/Exclusive";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
      <Header />
        <Router>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="exclusive" element={<Exclusive />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
