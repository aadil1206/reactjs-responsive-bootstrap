import React from "react";
import arrowleft from "../images/arrow-left.svg";
import "./Productlist.css";
import a1 from "../images/1.svg";
import cart from "../images/Cart.svg"
import a31 from "../images/31.svg";
import a32 from "../images/32.svg";
import a36 from "../images/36.svg";
import a37 from "../images/37.svg";
import a38 from "../images/38.svg";
import a39 from "../images/39.svg";
import a40 from "../images/40.svg";
import a41 from "../images/41.svg";
import a42 from "../images/42.svg";
import a43 from "../images/43.svg";

const Productlist = () => {
  return (
    <div className="row list1 d-flex align-items-center">
      <div className="row d-flex align-items-center">
        <img src={arrowleft} alt="" style={{ width: "20px" }} />
        <p className="arrowlefttext col">
          Home _ Agriculture Garden & Landscaping _ Harvester _ Cultivator _
          Agripro Power Cultivator
        </p>
      </div>
      <div className="row justify-content-between">
        <section2 className="col-sm-3 col-12 col-md-3 col-lg-3 bg-white p-2 d4">
          <div
            className="d-flex justify-content-between"
            style={{ borderBottom: "1px solid #a7a8ab", paddingBottom: "1rem" }}
          >
            <p className="d2">Filter(3)</p>
            <p className="d3">Clear all</p>
          </div>
          <div className="d6">
            <h4>Category</h4>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Cultivator
                </label>
              </div>
              <p className="d7">(100)</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Cultivator Accesories
                </label>
              </div>
              <p className="d7">(100)</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Cultivator Attachments
                </label>
              </div>
              <p className="d7">(85)</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Rotary Slashers
                </label>
              </div>
              <p className="d7">(41)</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Tea Plucker
                </label>
              </div>
              <p className="d7">(56)</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Tillers
                </label>
              </div>
              <p className="d7">(56)</p>
            </div>
          </div>
          <div className="d6">
            <h4>Price Range</h4>
            <div
              className="progress"
              role="progressbar"
              aria-label="Warning example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-warning"
                style={{ width: "75%" }}
              ></div>
            </div>
            <div className="d-flex justify-content-between">
              <p>₹0</p>
              <p>₹20000</p>
            </div>
          </div>
          <div className="d6">
            <h4>Brands</h4>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Kisankraft
                </label>
              </div>
              <p className="d7">(100)</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Greenleaf
                </label>
              </div>
              <p className="d7">(100)</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Kisan Suraksha
                </label>
              </div>
              <p className="d7">(85)</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Honda
                </label>
              </div>
              <p className="d7">(41)</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Extra Power
                </label>
              </div>
              <p className="d7">(56)</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Falcon
                </label>
              </div>
              <p className="d7">(56)</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Unison
                </label>
              </div>
              <p className="d7">(56)</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Stihl
                </label>
              </div>
              <p className="d7">(56)</p>
            </div>
          </div>
          <div className="d6">
            <h4>Discount</h4>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Up to 10%
                </label>
              </div>
              <p className="d7">(100)</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Up to 20%
                </label>
              </div>
              <p className="d7">(100)</p>
            </div>
          </div>
        </section2>
        <section1 className="col-lg-9 col-sm-12 col-md-9 d5">
          <sec2 className="row justify-content-between d16">
            <div className="col-4 d-flex align-items-center d15">
              <h3 className="d22">Harvesters</h3>
              <span className="d21">(1-08 product of 20 )</span>
            </div>
            <div className="col d-flex justify-content-end">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control e1"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <span
                  className="input-group-text bg-white border none e2"
                  id="basic-addon1"
                >
                  <img src="./images/search.svg" alt="" />
                </span>
              </div>
              <div className="dropdown" style={{ marginleft: "1rem" }}>
                <button
                  className="btn bg-white dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Popularity
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </sec2>
          <card className="row b8 d-flex">
            <div className="col-xl-3  col-lg-4 col-md-6 bg-white p9 col-12">
              <img src={a31} alt="" className="mt-3" />
              <img
                src={a36}
                alt=""
                className="d-flex justify-content-center align-items-center col-12 "
              />
              <div
                style={{
                  padding: "1rem",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-between",
                }}
                className="col"
              >
                <div className="d181">
                  <p className="d17">
                    Agripro Power Cultivator 7 HP Gear Transmission APC100FQ
                  </p>
                  <h6 className="d-flex d18">
                    by
                    <span className="d13 px-2" style={{ color: "#a7a8ab" }}>
                      Supplier Name
                    </span>
                  </h6>
                </div>
                <div className="d-flex justify-content-between d13">
                  <h6 className="d19">
                    <del>Rs.55,000</del>
                  </h6>
                  <h6 style={{ color: "#ff9d21" }} className="d20">
                    40,000
                  </h6>
                </div>
                <button
                  style={{ border: "none" }}
                  href="#"
                  className="bg-white d11 col"
                >
                  <img src={cart} alt="" />
                  <p style={{ marginBottom: "0rem" }}>Your Cart</p>
                </button>
              </div>
            </div>
            <div className="col-xl-3  col-lg-4 col-md-6 bg-white p9 col-12">
              <img src={a31} alt="" className="mt-3" />
              <img
                src={a32}
                alt=""
                className="d-flex justify-content-center align-items-center col-12"
              />
              <div
                style={{
                  padding: "1rem",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-between",
                }}
              
                className="col" >
                <div className="d181">
                  <p className="d17">Product Name</p>
                  <h6 className="d-flex d18">
                    by
                    <span className="d13 px-2" style={{ color: "#a7a8ab" }}>
                      Supplier Name
                    </span>
                  </h6>
                </div>
                <div
                  className="d-flex justify-content-between d13 d24"
                  style={{ paddingBottom: "0.1rem" }}
                >
                  <h6 className="d19">
                    <del>Rs.55,000</del>
                  </h6>
                  <h6 style={{ color: "#ff9d21" }} className="d20">
                    40,000
                  </h6>
                </div>
                <button
                  style={{ border: "none" }}
                  href="#"
                  className="bg-white d11 col"
                >
                  <img src={cart} alt="" />
                  <p style={{ marginBottom: "0rem" }}>Your Cart</p>
                </button>
              </div>
            </div>
            <div className="col-xl-3  col-lg-4 col-md-6 bg-white p9 col-12">
              <img src={a31} alt="" className="mt-3" />
              <img
                src={a38}
                alt=""
                className="d-flex justify-content-center align-items-center col-12"
              />
              <div
                style={{
                  padding: "1rem",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-between",
                }}
                className="col">
                <div className="d181">
                  <p className="d17">Product Name</p>
                  <h6 className="d-flex d18">
                    by
                    <span className="d13 px-2" style={{ color: "#a7a8ab" }}>
                      Supplier Name
                    </span>
                  </h6>
                </div>
                <div
                  className="d-flex justify-content-between d13 d24"
                  style={{ paddingBottom: "0.1rem" }}
                >
                  <h6 className="d19">
                    <del>Rs.55,000</del>
                  </h6>
                  <h6 style={{ color: "#ff9d21" }} className="d20">
                    40,000
                  </h6>
                </div>
                <button
                  style={{ border: "none" }}
                  href="#"
                  className="bg-white d11 col "
                >
                  <img src={cart} alt="" />
                  <p style={{ marginBottom: "0rem" }}>Your Cart</p>
                </button>
              </div>
            </div>
            <div className="col-xl-3  col-lg-4 col-md-6 bg-white p9 col-12">
              <img src={a31} alt="" className="mt-3" />
              <img
                src={a39}
                alt=""
                className="d-flex justify-content-center align-items-center col-12"
              />
              <div
                style={{
                  padding: "1rem",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-between",
                }}
                className="col">
                <div className="d181">
                  <p className="d17">Product Name</p>
                  <h6 className="d-flex d18">
                    by
                    <span className="d13 px-2" style={{ color: "#a7a8ab" }}>
                      Supplier Name
                    </span>
                  </h6>
                </div>
                <div
                  className="d-flex justify-content-between d13 d24"
                  style={{ paddingBottom: "0.1rem" }}
                >
                  <h6 className="d19">
                    <del>Rs.55,000</del>
                  </h6>
                  <h6 style={{ color: "#ff9d21" }} className="d20">
                    40,000
                  </h6>
                </div>
                <button
                  style={{ border: "none" }}
                  href="#"
                  className="bg-white d11 col"
                >
                  <img src={cart} alt="" />
                  <p style={{ marginBottom: "0rem" }}>Your Cart</p>
                </button>
              </div>
            </div>
            <div className="col-xl-3  col-lg-4 col-md-6 bg-white p9 col-12">
              <img src={a31} alt="" className="mt-3" />
              <img
                src={a40}
                alt=""
                className="d-flex justify-content-center align-items-center col-12"
              />
              <div
                style={{
                  padding: "1rem",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-between",
                }}
                className="col" >
                <div className="d181">
                  <p className="d17">Product Name</p>
                  <h6 className="d-flex d18">
                    by
                    <span className="d13 px-2" style={{ color: "#a7a8ab" }}>
                      Supplier Name
                    </span>
                  </h6>
                </div>
                <div
                  className="d-flex justify-content-between d13 d24"
                  style={{ paddingBottom: "0.1rem" }}
                >
                  <h6 className="d19">
                    <del>Rs.55,000</del>
                  </h6>
                  <h6 style={{ color: "#ff9d21" }} className="d20">
                    40,000
                  </h6>
                </div>
                <button
                  style={{ border: "none" }}
                  href="#"
                  className="bg-white d11 col"
                >
                  <img src={cart} alt="" />
                  <p style={{ marginBottom: "0rem" }}>Your Cart</p>
                </button>
              </div>
            </div>
            <div className="col-xl-3  col-lg-4 col-md-6 bg-white p9 col-12">
              <img src={a31} alt="" className="mt-3" />
              <img
                src={a41}
                alt=""
                className="d-flex justify-content-center align-items-center col-12"
              />
              <div
                style={{
                  padding: "1rem",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-between",
                }}
                className="col" >
                <div className="d181">
                  <p className="d17">Product Name</p>
                  <h6 className="d-flex d18">
                    by
                    <span className="d13 px-2" style={{ color: "#a7a8ab" }}>
                      Supplier Name
                    </span>
                  </h6>
                </div>
                <div
                  className="d-flex justify-content-between d13 d24"
                  style={{ paddingBottom: "0.1rem" }}
                >
                  <h6 className="d19">
                    <del>Rs.55,000</del>
                  </h6>
                  <h6 style={{ color: "#ff9d21" }} className="d20">
                    40,000
                  </h6>
                </div>
                <button
                  style={{ border: "none" }}
                  href="#"
                  className="bg-white d11 col"
                >
                  <img src={cart} alt="" />
                  <p style={{ marginBottom: "0rem" }}>Your Cart</p>
                </button>
              </div>
            </div>
            <div className="col-xl-3  col-lg-4 col-md-6 bg-white p9 col-12">
              <img src={a31} alt="" className="mt-3" />
              <img
                src={a42}
                alt=""
                className="d-flex justify-content-center align-items-center col-12"
              />
              <div
                style={{
                  padding: "1rem",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-between",
                }}
               className="col" >
                <div className="d181">
                  <p className="d17">Product Name</p>
                  <h6 className="d-flex d18">
                    by
                    <span className="d13 px-2" style={{ color: "#a7a8ab" }}>
                      Supplier Name
                    </span>
                  </h6>
                </div>
                <div
                  className="d-flex justify-content-between d13 d24"
                  style={{ paddingBottom: "0.1rem" }}
                >
                  <h6 className="d19">
                    <del>Rs.55,000</del>
                  </h6>
                  <h6 style={{ color: "#ff9d21" }} className="d20">
                    40,000
                  </h6>
                </div>
                <button
                  style={{ border: "none" }}
                  href="#"
                  className="bg-white d11 col"
                >
                  <img src={cart} alt="" />
                  <p style={{ marginBottom: "0rem" }}>Your Cart</p>
                </button>
              </div>
            </div>
            <div className="col-xl-3  col-lg-4 col-md-6 bg-white p9 col-12">
              <img src={a31} alt="" className="mt-3" />
              <img
                src={a43}
                alt=""
                className="d-flex justify-content-center align-items-center col-12"
              />
              <div  style={{
                  padding: "1rem",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-between",
                }}  className="col">
                <div className="d181">
                  <p className="d17">Product Name</p>
                  <h6 className="d-flex d18">
                    by
                    <span className="d13 px-2" style={{ color: "#a7a8ab" }}>
                      Supplier Name
                    </span>
                  </h6>
                </div>
                <div
                  className="d-flex justify-content-between d13 d24"
                  style={{ paddingBottom: "0.1rem" }}
                >
                  <h6 className="d19">
                    <del>Rs.55,000</del>
                  </h6>
                  <h6 style={{ color: "#ff9d21" }} className="d20">
                    40,000
                  </h6>
                </div>
                <button
                  style={{ border: "none" }}
                  href="#"
                  className="bg-white d11 col"
                >
                  <img src={cart} alt="" />
                  <p style={{ marginBottom: "0rem" }}>Your Cart</p>
                </button>
              </div>
            </div>
          </card>
          <sec4 className="row bg-white d8 p-3">
            <h3>
              Perfect Mix of Competitive Pricing and Great Offers on
              <span style={{ color: "#56e20a" }}>Harvester</span>
            </h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </sec4>
        </section1>
      </div>
    </div>
  );
};

export default Productlist;
