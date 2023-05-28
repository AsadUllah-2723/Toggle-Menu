import React from "react";
import './Header.css'

const Menu = () => {
  return (
    <div className="main">
      <div className="child-1">Germany-<br />
      785 15th Street, Office 478 <br /> Berlin, De 81566</div>

      <div className="child-2"><br />+1840 841 25 69 <br /> info@email.com</div>

      <div className="child-3">
        <nav className="navbar">
                <ul className="navlist">Home</ul>
                <ul className="navlist">Expertise</ul>
                <ul className="navlist">Portfolio</ul>
                <ul className="navlist">About</ul>
                <ul className="navlist">Shop</ul>
                <ul className="navlist">Blog</ul>
        </nav>
      </div>
      <div></div>
      
    </div>
  );
};

export default Menu;
