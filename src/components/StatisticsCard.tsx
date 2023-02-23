import React from "react";
import threeDot from "../assets/img/combined-C.svg";
import { fetchedTimeframes } from "../redux/data/slice";

type StatisticsCardProps = {
  title: string;
  timeframes: fetchedTimeframes;
  background: string;
  currentTimeFrame: number;
};

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  timeframes,
  title,
  background,
  currentTimeFrame,
}) => {
  const tryGet = (d: string) => {
    if (d === "previous") {
      return currentTimeFrame === 1
        ? timeframes.daily.previous
        : "" || currentTimeFrame === 2
        ? timeframes.weekly.previous
        : "" || currentTimeFrame === 3
        ? timeframes.monthly.previous
        : "";
    }
    if (d === "current") {
      return currentTimeFrame === 1
        ? timeframes.daily.current
        : "" || currentTimeFrame === 2
        ? timeframes.weekly.current
        : "" || currentTimeFrame === 3
        ? timeframes.monthly.current
        : "";
    }
  };
  return (
    <div className="statistic__card">
      <img className="card__background" src={background} />
      <div className="card__content">
        <div className="content__header">
          <span className="header__title">{title}</span>
          <img src={threeDot} className="header__dots" />
        </div>
        <div className="content__body">
          <span className="body__subject">{tryGet("current")}hrs</span>
          <span className="body__subtitle">
            Last Week - {tryGet("previous")}hrs
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
