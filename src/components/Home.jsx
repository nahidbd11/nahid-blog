import React, { useState, useEffect } from "react";

import BlogLists from "./BlogLists";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = () => {
    fetch("http://localhost:3004/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data from resource");
        }
        return res.json();
      })
      .then((data) => {
        setError(null);
        setBlogs(data);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      fetchData();
      setIsPending(false);
    }, 3000);

    /*****FIXME: dont use setTimeout in real project .here i am using just for checking loading is working or not****** */
  }, []);
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
