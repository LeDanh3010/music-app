import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { RiRepeatFill } from "react-icons/ri";
import { TiArrowShuffle } from "react-icons/ti";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import "../scss/layouts/Control.scss";
import { BsFullscreen } from "react-icons/bs";
import ProgressBar from "../components/ProgressBar";
import { IoMdVolumeOff } from "react-icons/io";
import { IoMdVolumeLow } from "react-icons/io";
import { IoVolumeHigh } from "react-icons/io5";
import { IoMdVolumeMute } from "react-icons/io";

const tracks = [
  {
    title: "Track 1",
    artist: "Artist 1",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Track 2",
    artist: "Artist 2",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
];

const Control = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showMusicName, setShowMusicName] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(new Audio(tracks[currentTrackIndex].src));
  const { duration } = audioRef.current;

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };
  const handleVolumechange = (e) => {
    if (isMute) {
      setIsMute(false);
    }
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const handleProgressBar = (e) => {
    audioRef.current.currentTime = e.target.value;
  };
  const toggleMute = () => {
    setIsMute(!isMute);
  };
  const renderVolumeIcon = () => {
    if (isMute || volume === 0) {
      return <IoMdVolumeOff />;
    } else if (volume > 0.5) {
      return <IoVolumeHigh />;
    } else if (volume > 0.2) {
      return <IoMdVolumeLow />;
    } else {
      return <IoMdVolumeMute />;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval count");
      if (audioRef.current && isPlaying) {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <footer className="footer-controls">
      <div className="footer-left">
        {showMusicName ? (
          <>
            <img
              className="footer-left-img"
              src="https://via.placeholder.com/56"
              alt="image"
            />
            <div className="footer-info">
              <h3>Song Name</h3>
              <p>Artist Name</p>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="footer-center">
        <div className="footer-btn">
          <button className="btn">
            <TiArrowShuffle />
          </button>
          <button className="btn">
            <IoPlaySkipBackSharp />
          </button>
          <button className="btn play" onClick={handlePlayPause}>
            {isPlaying ? <FaCirclePause /> : <FaPlayCircle />}
          </button>
          <button className="btn">
            <IoPlaySkipForwardSharp />
          </button>
          <button className="btn ">
            <RiRepeatFill />
          </button>
        </div>
        <div className="footer-progress">
          <ProgressBar
            value={trackProgress}
            max={duration || 0}
            handleProgressBar={handleProgressBar}
          />
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-progress">
          <button className="btn-volume" onClick={toggleMute}>
            {renderVolumeIcon()}
          </button>
          <div className="progress-volume">
            <ProgressBar
              typeBar="volume"
              min="0"
              max="1"
              handleVolumechange={handleVolumechange}
              step="0.01"
              value={isMute ? 0 : volume}
            />
          </div>
        </div>
        <button className="btn-fullscreen">
          <BsFullscreen />
        </button>
      </div>
    </footer>
  );
};

export default Control;
