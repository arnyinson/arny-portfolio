import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Hero() {
  return (
    <View style={styles.hero}>
      <Text style={styles.greeting}>Hi, I'm</Text>
      <Text style={styles.name}>Arny Inson</Text>
      <Text style={styles.title}>IT Student at STI San Jose del Monte</Text>
      <Text style={styles.desc}>
        A 3rd year IT student passionate about web and mobile development.
        Currently learning and building projects using HTML, CSS, JavaScript,
        Java, C#, Python, and React Native.
      </Text>
      <View style={styles.btnRow}>
        <TouchableOpacity style={styles.btnPrimary}>
          <Text style={styles.btnPrimaryText}>View Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline}>
          <Text style={styles.btnOutlineText}>Contact Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    padding: 40,
    alignItems: "center",
    backgroundColor: "#f9fafb",
    borderBottomWidth: 1,
    borderBottomColor: "#d1d5db",
  },
  greeting: {
    fontSize: 18,
    color: "#9ca3af",
    marginBottom: 4,
  },
  name: {
    fontSize: 40,
    fontWeight: "700",
    color: "#374151",
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    color: "#6b7280",
    marginBottom: 16,
    fontWeight: "500",
  },
  desc: {
    fontSize: 14,
    color: "#9ca3af",
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 500,
    marginBottom: 28,
  },
  btnRow: {
    flexDirection: "row",
    gap: 12,
  },
  btnPrimary: {
    backgroundColor: "#6b7280",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  btnPrimaryText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
  btnOutline: {
    borderWidth: 1,
    borderColor: "#9ca3af",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  btnOutlineText: {
    color: "#6b7280",
    fontSize: 14,
    fontWeight: "600",
  },
});
