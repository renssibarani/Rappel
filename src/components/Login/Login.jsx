function Login() {
  return (
    <div
      class=" container-fluid"
      style={{ backgroundColor: "#127ed8", height: "100vh" }}
    >
      <div class="card border-0" style={{ backgroundColor: "#127ed8" }}>
        <div class="card-body mt-5">
          <p class="ms-5">
            RAP<b>PEL</b>
          </p>
          <div class="row">
            <div class="col-6">
              <img
                src="../Image/Login.png"
                class="ms-5 img-fluid"
                width="70%"
                height="75%"
                alt=""
              />
              <h3 class="ms-5">
                Connect with your <br />
                friends and family
              </h3>
            </div>
            <div
              class="col-6 rounded-2 mb-5"
              style={{ backgroundColor: "#fff" }}
            >
              <h4>Login to your account</h4>
              <form>
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
                    <a
                      href="/dashboard"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      SIGN IN
                    </a>
                  </button>
                  <br />
                  <button
                    type="button"
                    class="btn btn-dark"
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
                  <p>
                    Don't have an account?
                    <a href="/signup" style={{ textDecoration: "none" }}>
                      Sign Up
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
