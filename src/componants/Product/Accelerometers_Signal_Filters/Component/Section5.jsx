import React from "react";
import "./Style/Section5.css";
import Image from "./Image/section5.png";
import { Link } from "react-router-dom";

const Section5 = (props) => {
  return (
    <div className="sec_container">
      <div className="sec_bgcolor">
        <div className="sec_wrapper">
          <div className="sec_image">
            <img className="sec_img" src={Image} alt="" />
          </div>
          <div className="sec_textarea">
            <h2 className="sec-heading">{props.data.Heading}</h2>
            <p>{props.data.Para}</p>
            <div className="first-link">
              <h5 className="button_link">
                To know more about Cables Assemblies please click the below link
              </h5>
              <Link
                to="https://kemo.com/accelerometer-cables/#"
                target="_blank"
              >
                <button className="sec_btn ">Visit Here</button>
              </Link>
            </div>
            <div className="second_links">
              <h5 className="button_link">
                To know more Cable Connectors & Adaptors please click the below
                link{" "}
              </h5>
              <Link
                to="https://kemo.com/cable-connectors-adaptors/"
                target="_blank"
              >
                <button className="sec_btn ">Click Here</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
