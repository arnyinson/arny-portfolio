import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

const skills = [
  { name: "HTML", short: "HTML" },
  { name: "CSS", short: "CSS" },
  { name: "JavaScript", short: "JS" },
  { name: "Java", short: "Java" },
  { name: "C#", short: "C#" },
  { name: "Python", short: "Py" },
  { name: "React Native", short: "RN" },
];

function BouncingIcon({
  skill,
  delay,
  isDark,
}: {
  skill: (typeof skills)[0];
  delay: number;
  isDark: boolean;
}) {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(bounceAnim, {
          toValue: -12,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.delay(800),
      ]),
    ).start();
  }, []);

  return (
    <View style={styles.iconWrap}>
      <Animated.View
        style={[
          styles.iconBox,
          {
            backgroundColor: isDark ? "#1f2937" : "#ffffff",
            borderColor: isDark ? "#374151" : "#d1d5db",
            transform: [{ translateY: bounceAnim }],
          },
        ]}
      >
        <Text
          style={[styles.iconText, { color: isDark ? "#f9fafb" : "#374151" }]}
        >
          {skill.short}
        </Text>
      </Animated.View>
      <Text
        style={[styles.iconLabel, { color: isDark ? "#6b7280" : "#9ca3af" }]}
      >
        {skill.name}
      </Text>
    </View>
  );
}

type Props = { isDark: boolean };

export default function About({ isDark }: Props) {
  return (
    <View
      style={[
        styles.section,
        {
          backgroundColor: isDark ? "#111827" : "#ffffff",
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
                backgroundColor: isDark ? "#1f2937" : "#f3f4f6",
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
      <View style={styles.iconsRow}>
        {skills.map((skill, i) => (
          <BouncingIcon
            key={skill.name}
            skill={skill}
            delay={i * 150}
            isDark={isDark}
          />
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
    marginBottom: 20,
    textAlign: "center",
  },
  iconsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "center",
  },
  iconWrap: {
    alignItems: "center",
    gap: 6,
  },
  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 13,
    fontWeight: "600",
  },
  iconLabel: {
    fontSize: 11,
  },
});
