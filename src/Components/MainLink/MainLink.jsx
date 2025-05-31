import React, { useState, useRef } from 'react';
import './MainLink.css';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import ReactAudioPlayer from 'react-audio-player';

const MainLink = () => {
    const navigate = useNavigate();
    // const [isMuted, setIsMuted] = useState(false);
    //   const audioPlayerRef = useRef(null);
      

      // Fungsi untuk toggle mute
  // const toggleMute = () => {
  //   setIsMuted(prev => !prev);
  // };

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
    >
    <div className="mainlink-page-bg">

      {/* <ReactAudioPlayer
            ref={audioPlayerRef}
            src="src/assets/Contoh.mp3"
            autoPlay 
            loop
            muted={isMuted}
            volume={0.2}
          /> */}

    <div className='main'>
      <h1>Hi There..</h1>
      <h2>I Want To Tell You Something..</h2>
      
      
      <button
        className='mainbutton'
        type='button'
        onClick={() => navigate('/MainLink2')}
      >
        Ready To Read It?
        <div className='linkicon'> 
                <IoIosArrowForward />
              </div>
      </button>

    </div>

    {/* <button
            className="mute-button"
            onClick={toggleMute}
          >
            {isMuted ? 'Unmute' : 'Mute'}
          </button> */}

    </div>
    </motion.div>
  );
}

export default MainLink;