export type timeData = {
  current: number;
  previous: number;
};

export type fetchedTimeframes = {
  daily: timeData;
  weekly: timeData;
  monthly: timeData;
};

export interface FetchedData {
  title: string;
  timeframes: fetchedTimeframes;
}

export type dataState = {
  items: FetchedData[];
  selectedTimeFrame: "daily" | "weekly" | "monthly";
  currentTimeFrame: number;
  timePeriod: string[];
  isLoad: boolean;
};
