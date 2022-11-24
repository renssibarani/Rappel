import { Icon } from "@iconify/react";
import "./footer.css";

function Footer() {
  return (
    <div className="fot container-fluid">
      <div className="container">
        <div className="row">
          <div className="mt-5 col-4">
            <img src="../Image/Logo.png" width="110" height="35" alt="" />
            <p>
              Some footer text about the
              <br />
              Agency. Just a little description
              <br />
              to help people understand you <br />
              better
            </p>
            <Icon icon="ic:baseline-facebook" />
            <Icon icon="ant-design:twitter-circle-filled" />
            <Icon icon="entypo-social:linkedin-with-circle" />
            <Icon icon="uil:instagram-alt" />
            <div className="d-flex align-items-end">Copyright Rappel 2022</div>
          </div>
          <div className="mt-5 col-4">
            <h3>Quick Links</h3>
            <p>
              <a
                href="#offer"
                style={{ textDecoration: "none", color: "black" }}
              >
                Services
              </a>
            </p>
            <p>
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Portofolio
              </a>
            </p>
            <p>
              <a
                href="#testimonial"
                style={{ textDecoration: "none", color: "black" }}
              >
                Testimonial
              </a>
            </p>
            <p>
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Contact Us
              </a>
            </p>
          </div>
          <div className="mt-5 col-4">
            <h3>Addres</h3>
            <p>
              Design Agency Head Office.
              <br />
              Airport Road United Arab Emirate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
