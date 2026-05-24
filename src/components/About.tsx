import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/styles";

const aboutItems = [
  { label: "COURSE", value: "BS Information Technology" },
  { label: "FOCUS", value: "Web & Mobile Development" },
  { label: "LOCATION", value: "Philippines" },
  { label: "STATUS", value: "Open to opportunities", green: true },
];

const skills = [
  "React Native",
  "JavaScript",
  "HTML/CSS",
  "Git & GitHub",
  "Expo",
  "Vercel",
];

export default function About() {
  return (
    <View style={styles.section}>
      <Text style={styles.label}>// ABOUT ME</Text>
      <View style={styles.grid}>
        {aboutItems.map((item) => (
          <View key={item.label} style={styles.card}>
            <Text style={styles.cardLabel}>{item.label}</Text>
            <Text
              style={[styles.cardValue, item.green && { color: colors.green }]}
            >
              {item.value}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.skillsRow}>
        {skills.map((skill) => (
          <View key={skill} style={styles.skillTag}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 28,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.borderMuted,
  },
  label: {
    color: colors.green,
    fontFamily: colors.mono,
    fontSize: 10,
    letterSpacing: 3,
    marginBottom: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  card: {
    backgroundColor: colors.card,
    borderWidth: 0.5,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 14,
    width: "48%",
  },
  cardLabel: {
    color: colors.textLabel,
    fontFamily: colors.mono,
    fontSize: 9,
    letterSpacing: 2,
    marginBottom: 4,
  },
  cardValue: {
    color: colors.textPrimary,
    fontSize: 12,
  },
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 14,
  },
  skillTag: {
    borderWidth: 0.5,
    borderColor: colors.green,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 2,
  },
  skillText: {
    color: colors.green,
    fontFamily: colors.mono,
    fontSize: 10,
    letterSpacing: 1,
  },
});
