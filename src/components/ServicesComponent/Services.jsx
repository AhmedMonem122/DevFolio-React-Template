import TitleBox from "../TitleBox/TitleBox";
import ServicesList from "./ServicesList";
import servicesData from "./servicesData";

function Services() {
  return (
    <section id="services" className="services-mf pt-5 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <TitleBox
              title="Services"
              subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            />
          </div>
        </div>
        <div className="row">
          {servicesData.map((item) => {
            return <ServicesList key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
