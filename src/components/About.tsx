import { StyleSheet, Text, View } from "react-native";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "C#",
  "Python",
  "React Native",
];

type Props = { isDark: boolean };

export default function About({ isDark }: Props) {
  return (
    <View
      style={[
        styles.section,
        {
          backgroundColor: isDark ? "#1f2937" : "#ffffff",
          borderBottomColor: isDark ? "#374151" : "#d1d5db",
        },
      ]}
    >
      <Text style={[styles.title, { color: isDark ? "#f9fafb" : "#374151" }]}>
        About Me
      </Text>
      <Text style={[styles.desc, { color: isDark ? "#6b7280" : "#9ca3af" }]}>
        I'm Arny Inson, a 3rd year BS Information Technology student at STI
        College San Jose del Monte. I enjoy learning new technologies and
        building projects that solve real problems.
      </Text>

      <View style={styles.infoGrid}>
        {[
          { label: "School", value: "STI San Jose del Monte" },
          { label: "Course", value: "BS Information Technology" },
          { label: "Year Level", value: "3rd Year" },
          { label: "Location", value: "Brgy. 180, Caloocan City" },
        ].map((item) => (
          <View
            key={item.label}
            style={[
              styles.infoCard,
              {
                backgroundColor: isDark ? "#111827" : "#f3f4f6",
                borderColor: isDark ? "#374151" : "#d1d5db",
              },
            ]}
          >
            <Text
              style={[
                styles.infoLabel,
                { color: isDark ? "#6b7280" : "#9ca3af" },
              ]}
            >
              {item.label}
            </Text>
            <Text
              style={[
                styles.infoValue,
                { color: isDark ? "#f9fafb" : "#374151" },
              ]}
            >
              {item.value}
            </Text>
          </View>
        ))}
      </View>

      <Text
        style={[styles.skillsTitle, { color: isDark ? "#f9fafb" : "#374151" }]}
      >
        Skills & Languages
      </Text>
      <View style={styles.skillsRow}>
        {skills.map((skill) => (
          <View
            key={skill}
            style={[
              styles.skillTag,
              {
                backgroundColor: isDark ? "#111827" : "#f3f4f6",
                borderColor: isDark ? "#374151" : "#d1d5db",
              },
            ]}
          >
            <Text
              style={[
                styles.skillText,
                { color: isDark ? "#9ca3af" : "#6b7280" },
              ]}
            >
              {skill}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 40,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },
  desc: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
    maxWidth: 600,
    alignSelf: "center",
    marginBottom: 28,
  },
  infoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "center",
    marginBottom: 28,
  },
  infoCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    width: "45%",
  },
  infoLabel: {
    fontSize: 11,
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  infoValue: {
    fontSize: 13,
    fontWeight: "500",
  },
  skillsTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center",
  },
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
  },
  skillTag: {
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  skillText: {
    fontSize: 13,
    fontWeight: "500",
  },
});
