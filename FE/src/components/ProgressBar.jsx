import { useEffect, useRef } from "react";
import "../scss/components/ProgressBar.scss";

const ProgressBar = ({
  typeBar,
  min,
  max,
  handleVolumechange,
  handleProgressBar,
  step,
  value,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;
    const setBackgroundSize = (input) => {
      input.style.setProperty(
        "--background-size",
        `${getBackgroundSize(input)}%`
      );
    };

    const getBackgroundSize = (input) => {
      const min = +input.min || 0;
      const max = +input.max;
      const value = +input.value;
      if (max === min) {
        return 0;
      }
      return ((value - min) / (max - min)) * 100;
    };
    setBackgroundSize(input);
    input.addEventListener("input", () => setBackgroundSize(input));
    return () => {
      input.removeEventListener("input", () => setBackgroundSize(input));
    };
  });
  return (
    <input
      type="range"
      className={typeBar ? "progress-bar volume" : "progress-bar"}
      min={min}
      max={max}
      ref={inputRef}
      step={step}
      onChange={
        typeBar ? (e) => handleVolumechange(e) : (e) => handleProgressBar(e)
      }
      value={value}
    />
  );
};

export default ProgressBar;
