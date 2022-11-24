import "./testimonial.css";

function Testimonial() {
  return (
    <div className="container-fluid" id="testimonial">
      <div className="container mt-5">
        <h3>TESTIMONIALS</h3>
        <h2 className="mt-3">
          See what our customer
          <br />
          say about us
        </h2>
        <div className="container mt-5">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="tes card-body">
                        <p className="card-text">
                          Thank You for your service. I am very pleased with the
                          result. I have seen exponencial growth in my business
                          and its all thanks to your amazing service
                        </p>
                        <div className="row">
                          <div className="col-4">
                            <img src="../Image/Avatar.png" alt="" />
                          </div>
                          <div className="col-8">
                            <h4>Emily Stones</h4>
                            <h5>CEO, Marketing Guru</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="tes card-body">
                        <p className="card-text">
                          Thank You for your service. I am very pleased with the
                          result. I have seen exponencial growth in my business
                          and its all thanks to your amazing service
                        </p>
                        <div className="row">
                          <div className="col-4">
                            <img src="../Image/Avatar.png" alt="" />
                          </div>
                          <div className="col-8">
                            <h4>Emily Stones</h4>
                            <h5>CEO, Marketing Guru</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="tes card-body">
                        <p className="card-text">
                          Thank You for your service. I am very pleased with the
                          result. I have seen exponencial growth in my business
                          and its all thanks to your amazing service
                        </p>
                        <div className="row">
                          <div className="col-4">
                            <img src="../Image/Avatar.png" alt="" />
                          </div>
                          <div className="col-8">
                            <h4>Emily Stones</h4>
                            <h5>CEO, Marketing Guru</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="tes card-body">
                        <p className="card-text">
                          Thank You for your service. I am very pleased with the
                          result. I have seen exponencial growth in my business
                          and its all thanks to your amazing service
                        </p>
                        <div className="row">
                          <div className="col-4">
                            <img src="../Image/Avatar.png" alt="" />
                          </div>
                          <div className="col-8">
                            <h4>Emily Stones</h4>
                            <h5>CEO, Marketing Guru</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="tes card-body">
                        <p className="card-text">
                          Thank You for your service. I am very pleased with the
                          result. I have seen exponencial growth in my business
                          and its all thanks to your amazing service
                        </p>
                        <div className="row">
                          <div className="col-4">
                            <img src="../Image/Avatar.png" alt="" />
                          </div>
                          <div className="col-8">
                            <h4>Emily Stones</h4>
                            <h5>CEO, Marketing Guru</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="tes card-body">
                        <p className="card-text">
                          Thank You for your service. I am very pleased with the
                          result. I have seen exponencial growth in my business
                          and its all thanks to your amazing service
                        </p>
                        <div className="row">
                          <div className="col-4">
                            <img src="../Image/Avatar.png" alt="" />
                          </div>
                          <div className="col-8">
                            <h4>Emily Stones</h4>
                            <h5>CEO, Marketing Guru</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="tesc mt-5">
          <h3>SUBSCRIBE</h3>
          <h3 className="mt-5">
            Subscribe to get the latest <br />
            News about us
          </h3>
          <p className="mt-5">
            Please drop your email below to get daily update about what we do
          </p>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="search form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" className="mb-3 btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
