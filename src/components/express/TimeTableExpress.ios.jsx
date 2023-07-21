import { useContext } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { ScheduleContext } from "./context/scheduleContext";
import { formatHour, nextHour } from "./utils";
import Loading from "../Loading";
import { useDeviceOrientation } from "@react-native-community/hooks";
import Constants from "expo-constants";
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

function getMaxSubjectsAndMaxPeriods({ subjectsLength, periodActivity }) {
  const { schedule } = useContext(ScheduleContext);
  let maxSubjects = subjectsLength;
  let maxPeriods = 1;
  let activityPeriod = formatHour(periodActivity);
  activityPeriod =
    parseInt(activityPeriod.split(":")[0]) < 10
      ? "0" +
        parseInt(activityPeriod.split(":")[0]) +
        ":" +
        activityPeriod.split(":")[1]
      : activityPeriod;
  Object.keys(schedule).forEach((day) => {
    Object.keys(schedule[day]).forEach((period) => {
      let start = formatHour(period);
      start = parseInt(start.split(":")[0]) < 10 ? "0" + start : start;
      let hrs = [start];
      let periods = schedule[day][period].periods;
      while (periods - 1) {
        start = nextHour(start);
        hrs.push(start);
        periods--;
      }
      if (
        hrs.includes(activityPeriod) &&
        schedule[day][period].subjects.length > maxSubjects
      ) {
        maxSubjects = schedule[day][period].subjects.length;
        maxPeriods = schedule[day][period].periods;
      }
    });
  });
  return { maxSubjects, maxPeriods };
}

function Activity({ activity }) {
  const { maxSubjects, maxPeriods } = getMaxSubjectsAndMaxPeriods({
    subjectsLength: activity.subjects.length,
    periodActivity: activity.period,
  });
  const styleActivity = [
    styles.activity,
    {
      height: activity.subjects.length
        ? 2 * PERIOD_HEIGHT * maxSubjects
        : maxSubjects
        ? (2 * PERIOD_HEIGHT * maxSubjects) / maxPeriods
        : PERIOD_HEIGHT,
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
          fontWeight: "bold",
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
  const { maxSubjects, maxPeriods } = getMaxSubjectsAndMaxPeriods({
    subjectsLength: 0,
    periodActivity: hr,
  });
  let height = maxSubjects
    ? (2 * PERIOD_HEIGHT * maxSubjects) / maxPeriods
    : PERIOD_HEIGHT;
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
  const orientation = useDeviceOrientation();

  const styCont = [
    styles.container,
    orientation === "landscape" && {
      paddingLeft: Constants.statusBarHeight,
    },
  ];
  const hours = getHours({ minPeriod, maxPeriod });
  return (
    <View style={styCont}>
      <ScrollView contentContainerStyle={styles.containerScroll} horizontal>
        <View>
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
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
  },
  containerScroll: {
    alignItems: "flex-start",
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
    borderColor: "#f9faf5",
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
    borderColor: "#f9faf5",
  },
  hour: {
    borderColor: "#f9faf5",
    borderBottomWidth: 1,
    padding: 3,
  },
  hourValue: {
    fontSize: 10,
    textAlign: "center",
  },
});
