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
            <span className="profile_info">Report for</span>
            <h1 className="profile_name">Jeremy Robson</h1>
          </div>
          <ul className="navigation_sort-by">
            <li className="sort-by__item">Daily</li>
            <li className="sort-by__item">Weekly</li>
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
