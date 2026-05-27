import { ScrollView, StyleSheet, View } from "react-native";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View nativeID="home">
        <Navbar />
        <Hero />
      </View>
      <View nativeID="about">
        <About />
      </View>
      <View nativeID="projects">
        <Projects />
      </View>
      <View nativeID="contact">
        <Contact />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
