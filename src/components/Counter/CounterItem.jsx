import CountUp from "react-countup";
import "./CounterItem.css";

function CounterItem({ counter, counterText, icon }) {
  return (
    <div className="col-sm-3 col-lg-3">
      <div className="counter-box counter-box pt-4 pt-md-0">
        <div className="counter-ico">
          <span className="ico-circle">{icon}</span>
        </div>
        <div className="counter-num">
          <CountUp end={counter} className="counter" enableScrollSpy />
          <span className="counter-text">{counterText}</span>
        </div>
      </div>
    </div>
  );
}

export default CounterItem;
