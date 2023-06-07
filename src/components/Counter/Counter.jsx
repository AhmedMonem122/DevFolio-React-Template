import CounterList from "./CounterList";
import counterData from "./counterData";
import counterBg from "../../assets/images/counters-bg.jpg";
import "./Counter.css";

function Counter() {
  return (
    <div
      className="section-counter paralax-mf bg-image"
      style={{ backgroundImage: `url(${counterBg})` }}
    >
      <div className="overlay-mf"></div>
      <div className="container position-relative">
        <div className="row">
          {counterData.map((item) => {
            return <CounterList key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Counter;
