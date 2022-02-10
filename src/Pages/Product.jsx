import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";
import { postCart } from "../Redux/Cart/CartAC";
import { dataFetching } from "../Redux/Product/ProductAC";

class Product extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.datafetch();
    }, 1000);
  }
  render() {
    const card = this.props.allProducts.map((product, i) => {
      return (
        <div key={i} className="col">
          <div className="card mt-4">
            <img src={product.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{product.Name}</h4>
              <p className="card-text text-secondary">{product.Brief}</p>
              <button className="btn btn-primary me-2">
                <Link className="link" to={`/seemore/${product.id}`}>
                  See More
                </Link>
              </button>
              <button
                className="btn btn-outline-warning me-2"
                onClick={() => this.props.addCart(product)}
              >
                Add Cart
              </button>
              <span className="text-primary">{product.Price}</span>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container mt-3">
        <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3">
          {this.props.isLoading && <Loading />}
          {this.props.errorFound && (
            <NotFound message={this.props.errorFound} />
          )}
          {!this.props.errorFound && card}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.products.products,
    isLoading: state.products.isLoading,
    errorFound: state.products.errorFound,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datafetch: () => dispatch(dataFetching()),
    addCart: (cart) => dispatch(postCart(cart)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
