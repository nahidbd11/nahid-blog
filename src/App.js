// import logo from "./logo.svg";
// import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import BlogDetails from "./components/BlogDetails";
import Create from "./components/Create";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container text-center mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="nahid" element={<h3>Nahid</h3>} />
          </Route>
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
