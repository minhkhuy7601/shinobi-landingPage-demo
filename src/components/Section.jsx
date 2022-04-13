import React from "react";
import { useEffect, useRef } from "react";

import video from "../assets/shinobi.mp4";

function Section() {
  // const refVideo = useRef(null);
  // useEffect(() => {
  //   refVideo.current.play();
  // }, []);

  return (
    <div className="section-main">
      <div className="container">
        <div className="main section">
          <div className="section__info">
            <h1 className="section__info__title">Shinobi.</h1>
            <p className="section__info__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus hic iusto dolor quos, quod accusantium magni maxime
              aperiam rerum voluptate. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Eveniet rerum ducimus nam iure exercitationem ea
              et, adipisci debitis consequuntur, nihil mollitia, earum
              asperiores cupiditate molestias corporis harum? Animi, voluptatum
              dolore?
            </p>
            <div className="section__info__offer">
              <div className="section__info__offer__price">
                <div className="section__info__offer__price__eth color-green">
                  0.50 ETH
                </div>
                <div className="section__info__offer__price__dollar">
                  $1,592.36
                </div>
              </div>
              <button className="btn bg-blue color-white section__info__offer__btn">
                Make offer
              </button>
            </div>
          </div>
          <div className="section__video">
            <video autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
