import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Wayfarers pabst disrupt, poutine echo park PBR&B pop-up iPhone
            snackwave marxism direct trade locavore art party chia. Snackwave
            paleo trust fund church-key, prism four dollar toast umami
            distillery bushwick tattooed. Hell of vape vaporware PBR&B, fit
            humblebrag same pabst tilde tumblr snackwave sus meggings art party
            bitters.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
