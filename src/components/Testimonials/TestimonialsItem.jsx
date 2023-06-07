import "./TestimonialsItem.css";

function TestimonialsItem({ img, author, description }) {
  return (
    <div className="testimonial-box">
      <div className="author-test">
        <img src={img} alt={author} className="rounded-circle b-shadow-a" />
        <span className="author">{author}</span>
      </div>
      <div className="content-test">
        <p className="description lead">{description}</p>
      </div>
    </div>
  );
}

export default TestimonialsItem;
