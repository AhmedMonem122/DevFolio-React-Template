import "./TitleBox.css";

function TitleBox({ title, subTitle }) {
  return (
    <div className="title-box text-center">
      <h3 className="title-a">{title}</h3>
      <p className="subtitle-a">{subTitle}</p>
      <div className="line-mf"></div>
    </div>
  );
}

export default TitleBox;
