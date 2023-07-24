export const PERIOD_HEIGHT = 28;

export function formatHour(text) {
  if (text.split(":").length === 2) return text;
  let hour = text.substring(0, 2);
  let min = text.substring(2, text.length);
  if (hour > 24) {
    hour = text.substring(0, 1);
    min = text.substring(1, text.length);
  }
  return `${hour}:${min}`;
}

export function getHours({ minPeriod, maxPeriod }) {
  if (!minPeriod || !maxPeriod) return [];
  let start = formatHour(minPeriod);
  let end = formatHour(maxPeriod);
  end = end.split(":")[0] < 10 ? "0" + end : end;
  let hrs = [start];
  while (start != end) {
    start = nextHour(start);
    hrs.push(start);
  }
  return hrs;
}

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

export function getHeigthPeriod({ period, schedule }) {
  period = formatHour(period);
  period =
    parseInt(period.split(":")[0]) < 10
      ? "0" + parseInt(period.split(":")[0]) + ":" + period.split(":")[1]
      : period;
  let height = PERIOD_HEIGHT;
  Object.keys(schedule).forEach((day) => {
    Object.keys(schedule[day]).forEach((ped) => {
      let start = formatHour(ped);
      start = parseInt(start.split(":")[0]) < 10 ? "0" + start : start;
      let hrs = [start];
      let periods = schedule[day][ped].periods;
      while (periods - 1) {
        start = nextHour(start);
        hrs.push(start);
        periods--;
      }
      if (hrs.includes(period)) {
        let heigthTemp =
          (2 * schedule[day][ped].subjects.length * PERIOD_HEIGHT) /
          schedule[day][ped].periods;
        if (heigthTemp > height) height = heigthTemp;
      }
    });
  });
  return height;
}

export function getActivitiesDay({ dayName, schedule, minPeriod, maxPeriod }) {
  if (!schedule[dayName]) return [];
  let activities = [];
  Object.keys(schedule[dayName]).forEach((key) => {
    activities.push({
      period: key,
      periods: schedule[dayName][key].periods,
      subjects: schedule[dayName][key].subjects,
    });
  });
  activities = completePeriods(activities, minPeriod, maxPeriod);
  return activities;
}

function completePeriods(activities, minPeriod, maxPeriod) {
  if (minPeriod === 0 || maxPeriod === 0) return activities;
  activities.unshift({
    period: minPeriod,
    periods: 0,
    subjects: [],
  });
  activities.push({
    period: nextHour(formatHour(maxPeriod)).split(":").join(""),
    periods: 0,
    subjects: [],
  });

  let activitiesComplete = [];
  for (let i = 0; i < activities.length - 1; i++) {
    let activity = activities[i];
    let nextActivity = activities[i + 1];
    let start = formatHour(activity.period);
    let periods = activity.periods;
    while (periods) {
      start = nextHour(start);
      periods--;
    }
    if (activity.periods > 0) activitiesComplete.push(activity);
    while (
      start != formatHour(nextActivity.period) &&
      start != "0" + formatHour(nextActivity.period)
    ) {
      activitiesComplete.push({
        period: start,
        periods: 1,
        subjects: [],
      });
      start = nextHour(start);
    }
  }
  return activitiesComplete;
}
