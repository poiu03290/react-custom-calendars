# react-custom-calendars

It provides calendar data that you can customize and use as you wish. (in React)

![alt text](README_EX_2.png)
![alt text](README_EX_1.png)
![alt text](README_EX_3.png)

## Installation

### npm

```
npm i react-custom-calendars --save
```

### yarn

```
yarn add react-custom-calendars
```

## Example

```typescript
import { MonthCalendar } from "react-custom-calendars";

function App() {
  const { MonthCalendarData } = MonthCalendar("dd");

  return (
    <ul>
      {MonthCalendarData.map((weeks) => (
        <li
          style={{
            listStyle: "none",
            display: "flex",
            gap: "10px",
          }}
        >
          {weeks.map((date) => (
            <p style={{ width: "20px" }}>{date}</p>
          ))}
        </li>
      ))}
    </ul>
  );
}

export default App;
```

## MonthCalendar

- You can return date data in monthly calendar format.
- In a week, the last date of the previous month or the start date of the next month is returned as 0.
  - If you want to use the included data, you can use [WeekCalendar](#weekcalendar).
- example

```typescript
const { currentDate, setCurrentDate, MonthCalendarData } = MonthCalendar("dd");
```

### Argument

| name        | required |   type   | Description                                                                            | Example                 |
| ----------- | :------: | :------: | -------------------------------------------------------------------------------------- | ----------------------- |
| format      |    O     | `string` | Format of returned date                                                                | `yyyy-MM-dd`, `dd`, ... |
| currentDate |    X     |  `Date`  | Standard for date data to be returned (if there is no value, today's date is returned) | `new Date(2024, 8, 15)` |

### Return

| name              |    type    | Description                                                                                              |
| ----------------- | :--------: | -------------------------------------------------------------------------------------------------------- |
| currentDate       |  `string`  | Standard for date data to be returned                                                                    |
| setCurrentDate    | `function` | A function that changes the currentDate, which is the reference point of the monthly date to be returned |
| MonthCalendarData | `string[]` | Data that can be displayed on a calendar based on currentDate                                            |

## WeekCalendar

- You can use this when you want to include the last dates of the previous month within a week, or the start dates of the next month.
- example

```typescript
const { currentDate, setCurrentDate, WeekCalendarData } = WeekCalendar("dd");
```

### Argument

| name        | required |   type   | Description                                                                            | Example                 |
| ----------- | :------: | :------: | -------------------------------------------------------------------------------------- | ----------------------- |
| format      |    O     | `string` | Format of returned date                                                                | `yyyy-MM-dd`, `dd`, ... |
| currentDate |    X     |  `Date`  | Standard for date data to be returned (if there is no value, today's date is returned) | `new Date(2024, 8, 15)` |

### Return

| name             |    type    | Description                                                                                             |
| ---------------- | :--------: | ------------------------------------------------------------------------------------------------------- |
| currentDate      |  `string`  | Standard for date data to be returned                                                                   |
| setCurrentDate   | `function` | A function that changes the currentDate, which is the reference point of the weekly date to be returned |
| WeekCalendarData | `string[]` | Data that can be displayed on a calendar based on currentDate                                           |

## LICENSE

- MIT
