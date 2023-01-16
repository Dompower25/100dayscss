import React, { useState } from "react";
import cn from 'clsx';
import s from "./index.module.scss";

const Day2 = () => {
  const [animated, setAnimated] = useState(false);

  const animationLine = () => {
    animated ? setAnimated(false) : setAnimated(true);
  };

  return (
    <div>
        Day 2
      <div
        className={cn(s.container ,animated ? s.active : s.noAnimation)}
        onClick={animationLine}
      >
        <div className={cn(s.line1, s.noAnimation)}></div>
        <div className={cn(s.line2, s.noAnimation)}></div>
        <div className={cn(s.line3, s.noAnimation)}></div>
      </div>
    </div>
  );
};

export default Day2;
