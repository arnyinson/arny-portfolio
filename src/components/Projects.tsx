import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/styles";

const projects = [
  {
    num: "01",
    title: "Project One",
    desc: "Short description of your project. What it does and what problem it solves.",
    tags: ["REACT NATIVE", "EXPO"],
  },
  {
    num: "02",
    title: "Project Two",
    desc: "Short description of your project. What it does and what problem it solves.",
    tags: ["JAVASCRIPT", "CSS"],
  },
  {
    num: "03",
    title: "Project Three",
    desc: "Short description of your project. What it does and what problem it solves.",
    tags: ["REACT NATIVE"],
  },
];

export default function Projects() {
  return (
    <View style={styles.section}>
      <Text style={styles.label}>// PROJECTS</Text>
      <View style={styles.grid}>
        {projects.map((project) => (
          <View key={project.num} style={styles.card}>
            <Text style={styles.num}>{project.num}</Text>
            <Text style={styles.title}>{project.title}</Text>
            <Text style={styles.desc}>{project.desc}</Text>
            <View style={styles.tagsRow}>
              {project.tags.map((tag) => (
                <View key={tag} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
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
    padding: 16,
    width: "48%",
  },
  num: {
    color: colors.textDark,
    fontFamily: colors.mono,
    fontSize: 10,
    letterSpacing: 2,
    marginBottom: 8,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 6,
  },
  desc: {
    color: colors.textMuted,
    fontSize: 11,
    lineHeight: 18,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 10,
  },
  tag: {
    borderWidth: 0.5,
    borderColor: colors.border,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 2,
  },
  tagText: {
    color: colors.textDark,
    fontFamily: colors.mono,
    fontSize: 9,
    letterSpacing: 1,
  },
});
