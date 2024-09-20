import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { CiMusicNote1 } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import "../scss/lib/Tippys.scss";

// Tooltip content components
const PlusModalContent = ({ onCreateNewPlayList }) => (
  <div className="plus-modal-wrapper">
    <CiMusicNote1 className="plus-modal-icon" />
    <span onClick={onCreateNewPlayList}>Create a new playlist</span>
  </div>
);

const CreateNewPlayList = ({ onClose }) => (
  <div className="create-playlist-box">
    <h4>Create a playlist</h4>
    <p>Log in to create and share playlists</p>
    <div className="create-playlist-btn">
      <button onClick={onClose} className="not-now">
        Not now
      </button>
      <button className="login">Login</button>
    </div>
  </div>
);

const TippyPack = ({ tippyType }) => {
  const [visible, setVisible] = useState(false);
  const [activeToolTip, setActiveToolTip] = useState(null);

  const showTooltip = (type) => {
    setActiveToolTip(type);
    setVisible(true);
  };

  const hideTooltip = () => {
    setVisible(false);
    setActiveToolTip(null);
  };

  const getTooltipContent = () => {
    switch (activeToolTip) {
      case "btnPlus":
        return (
          <PlusModalContent
            onCreateNewPlayList={() => showTooltip("btnCreatePlaylist")}
          />
        );
      case "btnCreatePlaylist":
        return <CreateNewPlayList onClose={hideTooltip} />;
      default:
        return null;
    }
  };

  return (
    <Tippy
      content={getTooltipContent()}
      className={`custom-tippy-${activeToolTip}`}
      visible={visible}
      placement={activeToolTip === "btnPlus" ? "bottom-end" : "right"}
      onClickOutside={hideTooltip}
      arrow={activeToolTip === "btnCreatePlaylist"}
      offset={activeToolTip === "btnCreatePlaylist" ? [-50, 186] : undefined}
    >
      {tippyType === "btnPlus" ? (
        <li className="sidebar-plus" onClick={() => showTooltip("btnPlus")}>
          <span>
            <FaPlus className="sidebar-plus-icon" />
          </span>
        </li>
      ) : (
        <button
          className="btn create-playlist-btn"
          onClick={() => showTooltip("btnCreatePlaylist")}
        >
          Create Playlist
        </button>
      )}
    </Tippy>
  );
};

export default TippyPack;
