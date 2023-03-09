import { useState } from "react";
import { Button } from "../Button/Button";
import style from "./Card.module.css";
import { ReactComponent as LogoIcon } from "../../assets/img/logo.svg";
import { useLocaleStorage } from "../../hooks/useLocaleStorage";

export const Card = ({ user, tweets, followers, avatar }) => {
  const [active, setActive] = useState(false);
  const [currentFollowers, setCurrentFollowers] = useLocaleStorage(
    "followers",
    followers
  );
  //   const [currentColor, setCurrentColor] = useLocaleStorage(
  //     "color",
  //     currentColor
  //   );
  //   console.log("currentColor", currentColor);

  const bgColor = active ? "bg-accent" : "bg-white";

  const handleClick = () => {
    setActive(!active);

    if (active) {
      setCurrentFollowers(currentFollowers - 1);
      //   setCurrentColor((currentColor = "bg-accent"));
    }

    if (!active) {
      setCurrentFollowers(currentFollowers + 1);
      //   setCurrentColor(currentColor);
    }
  };

  const value = (followers) =>
    followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <li className={style.cardItem}>
      <LogoIcon className="w-[76px] h-[22px] inline-block mb-[145px]" />
      <div className={style.wrapperAvatar}>
        <img
          src={avatar}
          alt={user}
          width={62}
          height={62}
          className={style.avatar}
        />
      </div>
      <div>
        <div className="text-white uppercase font-medium text-[20px] leading-[1.2] text-center">
          <p className="mb-4">{tweets} Tweets</p>
          <p className="mb-[26px]">{value(currentFollowers)} Followers</p>
        </div>
        <Button className={`${style.btn} ${bgColor}`} onClick={handleClick}>
          {active ? "Following" : "Follow"}
        </Button>
      </div>
    </li>
  );
};
