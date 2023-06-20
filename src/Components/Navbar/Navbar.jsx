import React from "react";
import "./Navbar.css";
import {SiYourtraveldottv} from 'react-icons/si'

const Navbar = () => {
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <SiYourtraveldottv classname="icon" />
              Travel.
            </h1>
          </a>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
