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

  const includesAny = (text, arr = []) =>
    arr.some((k) => text.includes(k));

  // ================= KEYWORDS =================
  const feeWords = ["fee", "fees", "cost", "tuition", "price"];

  const courseMap = {
    btech: ["btech", "b tech", "engineering"],
    bca: ["bca"],
    bcom: ["bcom", "commerce"],
    mcom: ["mcom", "commerce"],
    bsc: ["bsc", "science"],
    mba: ["mba"],
    ai: ["ai", "data science", "machine learning", "artificial intelligence"],
    it: ["it", "software", "information technology"]
  };

  const countryMap = {
    usa: ["usa", "us", "america", "united states"],
    uk: ["uk", "britain", "england", "united kingdom"],
    canada: ["canada"],
    australia: ["australia"],
    europe: ["europe"]
  };

  // ================= DETECTORS =================
  const detectCourse = (t) => {
    for (let c in courseMap) {
      if (includesAny(t, courseMap[c])) return c;
    }
    return null;
  };

  const detectCountry = (t) => {
    for (let c in countryMap) {
      if (includesAny(t, countryMap[c])) return c;
    }
    return null;
  };

  const hasFee = (t) => includesAny(t, feeWords);

  // ================= INTENTS =================
  const isGreeting = (msg) =>
    includesAny(msg, data.greetings);

  const isIELTS = (msg) =>
    includesAny(msg, ["ielts", "toefl", "english test"]);

  const isCourseQuery = (msg) =>
    includesAny(msg, [
      "course",
      "courses",
      "program",
      "programs",
      "study options",
      "what can i study"
    ]);

  const isCountryQuery = (msg) =>
    includesAny(msg, [
      "country",
      "countries",
      "usa",
      "uk",
      "canada",
      "australia",
      "america",
      "britain"
    ]);

  const isUniversityQuery = (msg) =>
    includesAny(msg, [
      "university",
      "universities",
      "college",
      "colleges",
      "harvard",
      "mit",
      "stanford",
      "oxford"
    ]);

  // ================= DATA =================
  const getUniversities = () => `
🏫 TOP UNIVERSITIES:

🇺🇸 USA: ${data.universities.usa.join(", ")}
🇬🇧 UK: ${data.universities.uk.join(", ")}
🇨🇦 Canada: ${data.universities.canada.join(", ")}
🇦🇺 Australia: ${data.universities.australia.join(", ")}
`;

  const getCourseFees = (course) => {
    const fees = {
      btech: `💰 B.Tech Fees:
USA: $25K-$60K
UK: £15K-$30K
Canada: CAD 15K-$35K
Australia: AUD 20K-$45K`,

      bca: `💰 BCA Fees:
USA: $18K-$45K
UK: £12K-$25K
Canada: CAD 10K-$30K`,

      bcom: `💰 B.Com Fees:
USA: $20K-$50K
UK: £12K-$25K
Canada: CAD 12K-$30K`,


      mcom: `💰 M.Com Fees:
USA: $20K-$60K
UK: £12K-$30K
Canada: CAD 12K-$45K`,


      mba: `💰 MBA Fees:
USA: $40K-$80K
UK: £20K-$45K
Canada: CAD 25K-$60K`
    };

    return fees[course] || "❌ Course info not available";
  };

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

    return fees[country] || "❌ Country fee info not available";
  };

  // ================= MAIN ENGINE (FIXED ORDER) =================
  function getReply(raw) {
    const msg = normalize(raw);

    const course = detectCourse(msg);
    const country = detectCountry(msg);
    const fee = hasFee(msg);

    // 1 GREETING
    if (isGreeting(msg)) return data.introduction.welcome_message;

    // 2 IELTS FIXED
    if (isIELTS(msg)) {
      return data.services?.ielts ||
        "📘 IELTS Training: Reading, Writing, Listening, Speaking (Band 6–8+)";
    }

    // 3 COURSES FIXED
    if (isCourseQuery(msg)) {
      return `
🎓 POPULAR COURSES:

${data.courses.popular.join("\n")}
`;
    }

    // 4 UNIVERSITIES
    if (isUniversityQuery(msg)) return getUniversities();

    // 5 VISA
    if (msg.includes("visa")) {
      if (msg.includes("usa")) return data.visa_info.usa;
      if (msg.includes("uk")) return data.visa_info.uk;
      if (msg.includes("canada")) return data.visa_info.canada;
      if (msg.includes("australia")) return data.visa_info.australia;
      return data.visa_info.general;
    }

    // 6 COUNTRY FULL INFO
    if (isCountryQuery(msg)) {
      return `
🌍 STUDY DESTINATIONS:

🇺🇸 USA: ${data.countries.usa.description}
🇬🇧 UK: ${data.countries.uk.description}
🇨🇦 Canada: ${data.countries.canada.description}
🇦🇺 Australia: ${data.countries.australia.description}
`;
    }

    // 7 COURSE + FEES (FIXED STRONG CHECK)
    if (course && hasFee(msg)) return getCourseFees(course);

    // 8 COUNTRY + FEES
    if (country && hasFee(msg)) return getCountryFees(country);

    // 9 ONLY FEES
    if (fee) {
      return `💰 Fees Overview:
USA: $20K-$70K
UK: £12K-$35K
Canada: CAD 10K-$40K
Australia: AUD 10K-$45K`;
    }

    // 10 COURSE ONLY
    if (course) {
      const map = {
        btech: "🎓 B.Tech = Engineering (4 Years)",
        bca: "💻 BCA = Software + IT + AI",
        bcom: "📊 B.Com = Finance + Accounting",
        mcom: "📊 M.Com = Finance + Accounting",
        bsc: "🔬 B.Sc = Science",
        mba: "💼 MBA = Management",
        ai: "🤖 AI = Data Science + ML",
        it: "💻 IT = Software + Cyber Security"
      };
      return map[course];
    }

    // COUNTRY ONLY
    if (country) return data.countries[country]?.description;

    // STUDY
    if (msg.includes("study") || msg.includes("abroad")) {
      return `${data.study_abroad.intro}
🌍 ${data.study_abroad.top_destinations.join(", ")}`;
    }

    // CONTACT
    if (msg.includes("contact") || msg.includes("phone") || msg.includes("email")) {
      return `📞 ${data.company.phone}
📧 ${data.company.email}`;
    }

    return data.default_response;
  }

  // ================= SEND =================
  function sendMessage() {
    const msg = inputRef.current.value.trim();
    if (!msg) return;

    setMessages((prev) => [...prev, { type: "user", text: msg }]);

    const reply = getReply(msg);

    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", text: reply }]);
    }, 100);

    inputRef.current.value = "";
  }

  return (
    <>
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
          <div style={{ background: "#0b1a53", color: "#fff", padding: 12 }}>
            <b>{data.meta?.bot_name}</b>
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
              style={{ flex: 1, padding: 10, border: "none", outline: "none" }}
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