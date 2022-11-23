import "./offer.css";
function Offer() {
  return (
    <div className="container-fluid conf">
      <div className="container">
        <div className="row">
          <div className="col-6 mt-5">
            <h2>
              What Is Rappel &<br />
              what services we offer
            </h2>
          </div>
          <div className="col-6 mt-5">
            <h2>Rappel</h2>
            <p>
              is a workspace that adapts to your needs. Can be used for remote
              collaboration with the team, a reminder feature for your work is
              also provided
            </p>
          </div>
        </div>
        <div className="mt-5" style={{ textAlign: "center" }}>
          <h1>We Offer Best Services</h1>
        </div>
        <div className="row mt-5">
          <div className="col-3" style={{ textAlign: "center" }}>
            <img
              src="../Image/Colaboration.jpeg"
              className="rounded img-fluid"
              alt=""
            />
            <h3>Collaboration Team</h3>
            <p>scheduling with the team made easier</p>
          </div>
          <div className="col-3" style={{ textAlign: "center" }}>
            <img
              src="../Image/Task.jpeg"
              className="rounded img-fluid"
              alt=""
            />
            <h3>Collaboration Team</h3>
            <p>scheduling with the team made easier</p>
          </div>
          <div className="col-3" style={{ textAlign: "center" }}>
            <img
              src="../Image/Reminder.jpeg"
              className="rounded img-fluid"
              alt=""
            />
            <h3>Collaboration Team</h3>
            <p>scheduling with the team made easier</p>
          </div>
          <div className="col-3" style={{ textAlign: "center" }}>
            <img
              src="../Image/Safety.jpeg"
              className="rounded img-fluid"
              alt=""
            />
            <h3>Collaboration Team</h3>
            <p>scheduling with the team made easier</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
