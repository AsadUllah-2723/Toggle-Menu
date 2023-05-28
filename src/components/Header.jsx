import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import Menu from "./Menu";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="container">
        <div>
          <h1 className="logo">Corbesier</h1>
        </div>

        <div className="icon" onClick={() => setToggle(!toggle)}>
          {toggle ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
      {toggle && <Menu />}
    </>
  );
};

export default Header;
