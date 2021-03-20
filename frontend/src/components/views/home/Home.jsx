import React from "react";
import { Col, Container, Row } from "reactstrap";
import { CategoryBox } from "../../category-box/CategoryBox";
import { Hero } from "../../hero/Hero";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <section
        className="hero-section pt-5"
        style={{
          backgroundImage: "url(assets/audience-1.jpg)",
          backgroundPosition: "center",
          opacity: 0.6,
        }}
      >
        <Container>
          <Row>
            <Col>
              <Hero />
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
