/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  // Format time into MM:SS
  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const value = {
    time,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer,
    formatTime,
  };

  return <TimeContext.Provider value={value}>{children}</TimeContext.Provider>;
};

export const useTime = () => {
  const context = useContext(TimeContext);
  if (context === undefined) {
    throw new Error("useTime must be used within a TimeProvider");
  }
  return context;
};
