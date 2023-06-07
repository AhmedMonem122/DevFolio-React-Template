import { BsArrowUpShort } from "react-icons/bs";

import "./ScrollToTop.css";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const [isScrolledToTop, setIsScrolledToTop] = useState(false);

  const handleScrollToTop = () => {
    if (window.scrollY === 0) {
      setIsScrolledToTop(false);
    } else if (window.scrollY >= 100) {
      setIsScrolledToTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollToTop);
  }, []);

  return (
    <a
      href="#"
      className={`back-to-top d-flex align-items-center justify-content-center ${
        isScrolledToTop ? "active" : ""
      }`}
    >
      <BsArrowUpShort />
    </a>
  );
}

export default ScrollToTop;
