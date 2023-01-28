import React from "react";
import s from "./index.module.scss";
import cn from "clsx";

const Day9 = () => {
  const craterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const rainBig = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const rainMedium = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const rainSmall = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={cn(s.frame)}>
      <div className={cn(s.wetherBackground)}>
        {rainBig.map((i) => {
          return <div key={i} className={cn(s[`drop-big-${i}`])}></div>;
        })}
        {rainMedium.map((i) => {
          return <div key={i} className={cn(s[`drop-medium-${i}`])}></div>;
        })}
        {rainSmall.map((i) => {
          return <div key={i} className={cn(s[`drop-small-${i}`])}></div>;
        })}
        <div className={s.moon}>
          {craterArr.map((i) => {
            return (
              <div key={i} className={cn(s.crater, s[`crater${i}`])}></div>
            );
          })}
        </div>
        <div className={s.sideBox}>
          <div className={cn(s.hill1)}></div>
          <div className={cn(s.hill2)}></div>
          <div className={cn(s.hill3)}></div>
          <div className={cn(s.hill4)}></div>
          <div className={cn(s.hill5)}></div>
        </div>
      </div>
      <div className={cn(s.footer)}>
        <div className={s.temperature}>12°</div>
        <div className={s.otherTestimony}>
          <div className={s.testimony}>
            <div>Wind: E 7 km/h</div> <div>Humidity: 87%</div>
          </div>
          <div className={s.nextDays}>
            <div>TUE 21° / 9°</div> <div>WED 23° / 10°</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day9;
