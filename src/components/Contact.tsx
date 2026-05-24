import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { colors } from "../constants/styles";

const contacts = [
  { label: "EMAIL", value: "arny@email.com", link: "mailto:arny@email.com" },
  {
    label: "GITHUB",
    value: "github.com/arnyinson",
    link: "https://github.com/arnyinson",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/arnyinson",
    link: "https://linkedin.com/in/arnyinson",
  },
  { label: "LOCATION", value: "Philippines", link: null },
];

export default function Contact() {
  return (
    <View style={styles.section}>
      <Text style={styles.label}>// CONTACT</Text>
      <View style={styles.grid}>
        {contacts.map((item) => (
          <TouchableOpacity
            key={item.label}
            style={styles.card}
            onPress={() => item.link && Linking.openURL(item.link)}
          >
            <Text style={styles.cardLabel}>{item.label}</Text>
            <Text style={styles.cardValue}>{item.value}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>ARNY INSON — 2025</Text>
        <Text style={styles.footerText}>BUILT WITH REACT NATIVE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 28,
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
    color: colors.green,
    fontFamily: colors.mono,
    fontSize: 9,
    letterSpacing: 2,
    marginBottom: 6,
  },
  cardValue: {
    color: colors.textSecondary,
    fontSize: 11,
  },
  footer: {
    marginTop: 40,
    paddingTop: 20,
    borderTopWidth: 0.5,
    borderTopColor: colors.borderMuted,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    color: colors.textDark,
    fontFamily: colors.mono,
    fontSize: 9,
    letterSpacing: 1,
  },
});
