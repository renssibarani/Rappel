function Upcoming() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#f1f5f8" }}>
      <div className="container">
        <div className="d-flex justify-content-between">
          <h3>Upcoming Events</h3>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for news"
              aria-label="Search"
              style={{ backgroundColor: "#c7e2fc" }}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="row g-5 mt-5">
          <div className="col-4">
            <div className="card" style={{ backgroundColor: "#c7e2fc" }}>
              <div className="card-body rounded" style={{ padding: "0" }}>
                <div className="m-3">
                  <img src="../Image/logo.png" width="90" height="30" alt="" />
                  <div className="row mt-5">
                    <div className="col-6">
                      <p>
                        <b>Rappel for teams: Simple project management</b>
                      </p>
                    </div>
                    <div className="col-6">
                      <img
                        src="../Image/logo_events.png"
                        width="90"
                        height="90"
                        alt=""
                      />
                    </div>
                  </div>
                  <p>Livestreaming + Q&A</p>
                  <p>18 November 2022 | 45 minutes</p>
                </div>

                <div
                  className="mt-2 rounded-bottom p-3"
                  style={{ backgroundColor: "#fff", textAlign: "center" }}
                >
                  <p>
                    <b>Rappel for teams * Simple project management</b>
                  </p>
                  <p>
                    In part one of our teams series, we help you to build on
                    your basic skills and get the most out of Rappel databases
                    for project management and collaboration.
                  </p>
                  <p>Language : Indonesian & English</p>
                  <div className="d-grid col-12">
                    <button className="btn btn-primary">Register</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ backgroundColor: "#c7e2fc" }}>
              <div className="card-body rounded" style={{ padding: "0" }}>
                <div className="m-3">
                  <img src="../Image/logo.png" width="90" height="30" alt="" />
                  <div className="row mt-5">
                    <div className="col-6">
                      <p>
                        <b>Rappel for teams: Simple project management</b>
                      </p>
                    </div>
                    <div className="col-6">
                      <img
                        src="../Image/logo_events.png"
                        width="90"
                        height="90"
                        alt=""
                      />
                    </div>
                  </div>
                  <p>Livestreaming + Q&A</p>
                  <p>18 November 2022 | 45 minutes</p>
                </div>
                <div>
                  <div
                    className="mt-2 rounded-bottom p-3"
                    style={{ backgroundColor: "#fff", textAlign: "center" }}
                  >
                    <p>
                      <b>Rappel for teams * Simple project management</b>
                    </p>
                    <p>
                      In part one of our teams series, we help you to build on
                      your basic skills and get the most out of Rappel databases
                      for project management and collaboration.
                    </p>
                    <p>Language : Indonesian & English</p>
                    <div className="d-grid col-12">
                      <button className="btn btn-primary">Register</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 mb-5">
            <div className="card" style={{ backgroundColor: "#c7e2fc" }}>
              <div className="card-body rounded" style={{ padding: "0" }}>
                <div className="m-3">
                  <img src="../Image/logo.png" width="90" height="30" alt="" />
                  <div className="row mt-5">
                    <div className="col-6">
                      <p>
                        <b>Rappel for teams: Simple project management</b>
                      </p>
                    </div>
                    <div className="col-6">
                      <img
                        src="../Image/logo_events.png"
                        width="90"
                        height="90"
                        alt=""
                      />
                    </div>
                  </div>
                  <p>Livestreaming + Q&A</p>
                  <p>18 November 2022 | 45 minutes</p>
                </div>
                <div>
                  <div
                    className="mt-2 rounded-bottom p-3"
                    style={{ backgroundColor: "#fff", textAlign: "center" }}
                  >
                    <p>
                      <b>Rappel for teams * Simple project management</b>
                    </p>
                    <p>
                      In part one of our teams series, we help you to build on
                      your basic skills and get the most out of Rappel databases
                      for project management and collaboration.
                    </p>
                    <p>Language : Indonesian & English</p>
                    <div className="d-grid col-12">
                      <button className="btn btn-primary">Register</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
