const Navs = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="../Image/Logo.png" alt="" width="100" height="30" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto p-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/event">
                Events
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-primary me-2" type="submit">
              <a href="/login" style={{ textDecoration: "none" }}>
                Login
              </a>
            </button>
            <button className="btn btn-outline-primary" type="submit">
              Try Free
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navs;
