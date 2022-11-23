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
            <div className="d-flex align-items-end">Copyright Rappel 2022</div>
          </div>
          <div className="mt-5 col-4">
            <h3>Quick Links</h3>
            <p>Services</p>
            <p>Portofolio</p>
            <p>About Us</p>
            <p>Contact Us</p>
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
