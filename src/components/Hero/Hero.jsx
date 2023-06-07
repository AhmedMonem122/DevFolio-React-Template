import { Container } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

function Hero() {
  return (
    <div id="hero" className="hero bg-image">
      <div className="overlay-intro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <Container>
            <h1 className="hero-title mb-4">I am Morgan Freeman</h1>
            <TypeAnimation
              sequence={[
                "Designer",
                1000,
                "Developer",
                2000,
                "Freelancer",
                3000,
                "Photographer",
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "2.5rem",
                display: "inline-block",
                fontWeight: "600",
              }}
            />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Hero;
