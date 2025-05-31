import React from 'react';
import './Mainsection.css';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

const MainSection = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
    >
    <div className="mainsection-page-bg">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src="src/assets/Bridge-Falling.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      
      <div className='mainsection'>
        <h1>If People Cant Build A Simple</h1>
        <h2>Bridge With You.</h2>

        <button
          className='mainsecbutton'
          type='button'
          onClick={() => navigate('/MainSection2')}
        >
          Next
          <div className='seclinkicon'> 
            <IoIosArrowForward />
          </div>
        </button>
      </div>
    </div>
    </motion.div>
  );
};

export default MainSection;