import React from "react";
import Marquee from "react-fast-marquee";
import reactjsImg from "/assets/img/skills/reactjsImg.png";
import nodejsImg from "/assets/img/skills/nodejsImg.png";
import expressjsImg from "/assets/img/skills/expressjsImg.png";
import mongodbImg from "/assets/img/skills/mongodbImg.png";
import reduxImg from "/assets/img/skills/reduxImg.png";
import jsImg from "/assets/img/skills/jsImg.png";
import appwriteImg from "/assets/img/skills/appwriteImg.png";
import firebaseImg from "/assets/img/skills/firebaseImg.png";

const MarqueeComponent = () => {
  return (
    <Marquee>
      <img
        src={reactjsImg}
        alt="reactjsImg"
        style={{ width: "200px", height: "auto", marginRight: "20px" }}
        loading="lazy"
      />
      <img
        src={nodejsImg}
        alt="nodejsImg"
        style={{ width: "200px", height: "auto", marginRight: "20px" }}
        loading="lazy"
      />
      <img
        src={expressjsImg}
        alt="expressjsImg"
        style={{ width: "200px", height: "auto", marginRight: "20px" }}
        loading="lazy"
      />
      <img
        src={mongodbImg}
        alt="mongodbImg"
        style={{ width: "200px", height: "auto", marginRight: "20px" }}
        loading="lazy"
      />
      <img
        src={reduxImg}
        alt="reduxImg"
        style={{ width: "200px", height: "auto", marginRight: "20px" }}
        loading="lazy"
      />
      <img
        src={jsImg}
        alt="jsImg"
        style={{ width: "200px", height: "auto", marginRight: "20px" }}
        loading="lazy"
      />
      <img
        src={appwriteImg}
        alt="appwriteImg"
        style={{ width: "200px", height: "auto", marginRight: "20px" }}
        loading="lazy"
      />
      <img
        src={firebaseImg}
        alt="firebaseImg"
        style={{ width: "200px", height: "auto", marginRight: "20px" }}
        loading="lazy"
      />
    </Marquee>
  );
};

export default MarqueeComponent;
