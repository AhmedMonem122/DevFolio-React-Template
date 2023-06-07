import "./PortfolioItem.css";
import { BsPlusCircle } from "react-icons/bs";

function PortfolioItem({ img, title, category, date }) {
  return (
    <div className="col-md-4">
      <div className="work-box">
        <div className="work-img">
          <img src={img} alt="img" className="img-fluid" />
        </div>
        <div className="work-content">
          <div className="row">
            <div className="col-sm-8">
              <h2 className="w-title">{title}</h2>
              <div className="w-more">
                <span className="w-category">{category}</span> /{" "}
                <span className="w-date">{date}</span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="w-like">
                {" "}
                <BsPlusCircle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
