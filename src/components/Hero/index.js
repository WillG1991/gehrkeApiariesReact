import React from "react";
import beeVideo from '../../assets/images/Bee.mp4'
import beeGif from '../../assets/images/BeeGif.gif'



function Hero() {
  return (
    <div className="heroContainer">
    <video className="onDesktop" autoPlay muted src={beeVideo} alt="honey honeybees local honey bees" loop={true}></video>
    <img className="onMobile" autoPlay muted src={beeGif} alt="honey honeybees local honey bees" loop={true}></img>
    <div className="text-box">
    <span className="hex"></span>
    <br></br>
      <h1 className="heroBigText">GEHRKE</h1>
      <h1 className="heroBottom">APIARIES</h1>

    </div>
  </div>

   
  );
}

export default Hero;