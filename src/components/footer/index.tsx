import React from "react";
import styles from '../../../styles/footer.module.css';

export const Footer = () => {
  return (<div className="footer bg-dark">
    <div className="d-flex justify-content-around align-items-center pt-4 pb-4">
      <div className="text-light">
        <p className="h6"><a className="btn btn-dark text-light" href="">Lorem ipsum dolor</a> </p>
        <p className="h6"><a className="btn btn-dark text-light" href="">Lorem ipsum dolor</a> </p>
        <p className="h6"><a className="btn btn-dark text-light" href="">Lorem ipsum dolor</a> </p>
      </div>
      <div className="text-light">
        <p className="h6"><a className="btn btn-dark text-light" href="">Lorem ipsum dolor</a> </p>
        <p className="h6"><a className="btn btn-dark text-light" href="">Lorem ipsum dolor</a> </p>
        <p className="h6"><a className="btn btn-dark text-light" href="">Lorem ipsum dolor</a> </p>
      </div>
      <div className="text-light">
        <p className="h6"><a className="btn btn-dark text-light" href="">Lorem ipsum dolor</a> </p>
        <p className="h6"><a className="btn btn-dark text-light" href="">Lorem ipsum dolor</a> </p>
        <p className="h6"><a className="btn btn-dark text-light" href="">Lorem ipsum dolor</a> </p>
      </div>
    </div>
    <div className="text-center text-muted h6 mb-0 pb-4">
      &copy; Copyright all rights reserved 2022
    </div>
  </div>)
}
