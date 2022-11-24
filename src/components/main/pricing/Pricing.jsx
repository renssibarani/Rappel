import { Icon } from "@iconify/react";
import "./pricing.css";

function Pricing() {
  return (
    <div className="container-fluid" id="pricing">
      <div className="container mt-5">
        <h4 className="text-center" style={{ color: "blue" }}>
          PRICING
        </h4>
        <h4 className="text-center" style={{ color: "black" }}>
          <b> Explore Which Option Is Right For You</b>
        </h4>
        <div className="row mt-5">
          <div className="col-4">
            <div className="card rounded-2" style={{ width: "18rem" }}>
              <img
                src="../Image/p1.png"
                className="ms-2"
                width="75"
                height="75"
                alt="..."
              />
              <h3 className="ms-2" style={{ color: "#0b9e22" }}>
                Free
              </h3>
              <p className="ms-2">For organizing every corner of your life.</p>
              <div className="pric card-body text-center">
                <p className="card-text">
                  <Icon icon="material-symbols:check-circle-outline" /> Free 3
                  Tasks Document
                </p>
                <p className="card-text">
                  <Icon icon="material-symbols:check-circle-outline" /> Free 5
                  Sharing Project
                </p>
                <p className="card-text">
                  <Icon icon="material-symbols:check-circle-outline" /> Free 3
                  Attachments
                </p>
                <a href="#" className="btn btn-primary">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card rounded-2" style={{ width: "18rem" }}>
              <img
                src="../Image/p2.png"
                className="ms-2"
                width="75"
                height="75"
                alt="..."
              />
              <h3 className="ms-2" style={{ color: "#e2a021" }}>
                Monthly
              </h3>
              <p className="ms-2">For organizing every corner of your life.</p>
              <div className="pric card-body text-center">
                <p style={{ color: "red" }}>IDR 30.000 / Month</p>
                <p className="card-text">
                  <Icon icon="material-symbols:check-circle-outline" />{" "}
                  Unlimited Tasks Document
                </p>
                <p className="card-text">
                  <Icon icon="material-symbols:check-circle-outline" />{" "}
                  Unlimited Sharing Project
                </p>
                <p className="card-text">
                  <Icon icon="material-symbols:check-circle-outline" />{" "}
                  Collaborative Workspace
                </p>
                <p className="card-text">
                  <Icon icon="material-symbols:check-circle-outline" /> Update
                  Version
                </p>
                <a href="#" className="btn btn-primary">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card rounded-2" style={{ width: "18rem" }}>
              <img
                src="../Image/p3.png"
                className="ms-2"
                width="75"
                height="75"
                alt="..."
              />
              <h3 className="ms-2" style={{ color: "#e2655c" }}>
                Free
              </h3>
              <p className="ms-2">For organizing every corner of your life.</p>
              <div className="pric card-body text-center">
                <p style={{ color: "red" }}>IDR 300.000 / one time</p>
                <p className="card-text">
                  <Icon icon="material-symbols:check-circle-outline" />{" "}
                  Unlimited Tasks Document
                </p>
                <p className="card-text">
                  <Icon icon="material-symbols:check-circle-outline" />{" "}
                  Unlimited Sharing Project
                </p>
                <p className="card-text">
                  <Icon icon="material-symbols:check-circle-outline" />{" "}
                  Collaborative Workspace
                </p>
                <p className="card-text">
                  <Icon icon="ph:x-circle-light" /> Upgrade Version
                </p>
                <a href="#" className="btn btn-primary">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
