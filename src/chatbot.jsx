import { useState, useRef, useEffect } from "react";
import data from "./data/chatbotdata.json";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { type: "bot", text: data.introduction.welcome_message }
  ]);

  const [open, setOpen] = useState(false);
  const inputRef = useRef();
  const chatEndRef = useRef();

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ================= NORMALIZE =================
  const normalize = (msg = "") =>
    msg
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  // ================= HELPERS =================
  const hasAny = (text, arr) => arr.some(k => text.includes(k));

  const feeWords = ["fee", "fees", "cost", "tuition", "price"];

  const courseMap = {
    btech: ["btech", "engineering", "b tech"],
    bca: ["bca"],
    bcom: ["bcom"],
    bsc: ["bsc"],
    mba: ["mba"],
    ai: ["ai", "machine learning", "data science"],
    it: ["it"]
  };

  const countryMap = {
    usa: ["usa", "us", "america", "united states"],
    uk: ["uk", "britain", "england"],
    canada: ["canada"],
    australia: ["australia"],
    europe: ["europe"]
  };

  const detectCourse = (t) => {
    for (let c in courseMap) {
      if (hasAny(t, courseMap[c])) return c;
    }
    return null;
  };

  const detectCountry = (t) => {
    for (let c in countryMap) {
      if (hasAny(t, countryMap[c])) return c;
    }
    return null;
  };

  const hasFee = (t) => feeWords.some(w => t.includes(w));

  // ================= UNIVERSITIES (FIXED) =================
  const getUniversities = () => {
    return `🏫 TOP UNIVERSITIES:

🇺🇸 USA: ${data.universities.usa.join(", ")}
🇬🇧 UK: ${data.universities.uk.join(", ")}
🇨🇦 Canada: ${data.universities.canada.join(", ")}
🇦🇺 Australia: ${data.universities.australia.join(", ")}`;
  };

  // ================= COURSE FEES =================
  const getCourseFees = (course) => {
    const fees = {
      btech: `💰 B.Tech Fees:
🇺🇸 USA: $25K-$60K
🇬🇧 UK: £15K-$30K
🇨🇦 Canada: CAD 15K-$35K
🇦🇺 Australia: AUD 20K-$45K`,

      bca: `💰 BCA Fees:
🇺🇸 USA: $18K-$45K
🇬🇧 UK: £12K-$25K
🇨🇦 Canada: CAD 10K-$30K`,

      bcom: `💰 B.Com Fees:
🇺🇸 USA: $20K-$50K
🇬🇧 UK: £12K-$25K
🇨🇦 Canada: CAD 12K-$30K`,

      mba: `💰 MBA Fees:
🇺🇸 USA: $40K-$80K
🇬🇧 UK: £20K-$45K
🇨🇦 Canada: CAD 25K-$60K`
    };

    return fees[course] || "❌ No data available";
  };

  // ================= COUNTRY FEES =================
  const getCountryFees = (country) => {
    const fees = {
      usa: `🇺🇸 USA Fees:
Public: $20K-$35K
Private: $35K-$70K
Community: $8K-$15K`,

      uk: `🇬🇧 UK Fees:
UG: £12K-£25K
PG: £15K-£35K`,

      canada: `🇨🇦 Canada Fees:
College: CAD 10K-18K
University: CAD 15K-40K`,

      australia: `🇦🇺 Australia Fees:
UG: AUD 20K-45K
PG: AUD 25K-50K`
    };

    return fees[country] || "❌ No data available";
  };

  // ================= MAIN ENGINE (FIXED + CLEAN PRIORITY) =================
  function getReply(raw) {
    const msg = normalize(raw);

    const course = detectCourse(msg);
    const country = detectCountry(msg);
    const fee = hasFee(msg);

    // ================= GREETING =================
    if (hasAny(msg, data.greetings)) {
      return data.introduction.welcome_message;
    }

    // ================= UNIVERSITIES (HIGH PRIORITY FIX) =================
    if (
      msg.includes("university") ||
      msg.includes("universities") ||
      msg.includes("college") ||
      msg.includes("oxford") ||
      msg.includes("harvard") ||
      msg.includes("mit")
    ) {
      return getUniversities();
    }

    // ================= VISA (FIXED) =================
    if (msg.includes("visa")) {
      if (msg.includes("usa")) return data.visa_info.usa;
      if (msg.includes("uk")) return data.visa_info.uk;
      if (msg.includes("canada")) return data.visa_info.canada;
      if (msg.includes("australia")) return data.visa_info.australia;
      return data.visa_info.general;
    }

    // ================= COURSE + FEES (FIXED) =================
    if (course && fee) return getCourseFees(course);

    // ================= COUNTRY + FEES =================
    if (country && fee) return getCountryFees(country);

    // ================= ONLY FEES =================
    if (fee) {
      return `💰 Fees Overview:
🇺🇸 USA: $20K-$70K
🇬🇧 UK: £12K-$35K
🇨🇦 Canada: CAD 10K-$40K
🇦🇺 Australia: AUD 10K-$45K`;
    }

    // ================= ONLY COURSE =================
    if (course) {
      const map = {
        btech: "🎓 B.Tech = Engineering (4 Years)",
        bca: "💻 BCA = Software + AI + IT",
        bcom: "📊 B.Com = Finance + Accounting",
        bsc: "🔬 B.Sc = Science & Research",
        mba: "💼 MBA = Management & Leadership",
        ai: "🤖 AI = Machine Learning + Data Science",
        it: "💻 IT = Software + Cyber Security + AI"
      };
      return map[course];
    }

    // ================= COUNTRY ONLY =================
    if (country) {
      return data.countries[country].description;
    }

    // ================= STUDY ABROAD =================
    if (msg.includes("study") || msg.includes("abroad")) {
      return `${data.study_abroad.intro}
🌍 ${data.study_abroad.top_destinations.join(", ")}`;
    }

    // ================= CONTACT =================
    if (msg.includes("contact") || msg.includes("phone") || msg.includes("email")) {
      return `📞 ${data.company.phone}
📧 ${data.company.email}`;
    }

    // ================= DEFAULT =================
    return data.default_response;
  }

  // ================= SEND =================
  function sendMessage() {
    const msg = inputRef.current.value.trim();
    if (!msg) return;

    setMessages(prev => [...prev, { type: "user", text: msg }]);

    const reply = getReply(msg);

    setTimeout(() => {
      setMessages(prev => [...prev, { type: "bot", text: reply }]);
    }, 100);

    inputRef.current.value = "";
  }

  return (
    <>
      {/* FLOAT BUTTON */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          background: "#0b1a53",
          color: "#fff",
          width: 55,
          height: 55,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer"
        }}
      >
        💬
      </div>

      {/* CHAT BOX */}
      {open && (
        <div style={{
          position: "fixed",
          bottom: 90,
          right: 20,
          width: 340,
          height: 450,
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 5px 20px rgba(0,0,0,0.2)"
        }}>
          <div style={{
            background: "#0b1a53",
            color: "#fff",
            padding: 12
          }}>
            <b>{data.meta.bot_name}</b>
          </div>

          <div style={{ flex: 1, overflowY: "auto", padding: 10 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ textAlign: m.type === "user" ? "right" : "left" }}>
                <span style={{
                  display: "inline-block",
                  padding: 8,
                  margin: 4,
                  borderRadius: 10,
                  background: m.type === "user" ? "#0b1a53" : "#eee",
                  color: m.type === "user" ? "#fff" : "#000"
                }}>
                  {m.text}
                </span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div style={{ display: "flex" }}>
            <input
              ref={inputRef}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              style={{ flex: 1, padding: 10, border: "none" }}
              placeholder="Ask anything..."
            />
            <button
              onClick={sendMessage}
              style={{
                background: "#0b1a53",
                color: "#fff",
                border: "none",
                padding: "0 15px"
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}