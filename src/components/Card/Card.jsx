import PropTypes from "prop-types";
import { valueConvertion } from "../../helpers/valueConvertion";
import { Button } from "../Button/Button";
import { ReactComponent as LogoIcon } from "../../assets/img/logo.svg";
import style from "./Card.module.css";

export const Card = ({
  id,
  user,
  tweets,
  followers,
  avatar,
  follow,
  onFollow,
}) => {
  const textBTn = follow ? "Following" : "Follow";
  const currentColor = follow ? "bg-accent" : "bg-white";

  const isFollow = (num) => {
    onFollow(id, num);
  };

  const handleClick = () => {
    if (follow) {
      isFollow(-1);
    }

    if (!follow) {
      isFollow(1);
    }
  };

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
          <p className="mb-[26px]">{valueConvertion(followers)} Followers</p>
        </div>
        {!follow && (
          <Button
            className={`${style.btn} ${currentColor}`}
            onClick={handleClick}
          >
            {textBTn}
          </Button>
        )}
        {follow && (
          <Button
            className={`${style.btn} ${currentColor}`}
            onClick={handleClick}
          >
            {textBTn}
          </Button>
        )}
      </div>
    </li>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  user: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number,
  avatar: PropTypes.string,
  onFollow: PropTypes.func,
  follow: PropTypes.bool,
};
