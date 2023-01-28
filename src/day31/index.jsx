import React from "react";
import cn from "clsx";
import s from "./index.module.scss";

const Day31 = () => {
  const circles = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div className={cn(s.frame)}>
      {circles.map((circle) => {
        return (
          <div
            key={Math.random(99999999999)}
            className={s[`buble-${circle}`]}
          ></div>
        );
      })}
    </div>
  );
};

export default Day31;
