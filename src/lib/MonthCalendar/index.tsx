import { useState } from "react";
import { format, getDaysInMonth } from "date-fns";

import {
  CALENDER_LENGTH,
  DEFAULT_TRASH_VALUE,
  DAY_OF_WEEK,
} from "../utils/constants";

const MonthCalendar = (type: string, monthCurrentDate?: Date) => {
  const [currentDate, setCurrentDate] = useState(
    monthCurrentDate || new Date()
  );

  const totalMonthDays = getDaysInMonth(currentDate);
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const prevDaysCount = firstDayOfMonth.getDay();
  const nextDaysCount = CALENDER_LENGTH - totalMonthDays - prevDaysCount;

  const prevDayList = Array.from({
    length: prevDaysCount,
  }).map(() => DEFAULT_TRASH_VALUE);

  const currentDayList = Array.from({ length: totalMonthDays }).map((_, i) =>
    format(new Date(currentYear, currentMonth, i + 1), type)
  );

  const nextDayList = Array.from({
    length: nextDaysCount,
  }).map(() => DEFAULT_TRASH_VALUE);

  const currentCalendarList = [
    ...prevDayList,
    ...currentDayList,
    ...nextDayList,
  ];

  const MonthCalendarData = currentCalendarList.reduce((acc: any, cur, idx) => {
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
    MonthCalendarData,
  };
};

export default MonthCalendar;
