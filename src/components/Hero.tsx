import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const typingTexts = [
  "IT Student",
  "Web Developer",
  "Mobile Developer",
  "React Native Dev",
];

type Props = { isDark: boolean };

export default function Hero({ isDark }: Props) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
      <View style={styles.btnRow}>
        <TouchableOpacity
          style={[
            styles.btnPrimary,
            { backgroundColor: isDark ? "#4b5563" : "#6b7280" },
          ]}
        >
          <Text style={styles.btnPrimaryText}>View Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btnOutline,
            { borderColor: isDark ? "#4b5563" : "#9ca3af" },
          ]}
        >
          <Text
            style={[
              styles.btnOutlineText,
              { color: isDark ? "#9ca3af" : "#6b7280" },
            ]}
          >
            Contact Me
          </Text>
        </TouchableOpacity>
      </View>
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
  btnRow: {
    flexDirection: "row",
    gap: 12,
  },
  btnPrimary: {
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
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  btnOutlineText: {
    fontSize: 14,
    fontWeight: "600",
  },
});
