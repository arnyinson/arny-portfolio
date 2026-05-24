import { ScrollView, StyleSheet } from "react-native";
import About from "../../src/components/About";
import Contact from "../../src/components/Contact";
import Hero from "../../src/components/Hero";
import Navbar from "../../src/components/Navbar";
import Projects from "../../src/components/Projects";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  },
});
