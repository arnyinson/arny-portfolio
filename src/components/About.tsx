import { View, Text, StyleSheet } from 'react-native';

const skills = ['HTML', 'CSS', 'JavaScript', 'Java', 'C#', 'Python', 'React Native'];

export default function About() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>About Me</Text>
      <Text style={styles.desc}>
        I'm Arny Inson, a 3rd year BS Information Technology student at STI College 
        San Jose del Monte. I enjoy learning new technologies and building projects 
        that solve real problems.
      </Text>

      <View style={styles.infoGrid}>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>School</Text>
          <Text style={styles.infoValue}>STI San Jose del Monte</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Course</Text>
          <Text style={styles.infoValue}>BS Information Technology</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Year Level</Text>
          <Text style={styles.infoValue}>3rd Year</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Location</Text>
          <Text style={styles.infoValue}>Brgy. 180, Caloocan City</Text>
        </View>
      </View>

      <Text style={styles.skillsTitle}>Skills & Languages</Text>
      <View style={styles.skillsRow}>
        {skills.map((skill) => (
          <View key={skill} style={styles.skillTag}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 40,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 12,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    color: '#9ca3af',
    lineHeight: 22,
    textAlign: 'center',
    maxWidth: 600,
    alignSelf: 'center',
    marginBottom: 28,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
    marginBottom: 28,
  },
  infoCard: {
    backgroundColor: '#f3f4f6',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 16,
    width: '45%',
  },
  infoLabel: {
    fontSize: 11,
    color: '#9ca3af',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  infoValue: {
    fontSize: 13,
    color: '#374151',
    fontWeight: '500',
  },
  skillsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
    textAlign: 'center',
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
  },
  skillTag: {
    backgroundColor: '#f3f4f6',
    borderWidth: 1,
    borderColor: '#d1d5db',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  skillText: {
    color: '#6b7280',
    fontSize: 13,
    fontWeight: '500',
  },
});