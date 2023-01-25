import React from "react";
import s from "./index.module.scss";
import cn from "clsx";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import FavoriteIcon from "@mui/icons-material/Favorite";

const userCard = ({ img, userName, setActive }) => {
  return (
    <div className={s.centerBox}>
      <div className={s.overlay}>
        <button
          onClick={() => {
            setActive(false);
          }}
          className={s.closeButton}
        ></button>
        <div className={s.icon}>
          <img className={s.imageBox} src={img} alt="#" />
        </div>
        <div className={s.header}>
          <img src="https://100dayscss.com/codepen/13-1-header.jpg" alt="#" />
        </div>
        <div className={s.bodyOverlay}>
          <div className={s.nameBox}>{userName}</div>
          <div className={s.buttonBox}>
            <div className={cn(s.phone, s.circleButton)}>
              <PhoneIcon fontSize="small" />
            </div>
            <div className={cn(s.message, s.circleButton)}>
              <MailIcon fontSize="small" />
            </div>
            <div className={cn(s.favorite, s.circleButton)}>
              <FavoriteIcon fontSize="small" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userCard;
