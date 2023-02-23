import { fetchedTimeframes } from "../redux/data/types";

export type StatisticsCardProps = {
  title: string;
  timeframes: fetchedTimeframes;
  background: string;
  currentTimeFrame: number;
};

export type BgCollection = [
  orange: string,
  blue: string,
  pink: string,
  green: string,
  purple: string,
  yellow: string
];
