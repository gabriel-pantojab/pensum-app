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

export { controlZeroNumber, getDateFormat, nextDate, prevDate, getMonthNumber };
