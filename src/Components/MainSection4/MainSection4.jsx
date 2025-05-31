import React from 'react';
import './MainSection4.css';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

const MainSection4 = () => {
  const navigate = useNavigate();

  return (
    <motion.div
        initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
    >
    <div className="mainsection4-page-bg">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src="src/assets/Between.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay4"></div>

      
      <div className='mainsection4'>
        <h1>Im Willing To Walk Across</h1>
        <h2>The Lands Between With You</h2>
        <h3>Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, 
            <br/>Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,
            <br/> Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, 
            <br/>Lorem Ipsum, Lorem Ipsum, </h3>

        <button
          className='mainsecbutton4'
          type='button'
          onClick={() => navigate('/MainSection5')}
        >
          Next
          <div className='seclinkicon4'> 
            <IoIosArrowForward />
          </div>
        </button>
      </div>
    </div>
    </motion.div>
  );
};

export default MainSection4;