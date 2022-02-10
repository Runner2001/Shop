import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Navbar({ noCartsItem }) {
  return (
    <div className="">
      <nav className="navbar text-white navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h3 className="logo navbar-brand fw-bold ms-4 me-4 m-2">LOGO</h3>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-collapse justify-content-center navbar-nav">
            <li className="navbar-item m-2">
              <Link className="link active" to="/">
                Home
              </Link>
            </li>
            <li className="navbar-item m-2">
              <Link className="link active" to="/product">
                Product
              </Link>
            </li>
            <li className="navbar-item m-2">
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="navbar-item m-2 cart">
              <Link to="/addcart">
                <button
                  type="button"
                  className="btn btn-outline-primary position-relative"
                >
                  <i className="fas text-white fa-shopping-cart"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {noCartsItem.length}
                  </span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noCartsItem: state.carts.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
