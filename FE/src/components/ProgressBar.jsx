import { useEffect, useRef } from "react";
import "../scss/components/ProgressBar.scss";
import { memo } from "react";

const ProgressBar = ({
  typeBar,
  min = 0,
  max = 100,
  onVolumechange,
  onProgressBar,
  step = 1,
  value,
}) => {
  // console.log("progress bar render");
  // console.log("ProgressBar props:", { value, max });
  const inputRef = useRef(null);
  useEffect(() => {
    const setBackgroundSize = () => {
      if (inputRef.current) {
        const input = inputRef.current;
        const minValue = +input.min || 0;
        const maxValue = +input.max;
        const currentValue = +input.value;
        const backgroundSize =
          maxValue === minValue
            ? 0
            : ((currentValue - minValue) / (maxValue - minValue)) * 100;
        input.style.setProperty("--background-size", `${backgroundSize}%`);
      }
    };

    setBackgroundSize();
    const input = inputRef.current;
    if (!input) return;

    input.addEventListener("input", setBackgroundSize);
    return () => {
      input.removeEventListener("input", setBackgroundSize);
    };
  }, [value]);

  return (
    <input
      type="range"
      className={typeBar ? "progress-bar volume" : "progress-bar"}
      min={min}
      max={max}
      ref={inputRef}
      step={step}
      onChange={typeBar ? onVolumechange : onProgressBar}
      value={value}
      style={{ "--background-size": `${(value / max) * 100}%` }}
    />
  );
};

export default memo(ProgressBar);
