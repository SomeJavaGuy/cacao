import React from "react";
import { Button } from "reactstrap";
import "./Hero.css";

export const Hero = () => {
  return (
    <div
      className="hero d-flex flex-column justify-content-center"
      style={{ height: 400 }}
    >
      <div className="overlay"></div>
      <video playsInline autoPlay muted="muted" loop="loop">
        <source src="assets/hero-video2.mp4" type="video/mp4" />
      </video>

      <div className="container h-100">
        <div className="d-flex h-100 text-center align-items-center">
          <div className="w-100 text-white position-text">
            <h1 className="display-3">The NFT Music Marketplace</h1>
            <div className="hero-buttons pt-4">
              <Button color="primary" size="lg" className="mr-5">
                Explore
              </Button>{" "}
              <Button outline color="primary" size="lg">
                Create
              </Button>{" "}
            </div>
            {/* <p className="lead mb-0">W</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
