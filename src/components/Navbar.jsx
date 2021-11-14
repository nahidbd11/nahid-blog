import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h3 className="text-muted myclass">Nahid-blog</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={(navinfo) =>
                    navinfo.isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <a
                  className="nav-link rounded-pill bg-info"
                  href="/create-blog"
                >
                  New blog
                </a> */}

                <NavLink
                  to="/about"
                  className={(navinfo) =>
                    navinfo.isActive ? "nav-link active" : "nav-link"
                  }
                >
                  about
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/create"
                  className={(navinfo) =>
                    navinfo.isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Create Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
