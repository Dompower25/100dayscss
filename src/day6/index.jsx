import React from "react";
import cn from "clsx";
import s from "./index.module.scss";

const Day6 = () => {
  return (
    <div>
      <div>Day 6</div>
      <div className={s.container}>
        <div className={s.center}>
          <div className={cn(s.card)}>
            <div className={cn(s.avatar)}>
                <div className={cn(s.circle1)}/>
                <div className={cn(s.circle2)}/>
            </div>
            <div className={cn(s.nameBox)}>
              <div className={cn(s.name)}>Jessica Potter</div>
              <div className={cn(s.profession)}>Visual Artist</div>
            </div>
            <div className={cn(s.buttonBox)}>
              <button className={cn(s.btn)}>Follow</button>
              <button className={cn(s.btn)}>Message</button>
            </div>
          </div>
          <div className={cn(s.information)}>
            <div className={cn(s.infoBox)}>
              523
              <span className={cn(s.description)}>Posts</span>
            </div>
            <div className={cn(s.infoBox, s.border)}>
              {" "}
              1387
              <span className={cn(s.description)}>Likes</span>
            </div>
            <div className={cn(s.infoBox)}>
              {" "}
              146
              <span className={cn(s.description)}>Follower</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day6;
