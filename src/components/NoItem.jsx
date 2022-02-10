import { Link } from "react-router-dom";

function NoItem() {
  return (
    <div className="container notfound text-secondary text-center fw-bold fs-3">
      No Items In Cart
      <br />
      <Link to="/product">
        <button className="btn btn-outline-secondary fw-bold">Go To Buy</button>
      </Link>
    </div>
  );
}

export default NoItem;
