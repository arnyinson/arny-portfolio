import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const contacts = [
  {
    label: "Email",
    value: "arnyinson@gmail.com",
    link: "mailto:arnyinson@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/arnyinson",
    link: "https://github.com/arnyinson",
  },
  { label: "Location", value: "Brgy. 180, Caloocan City", link: null },
];

type Props = { isDark: boolean };

export default function Contact({ isDark }: Props) {
  return (
    <View
      style={[
        styles.section,
        { backgroundColor: isDark ? "#1f2937" : "#ffffff" },
      ]}
    >
      <Text style={[styles.title, { color: isDark ? "#f9fafb" : "#374151" }]}>
        Contact Me
      </Text>
      <Text
        style={[styles.subtitle, { color: isDark ? "#6b7280" : "#9ca3af" }]}
      >
        Feel free to reach out anytime!
      </Text>

      <View style={styles.grid}>
        {contacts.map((item) => (
          <TouchableOpacity
            key={item.label}
            style={[
              styles.card,
              {
                backgroundColor: isDark ? "#111827" : "#f3f4f6",
                borderColor: isDark ? "#374151" : "#d1d5db",
              },
            ]}
            onPress={() => item.link && Linking.openURL(item.link)}
            disabled={!item.link}
          >
            <Text
              style={[styles.label, { color: isDark ? "#6b7280" : "#9ca3af" }]}
            >
              {item.label}
            </Text>
            <Text
              style={[styles.value, { color: isDark ? "#f9fafb" : "#374151" }]}
            >
              {item.value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View
        style={[
          styles.footer,
          { borderTopColor: isDark ? "#374151" : "#d1d5db" },
        ]}
      >
        <Text
          style={[styles.footerText, { color: isDark ? "#6b7280" : "#9ca3af" }]}
        >
          © 2025 Arny Inson. All rights reserved.
        </Text>
        <Text
          style={[styles.footerSub, { color: isDark ? "#4b5563" : "#d1d5db" }]}
        >
          Built with React Native & Expo
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 40,
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
    gap: 12,
    justifyContent: "center",
    marginBottom: 40,
  },
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 20,
    width: "45%",
    minWidth: 200,
  },
  label: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
  },
  value: {
    fontSize: 14,
    fontWeight: "500",
  },
  footer: {
    alignItems: "center",
    paddingTop: 20,
    borderTopWidth: 1,
  },
  footerText: {
    fontSize: 13,
    marginBottom: 4,
  },
  footerSub: {
    fontSize: 12,
  },
});
