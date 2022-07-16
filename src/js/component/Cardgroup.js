import React from "react";

 
const Cardgroup = (props) => {
  return (
    <div className="col-md-3 card-group">
    <div className="card text-center">
      <img src={props.img} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
      <div className="card-footer text-muted">
        <a href="#" className="btn btn-primary">{props.button}</a>
      </div>
    </div>
  </div>
  )
}; 

export default Cardgroup;





