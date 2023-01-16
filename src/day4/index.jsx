import React from "react";
import s from "./index.module.scss";
import cn from "clsx";

const Day4 = () => {
  return (
    <div>
      <div>Day4</div>
      <div className={s.container}>
        <div className={s.center}>
          <div className={cn(s.circle, s.circle1)} />
          <div className={cn(s.circle, s.circle2)} />
          <div className={cn(s.circle, s.circle3)} />
        </div>
      </div>
    </div>
  );
};

export default Day4;
