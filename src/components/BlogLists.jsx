import { Link } from "react-router-dom";

const BlogLists = (props) => {
  const { blogs, title: bloglistTitle, deleteBlogHandler } = props;
  console.log(props);
  return (
    <div className="container my-5 blog-list">
      <h2 className="text-capitalize fw-bold text-primary">{bloglistTitle}</h2>
      {blogs.map((blogitem) => {
        const { title, author, id } = blogitem;
        return (
          <div
            className="container blog-item text-dark blog-preview bg-light m-2 p-4"
            key={id}
          >
            <Link to={`/blog/${id}`} className="text-decoration-none">
              <h3>{title}</h3>
              <p className="opacity-50 text-dark blockquote-footer my-2">
                written by
                <cite className="fw-bold text-capitalize">{author}</cite>
              </p>
            </Link>

            <button
              className="btn btn-danger rounded"
              onClick={() => deleteBlogHandler(id)}
            >
              Delete blog
            </button>

          </div>
        );
      })}
    </div>
  );
};

export default BlogLists;
