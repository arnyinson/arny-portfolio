import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const resumeHTML = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Arny Inson - Resume</title><style>*{margin:0;padding:0;box-sizing:border-box;}body{font-family:Arial,sans-serif;padding:40px;color:#374151;max-width:800px;margin:0 auto;}h1{font-size:28px;font-weight:700;color:#111827;margin-bottom:4px;}.tagline{font-size:14px;color:#6b7280;margin-bottom:4px;}.contact-info{font-size:13px;color:#6b7280;margin-bottom:20px;}.divider{border-top:1px solid #d1d5db;margin:16px 0;}.section-title{font-size:13px;font-weight:700;color:#374151;letter-spacing:1px;text-transform:uppercase;margin-bottom:10px;}.item{margin-bottom:10px;}.item-title{font-size:14px;font-weight:600;color:#111827;}.item-sub{font-size:13px;color:#6b7280;}.skills-row{display:flex;flex-wrap:wrap;gap:8px;}.skill{background:#f3f4f6;border:1px solid #d1d5db;padding:4px 12px;border-radius:20px;font-size:12px;color:#374151;}</style></head><body><h1>Arny B. Inson</h1><p class="tagline">IT Student | Web & Mobile Developer</p><p class="contact-info">Brgy. 180, Caloocan City &nbsp;|&nbsp; arnyinson@gmail.com &nbsp;|&nbsp; 09613272265 &nbsp;|&nbsp; github.com/arnyinson</p><div class="divider"></div><div class="section-title">About</div><p style="font-size:13px;color:#6b7280;line-height:1.6;margin-bottom:16px;">A 3rd year BS Information Technology student at STI College San Jose del Monte. Passionate about web and mobile development.</p><div class="divider"></div><div class="section-title">Education</div><div class="item"><div class="item-title">STI San Jose del Monte</div><div class="item-sub">BS Information Technology &nbsp;|&nbsp; September 2023 - Present</div></div><div class="item"><div class="item-title">Amparo High School</div><div class="item-sub">Vocational/Technical &nbsp;|&nbsp; September 2021 - June 2023</div></div><div class="item"><div class="item-title">Kakawate National High School</div><div class="item-sub">High School &nbsp;|&nbsp; June 2017 - July 2021</div></div><div class="item"><div class="item-title">San Isidro Elementary School</div><div class="item-sub">Elementary &nbsp;|&nbsp; June 2012 - March 2017</div></div><div class="divider"></div><div class="section-title">Skills</div><div class="skills-row"><span class="skill">HTML</span><span class="skill">CSS</span><span class="skill">JavaScript</span><span class="skill">Java</span><span class="skill">C#</span><span class="skill">Python</span><span class="skill">React Native</span><span class="skill">Git & GitHub</span></div><div class="divider"></div><div class="section-title">Projects</div><div class="item"><div class="item-title">Personal Portfolio Website</div><div class="item-sub">Built using React Native & Expo. Deployed on Vercel.</div></div><div class="divider"></div><div class="section-title">Affiliations</div><div class="item"><div class="item-title">IntelliTech</div><div class="item-sub">Member &nbsp;|&nbsp; September 2023 - Present</div></div></body></html>`;

const navLinks = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  const handleDownload = () => {
    const blob = new Blob([resumeHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Arny_Inson_Resume.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleScroll = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <View style={styles.nav}>
      <Text style={styles.logo}>Arny Inson</Text>
      <View style={styles.links}>
        {navLinks.map((link) => (
          <TouchableOpacity key={link} onPress={() => handleScroll(link)}>
            <Text style={styles.link}>{link}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.btn} onPress={handleDownload}>
          <Text style={styles.btnText}>⬇ Resume</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: "#f3f4f6",
    borderBottomWidth: 1,
    borderBottomColor: "#d1d5db",
  },
  logo: {
    fontSize: 18,
    fontWeight: "600",
    color: "#374151",
  },
  links: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  link: {
    fontSize: 14,
    color: "#6b7280",
  },
  btn: {
    backgroundColor: "#374151",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "600",
  },
});
