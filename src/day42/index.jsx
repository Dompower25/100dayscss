import React from "react";
import cn from "clsx";
import s from "./index.module.scss";
import { ConstructionOutlined } from "@mui/icons-material";

const Day42 = () => {
  const stars = new Array(500).fill(0).map((i, index) => {
    return i, index;
  });

  const shootingStars = new Array(6).fill(0).map((i, index) => {
    return i, index;
  });
  return (
    <div className={cn(s.frame)}>
      {stars.map((i) => {
        return <div key={i} className={cn(s.star, s[`star${i}`])} />;
      })}
      {shootingStars.map((i) => {
        return (
          <div
            key={i}
            className={cn(s[`shooting-star`], s[`shooting-star-${i}`])}
          />
        );
      })}
    </div>
  );
};

export default Day42;
