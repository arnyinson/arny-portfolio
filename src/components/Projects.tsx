import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const projects = [
  {
    num: "01",
    title: "Personal Portfolio",
    desc: "My first portfolio website built using React Native and Expo. Deployed on Vercel.",
    tags: ["React Native", "Expo", "Vercel"],
    link: "https://github.com/arnyinson/arny-portfolio",
  },
  {
    num: "02",
    title: "Baka Capstone to ",
    desc: "Capstone Project: Nutrifit.",
    tags: ["REACT NATIVE", "EXPO"],
    link: null,
  },
  {
    num: "03",
    title: "Game siguro",
    desc: "Project sa Game dev next sem hehehe.",
    tags: ["D pa sure"],
    link: null,
  },
];

export default function Projects() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>My Projects</Text>
      <Text style={styles.subtitle}>Things I have built so far</Text>
      <View style={styles.grid}>
        {projects.map((project) => (
          <View key={project.num} style={styles.card}>
            <Text style={styles.num}>{project.num}</Text>
            <Text style={styles.projectTitle}>{project.title}</Text>
            <Text style={styles.desc}>{project.desc}</Text>
            <View style={styles.tagsRow}>
              {project.tags.map((tag) => (
                <View key={tag} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
            {project.link && (
              <TouchableOpacity
                style={styles.linkBtn}
                onPress={() => Linking.openURL(project.link!)}
              >
                <Text style={styles.linkText}>View on GitHub →</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 40,
    backgroundColor: "#f3f4f6",
    borderBottomWidth: 1,
    borderBottomColor: "#d1d5db",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#374151",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#9ca3af",
    textAlign: "center",
    marginBottom: 28,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
    padding: 20,
    width: "45%",
    minWidth: 280,
  },
  num: {
    fontSize: 12,
    color: "#d1d5db",
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },
  desc: {
    fontSize: 13,
    color: "#9ca3af",
    lineHeight: 20,
    marginBottom: 12,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 12,
  },
  tag: {
    backgroundColor: "#f3f4f6",
    borderWidth: 1,
    borderColor: "#d1d5db",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  tagText: {
    color: "#6b7280",
    fontSize: 11,
    fontWeight: "500",
  },
  linkBtn: {
    marginTop: 4,
  },
  linkText: {
    color: "#6b7280",
    fontSize: 13,
    fontWeight: "500",
  },
});
