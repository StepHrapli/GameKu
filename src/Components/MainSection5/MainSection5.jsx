import React from 'react';
import './MainSection5.css';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import video from "../../assets/Red.mp4";

const MainSection5 = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}   
    >
    <div className="mainsection5-page-bg">

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
      <div className="overlay5"></div>

      
      <div className='mainsection5'>
        <h1>Im Willing To Saddle Up Around</h1>
        <h2>1899 Wild West With You</h2>
        <h3>Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, 
            <br/>Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,
            <br/> Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, 
            <br/>Lorem Ipsum, Lorem Ipsum, </h3>

        <button
          className='mainsecbutton5'
          type='button'
          onClick={() => navigate('/MainSection6')}
        >
          Next
          <div className='seclinkicon5'> 
            <IoIosArrowForward />
          </div>
        </button>
      </div>
    </div>
    </motion.div>
  );
};

export default MainSection5;