import React, { useState, useEffect } from 'react';
import './ProposalMain.css';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import video from "../../assets/Main.mp4";

const ProposalMain = () => {
  const navigate = useNavigate();
  const staticText = "May I Be Your "; 
  const dynamicTexts = ["Lover", "Anakin Skywalker", "Partner", "Miles Morales", "Companion", "Ekko", "Tarnished", "Arthur Morgan"];
  const colors = ["#FF83EE", "#4CB5E9", "#EA5F96", "#FA4E4E", "#FE1C98", "#38A666", "#2A473F", "#A46D35"];
  const [currentDynamicText, setCurrentDynamicText] = useState(dynamicTexts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDynamicText((prevText) => {
        const currentIndex = dynamicTexts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % dynamicTexts.length;
        return dynamicTexts[nextIndex];
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="ProposalMain-page-bg">
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
        <div className="overlay8"></div>

        <div className="ProposalMain">
          <h1>{staticText}
            <motion.span
              key={currentDynamicText}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ color: colors[dynamicTexts.indexOf(currentDynamicText)] }} // Beri warna berdasarkan indeks
            >
              {currentDynamicText}?
            </motion.span>
          </h1>
          
          <h3>Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,
            <br />Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,
            <br />Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,
            <br />Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,
            <br />Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, 
            <br />Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,</h3>


        <div className="button-container">
          <button
            className="propbutton"
            type="button"
            onClick={() => navigate('/ProposalYes')}
          >
            YES
          </button>

          <button
                    className='propbutton2'
                    type='button'
                    onClick={() => navigate('/ProposalQuest')}
                  >
                    Ask Me Something
                    <div className='proplinkicon'> 
                      <IoIosArrowForward />
                    </div>
                  </button>

          <button
                    className='propbutton3'
                    type='button'
                    onClick={() => navigate('/ProposalNo')}
                  >
                    NO
                    
                  </button>
                  </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProposalMain;