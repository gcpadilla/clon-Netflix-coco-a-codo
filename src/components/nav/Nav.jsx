import React from "react";
import "./nav.css";
import { API } from "../../config/constants";
import Logo from "../../img/Netflix-avatar.png";

const Nav = () => {
  
  return (
    <div className="bg-transparent d-flex align-items-center my-2">
      <div className="bg-transparent d-flex justify-content-start p-2 mx-2">
        <div href="#" className="bg-transparent">
          <img
            src={API.netflixImage}
            width={130}
            alt="netflix"
            className="bg-transparent"
          />
        </div>
      </div>
      <div className="d-flex justify-content-end w-100 me-2 bg-transparent">
        <div className="p-2 bd-highlight bg-transparent">
          <img src={Logo} alt="" width={40} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
