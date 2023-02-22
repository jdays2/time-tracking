import React from "react";

const StatisticsCard: React.FC = () => {
  return (
    <div className="statistic__card">
      <img className="card__background-img" />
      <div className="card__content">
        <div className="content__header">
          <span className="header__title">Work</span>
          <span>...</span>
        </div>
        <div className="content__body">
          <span className="body__subject">32hrs</span>
          <span className="body__subtitle">Last Week - 36hrs</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
