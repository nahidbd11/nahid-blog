// import logo from "./logo.svg";
// import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container text-center mt-4">
        <Home />
      </div>
    </div>
  );
}

export default App;
