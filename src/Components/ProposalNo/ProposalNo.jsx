import React from 'react';
import './ProposalNo.css';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

const ProposalNo = () => {
  const navigate = useNavigate();

  return (
    <motion.div
        initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
    >
    <div className="ProposalNo-page-bg">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src="src/assets/Cyrodiil.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay9"></div>

      
      <div className='ProposalNo'>
        <h1>Im Willing To Save</h1>
        <h2>Tamriel With You</h2>
        <h3>Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, 
            <br/>Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,
            <br/> Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, 
            <br/>Lorem Ipsum, Lorem Ipsum, </h3>

        <button
          className='nobutton'
          type='button'
          onClick={() => {
            const phone = '6285694100688'; // ganti dengan nomor tujuan (format internasional, tanpa +)
            const message = encodeURIComponent('No'); // ganti
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

export default ProposalNo;