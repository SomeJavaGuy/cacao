import React from "react";
import { Col, Navbar, NavItem, NavLink, Row } from "reactstrap";

export const Header = () => {
  return (
    <header>
      <Navbar
        fixed="top"
        color="light"
        dark
        expand="xs"
        className="border-bottom border-gray bg-white"
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
              <NavLink className="font-weight-bold" href="/">
                Home
              </NavLink>
            </NavItem>

            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="/upload">
                Upload
              </NavLink>
            </NavItem>
          </Col>
        </Row>
      </Navbar>
    </header>
  );
};
