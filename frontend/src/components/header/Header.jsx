import React from "react";
import { Link } from "react-router-dom";
import { Col, Navbar, NavItem, NavLink, Row } from "reactstrap";
import "./Header.css";
export const Header = () => {
  return (
    <header>
      <Navbar
        fixed="top"
        dark
        color="dark"
        expand="xs"
        className="text-light bg-header"
        style={{ height: 72 }}
      >
        <Row noGutters className="position-relative w-100 align-items-center">
          <Col className="d-none d-lg-flex justify-content-start">
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="/">
                <h2>CACAO</h2>
              </NavLink>
            </NavItem>
          </Col>

          <Col className="d-none d-lg-flex justify-content-end mr-5">
            <NavItem className="d-flex align-items-center">
              <Link className="font-weight-bold" to="/">
                Home
              </Link>
            </NavItem>

            <NavItem className="d-flex align-items-center">
              <Link className="font-weight-bold" to="/upload">
                Upload
              </Link>
            </NavItem>
          </Col>
        </Row>
      </Navbar>
    </header>
  );
};
