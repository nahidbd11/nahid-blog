import React from "react";
import useFetch from "../customHooks/useFetch";
import BlogLists from "./BlogLists";
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:3004/blogs");

  return (
    <>
      <div className="blog-list">
        {error && <h1 className="text-danger">{error}</h1>}
        {isPending && (
          <div className="text-warning display-6">Loading ......</div>
        )}
        {blogs && <BlogLists blogs={blogs} title="All Blogs !!!" />}
        {blogs && (
          <BlogLists
            blogs={blogs.filter((item) => item.author === "Nahid")}
            title="Nahids Blogs !"
          />
        )}
      </div>
    </>
  );
};

export default Home;
