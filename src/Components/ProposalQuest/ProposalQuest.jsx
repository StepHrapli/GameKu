import React from 'react';
import './ProposalQuest.css';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import video from "../../assets/Main.mp4"

const ProposalQuest = () => {
  const navigate = useNavigate();

  return (
    <motion.div
        initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
    >
    <div className="ProposalQuest-page-bg">

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
      <div className="overlay10"></div>

      
      <div className='ProposalQuest'>
        <h1>Ask Me Everything</h1>
        {/* <h2>Tamriel With You</h2> */}
        <h3>Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, 
            <br/>Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,
            <br/> Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, 
            <br/>Lorem Ipsum, Lorem Ipsum, </h3>

        <button
          className='questbutton'
          type='button'
          onClick={() => {
            const phone = '6285694100688'; // ganti dengan nomor tujuan (format internasional, tanpa +)
            const message = encodeURIComponent('Question'); // ganti
            window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
          }}
        >
          Chat via WhatsApp
        </button>
      </div>
    </div>
    </motion.div>
  );
};

export default ProposalQuest;