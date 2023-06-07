import { Container } from "react-bootstrap";
import "./Navbar.css";
import { BsList, BsX } from "react-icons/bs";
import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  const changeNavbarColorScroll = () => {
    if (window.scrollY >= 100) {
      setIsNavScrolled(true);
    } else {
      setIsNavScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColorScroll);
  }, []);
  return (
    <header
      id="header"
      className={`fixed-top ${isNavScrolled ? "header-scrolled" : ""}`}
    >
      <Container className="d-flex justify-content-between align-items-center">
        <h1 className="logo">DevFolio</h1>

        <nav className={`${isOpen ? "navbar-mobile" : ""}`}>
          <ul className="d-lg-flex align-items-center">
            <li>
              <a href="#hero" onClick={() => setIsOpen(false)}>
                home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                about
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setIsOpen(false)}>
                services
              </a>
            </li>
            <li>
              <a href="#work" onClick={() => setIsOpen(false)}>
                work
              </a>
            </li>
            <li>
              <a href="#blog" onClick={() => setIsOpen(false)}>
                blog
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                contact
              </a>
            </li>
          </ul>
          {isOpen ? (
            <BsX
              className="d-lg-none d-md-block mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <BsList
              className="d-lg-none d-md-block mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
