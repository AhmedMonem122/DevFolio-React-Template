import TitleBox from "../TitleBox/TitleBox";
import BlogList from "./BlogList";
import blogData from "./blogData";

function Blog() {
  return (
    <section id="blog" className="blog-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <TitleBox
              title="Blog"
              subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            />
          </div>
        </div>
        <div className="row">
          {blogData.map((item) => {
            return <BlogList key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Blog;
