import "./App.css";
import profileImg from "./assets/img/image-jeremy.png";

import StatisticsCard from "./components/StatisticsCard";
import orange from "./assets/img/orange.svg";
import blue from "./assets/img/blue.svg";
import pink from "./assets/img/pink.svg";
import green from "./assets/img/002-gamepad.svg";
import purple from "./assets/img/purple.svg";
import yellow from "./assets/img/yeallow.svg";
import { useEffect } from "react";
import { setCurrentTF } from "./redux/data/slice";
import { RootState, useAppDispatch } from "./redux/store";
import { useSelector } from "react-redux";
import { BgCollection } from "./@types/types";
import { getData } from "./redux/data/async";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, currentTimeFrame, timePeriod } = useSelector(
    (state: RootState) => state.data
  );
  useEffect(() => {
    dispatch(getData());
  }, []);

  const setCurrentTime = (i: number) => {
    dispatch(setCurrentTF(i + 1));
  };

  const backgroundsCollection: BgCollection = [
    orange,
    blue,
    pink,
    green,
    purple,
    yellow,
  ];

  return (
    <div className="App">
      <div className="container">
        <nav className="navigation">
          <div className="profile">
            <img className="profile_photo" src={profileImg} />
            <div className="profile_info-wrapper">
              <span className="profile_info">Report for</span>
              <span className="profile_name">Jeremy Robson</span>
            </div>
          </div>
          <ul className="navigation_sort-by">
            {timePeriod.map((e, i) => (
              <li
                className={
                  currentTimeFrame === i + 1
                    ? `sort-by__item sort-by__item__active`
                    : `sort-by__item`
                }
                onClick={() => setCurrentTime(i)}
              >
                {e}
              </li>
            ))}
          </ul>
        </nav>

        <section className="statistic">
          {items.map((e, i) => (
            <StatisticsCard
              {...e}
              key={i}
              currentTimeFrame={currentTimeFrame}
              background={backgroundsCollection[i]}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default App;
