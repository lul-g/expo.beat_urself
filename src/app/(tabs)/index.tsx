// App.tsx
import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// import your stores
import { usePushupStore, useSitupStore, useStepStore } from "@/store/exercises";
import { useUserProgressStore } from "@/store/userProgress.store";

export default function App() {
  // user progress
  const { level, currentXP, addXP } = useUserProgressStore();

  // exercise stores
  const pushups = usePushupStore((state) => state.repsSoFar);
  const pushupPoints = usePushupStore((state) => state.multiplier);
  const addPushups = usePushupStore((state) => state.addReps);

  const situps = useSitupStore((state) => state.repsSoFar);
  const situpPoints = useSitupStore((state) => state.multiplier);
  const addSitups = useSitupStore((state) => state.addReps);

  const steps = useStepStore((state) => state.repsSoFar);
  const stepPoints = useStepStore((state) => state.multiplier);
  const addSteps = useStepStore((state) => state.addReps);

  // XP max for current level
  const xpMax = level * 1000;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Beat yourself, every single day.</Text>

      {/* Profile / XP */}
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={50} color="white" />
        </View>
        <Text style={styles.levelText}>BEGINNER</Text>
        <Text style={styles.levelNumber}>Level {level}</Text>

        <View style={styles.progressBar}>
          <Text style={[styles.xpText, { fontSize: 14 }]}>XP Progress</Text>
          <View
            style={[
              styles.progressFill,
              { width: `${(currentXP / xpMax) * 100}%` },
            ]}
          />
          <Text style={[styles.xpText, { right: 0, fontSize: 14 }]}>
            <Text style={{ fontWeight: "700" }}>{Math.floor(currentXP)}</Text> /{" "}
            {xpMax}
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Today's Exercises</Text>

      {/* Pushups */}
      <ExerciseCard
        title="Pushups"
        progress={pushups}
        max={50}
        color="#27c57b"
        onIncrement={() => {
          addPushups(1);
          addXP(pushupPoints);
        }}
        onDecrement={() => {
          if (pushups > 0) {
            addPushups(-1);
            addXP(-pushupPoints);
          }
        }}
      />

      {/* Situps */}
      <ExerciseCard
        title="Situps"
        progress={situps}
        max={40}
        color="#F59E0B"
        onIncrement={() => {
          addSitups(1);
          addXP(situpPoints);
        }}
        onDecrement={() => {
          if (situps > 0) {
            addSitups(-1);
            addXP(-situpPoints);
          }
        }}
      />

      {/* Steps */}
      <ExerciseCard
        title="Steps"
        progress={steps}
        max={5000}
        color="#3B82F6"
        onIncrement={() => {
          addSteps(100);
          addXP(100 * stepPoints);
        }}
        onDecrement={() => {
          if (steps > 0) {
            addSteps(-100);
            addXP(-100 * stepPoints);
          }
        }}
      />

      <Text style={styles.sectionTitle}>Daily Rewards</Text>
      <View style={styles.rewardsContainer}>
        <TouchableOpacity style={[styles.rewardCard, styles.claimCard]}>
          <Text style={[styles.rewardTitle, { color: "white" }]}>Reward</Text>
          <Text style={[styles.rewardValue, { color: "white" }]}>Claim!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const ExerciseCard = ({
  title,
  progress,
  max,
  color,
  onIncrement,
  onDecrement,
}: any) => {
  const progressPercent = Math.min((progress / max) * 100, 100);
  return (
    <View style={styles.exerciseCard}>
      <View
        style={{
          padding: 5,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          width: 50,
          height: 50,
          backgroundColor: color,
        }}
      >
        <FontAwesome6 name="dumbbell" size={24} color="black" />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.exerciseTitle}>{title}</Text>
        <View style={styles.exerciseProgressBar}>
          <View
            style={[
              styles.exerciseProgressFill,
              { width: `${progressPercent}%`, backgroundColor: color },
            ]}
          />
        </View>
        <Text style={styles.exerciseText}>
          <Text style={{ fontWeight: "700" }}>{progress}</Text> / {max}
        </Text>
      </View>

      <View style={[styles.buttons, { flexDirection: "row", gap: 5 }]}>
        <TouchableOpacity
          style={[styles.addButton, { borderColor: color }]}
          onPress={onIncrement}
        >
          <Entypo name="plus" size={20} color={color} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.addButton, { borderColor: color }]}
          onPress={onDecrement}
        >
          <Entypo name="minus" size={20} color={color} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// styles remain unchanged

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F9FAFB",
  },
  title: { fontSize: 28, fontWeight: "bold" },
  subtitle: { fontSize: 16, color: "#6B7280", marginBottom: 20 },
  profile: { alignItems: "center", marginBottom: 30 },
  avatar: {
    backgroundColor: "#27c57b",
    padding: 20,
    borderRadius: 25,
    marginBottom: 10,
  },
  levelText: { color: "#10B981", fontWeight: "bold" },
  levelNumber: { fontSize: 24, fontWeight: "bold", marginTop: 10 },
  progressBar: {
    position: "relative",
    width: "80%",
    height: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 4,
    marginTop: 20,
  },
  progressFill: { height: "100%", backgroundColor: "#10B981", borderRadius: 4 },
  xpText: {
    position: "absolute",
    top: -20,
  },
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginVertical: 15 },

  exerciseCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    position: "relative",
    borderWidth: 1, // thinner border
    borderColor: "#d1d5db", // subtle gray (Tailwind gray-300)

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  exerciseTitle: { fontSize: 16, fontWeight: "bold" },
  exerciseProgressBar: {
    height: 6,
    backgroundColor: "#E5E7EB",
    borderRadius: 3,
    marginVertical: 10,
  },
  exerciseProgressFill: { height: "100%", borderRadius: 3 },
  exerciseText: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: 16,
  },
  buttons: {
    flexDirection: "row",
  },
  addButton: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  rewardsContainer: { flexDirection: "row", justifyContent: "space-between" },
  rewardCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  claimCard: { backgroundColor: "#10B981", marginRight: 0 },
  rewardTitle: { fontSize: 14, fontWeight: "bold" },
  rewardValue: { fontSize: 16, marginTop: 5 },
});
