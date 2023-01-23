import React, { useEffect, useState } from "react";
import cn from "clsx";
import s from "./index.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";

function timeNow() {
  return new Date(Date.now()).toLocaleTimeString();
}

const Day10 = () => {
  const doted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const newDate = new Date(Date.now());
  const dateNow = newDate.toDateString().toUpperCase();
  const [time, setTime] = useState(timeNow());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(timeNow());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div>Day 10</div>
      <div className={s.frame}>
        <div className={s.center}>
          <div className={s.clock}>
            <svg
              className={s.spinnerSVG}
              id="elnbviCYfXt1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
            >
              <ellipse rx="145" ry="145" />
            </svg>
            {doted.map((i) => {
              return (
                <div key={i} className={cn(s[`point-set-${i}`])}>
                  <div className={s[`point-1`]}></div>
                  <div className={s[`point-2`]}></div>
                  <div className={s[`point-3`]}></div>
                  <div className={s[`point-4`]}></div>
                </div>
              );
            })}
            <div className={s.dataBox}>
              <div className={s.date}>{dateNow}</div>
              <div className={s.time}>{time}</div>
              <div className={s.row}>
                <div className={s.beat}>
                  <FavoriteIcon className={s.heart} /> <span>81</span>
                </div>
                <div className={s.energy}>1248 kcal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day10;
