import "./ServicesItem.css";

function ServicesItem({ title, description, icon }) {
  return (
    <div className="col-md-4">
      <div className="service-box">
        <div className="service-ico">
          <span className="ico-circle">{icon}</span>
        </div>
        <div className="service-content">
          <h2 className="s-title">{title}</h2>
          <p className="s-description text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesItem;
