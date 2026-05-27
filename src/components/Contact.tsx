import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const contacts = [
  { label: 'Email', value: 'arnyinson2516@gmail.com', link: 'mailto:arnyinson2516@gmail.com' },
  { label: 'GitHub', value: 'github.com/arnyinson', link: 'https://github.com/arnyinson' },
  { label: 'Location', value: 'Brgy. 180, Caloocan City', link: null },
];

export default function Contact() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Contact Me</Text>
      <Text style={styles.subtitle}>Feel free to reach out anytime!</Text>

      <View style={styles.grid}>
        {contacts.map((item) => (
          <TouchableOpacity
            key={item.label}
            style={styles.card}
            onPress={() => item.link && Linking.openURL(item.link)}
            disabled={!item.link}
          >
            <Text style={styles.label}>{item.label}</Text>
            <Text style={[styles.value, item.link && { color: '#6b7280' }]}>
              {item.value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Arny Inson. All rights reserved.</Text>
        <Text style={styles.footerSub}>Built with React Native & Expo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 40,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#374151',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#9ca3af',
    textAlign: 'center',
    marginBottom: 28,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#f3f4f6',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    padding: 20,
    width: '45%',
    minWidth: 200,
  },
  label: {
    fontSize: 11,
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
  },
  value: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  footer: {
    alignItems: 'center',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#d1d5db',
  },
  footerText: {
    fontSize: 13,
    color: '#9ca3af',
    marginBottom: 4,
  },
  footerSub: {
    fontSize: 12,
    color: '#d1d5db',
  },
});