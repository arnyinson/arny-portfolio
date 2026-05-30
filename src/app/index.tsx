import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View
} from "react-native";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export const ThemeContext = require("react").createContext({
  isDark: false,
  toggleTheme: () => {},
});

export default function HomeScreen() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ScrollView
        style={[
          styles.container,
          { backgroundColor: isDark ? "#111827" : "#ffffff" },
        ]}
      >
        <View nativeID="home">
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          <Hero isDark={isDark} />
        </View>
        <View nativeID="about">
          <About isDark={isDark} />
        </View>
        <View nativeID="projects">
          <Projects isDark={isDark} />
        </View>
        <View nativeID="contact">
          <Contact isDark={isDark} />
        </View>
      </ScrollView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
