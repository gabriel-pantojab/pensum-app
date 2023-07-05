function controlZeroNumber(number) {
  return number < 10 ? `0${number}` : number;
}

function currentDate() {
  const date = new Date();
  const day = controlZeroNumber(date.getDate());
  let month = date.toLocaleString("es-ES", { month: "long" });
  let dayName = date.toLocaleString("es-ES", { weekday: "long" }).split(",")[0];
  month = month.charAt(0).toUpperCase() + month.slice(1);
  dayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
  const year = date.getFullYear();
  return { day, month, dayName, year };
}

export { controlZeroNumber, currentDate };
