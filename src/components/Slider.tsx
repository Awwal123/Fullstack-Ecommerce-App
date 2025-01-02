import  { useState, useEffect } from "react";
import S1 from "../assets/images/Slide1.png";
import S2 from "../assets/images/Slide2.png";
import S3 from "../assets/images/Slide3.png";
import S4 from "../assets/images/Slide4.png"
// import './index.css';


export function Slider() {
  const [counter, setCounter] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const radioButton = document.getElementById(
        `radio${counter}`
      ) as HTMLInputElement | null;
      if (radioButton) {
        radioButton.checked = true;
      }

      setCounter((prevCounter) => (prevCounter >= 4 ? 1 : prevCounter + 1));
    }, 4000);

    
    return () => clearInterval(interval);
  }, [counter]);
  return (
   <div className="px-5 py-9 md:py-9 md:px-16">
      <div className="order-side-menu">
        <div className="hidden md:block">
        <div className="nav-items">
          <nav className="nav-item">Woman's Fashoin</nav>
          <nav className="nav-item">Men's Fashion</nav>
          <nav className="nav-item">Electronics</nav>
          <nav className="nav-item"> Home & Lifestyle</nav>
          <nav className="nav-item">Medicine</nav>
          <nav className="nav-item">Sports & Outdoor</nav>
          <nav className="nav-item">Baby's & Toys</nav>
          <nav className="nav-item">Groceries & Pets</nav>
          <nav className="nav-item">Health & Beauty</nav>
          <hr className="horizontal-line" />
        </div>
        </div>
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />
            
            <div className="slide first">
              <img className="slide-img" src={S1} alt="" />
            </div>
            <div className="slide">
              <img className="slide-img" src={S2} alt="" />
            </div>
            <div className="slide">
              <img className="slide-img" src={S3} alt="" />
            </div>
            <div className="slide">
              <img className="slide-img" src={S4} alt="" />
            </div>
            </div>

            {/* automatic navigation */}
            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
            </div>
            {/* end */}
          
          {/* manual navigation */}
          {/* <div className="navigation-manual">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
            <label htmlFor="radio4" className="manual-btn"></label>
          </div> */}
      </div>
      </div>
      </div>
   
  );
}
