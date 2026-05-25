import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/styles";

export default function Navbar() {
  return (
    <View style={styles.nav}>
      <Text style={styles.logo}>ARNY INSON PORTFOLIO</Text>
      <View style={styles.links}>
        <Text style={styles.link}>home</Text>
        <Text style={styles.link}>about</Text>
        <Text style={styles.link}>projects</Text>
        <Text style={styles.link}>contact</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.bgDark,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.borderMuted,
  },
  logo: {
    color: colors.green,
    fontFamily: colors.mono,
    fontSize: 14,
    letterSpacing: 2,
  },
  links: {
    flexDirection: "row",
    gap: 16,
  },
  link: {
    color: colors.textMuted,
    fontFamily: colors.mono,
    fontSize: 11,
    letterSpacing: 1,
  },
});
