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

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  const prevDayList = Array.from({
    length: Math.max(0, firstDayOfMonth.getDay()),
  }).map(() => DEFAULT_TRASH_VALUE);

  const currentDayList = Array.from({ length: totalMonthDays }).map((_, i) =>
    format(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1),
      type
    )
  );

  const nextDayList = Array.from({
    length: CALENDER_LENGTH - currentDayList.length - prevDayList.length,
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
