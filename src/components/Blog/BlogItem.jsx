import { BsClock } from "react-icons/bs";
import avatar from "../../assets/images/testimonial-2.jpg";
import "./BlogItem.css";

function BlogItem({ img, category, title, description, date }) {
  return (
    <div className="col-md-4">
      <div className="card card-blog">
        <div className="card-img">
          <img src={img} alt={category} className="img-fluid" />
        </div>
        <div className="card-body">
          <div className="card-category-box">
            <div className="card-category">
              <h6 className="category">{category}</h6>
            </div>
          </div>
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
        <div className="card-footer">
          <div className="post-author">
            <img src={avatar} alt="avatar" className="avatar rounded-circle" />
            <span className="author">Morgan Freeman</span>
          </div>
          <div className="post-date">
            <BsClock /> {date}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
