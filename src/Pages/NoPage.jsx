import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="container nopage">
      <div className="center">
        <h3 className="text-secondary">
          <span className="text-danger fw-bold fs-1">OHH..</span>No Page Found
        </h3>
        <Link to="/">
          <button className="btn mt-2 btn-outline-secondary">Home</button>
        </Link>
      </div>
    </div>
  );
}

export default NoPage;
