import React from "react";
import PropTypes from "prop-types";

import { RepeatSVG, RepeatSVGDisabled, RefreshSVG, LogOutSVG } from "./Icons";
import ToggleTheme from "./ToggleTheme";
import ToggleBtn from "./ToggleBtn";

const SettingsBar = ({ data, actions }) => {
  const { theme, bucle, update, profilePic } = data;
  const { setTheme, toggleBucle, signOut } = actions;
  const refreshClass = "btn btn-theme btn-refresh ";

  return (
    <div className="settings-bar">
      <ToggleTheme theme={theme} setTheme={() => setTheme()} />
      <ToggleBtn
        cClass="btn btn-theme"
        IconT={RepeatSVG}
        IconF={RepeatSVGDisabled}
        value={bucle}
        toggle={() => {
          toggleBucle();
        }}
        disabled={false}
      />
      <ToggleBtn
        cClass={update ? refreshClass + "update" : refreshClass}
        IconT={RefreshSVG}
        IconF={RefreshSVG}
        value={true}
        toggle={() => {
          window.location.reload();
        }}
      />
      {/* <ToggleBtn
        cClass="btn btn-theme"
        IconT={RepeatSVG}
        IconF={RepeatSVG}
        value={bucle}
        toggle={() => {
          showDelayModal();
        }}
      /> */}
      <button
        className={
          profilePic ? "profile-pic btn-theme" : "profile-pic-btn btn-theme"
        }
        onClick={() => {
          signOut();
        }}
      >
        {profilePic ? (
          <img src={profilePic} alt="profile" height="50px" />
        ) : (
          <LogOutSVG />
        )}
      </button>
    </div>
  );
};

export default SettingsBar;

SettingsBar.propTypes = {
  data: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
