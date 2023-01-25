import React, { useState } from "react";
import s from "./index.module.scss";
import cn from "clsx";
import UserCard from "./UserCard";
import { createPortal } from "react-dom";

const port = document.querySelector(".classForPortal");

const Day13 = () => {
  const [active, setActive] = useState(false);

  const activePortal = (name, icon) => {
    return <UserCard img={icon} userName={name} setActive={setActive} />;
  };

  const users = [
    {
      name: "Julia Toth",
      icon: "https://100dayscss.com/codepen/13-1.jpg",
    },
    {
      name: "Pablo Emilio Escobar",
      icon: "https://100dayscss.com/codepen/13-2.jpg",
    },
    {
      name: "Emilia River",
      icon: "https://100dayscss.com/codepen/13-3.jpg",
    },
    {
      name: "Johnny Depp",
      icon: "https://100dayscss.com/codepen/13-4.jpg",
    },
  ];

  return (
    <div>
      {active &&
        createPortal(
          activePortal("Julia Toth", "https://100dayscss.com/codepen/13-1.jpg"),
          document.querySelector(".classForPortal")
        )}

      <div className={cn(s.frame)}>
        <div className="classForPortal"></div>
        <div className={cn(active ? s.noActive : s.center)}>
          {users.map(({ name, icon } = users) => {
            return (
              <div
                className={s.userIcon}
                key={Math.random(99999)}
                onClick={() => {
                  setActive(true);
                }}
              >
                <img src={icon} alt={name} />
                <div className={s.plus}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Day13;
