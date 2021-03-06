import React from "react";
import { Col, Container, Row } from "reactstrap";
import { CategoryBox } from "../../category-box/CategoryBox";
import { Hero } from "../../hero/Hero";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <section className="hero-section ptb-5">
        <Hero />
        {/* <Container>
          <Row>
            <Col>
           
            </Col>
          </Row>
        </Container> */}
      </section>

      <section className="pb-5">
        <Container>
          <Row>
            <Col>
              <CategoryBox />
            </Col>
            <Col>
              <CategoryBox />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col>
              <CategoryBox />
            </Col>
            <Col>
              <CategoryBox />
            </Col>

            <Col>
              <CategoryBox />
            </Col>

            <Col>
              <CategoryBox />
            </Col>
          </Row>

          <Row>
            <Col>
              <CategoryBox />
            </Col>
            <Col>
              <CategoryBox />
            </Col>

            <Col>
              <CategoryBox />
            </Col>

            <Col>
              <CategoryBox />
            </Col>
          </Row>

          <Row>
            <Col>
              <CategoryBox />
            </Col>
            <Col>
              <CategoryBox />
            </Col>

            <Col>
              <CategoryBox />
            </Col>

            <Col>
              <CategoryBox />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
