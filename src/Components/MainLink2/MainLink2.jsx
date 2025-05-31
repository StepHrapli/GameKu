import React, { useState, useRef } from 'react';
import './MainLink2.css';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import ReactAudioPlayer from 'react-audio-player';

const MainLink2 = () => {
    const navigate = useNavigate();
    const [isMuted, setIsMuted] = useState(false);
          const audioPlayerRef = useRef(null);
    
          // Fungsi untuk toggle mute
      const toggleMute = () => {
        setIsMuted(prev => !prev);
      };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
    >
    <div className="mainlink2-page-bg">

      <ReactAudioPlayer
            ref={audioPlayerRef}
            src="src/assets/contoh2.mp3"
            autoPlay 
            loop
            muted={isMuted}
            volume={0.2} // Set initial volume to 50%
          />

    <div className='main2'>
      <h1>Helloo, Callula.</h1>
      <h2>First let me tell you why i made this website.</h2>
      <h3>I made this website because, well..
        <br/>Im a bit too awkward to say all of this in person.
        <br/>And i think its too boring to chat you the reason i made this.</h3>
      <h4>The main reason I created this website is simple.
        <br/>Its all for you.</h4>
      <h5>Please read all of it carefully
        <br/>This is how i genuinely feeling about you.</h5>
      
      <button
        className='mainbutton2'
        type='button'
        onClick={() => navigate('/MainScroll')}
      >
        Next
        <div className='linkicon2'> 
                <IoIosArrowForward />
              </div>
      </button>

    </div>

    <button
            className="mute-button"
            onClick={toggleMute}
          >
            {isMuted ? 'Unmute' : 'Mute'}
          </button>

    </div> 
    </motion.div>
  );
}

export default MainLink2;