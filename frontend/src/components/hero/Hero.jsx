import React from "react";
import { Button } from "reactstrap";
import "./Hero.css";

export const Hero = () => {
  return (
    <div
      className="hero d-flex flex-column justify-content-center"
      style={{ height: 400 }}
    >
      <h1 className="hero-text">The NFT Music Marketplace</h1>
      <div className="hero-buttons pt-4">
        <Button color="primary" size="lg" className="mr-5">
          Explore
        </Button>{" "}
        <Button outline color="primary" size="lg">
          Create
        </Button>{" "}
      </div>
    </div>
  );
};
