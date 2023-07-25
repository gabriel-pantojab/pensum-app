import { formatHour } from "../../../utils/utils";

export function completeDay({ scheduleDay }) {
  let hoursComplete = [];
  let hours = Object.keys(scheduleDay);
  if (!hours.includes("645")) {
    hours = ["645", ...hours];
  }
  if (!hours.includes("2145")) {
    hours = [...hours, "2145"];
  }
  for (let i = 0; i < hours.length - 1; i++) {
    const current = hours[i];
    const next = hours[i + 1];
    let periods = scheduleDay[current] ? scheduleDay[current].periods : 0;
    let start = formatHour(current);
    if (periods)
      hoursComplete.push({
        hour: start,
        subjects: scheduleDay[current].subjects,
        periods,
      });
    else {
      hoursComplete.push({
        hour: start,
        subjects: [],
        periods: 0,
      });
    }
    while (periods - 1 > 0) {
      start = nextHour(start);
      periods--;
    }
    start = nextHour(start);
    while (start != formatHour(next)) {
      hoursComplete.push({
        hour: start,
        subjects: [],
        periods: 0,
      });
      start = nextHour(start);
    }
  }
  return hoursComplete;
}

function buildFreeDay() {
  let freeDay = [];
  let start = "06:45";
  while (start != "21:45") {
    freeDay.push({
      hour: start,
      subjects: [],
      periods: 0,
    });
    start = nextHour(start);
  }
  return freeDay;
}

export const freeDay = buildFreeDay();

export function nextHour(hour) {
  let [h, m] = hour.split(":");
  h = parseInt(h);
  m = parseInt(m);
  let totalMinutos = h * 60 + m + 45;
  let newHour = Math.floor(totalMinutos / 60);
  let newMinutes = totalMinutos % 60;
  const hourS = newHour < 10 ? `0${newHour}` : newHour;
  const minS = newMinutes < 10 ? `0${newMinutes}` : newMinutes;
  return `${hourS}:${minS}`;
}
