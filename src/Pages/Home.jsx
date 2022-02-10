import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { dataFetch } from "../Redux/Cart/CartAC";

class Home extends React.Component {
  componentDidMount() {
    this.props.datafetching();
  }

  render() {
    const hero = this.props.products.slice(0, 3).map((item, i) => {
      return (
        <div key={i} className="product m-2 border-bottom">
          <span className="fs-6 text-secondary fw-light">Best Seller</span>
          <h2>{item.Name}</h2>
          <h5 className="text-info">The Best Phone Of the Year</h5>
          <p className="text-secondary">{item.Brief}</p>
          <button className="btn btn-primary mb-3">Buy</button>
          <button className="btn btn-outline-info ms-2 mb-3">
            <Link className="link text-black" to={`/seemore/${item.id}`}>
              See More
            </Link>
          </button>
          <span className="ms-4 text-primary">999$</span>
        </div>
      );
    });
    return (
      <div className="container mt-5">
        <div className="Herosection border-bottom">
          <h1>Welcome To Our Shop</h1>
          <p className="text-secondary fs-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            eaque! Harum delectus quidem fugit aliquam provident tenetur quaerat
            architecto mollitia!
          </p>
          <button className="btn mb-3 btn-outline-info">Start</button>
        </div>
        {hero}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    carts: state.carts.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datafetching: () => dispatch(dataFetch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
