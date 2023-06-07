import TitleBox from "../TitleBox/TitleBox";
import PortfolioList from "./PortfolioList";
import portfolioData from "./portfolioData";

function Portfolio() {
  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <TitleBox
              title="Portfolio"
              subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            />
          </div>
        </div>
        <div className="row">
          {portfolioData.map((item) => {
            return <PortfolioList key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
