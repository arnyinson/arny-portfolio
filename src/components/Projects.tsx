import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
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
    title: "Project Two",
    desc: "Short description of your project.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: null,
  },
  {
    num: "03",
    title: "Project Three",
    desc: "Short description of your project.",
    tags: ["Java"],
    link: null,
  },
];

type Props = { isDark: boolean };

export default function Projects({ isDark }: Props) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View
      style={[
        styles.section,
        {
          backgroundColor: isDark ? "#111827" : "#f3f4f6",
          borderBottomColor: isDark ? "#374151" : "#d1d5db",
        },
      ]}
    >
      <Text style={[styles.title, { color: isDark ? "#f9fafb" : "#374151" }]}>
        My Projects
      </Text>
      <Text
        style={[styles.subtitle, { color: isDark ? "#6b7280" : "#9ca3af" }]}
      >
        Things I have built so far
      </Text>
      <View style={[styles.grid, isMobile && styles.gridMobile]}>
        {projects.map((project) => (
          <View
            key={project.num}
            style={[
              styles.card,
              {
                backgroundColor: isDark ? "#1f2937" : "#ffffff",
                borderColor: isDark ? "#374151" : "#d1d5db",
              },
              isMobile && styles.cardMobile,
            ]}
          >
            <Text
              style={[styles.num, { color: isDark ? "#4b5563" : "#d1d5db" }]}
            >
              {project.num}
            </Text>
            <Text
              style={[
                styles.projectTitle,
                { color: isDark ? "#f9fafb" : "#374151" },
              ]}
            >
              {project.title}
            </Text>
            <Text
              style={[styles.desc, { color: isDark ? "#6b7280" : "#9ca3af" }]}
            >
              {project.desc}
            </Text>
            <View style={styles.tagsRow}>
              {project.tags.map((tag) => (
                <View
                  key={tag}
                  style={[
                    styles.tag,
                    {
                      backgroundColor: isDark ? "#111827" : "#f3f4f6",
                      borderColor: isDark ? "#374151" : "#d1d5db",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.tagText,
                      { color: isDark ? "#9ca3af" : "#6b7280" },
                    ]}
                  >
                    {tag}
                  </Text>
                </View>
              ))}
            </View>
            {project.link && (
              <TouchableOpacity onPress={() => Linking.openURL(project.link!)}>
                <Text
                  style={[
                    styles.linkText,
                    { color: isDark ? "#9ca3af" : "#6b7280" },
                  ]}
                >
                  View on GitHub →
                </Text>
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
    padding: 24,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 28,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "center",
  },
  gridMobile: {
    flexDirection: "column",
  },
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 20,
    width: "45%",
    overflow: "hidden",
  },
  cardMobile: {
    width: "100%",
  },
  num: {
    fontSize: 12,
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  desc: {
    fontSize: 13,
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
    borderWidth: 1,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  tagText: {
    fontSize: 11,
    fontWeight: "500",
  },
  linkText: {
    fontSize: 13,
    fontWeight: "500",
  },
});
