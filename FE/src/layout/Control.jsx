import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "../scss/layouts/Control.scss";
import { RotatingLines } from "react-loader-spinner";
import ProgressBar from "../components/ProgressBar";
import {
  FaPlayCircle,
  FaCirclePause,
  IoPlaySkipForwardSharp,
  RiRepeatFill,
  TiArrowShuffle,
  IoPlaySkipBackSharp,
  IoMdVolumeOff,
  IoMdVolumeLow,
  IoVolumeHigh,
  IoMdVolumeMute,
  BsFullscreen,
  RiRepeatOneFill,
} from "../icons/Icon";

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
  const [duration, setDuration] = useState(audioRef.current.duration || 0);
  const [loading, setLoading] = useState(true);
  const [repeatMode, setRepeatMode] = useState("off");

  const toggleRepeatMode = () => {
    setRepeatMode((prevMode) => {
      if (prevMode === "off") return "one";
      if (prevMode === "one") return "all";
      return "off";
    });
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumechange = useCallback((e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMute(newVolume === 0);
    audioRef.current.volume = newVolume;
  }, []);

  const handleProgressBar = useCallback((e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setTrackProgress(newTime);
  }, []);

  const toggleMute = () => {
    audioRef.current.muted = !isMute;
    setIsMute(!isMute);
  };

  const loadTrack = () => {
    audioRef.current.pause();
    audioRef.current.src = tracks[currentTrackIndex].src;
    audioRef.current.currentTime = 0;
    setLoading(true);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      secs < 10 ? "0" : ""
    }${secs}`;
  };

  const handleNextTrack = useCallback(() => {
    if (repeatMode === "one") {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    }
  }, [repeatMode]);

  const handlePrevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const renderVolumeIcon = useMemo(() => {
    if (isMute || volume === 0) return <IoMdVolumeOff />;
    if (volume > 0.5) return <IoVolumeHigh />;
    if (volume > 0.2) return <IoMdVolumeLow />;
    return <IoMdVolumeMute />;
  }, [isMute, volume]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.preload = "auto";

    const updateTrackProgress = () => {
      setTrackProgress(audio.currentTime);
    };

    const handleMetadataLoad = () => {
      setDuration(audio.duration);
      setLoading(false);
    };

    audio.addEventListener("timeupdate", updateTrackProgress);
    audio.addEventListener("loadedmetadata", handleMetadataLoad);

    return () => {
      audio.removeEventListener("timeupdate", updateTrackProgress);
      audio.removeEventListener("loadedmetadata", handleMetadataLoad);
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    loadTrack();
  }, [currentTrackIndex]);

  useEffect(() => {
    const audio = audioRef.current;

    const onTrackEnd = () => {
      handleNextTrack();
    };

    audio.addEventListener("ended", onTrackEnd);

    return () => {
      audio.removeEventListener("ended", onTrackEnd);
    };
  }, [handleNextTrack]);

  return (
    <footer className="footer-controls">
      <div className="footer-left">
        {showMusicName && (
          <>
            <img
              className="footer-left-img"
              src="https://via.placeholder.com/56"
              alt="image"
            />
            <div className="footer-info">
              <h3>{tracks[currentTrackIndex].title}</h3>
              <p>{tracks[currentTrackIndex].artist}</p>
            </div>
          </>
        )}
      </div>
      <div className="footer-center">
        <div className="footer-btn">
          <button className="btn shuffle">
            <TiArrowShuffle />
          </button>
          <button className="btn skip" onClick={handlePrevTrack}>
            <IoPlaySkipBackSharp />
          </button>
          <button className="btn play" onClick={handlePlayPause}>
            {loading ? (
              <RotatingLines
                strokeColor="gray"
                strokeWidth="3"
                animationDuration="0.75"
                width="35"
                visible={true}
              />
            ) : isPlaying ? (
              <FaCirclePause />
            ) : (
              <FaPlayCircle />
            )}
          </button>
          <button className="btn skip" onClick={handleNextTrack}>
            <IoPlaySkipForwardSharp />
          </button>
          <button
            className="btn repeat"
            onClick={toggleRepeatMode}
            style={{
              color: repeatMode === "off" ? "#4d4d4d" : "#fff",
            }}
          >
            {repeatMode === "one" ? <RiRepeatOneFill /> : <RiRepeatFill />}
          </button>
        </div>
        <div className="progress-wrapper">
          <span className="progress-duration left">
            {formatTime(trackProgress)}
          </span>
          <div className="progress-track">
            <ProgressBar
              value={trackProgress}
              max={duration || 0}
              onProgressBar={handleProgressBar}
            />
          </div>
          <span className="progress-duration right">
            {formatTime(duration)}
          </span>
        </div>
      </div>
      <div className="footer-right">
        <div className="progress-wrapper">
          <button className="btn-volume" onClick={toggleMute}>
            {renderVolumeIcon}
          </button>
          <div className="progress-track">
            <ProgressBar
              typeBar="volume"
              min="0"
              max="1"
              onVolumechange={handleVolumechange}
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
