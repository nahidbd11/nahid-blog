import React, { useState, useEffect } from "react";
import useFetch from "../customHooks/useFetch";
import BlogLists from "./BlogLists";
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:3004/blogs");
  // function deleteBlogHandler(id) {
  //   let newItems = blogs.filter((item) => item.id !== id);
  //   setBlogs(newItems);
  // }
  return (
    <>
      <div className="blog-list">
        {error && <h5 className="text-danger">{error}</h5>}
        {isPending && <div className="text-warning">Loading ......</div>}
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
