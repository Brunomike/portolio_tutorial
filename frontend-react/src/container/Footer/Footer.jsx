import React,{useState} from 'react';

import {images} from '../../constants';
import {AppWrapper,MotionWrapper} from "../../hoc";
import {client} from "../../client";
import './Footer.scss';

const Footer = () => {
  return (
    <>
      
    </>
  )
}

export default AppWrapper(
    MotionWrapper(Footer,'app__footer'),
    'contact',
    'app__whitebg'
);