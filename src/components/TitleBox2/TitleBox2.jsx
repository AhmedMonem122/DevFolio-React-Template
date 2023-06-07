import "./TitleBox2.css";

function TitleBox2({ title, className }) {
  return (
    <div className={`title-box-2 ${className}`}>
      <h5 className="title-left">{title}</h5>
    </div>
  );
}

export default TitleBox2;
