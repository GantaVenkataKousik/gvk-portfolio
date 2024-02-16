import React from 'react';
import BoxAnimation from './Animations/BoxAnimation.jsx';
import LightningAnimation from './Animations/LightningAnimation.jsx';
import RhombusAnimation from './Animations/RhombusAnimation.jsx';
import '../styles/animation.css';


export default function Animations() {

  return (
    <>
      <div >
        <LightningAnimation />
        <BoxAnimation />
        <RhombusAnimation />
      </div>


    </>
  );
};

