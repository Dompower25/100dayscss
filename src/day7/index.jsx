import React, { useEffect, useState } from "react";
import cn from "clsx";
import s from "./index.module.scss";
import SpeedIcon from "@mui/icons-material/Speed";
import Person4Icon from "@mui/icons-material/Person4";
import NotificationsIcon from "@mui/icons-material/Notifications";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const Day7 = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const isOpenSearch = () => {
    return openSearch ? setOpenSearch(false) : setOpenSearch(true);
  };

  const isOpenMenu = () => {
    return openMenu ? setOpenMenu(false) : setOpenMenu(true);
  };

  return (
    <div className={s.container}>
      <div
        className={cn(
          s.hiddenMenu,
          openMenu ? s.openHiddenMenu : s.closeHiddenMenu
        )}
      >
        <div className={cn(s.btn)}>
          <SpeedIcon fontSize="small" /> <span>Dashboard</span>
        </div>
        <div className={cn(s.btn)}>
          <Person4Icon fontSize="small" />
          <span>Profile</span>
        </div>
        <div className={cn(s.btn)}>
          <NotificationsIcon fontSize="small" />
          <span>Notifications</span>
        </div>
        <div className={cn(s.btn)}>
          <QuestionAnswerRoundedIcon fontSize="small" />
          <span>Message</span>
        </div>
        <div className={cn(s.btn)}>
          <SettingsRoundedIcon fontSize="small" />
          <span>Settings</span>
        </div>
      </div>
      <div className={cn(s.center, openMenu ? s.moveCard : null)}>
        <div className={cn(s.header)}>
          <div className={cn(s.menuBtn)} onClick={isOpenMenu}>
            <span className={cn(s.topItem)}></span>
            <span className={cn(s.circleItem)}></span>
            <span className={cn(s.bottonItem)}></span>
          </div>
          <span>Notifications</span>
          <div className={cn(s.searchBtn)} onClick={isOpenSearch}>
            <span className={cn(s.cirlceSearch)} />
            <span className={cn(s.itemSearch)} />
            <div
              className={cn(
                s.searchBox,
                openSearch ? s.activeSearch : s.disactiveSearch
              )}
            >
              <input placeholder="Search ..." className={cn(s.searhInput)} />
            </div>
          </div>
        </div>
        <div className={cn(s.listNotifications)}>
          <div className={cn(s.notification)}>
            <div className={cn(s.time)}>9:24 AM</div>
            <div className={cn(s.postInformation)}>
              <span className={cn(s.userName)}>John Walker</span>
              <span> posted a photo on your wall.</span>
            </div>
          </div>
          <div className={cn(s.notification)}>
            <div className={cn(s.time)}>8:19 AM</div>
            <div className={cn(s.postInformation)}>
              <span className={cn(s.userName)}>Alice Parker</span>
              <span> commented your last post.</span>
            </div>
          </div>
          <div className={cn(s.notification)}>
            <div className={cn(s.time)}>Yesterday</div>
            <div className={cn(s.postInformation)}>
              <span className={cn(s.userName)}>Luke Wayne</span>
              <span> added you as friend.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day7;
