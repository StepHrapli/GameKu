import React, { useState, useEffect } from 'react';
import './MainScroll.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { IoIosArrowForward } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"

const photos = [1, 2, 3, 4, 5];

const MainScroll = () => {
  const navigate = useNavigate();

  const boxesData = [
    { id: 1, text: " When we were still in high school and used to hang out often after school, I secretly have a crush on you because I think you are beautiful to me and a gamer too, that day i liked you since then." },
    { id: 2, text: " I remember I chatted with you alot on Instagram, i sometimes took a picture of a clock for no reason just to keep our convo going a little longer, with the hope maybe just maybe u liked me." },
    { id: 3, text: " I never get to tell this feeling back then because I was just a nerd loser who watch cartoons, anime and gaming all day had nothing special going on, but you were something special to me." },
    { id: 4, text: " A few months ago u told me that u watched the cartoon show that I watched on my childhood, I was so happy because my crush turns out to be a nerd that watched many cartoon shows, that day I fell for you." },
    { id: 5, text: " As day pass by, the more I keep noticing all these little things we have in common like hobby, music, shows, day by day my feelings for you grow stronger and I fell harder and harder for you, " },
    { id: 6, text: " I dont know if you have noticed, but I cannot maintain eye contact with you again, everytime I tried my heart starts racing it always feel like it's going to explode when I looked at you for too long, because I looked at you with flowers and butterflies you are THAT GORGEOUS to me and your beautiful warm smiles warmed my heart." },
    { id: 7, text: " That night when you ask me whats your type and I only said whoever accept Me as I am then I took the risk and asked u “if someone nembak lu apa lu bakal terima dia apa adanya” and u said yes, that night I found my first love and it's you, and yes my type is a nerd gamer and whoever can accept me as I am, when i head home after that I cannot stop smiling." },
    { id: 8, text: " Below this are visualization of how I see you, I tried to visualize you with photos of cute cats and your discord profile picture, side by side ( all of them are cute, including you ), after you pressed next I got a special proposal for you, make sure you are ready <3." }
  ];

  const [clickedBoxes, setClickedBoxes] = useState({});
  const [typedTexts, setTypedTexts] = useState({});
  const [allBoxesOpened, setAllBoxesOpened] = useState(false);
  const [showSlider, setShowSlider] = useState(false); 

  const handleClick = (id, fullText) => {
    setClickedBoxes((prev) => ({ ...prev, [id]: true }));
    let index = 0;
    const interval = setInterval(() => {
      setTypedTexts((prev) => ({
        ...prev,
        [id]: (prev[id] || '') + fullText.charAt(index),
      }));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 50);
  };

  useEffect(() => {
    if (Object.keys(clickedBoxes).length === boxesData.length) {
      setAllBoxesOpened(true);
    }
  }, [clickedBoxes]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}    
    >
    <div className="mainscroll-page-bg">
      <div className='chatbox'>
        {boxesData.map((box) => (
          <div key={box.id} className='outerbox'>
            {!clickedBoxes[box.id] ? (
              <>
                <div className="pita"></div>
                <div
                  className="buttonbox"
                  onClick={() => handleClick(box.id, box.text)}
                  style={{ cursor: 'pointer' }}
                >
                  CLICK HERE!
                </div>
              </>
            ) : (
              <div className="typing-text">{typedTexts[box.id]}</div>
            )}
          </div>
        ))}
      </div>

      {/* Heart Button or Slider */}
      {allBoxesOpened && (
        <div className="slider-toggle-wrapper">
          {!showSlider ? (
            <button
              className="heart-button"
              onClick={() => setShowSlider(true)}
            >
              
              <span>Click Here To Reveal</span>
            </button>
          ) : (
            <div className="photo-slider-wrapper fade-in">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                className="custom-swiper"
              >
                {photos.map((num) => (
                  <SwiperSlide key={num}>
                    <img
                      src={`src/assets/photo${num}.jpg`}
                      alt={`Photo ${num}`}
                      className="slide-image"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      )}

      {showSlider && (
        <button
          className='mainbutton3'
          type='button'
          onClick={() => navigate('/MainSection')}
        >
          Next
          <div className='linkicon3'>
            <IoIosArrowForward />
          </div>
        </button>
      )}
    </div>
    </motion.div>
  );
};

export default MainScroll;