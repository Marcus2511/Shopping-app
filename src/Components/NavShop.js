import React, { useState } from "react";
import classes from "./NavShop.module.css";
import { Button, Nav, NavItem, NavLink } from "reactstrap";
import logo from "./logo.webp";
import { useNavigate } from "react-router-dom";
import Example from "./Modal";

const NavShop = () => {
  let navigate = useNavigate();

  return (
    <div>
      <Nav className={classes.NavBar}>
        <img src={logo} alt=""></img>
        <NavItem className={classes.Item}>
          <NavLink
            active
            href="#"
            onClick={() => {
              navigate(`/`);
            }}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem className={classes.Item}>
          <NavLink active href="#clothes">
            Clothing
          </NavLink>
        </NavItem>
        <NavItem className={classes.Item}>
          <NavLink active href="#jewelery">
            Jewelery
          </NavLink>
        </NavItem>
        <NavItem className={classes.Item}>
          <NavLink active href="#electronic">
            Electronics
          </NavLink>
        </NavItem>
        <div className={classes.icon}>
          <Example />
        </div>
      </Nav>
    </div>
  );
};

export default NavShop;
