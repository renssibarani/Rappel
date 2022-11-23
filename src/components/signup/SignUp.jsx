function SignUp() {
  return (
    <div
      class="container-fluid"
      style={{ backgroundColor: "#127ed8", height: "100vh" }}
    >
      <div class="card border-0" style={{ backgroundColor: "#127ed8" }}>
        <div class="card-body">
          <div class="row mt-5">
            <div class="col-6">
              <p class="ms-5">
                RAP<b>PEL</b>
              </p>
              <img
                src="../Image/signup.png"
                class="ms-5 img-fluid"
                width="70%"
                height="85%"
                alt=""
              />
              <h3 class="ms-5">
                Connect with your <br />
                friends and family
              </h3>
            </div>
            <div
              class="col-6 border rounded-2"
              style={{ backgroundColor: "#fff" }}
            >
              <h4>Sign Up to your account</h4>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    FULL NAME
                  </label>
                  <input
                    type="fname"
                    class="form-control"
                    id="exampleInpuFname"
                    aria-describedby="fname"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    REMEMBER ME
                  </label>
                </div>
                <div
                  style={{ textAlign: "center" }}
                  class="d-grid gap-2 col-6 mx-auto"
                >
                  <button
                    type="submit"
                    class="btn btn-primary"
                    style={{ borderRadius: "15px" }}
                  >
                    SIGN UP
                  </button>
                  <br />
                  <button
                    type="button"
                    class="btn btn-dark mb-3"
                    style={{ borderRadius: "15px" }}
                  >
                    <img
                      src="../Image/logo-google.png"
                      width="20px"
                      height="20px"
                      alt=""
                    />
                    Continue with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
