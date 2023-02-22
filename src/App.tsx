import "./App.css";
import profileImg from "./assets/img/image-jeremy.png";

import StatisticsCard from "./components/StatisticsCard";
import orange from "./assets/img/orange.svg";
import blue from "./assets/img/blue.svg";
import pink from "./assets/img/pink.svg";
import green from "./assets/img/002-gamepad.svg";
import purple from "./assets/img/purple.svg";
import yellow from "./assets/img/yeallow.svg";

type BgCollection = [
  orange: string,
  blue: string,
  pink: string,
  green: string,
  purple: string,
  yellow: string
];

const backgroundsCollection: BgCollection = [
  orange,
  blue,
  pink,
  green,
  purple,
  yellow,
];

const App: React.FC = () => {
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
          {backgroundsCollection.map((e, i) => (
            <StatisticsCard img={e} key={i} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default App;
