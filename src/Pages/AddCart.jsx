import React, { useEffect } from "react";
import { connect } from "react-redux";
import NoItem from "../components/NoItem";
import { dataFetch, deleteCart } from "../Redux/Cart/CartAC";

function AddCart({ carts, datafetching, deleteItem }) {
  useEffect(() => {
    datafetching();
  }, []);

  const items = carts.map((item, i) => {
    return (
      <div key={i} className="card">
        <h3 className="cardtitle mt-2">
          <small className="fs-6 me-2 fw-normal">#{i}</small>
          {item.Name}
        </h3>
        <hr />
        <div className="card-body position-relative">
          <ul>
            <li>{item.Cpu}</li>
            <li>{item.Ram}</li>
            <li>{item.Storage}</li>
          </ul>
          <p className="text-muted mt-3">{item.Brief}</p>
          <button className="btn btn-primary">Buy</button>
          <button
            onClick={() => deleteItem(item.id)}
            className="btn ms-2 btn-outline-danger"
          >
            Delete
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className="container mt-3">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {carts.length === 0 ? <NoItem /> : items}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    carts: state.carts.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datafetching: () => dispatch(dataFetch()),
    deleteItem: (item) => dispatch(deleteCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCart);
