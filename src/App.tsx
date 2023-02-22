import "./App.css";
import profileImg from "./assets/img/image-jeremy.png";

import StatisticsCard from "./components/StatisticsCard";

function App() {
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
            <li className="sort-by__item">Daily</li>
            <li className="sort-by__item sort-by__item__active">Weekly</li>
            <li className="sort-by__item">Monthly</li>
          </ul>
        </nav>
        <section className="statistic">
          <StatisticsCard />
          <StatisticsCard />
          <StatisticsCard />
          <StatisticsCard />
          <StatisticsCard />
          <StatisticsCard />
        </section>
      </div>
    </div>
  );
}

export default App;
