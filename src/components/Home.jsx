const Home = () => {
  const handleClick = () => {
    console.log("hello nahid");
  };
  const handleClickAgain = (name, e) => {
    console.log(`hello ${name}`);
  };
  return (
    <>
      <h3>Home page</h3>
      <button className="btn btn-primary" onClick={handleClick}>
        click me
      </button>
      <button
        className="ms-2 btn btn-warning"
        onClick={(e) => {
          handleClickAgain("puppy");
        }}
      >
        click me again
      </button>
    </>
  );
};

export default Home;
