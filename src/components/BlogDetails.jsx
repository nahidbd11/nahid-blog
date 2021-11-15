import { useParams, useNavigate } from "react-router";
import useFetch from "../customHooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:3004/blogs/${id}`);
  let title, body, author;
  if (blog) {
    ({ title, body, author } = blog);
  }

  const handleDelete = () => {
    fetch(`http://localhost:3004/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      {isPending && <div className="warning display-3">Loading........</div>}
      {error && <div className="text-danger fw-bold display-5">{error}</div>}
      {blog && (
        <div className="bg-light">
          <h1 className="text-uppercase font-monospace">{title}</h1>
          <cite className="my-3">{author}</cite>
          <p className="lead text-dark">{body}</p>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
