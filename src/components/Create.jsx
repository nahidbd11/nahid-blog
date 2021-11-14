import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("sadika");
  const [isPending, setIspending] = useState(false);
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    setIspending(true);
    e.preventDefault();
    const blog = { title, body, author };
    fetch("http://localhost:3004/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIspending(false);
      navigate("/");
    });
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="input-group">
          <span className="input-group-text">Name:</span>
          <input
            type="text"
            className="form-control"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <span className="input-group-text">Blog Body</span>
          <textarea
            className="form-control"
            placeholder="input your text"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <select
          className="form-select mb-3"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option>Choose your author</option>
          <option value="Nahid">Nahid</option>
          <option value="sadika">Sadika</option>
        </select>
        {!isPending && <button className="btn btn-primary">Add blog</button>}
        {isPending && (
          <button className="btn btn-secondary disabled">Adding.....</button>
        )}
      </form>
      <div className="display my-5">
        <h3 className="text-info">{title}</h3>
        <p className="text-warning">{body}</p>
        <i>{author}</i>
      </div>
    </div>
  );
};

export default Create;
