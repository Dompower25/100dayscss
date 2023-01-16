import React, { useEffect, useState } from "react";
import cn from "clsx";
import s from "./index.module.scss";

const Day5 = () => {
  const widthCanvas = 300;
  const heightCanvas = 200;
  const DPIwidth = 1200;
  const DPIheight = 600;
  
  const [data1, setData1] = useState([
    [10, 28],
    [60, 41],
    [110, 22],
    [160, 36],
    [210, 25],
    [270, 13],
    [290, 20],
  ]);

  const [data2, setData2] = useState([
    [10, 458],
    [60, 812],
    [110, 746],
    [160, 877],
    [210, 517],
    [270, 434],
    [290, 458],
  ]);

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.style.width = widthCanvas + "px";
    canvas.style.height = heightCanvas + "px";
    canvas.width = DPIwidth;
    canvas.height = DPIheight;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'blue'
    for (const [x, y] of data1) {
      ctx.lineTo(x * 4, DPIheight - y*2);
    }
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'red'
    for (const [x, y] of data2) {
      ctx.lineTo(x * 4, DPIheight - y/2);
    }
    ctx.stroke();
    ctx.closePath();


  }, [data1, data2]);

  return (
    <div>
      <div>Day 5</div>
      <div className={cn(s.card)}>
        <div className={cn(s.headerCard)}></div>
        <div className={cn(s.bodyCard)}>
          <div className={cn(s.headerBody)}></div>
          <canvas id="canvas"></canvas>
          <div className={cn(s.footerBody)}></div>
        </div>
      </div>
    </div>
  );
};

export default Day5;
