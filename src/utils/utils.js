function getMonthNumber(nameMonth) {
  const months = {
    enero: 1,
    febrero: 2,
    marzo: 3,
    abril: 4,
    mayo: 5,
    junio: 6,
    julio: 7,
    agosto: 8,
    septiembre: 9,
    octubre: 10,
    noviembre: 11,
    diciembre: 12,
  };
  return months[nameMonth.toLowerCase()];
}

function controlZeroNumber(number) {
  return number < 10 ? `0${number}` : number;
}

function getDateFormat(date) {
  const day = controlZeroNumber(date.getDate());
  let month = date.getMonth() + 1;
  let monthName = date.toLocaleString("es-ES", { month: "long" });
  let dayName = date.toLocaleString("es-ES", { weekday: "long" }).split(",")[0];
  monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  dayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
  const year = date.getFullYear();
  return { day, monthName, dayName, year, month };
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function nextDate(date) {
  let yearAnt = date.getFullYear();
  let monthAnt = date.getMonth() + 1;
  let dayAnt = date.getDate();
  const mod = getDaysInMonth(yearAnt, monthAnt);

  let day,
    month = monthAnt,
    year = yearAnt;

  day = (dayAnt + 1) % mod;

  if (day < dayAnt) {
    month = (monthAnt + 1) % 12;
  }
  if (month < monthAnt) {
    year = yearAnt + 1;
  }
  return new Date(year, month - 1, day);
}

function prevDate(date) {
  let yearAnt = date.getFullYear();
  let monthAnt = date.getMonth() + 1;
  let dayAnt = date.getDate();

  let day, month, year;
  month = monthAnt;
  year = yearAnt;
  day = dayAnt - 1;
  if (day === 0) {
    day = getDaysInMonth(yearAnt, monthAnt - 1 === 0 ? 12 : monthAnt - 1);
    month--;
  }
  if (month === 0) {
    month = 12;
    year = year - 1;
  }
  return new Date(year, month - 1, day);
}

function formatHour(text) {
  if (text.split(":").length === 2) return text;
  let hour = text.substring(0, 2);
  let min = text.substring(2, text.length);
  if (hour > 24) {
    hour = text.substring(0, 1);
    min = text.substring(1, text.length);
  }
  hour = controlZeroNumber(parseInt(hour));
  min = controlZeroNumber(parseInt(min));
  return `${hour}:${min}`;
}

export function nextPeriod(hour) {
  let [h, m] = hour.split(":");
  h = parseInt(h);
  m = parseInt(m);
  let totalMinutos = h * 60 + m + 45;
  let newHour = Math.floor(totalMinutos / 60);
  let newMinutes = totalMinutos % 60;
  const hourS = controlZeroNumber(newHour);
  const minS = controlZeroNumber(newMinutes);
  return `${hourS}:${minS}`;
}

export {
  controlZeroNumber,
  getDateFormat,
  nextDate,
  prevDate,
  getMonthNumber,
  formatHour,
};
