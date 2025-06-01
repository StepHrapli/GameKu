import React from 'react';
import './MainSection6.css';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import video from "../../assets/Cyrodiil.mp4"

const MainSection6 = () => {
  const navigate = useNavigate();

  return (
    <motion.div
        initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
    >
    <div className="mainsection6-page-bg">

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
      <div className="overlay6"></div>

      
      <div className='mainsection6'>
        <h1>Im Willing To Save</h1>
        <h2>Tamriel With You</h2>
        <h3>Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, 
            <br/>Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,
            <br/> Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, 
            <br/>Lorem Ipsum, Lorem Ipsum, </h3>

        <button
          className='mainsecbutton6'
          type='button'
          onClick={() => navigate('/MainSection7')}
        >
          Next
          <div className='seclinkicon6'> 
            <IoIosArrowForward />
          </div>
        </button>
      </div>
    </div>
    </motion.div>
  );
};

export default MainSection6;