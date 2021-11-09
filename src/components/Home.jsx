import React, { useState, useEffect } from "react";
import blogdata from "../data";
import BlogLists from "./BlogLists";
const Home = () => {
  const [blogs, setBlogs] = useState(blogdata);
  useEffect(() => {
    console.log("running after initial render");
  }, []);
  function deleteBlogHandler(id) {
    let newItems = blogs.filter((item) => item.id !== id);
    setBlogs(newItems);
  }
  return (
    <>
      <div className="blog-list">
        <BlogLists
          blogs={blogs}
          title="All Blogs !!!"
          deleteBlogHandler={deleteBlogHandler}
        />
        <BlogLists
          blogs={blogs.filter((item) => item.author === "Nahid")}
          title="Nahids Blogs !"
          deleteBlogHandler={deleteBlogHandler}
        />
      </div>
    </>
  );
};

export default Home;
