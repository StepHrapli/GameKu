import React from 'react';
import './MainSection3.css';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import video from "../../assets/Space.mp4";

const MainSection3 = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
    >
    <div className="mainsection3-page-bg">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay3"></div>

      
      <div className='mainsection3'>
        <h1>Im Willing To Hyperspace Across</h1>
        <h2>The Galactic Empire With You</h2>
        <h3>Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, 
            <br/>Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,
            <br/> Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, 
            <br/>Lorem Ipsum, Lorem Ipsum, </h3>

        <button
          className='mainsecbutton3'
          type='button'
          onClick={() => navigate('/MainSection4')}
        >
          Next
          <div className='seclinkicon3'> 
            <IoIosArrowForward />
          </div>
        </button>
      </div>
    </div>
    </motion.div>
  );
};

export default MainSection3;