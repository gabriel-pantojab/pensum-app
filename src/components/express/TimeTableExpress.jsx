import { useContext } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { ScheduleContext } from "./context/scheduleContext";
import { formatHour, nextHour } from "./utils";
import Loading from "../Loading";

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

function Subject({ subject, choque, fact }) {
  const height = fact * subject.periods;
  return (
    <View
      style={[
        !choque
          ? { ...styles.subject, backgroundColor: subject.color }
          : styles.choque,
        {
          height,
        },
      ]}
    >
      <Text style={[styles.infoSubject, choque && { color: "red" }]}>
        {subject.auxi && "* "}
        {subject.subjectName}
      </Text>
      <Text style={[styles.infoSubject, choque && { color: "red" }]}>
        {subject.classroom} G:{subject.group}
      </Text>
    </View>
  );
}
//TODO : revisar la key
function ActivityList({ activity }) {
  return (
    <View
      style={[
        styles.activity,
        activity.subjects.length === 0 && { height: 53 },
      ]}
    >
      {activity.subjects.map((subject) => (
        <Subject
          key={`${subject.sis ? subject.sis : Date.now() + Math.random()}`}
          subject={{ ...subject, periods: activity.periods }}
          choque={activity.subjects.length > 1}
          fact={activity.subjects.length > 1 ? 26 : 52}
        />
      ))}
    </View>
  );
}

function Day({ dayName }) {
  dayName = dayName.toLowerCase();
  const { schedule, minPeriod, maxPeriod } = useContext(ScheduleContext);
  if (!schedule[dayName]) return;
  let activities = [];
  if (schedule[dayName]) {
    Object.keys(schedule[dayName]).forEach((key) => {
      activities.push({
        period: key,
        periods: schedule[dayName][key].periods,
        subjects: schedule[dayName][key].subjects,
      });
    });
  }
  activities = completePeriods(activities, minPeriod, maxPeriod);
  return (
    <View style={styles.day}>
      <Text style={styles.dayName}>{dayName}</Text>
      <View>
        {activities.map((activity) => (
          <ActivityList
            activity={activity}
            dayName={dayName}
            key={activity.period}
          />
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
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Cargando...
      </Text>
      <Loading />
    </View>
  );
}

function EmptySchedule() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Horario vacio
      </Text>
    </View>
  );
}

function Hour({ hr }) {
  hr =
    parseInt(hr.split(":")[0]) < 10
      ? "0" + parseInt(hr.split(":")[0]) + ":" + hr.split(":")[1]
      : hr;
  let h = parseInt(hr.split(":")[0]) + hr.split(":")[1];
  let height = 53;
  // const { schedule } = useContext(ScheduleContext);
  // Object.keys(schedule).forEach((day) => {
  //   if (schedule[day][h]) {
  //     console.log(schedule[day][h].subjects.length);
  //   }
  // });
  return (
    <View
      key={hr}
      style={{
        borderColor: "#f9faf5",
        borderBottomWidth: 1,
        height,
        padding: 5,
      }}
    >
      <Text
        style={{
          fontSize: 10,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {hr}
      </Text>
    </View>
  );
}

function Hours() {
  const { minPeriod, maxPeriod } = useContext(ScheduleContext);
  if (!minPeriod || !maxPeriod) return;
  let start = formatHour(minPeriod);
  let end = formatHour(maxPeriod);
  end = end.split(":")[0] < 10 ? "0" + end : end;
  let hrs = [start];
  while (start != end) {
    start = nextHour(start);
    hrs.push(start);
  }

  return (
    <View>
      <Text style={styles.dayName}></Text>
      <View
        style={{
          borderTopWidth: 1,
          borderColor: "#f9faf5",
        }}
      >
        {hrs.map((hr) => (
          <Hour key={hr} hr={hr} />
        ))}
      </View>
    </View>
  );
}

export default function TimeTableExpress() {
  const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  const { schedule } = useContext(ScheduleContext);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.containerScroll} horizontal>
        <View>
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
            }}
          >
            {!schedule ? (
              <LoadingSchedule />
            ) : schedule.empty ? (
              <EmptySchedule />
            ) : (
              <>
                <Hours />
                {days.map((day) => (
                  <Day key={day} dayName={day} />
                ))}
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
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
  },
  activity: {
    // padding: 3,
    borderColor: "#f9faf5",
    borderWidth: 1,
  },
  subject: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9faf5",
    padding: 5,
    // margin: 3,
    // borderRadius: 5,
    maxWidth: 100,
  },
  choque: {
    maxWidth: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 5,
  },
  infoSubject: {
    fontSize: 9,
    textAlign: "center",
  },
});
