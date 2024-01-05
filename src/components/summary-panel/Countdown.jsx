import React, { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    // Convert now to UTC
    const nowUTC = Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours(),
      now.getUTCMinutes(),
      now.getUTCSeconds()
    );
    const tomorrowUTC = new Date(nowUTC).setDate(
      new Date(nowUTC).getDate() + 1
    );
    const midnightUTC = new Date(tomorrowUTC).setHours(0, 0, 0, 0);
    const difference = midnightUTC - nowUTC;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <h1>Next Puzzle In</h1>
      <h2>
        {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </h2>
    </div>
  );
};

export default Countdown;
