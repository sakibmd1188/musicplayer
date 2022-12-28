import { Pause, PlayArrow, SkipNext, SkipPrevious } from "@mui/icons-material";
import React from "react";
import "./controls.css";
// import { IconContext } from "react-icons";
// import { FaPause } from "react-icons/fa";
// import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";

export default function Controls({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
}) {
  return (
    <div className="ctrl" style={{ size: "35px", color: "#C4D0E3" }}>
      <div className="controls-wrapper flex">
        <div className="action-btn flex" onClick={handlePrev}>
          <SkipPrevious />
        </div>
        <div
          className={
            isPlaying ? "play-pause-btn flex active" : "play-pause-btn flex"
          }
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause /> : <PlayArrow />}
        </div>
        <div className="action-btn flex" onClick={handleNext}>
          <SkipNext />
        </div>
      </div>
    </div>
  );
}
