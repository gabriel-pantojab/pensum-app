import { useContext } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { ScheduleContext } from "./context/scheduleContext";
import { formatHour, nextHour } from "./utils";
import Loading from "../Loading";
import { theme } from "../../theme";
import TextStyle from "../TextStyle";

let PERIOD_HEIGHT = 28;

function getHours({ minPeriod, maxPeriod }) {
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

function getActivitiesDay({ dayName, schedule, minPeriod, maxPeriod }) {
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

function Subject({ subject, choque }) {
  const styleSubject = [
    !choque
      ? { ...styles.subject, backgroundColor: subject.color }
      : styles.choque,
  ];
  return (
    <View style={styleSubject}>
      <TextStyle style={[styles.infoSubject, choque && { color: "red" }]}>
        {subject.auxi && "* "}
        {subject.subjectName}
      </TextStyle>
      <TextStyle style={[styles.infoSubject, choque && { color: "red" }]}>
        {subject.classroom} G:{subject.group}
      </TextStyle>
    </View>
  );
}

function getHeigthPeriod({ period }) {
  const { schedule } = useContext(ScheduleContext);
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

function Activity({ activity }) {
  let HEIGHTTOTAL = 0;
  let hoursPeriods = [activity.period];
  let start = formatHour(activity.period);
  let i = activity.periods;
  while (i - 1) {
    start = nextHour(start);
    let h = start.split(":");
    hoursPeriods.push(parseInt(h[0]) + "" + h[1]);
    i--;
  }
  hoursPeriods.forEach((hr) => {
    HEIGHTTOTAL += getHeigthPeriod({ period: hr });
  });
  HEIGHTTOTAL =
    (2 * activity.subjects.length * PERIOD_HEIGHT) / activity.periods <
    HEIGHTTOTAL
      ? HEIGHTTOTAL
      : (2 * activity.subjects.length * PERIOD_HEIGHT) / activity.periods;
  const styleActivity = [
    styles.activity,
    {
      height: HEIGHTTOTAL,
    },
    activity.subjects.length > 1 && { backgroundColor: theme.colors.white },
  ];
  return (
    <View style={styleActivity}>
      {activity.subjects.map((subject) => (
        <Subject
          key={`${subject.sis ? subject.sis : Date.now() + Math.random()}`}
          subject={{ ...subject, periods: activity.periods }}
          choque={activity.subjects.length > 1}
        />
      ))}
    </View>
  );
}

function Day({ dayName, activities }) {
  if (activities.length === 0) return;
  return (
    <View style={styles.day}>
      <TextStyle style={styles.dayName}>{dayName}</TextStyle>
      <View style={styles.activitiesContainer}>
        {activities.map((activity) => (
          <Activity activity={activity} key={activity.period} />
        ))}
      </View>
    </View>
  );
}

function LoadingSchedule() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextStyle
        style={{
          fontSize: 20,
          textAlign: "center",
        }}
      >
        Cargando...
      </TextStyle>
      <Loading />
    </View>
  );
}

function Hour({ hr }) {
  hr =
    parseInt(hr.split(":")[0]) < 10
      ? "0" + parseInt(hr.split(":")[0]) + ":" + hr.split(":")[1]
      : hr;
  let height = getHeigthPeriod({ period: hr });
  const styleHour = {
    ...styles.hour,
    height,
  };
  return (
    <View key={hr} style={styleHour}>
      <TextStyle style={styles.hourValue}>{hr}</TextStyle>
    </View>
  );
}

function Hours({ hours }) {
  if (hours.length === 0) return;

  return (
    <View>
      <TextStyle style={styles.dayName}>hora</TextStyle>
      <View style={styles.activitiesContainer}>
        {hours.map((hr) => (
          <Hour key={hr} hr={hr} />
        ))}
      </View>
    </View>
  );
}

export default function TimeTableExpress() {
  const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  const { schedule, minPeriod, maxPeriod } = useContext(ScheduleContext);
  const hours = getHours({ minPeriod, maxPeriod });
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.containerScroll} horizontal>
        <View>
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              backgroundColor: theme.colors.white,
            }}
          >
            {!schedule ? (
              <LoadingSchedule />
            ) : (
              <>
                <Hours hours={hours} />
                {days.map((day) => {
                  let activities = getActivitiesDay({
                    dayName: day.toLowerCase(),
                    schedule,
                    minPeriod,
                    maxPeriod,
                  });
                  return (
                    <Day key={day} dayName={day} activities={activities} />
                  );
                })}
              </>
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  containerScroll: {
    alignItems: "flex-start",
    backgroundColor: theme.colors.white,
  },
  day: {
    flex: 1,
  },
  dayName: {
    fontSize: 16,
    textAlign: "center",
    padding: 5,
  },
  activity: {
    borderColor: "#999",
    borderBottomWidth: 1,
    justifyContent: "center",
  },
  subject: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    width: 100,
  },
  choque: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.white,
    padding: 3,
  },
  infoSubject: {
    fontSize: 9,
    textAlign: "center",
  },
  activitiesContainer: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: "#999",
  },
  hour: {
    borderColor: "#999",
    borderBottomWidth: 1,
    padding: 3,
  },
  hourValue: {
    fontSize: 10,
    textAlign: "center",
  },
});
