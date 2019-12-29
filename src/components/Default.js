import React from "react";

const Default = props => {
  console.log(props);
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h2 className="display-3">404</h2>
          <h3>error</h3>
          <h3>Page not found</h3>
          <h3 className="text-capitalize">
            the requested url to 
            <span className="text-danger"> {props.location.pathname} </span>
            was not found
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Default;
