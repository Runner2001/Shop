import React from "react";
import { useParams } from "react-router";
import "../seemore.css";
import { products } from "../Product";

const SeeMore = () => {
  const { id } = useParams();
  const see = products.filter((item) => item.id === parseInt(id));
  console.log(see);
  return (
    <See item={see} />
    // <div className="container col-12">
    //   <div className="row">
    //     <div key={see[0].id} className="card col-md-6">
    //       <img src={see[0].img} className="card-img-top mt-2" />
    //       <div className="card-body">
    //         <h2 className="card-title mb-4">{see[0].Name}</h2>
    //         <p>Cpu : {see[0].Cpu}</p>
    //         <p>Ram : {see[0].Ram}</p>
    //         <p>Storage : {see[0].Storage}</p>
    //         <p>Camera : {see[0].Camera}</p>
    //         <p className="card-text text-muted">{see[0].Brief}</p>
    //         <button className="btn btn-primary">Buy</button>
    //         <span className="text-primary ms-2 fs-6">{see[0].Price}</span>
    //         <p className="card-text mt-2">
    //           <small className="text-muted">Release Date 12/1/2021</small>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

function See({ item }) {
  return (
    <div className="showitem">
      <div className="photo">
        <div className="bigPhoto">
          <div className="img">
            <span> hello</span>
          </div>
        </div>
        <div className="smallPhoto">
          <div className="img">
            <span> hello</span>
          </div>
          <div className="img">
            <span> hello</span>
          </div>
          <div className="img">
            <span> hello</span>
          </div>
        </div>
      </div>
      <div className="detail">
        <text>New</text>
        <h1>{item[0].Name}</h1>
        <div className="spe">
          <h4>{item[0].Cpu}</h4>
          <h4>{item[0].Storage}</h4>
          <h4>{item[0].Ram}</h4>
          <h4>{item[0].Camera}</h4>
        </div>
        <p>{item[0].Brief}</p>
      </div>
    </div>
  );
}

export default SeeMore;
