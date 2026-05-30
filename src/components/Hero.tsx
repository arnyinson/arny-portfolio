import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const typingTexts = [
  "IT Student",
  "Web Developer",
  "Mobile Developer",
  "React Native Dev",
];

const facts = [
  {
    emoji: "💻",
    text: "Arny started coding in C# before learning web development.",
  },
  {
    emoji: "🎓",
    text: "Arny is a 3rd year IT student at STI San Jose del Monte.",
  },
  {
    emoji: "📱",
    text: "This portfolio was built using React Native — a mobile framework used for web!",
  },
  {
    emoji: "🌐",
    text: "Arny knows 6 programming languages: HTML, CSS, JavaScript, Java, C#, and Python.",
  },
  {
    emoji: "🏢",
    text: "Arny is a member of IntelliTech organization since 2023.",
  },
  {
    emoji: "📍",
    text: "Arny lives in Barangay 180, Caloocan City, Philippines.",
  },
  {
    emoji: "🚀",
    text: "This is Arny's very first portfolio website — built from scratch!",
  },
];

type Props = { isDark: boolean };

export default function Hero({ isDark }: Props) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [fact, setFact] = useState(facts[0]);

  useEffect(() => {
    const random = Math.floor(Math.random() * facts.length);
    setFact(facts[random]);
  }, []);

  useEffect(() => {
    const fullText = typingTexts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
          if (currentText === fullText) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex]);

  const nextFact = () => {
    const random = Math.floor(Math.random() * facts.length);
    setFact(facts[random]);
  };

  return (
    <View
      style={[
        styles.hero,
        {
          backgroundColor: isDark ? "#111827" : "#f9fafb",
          borderBottomColor: isDark ? "#374151" : "#d1d5db",
        },
      ]}
    >
      <Image
        source={require("../../assets/profile.png")}
        style={[styles.photo, { borderColor: isDark ? "#374151" : "#d1d5db" }]}
      />
      <Text
        style={[styles.greeting, { color: isDark ? "#6b7280" : "#9ca3af" }]}
      >
        Hi, I'm
      </Text>
      <Text style={[styles.name, { color: isDark ? "#f9fafb" : "#374151" }]}>
        Arny Inson
      </Text>
      <View style={styles.typingRow}>
        <Text
          style={[styles.typingText, { color: isDark ? "#9ca3af" : "#6b7280" }]}
        >
          {currentText}
        </Text>
        <Text
          style={[styles.cursor, { color: isDark ? "#9ca3af" : "#6b7280" }]}
        >
          |
        </Text>
      </View>
      <Text style={[styles.desc, { color: isDark ? "#6b7280" : "#9ca3af" }]}>
        A 3rd year IT student passionate about web and mobile development.
        Currently learning and building projects using HTML, CSS, JavaScript,
        Java, C#, Python, and React Native.
      </Text>

      {/* Fun Fact Card */}
      <View
        style={[
          styles.factCard,
          {
            backgroundColor: isDark ? "#1f2937" : "#ffffff",
            borderColor: isDark ? "#374151" : "#e5e7eb",
          },
        ]}
      >
        <Text style={styles.factEmoji}>{fact.emoji}</Text>
        <Text
          style={[styles.factLabel, { color: isDark ? "#6b7280" : "#9ca3af" }]}
        >
          Did you know?
        </Text>
        <Text
          style={[styles.factText, { color: isDark ? "#f9fafb" : "#374151" }]}
        >
          {fact.text}
        </Text>
      </View>
      <Text
        style={[styles.factBtn, { color: isDark ? "#6b7280" : "#9ca3af" }]}
        onPress={nextFact}
      >
        ↻ Another fact
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    padding: 40,
    alignItems: "center",
    borderBottomWidth: 1,
  },
  photo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
    borderWidth: 3,
  },
  greeting: {
    fontSize: 18,
    marginBottom: 4,
  },
  name: {
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 12,
  },
  typingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    height: 28,
  },
  typingText: {
    fontSize: 18,
    fontWeight: "500",
  },
  cursor: {
    fontSize: 18,
    fontWeight: "300",
  },
  desc: {
    fontSize: 14,
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 500,
    marginBottom: 28,
  },
  factCard: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    maxWidth: 400,
    width: "100%",
    marginBottom: 12,
  },
  factEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  factLabel: {
    fontSize: 11,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  factText: {
    fontSize: 14,
    textAlign: "center",
    lineHeight: 22,
  },
  factBtn: {
    fontSize: 13,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
});
