import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../constants/styles";

export default function Hero() {
  return (
    <View style={styles.hero}>
      <Text style={styles.tag}>● AVAILABLE FOR WORK</Text>
      <Text style={styles.name}>Arny Inson</Text>
      <Text style={styles.sub}>IT STUDENT / WEB & MOBILE DEVELOPER</Text>
      <Text style={styles.desc}>
        A passionate IT student building modern web and mobile applications.
        Focused on creating clean, functional, and user-friendly digital
        experiences.
      </Text>
      <View style={styles.btnRow}>
        <TouchableOpacity style={styles.btnPrimary}>
          <Text style={styles.btnPrimaryText}>VIEW PROJECTS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline}>
          <Text style={styles.btnOutlineText}>CONTACT ME</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    padding: 28,
    borderBottomWidth: 0.5,
    borderBottomColor: "#1e1e1e",
  },
  tag: {
    color: colors.green,
    fontFamily: colors.mono,
    fontSize: 11,
    letterSpacing: 2,
    marginBottom: 12,
  },
  name: {
    color: colors.textPrimary,
    fontFamily: colors.mono,
    fontSize: 32,
    fontWeight: "500",
    marginBottom: 6,
  },
  sub: {
    color: colors.textMuted,
    fontFamily: colors.mono,
    fontSize: 11,
    letterSpacing: 1,
    marginBottom: 16,
  },
  desc: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 22,
    marginBottom: 24,
  },
  btnRow: {
    flexDirection: "row",
    gap: 12,
  },
  btnPrimary: {
    backgroundColor: colors.green,
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 4,
  },
  btnPrimaryText: {
    color: colors.bgDark,
    fontFamily: colors.mono,
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 1,
  },
  btnOutline: {
    borderWidth: 0.5,
    borderColor: colors.green,
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 4,
  },
  btnOutlineText: {
    color: colors.green,
    fontFamily: colors.mono,
    fontSize: 11,
    letterSpacing: 1,
  },
});
