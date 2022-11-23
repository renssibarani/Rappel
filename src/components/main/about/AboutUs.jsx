import "./aboutus.css";
function AboutUs() {
  return (
    <div className="conf container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-6 mt-5">
            <h2>
              Set Schedule, Reminder
              <br />
              in a Team and Individually <br />
              with one hand
            </h2>
            <p>
              Enjoy the convenience of being in one workspace, <br />
              to see the progress of tasks that have been fulfilled,
              <br />
              to be more organized.
            </p>
            <button type="button" className="btn btn-primary">
              Try Free
            </button>
          </div>
          <div className="col-6">
            <img src="../Image/cuate.png" className="img-fluid" alt="" />
          </div>
        </div>
        <div className="mt-4 logo">
          <h3>Trusted by</h3>
          <div className="mt-5">
            <img src="../Image/LOGO_KM.png" alt="" />
            <img src="../Image/LOGO_IL.png" alt="" />
            <img src="../Image/LOGO_GRIXMA.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
