import { useNavigate, Outlet } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    // navigate(-1); //go back one step
    navigate("/");
  };
  return (
    <>
      <div className="about">
        <h3>about</h3>
        <Outlet />

        <button className="btn btn-outline-dark" onClick={handleNavigate}>
          Home
        </button>
      </div>
    </>
  );
};

export default About;
