import { useState } from "react";
import { format, getDaysInMonth, subDays } from "date-fns";

import { WEEK_CALENDAR_LENGTH, DAY_OF_WEEK } from "../utils/constants";

const WeekCalendar = (type: string, weekCurrentDate?: Date) => {
  const [currentDate, setCurrentDate] = useState(weekCurrentDate || new Date());

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const totalMonthDays = getDaysInMonth(currentDate);
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const prevMonthLastDay = subDays(firstDayOfMonth, 1).getDate();
  const prevDaysCount = firstDayOfMonth.getDay();
  const nextDaysCount =
    (WEEK_CALENDAR_LENGTH - totalMonthDays - prevDaysCount) % DAY_OF_WEEK;

  const prevDayList = Array.from({ length: prevDaysCount }).map((_, i) =>
    format(
      new Date(
        currentYear,
        currentMonth - 1,
        prevMonthLastDay - prevDaysCount + i + 1
      ),
      type
    )
  );

  const currentDayList = Array.from({ length: totalMonthDays }).map((_, i) =>
    format(new Date(currentYear, currentMonth, i + 1), type)
  );

  const nextDayList = Array.from({ length: nextDaysCount }).map((_, i) =>
    format(new Date(currentYear, currentMonth + 1, i + 1), type)
  );

  const currentCalendarList = [
    ...prevDayList,
    ...currentDayList,
    ...nextDayList,
  ];

  const WeekCalendarData = currentCalendarList.reduce((acc: any, cur, idx) => {
    const chunkIndex = Math.floor(idx / DAY_OF_WEEK);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(cur);

    return acc;
  }, []);

  return {
    currentDate,
    setCurrentDate,
    WeekCalendarData,
  };
};

export default WeekCalendar;
