import React from 'react'
// import Logo from '../../assets/BrainLogo.svg';
import Logo from "../../assets/combine.svg"
import Ring from "../../assets/Ring.svg";
import classes from './MainLogo.module.css';
import { ImageContainer } from './style';


const MainLogo = () => {
  return (
    <>
    <ImageContainer>
      {/* <img src={Ring} className={classes.ring}/> */}
      <img src={Logo} className={classes.img}/>
      {/* <div className={classes.fadeupText}>fade up text</div> */}
    </ImageContainer>
    </>
  )
}

export default MainLogo
