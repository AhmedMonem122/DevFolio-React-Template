import BlogItem from "./BlogItem";

function BlogList({ ...item }) {
  return <BlogItem {...item} />;
}

export default BlogList;
