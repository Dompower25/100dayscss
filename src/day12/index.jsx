import React from "react";
import s from "./index.module.scss";
import cn from "clsx";

const Day12 = () => {
  return (
    <div className={s.frame}>
      <div className={s.quote}>
        <p>
          I know quite certainly that I myself have no special talent;
          curiosity,
          <span onclick="void(0)" className={s.tooltip}>
            obsession
            <span className={s.info}>
              <span className={s.pronounce}>
                [əbˈseʃ(ə)n]
                <span className={cn(s.fa, s[`fa-volume-up`])}></span>
              </span>
              <span className={s.text}>
                Obsession, a persistent disturbing preoccupation with an often
                unreasonable idea or feeling.
              </span>
            </span>
          </span>
          and dogged endurance, combined with self-criticism have brought me to
          my ideas.
        </p>
        <p className={s.author}>Albert Einstein</p>
      </div>
    </div>
  );
};

export default Day12;
