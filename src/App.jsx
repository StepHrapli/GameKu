import AnimatedRoutes from './Components/AnimatedRoutes';
import { BrowserRouter, useLocation } from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';
import { useState, useRef, useEffect } from 'react';
import contoh from '././assets/contoh.mp3';
import contoh2 from '././assets/contoh2.mp3';

function AudioController() {
  const location = useLocation();
  const [isMuted, setIsMuted] = useState(false);
  const audioPlayerRef = useRef(null);

  // === AUDIO MAP: mapping halaman ke file audio ===
  const audioMap = {
    '/': contoh,
    '/MainLink': contoh,
    '/MainLink2': contoh2,
    '/MainScroll': contoh2,
    '/MainSection3': contoh,
    '/MainSection4': contoh,
    // tambahkan mapping lain sesuai kebutuhan
  };

  // === CONFIGURASI LAIN ===
  const audioPages = Object.keys(audioMap);
  const hideMuteButtonPages = [''];
  const stopAudioPages = [''];
  const pageVolumeMap = {
    '/': 0.2,
    '/MainLink': 0.2,
    '/MainSection': 0.2
  };

  // === LOGIKA ===
  const shouldPlay = audioPages.includes(location.pathname) && !stopAudioPages.includes(location.pathname);
  const showMuteButton = !hideMuteButtonPages.includes(location.pathname);
  const currentVolume = pageVolumeMap[location.pathname] ?? 0.3;
  const currentAudio = audioMap[location.pathname] ?? '/assets/Contoh.mp3';

  useEffect(() => {
    const audio = audioPlayerRef.current?.audioEl?.current;
    if (!audio) return;

    audio.volume = currentVolume;

    if (shouldPlay) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [location.pathname, shouldPlay, currentVolume, currentAudio]);

  if (!audioPages.includes(location.pathname)) return null;

  return (
    <>
      <ReactAudioPlayer
        ref={audioPlayerRef}
        src={currentAudio}
        autoPlay
        loop
        muted={isMuted}
        volume={currentVolume}
      />
      {showMuteButton && (
        <button
          className="mute-button"
          onClick={() => setIsMuted(prev => !prev)}
          style={{
            position: 'fixed',
            zIndex: 3,
          }}
        >
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
      )}
    </>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <AudioController />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
