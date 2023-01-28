import React from "react";
import cn from "clsx";
import s from "./index.module.scss";

const Day8 = () => {
  const blubbArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const sparkleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={s.frame}>
      <div className={s.center}>
        <div className={cn(s.ball)}>
          {blubbArray.map((i) => {
            return <div key={i} className={cn(s[`blubb-${i}`])}></div>;
          })}
          {sparkleArray.map((i) => {
            return (
              <div
                key={Math.random(100)}
                className={cn(s[`sparkle-${i}`])}
              ></div>
            );
          })}
          {sparkleArray.map((i) => {
            return (
              <div
                key={Math.random(123123)}
                className={cn(s[`sparkle2-${i}`])}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Day8;
