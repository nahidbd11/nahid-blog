import { useParams } from "react-router";
import useFetch from "../customHooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();

  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:3004/blogs/${id}`);
  let title, body, author;
  if (blog) {
    ({ title, body, author } = blog);
  }
  return (
    <div>
      {isPending && <div className="warning display-3">Loading........</div>}
      {error && <div className="text-danger fw-bold display-5">{error}</div>}
      {blog && (
        <div className="bg-primary">
          <h1 className="text-uppercase font-monospace">{title}</h1>
          <cite className="my-3">{author}</cite>
          <p className="lead text-light">{body}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
