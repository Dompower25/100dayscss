import React from "react";
import cn from "clsx";
import s from "./index.module.scss";

const Day19 = () => {
  return (
    <div className={cn(s.frame)}>
      <div className={s.center}>
        <input type="radio" name="rd" id={s[`check-1`]} />
        <label className={s.circle} for={s[`check-1`]} id={s.c1}></label>

        <input type="radio" name="rd" id={s[`check-2`]} />
        <label className={s.circle} for={s[`check-2`]} id={s.c2}></label>

        <input type="radio" name="rd" id={s[`check-3`]} />
        <label className={s.circle} for={s[`check-3`]} id={s.c3}></label>
        <div className={s.active}></div>
        <div className={s.bg}></div>
      </div>
    </div>
  );
};

export default Day19;
