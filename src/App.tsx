import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
