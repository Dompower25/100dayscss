import React from "react";
import s from "./index.module.scss";

const Day3 = () => {
  return (
    <div className={s.container}>
      <div className={s.center}>
        <div className={s.circle}>
          <div className={s.sky} />
          <div className={s.sun} />
          <div className={s.desert} />
          <div className={s.shadow} />
          <div className={s.piramidLeft} />
          <div className={s.piramidRight} />
        </div>
      </div>
    </div>
  );
};

export default Day3;
