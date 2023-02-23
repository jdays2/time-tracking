import React from "react";
import threeDot from "../assets/img/combined-C.svg";
import { fetchedTimeframes } from "../redux/data/slice";

type StatisticsCardProps = {
  title: string;
  timeframes: fetchedTimeframes;
  background: string;
};

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  timeframes,
  title,
  background,
}) => {
  return (
    <div className="statistic__card">
      <img className="card__background" src={background} />
      <div className="card__content">
        <div className="content__header">
          <span className="header__title">{title}</span>
          <img src={threeDot} className="header__dots" />
        </div>
        <div className="content__body">
          <span className="body__subject">{timeframes.daily.current}hrs</span>
          <span className="body__subtitle">
            Last Week - {timeframes.daily.previous}hrs
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
