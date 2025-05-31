import React, { useState, useRef } from 'react';
import './LoginForm.css';
import { GoMail } from "react-icons/go";
import { IoLockClosed } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import ReactAudioPlayer from 'react-audio-player';

const LoginForm = () => {
  const navigate = useNavigate();
  // const [isMuted, setIsMuted] = useState(false);
  // const audioPlayerRef = useRef(null);

  // Fungsi untuk toggle mute
  // const toggleMute = () => {
  //   setIsMuted(prev => !prev);
  // };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className='login-page-bg'>
          
          {/* <ReactAudioPlayer
            ref={audioPlayerRef}
            src="src/assets/Contoh.mp3"
            autoPlay 
            loop
            muted={isMuted}
          /> */}

          <div className='header'>
            <div className='menu'>
              <CiMenuBurger />
              <text>Best Game Online Store</text>
            </div>

            <img src="src/assets/gameku-logo.png" alt="Logo" className='logo' />
            <div className='icon3'>
              <IoIosSearch />
              <FaRegUser />
              <IoIosHeartEmpty />
              <IoBagOutline />
            </div>
          </div>

          <div className='box'>
            <form action="">
              <h1>WELCOME TO <br />GameKu</h1>
              <div className='input'>
                <input type="text" placeholder='Your Email' />
                <GoMail className='icon' />
              </div>
              <div className='input'>
                <input type="password" placeholder='Password' />
                <IoLockClosed className='icon' />
              </div>

              <div className='forgot'>
                <a href="#">Forgot Password?</a>
              </div>

              <button
                className='loginbutton'
                type='button'
                onClick={() => navigate('/MainLink')}
              >
                Login
              </button>

              <div className='garis'>
                <span>Or With</span>
              </div>

              <button className='signbutton' type='submit'>Sign In With Google</button>
              <FcGoogle className='icon2' />
            </form>
          </div>

          {/* <button
            className="mute-button"
            onClick={toggleMute}
          >
            {isMuted ? 'Unmute' : 'Mute'}
          </button> */}

        </div>
      </motion.div>
    </>
  );
}

export default LoginForm;