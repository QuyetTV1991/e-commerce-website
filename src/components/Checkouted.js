import React from "react";

const Checkouted = (props) => {
    console.log(props)
  return (
    <div className="container">
      <div className="row">
        <h2 className="col-10 mx-auto text-capitalize text-danger pt-5 justify-content-center d-flex">
          you order was processed
        </h2>
      </div>
    </div>
  );
};

export default Checkouted;
