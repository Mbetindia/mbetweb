'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import SmartImage from "./components/SmartImage"; // ✔
export default function Home() {

  // ➕ ADDED FOR SIDEBAR
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  // close if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const quotes = [
    "Learn Today, Lead Tomorrow → Real-World Skills",
    "Turn Your Knowledge Into Practical Experience → Project Guidance & Industry Exposure",
    "Build Skills That Companies Actually Hire For → Job Ready",
    "Your Career Starts Here → Internship, Training & Mentorship",
    "Don’t Just Study — Start Building → Hands-On Learning"
  ];

  const [quote, setQuote] = useState('');
  const [qIndex, setQIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (quotes.length === 0) return;

    const currentQuote = quotes[qIndex % quotes.length];

    if (charIndex < currentQuote.length) {
      timeout = setTimeout(() => {
        setQuote(prev => prev + currentQuote.charAt(charIndex));
        setCharIndex(prev => prev + 1);
      }, 45);
    } else {
      timeout = setTimeout(() => {
        setQuote('');
        setCharIndex(0);
        setQIndex(prev => (prev + 1) % quotes.length);
      }, 1800);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, qIndex, quotes]);

  return (
    <>

      {/* GLOBAL RESPONSIVE CSS */}
      <style>{`
        body { margin: 0; }

        /* desktop navbar visible */
        @media (min-width: 769px){
          .desktop-nav{ display:flex !important; }
          .mobile-menu-btn{ display:none !important; }
        }

        /* mobile sidebar visible */
        @media (max-width: 768px){
          .desktop-nav{ display:none !important; }
          .mobile-menu-btn{ display:block !important; }
        }

        .mobile-sidebar{
  position:fixed;
  top:70px;              /* below navbar */
  left:0;
  width:250px;
  background:#0f2027;
  color:#fff;
  transform:translateX(-100%);
  transition:.3s;
  padding:20px;
  z-index:9999;
  border-top-right-radius:12px;
  border-bottom-right-radius:12px;
  box-shadow: 4px 0 20px rgba(0,0,0,0.3);
}

.mobile-sidebar.open{
  transform:translateX(0);
}

        .mobile-sidebar a{
          display:block;
          color:white;
          margin:12px 0;
          text-decoration:none;
          font-size:16px;
        }

        .close-btn{
          font-size:24px;
          text-align:right;
          cursor:pointer;
        }
      `}</style>

      {/* SIDEBAR MENU (MOBILE) */}
      <div ref={menuRef} className={`mobile-sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={()=>setMenuOpen(false)}>×</div>

        <Link href="/" onClick={()=>setMenuOpen(false)}>Home</Link>
        <Link href="/services" onClick={()=>setMenuOpen(false)}>Services</Link>
        <Link href="/projects" onClick={()=>setMenuOpen(false)}>Projects</Link>
        <Link href="/gallery" onClick={()=>setMenuOpen(false)}>Events</Link>
        <Link href="/about" onClick={()=>setMenuOpen(false)}>Careers</Link>
        <Link href="/contact" onClick={()=>setMenuOpen(false)}>Contact</Link>
      </div>

      {/* NAVBAR (YOUR ORIGINAL – UNCHANGED) */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 50px',
        background: 'linear-gradient(90deg, #203a43, #2c5364)',
        color: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
  
  {/* HAMBURGER MOBILE */}
  <div
    className="mobile-menu-btn"
    onClick={() => setMenuOpen(true)}
    style={{ fontSize: '26px', cursor: 'pointer' }}
  >
    ☰
  </div>

  {/* COMPANY NAME */}
  <div className="logo" style={{ fontWeight: 700, fontSize: '22px' }}>
    MBET INDIA PVT LTD
  </div>

</div>

        {/* DESKTOP NAV ORIGINAL */}
        <ul className="desktop-nav" style={{ listStyle: 'none', display: 'flex', gap: '25px' }}>
          <li><Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Home</Link></li>
          <li><Link href="/services" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Services</Link></li>
          <li><Link href="/projects" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Projects</Link></li>
          <li><Link href="/gallery" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Events</Link></li>
          <li><Link href="/about" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Careers</Link></li>
          <li><Link href="/contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Contact</Link></li>
        </ul>
      </nav>

      {/* RUNNING BAR */}
<div className="running-bar" style={{
  background: '#0f2027',
  padding: '10px 0',
  overflow: 'hidden',
  fontWeight: 500,
  color: '#ffffff'
}}>
  <span style={{
    display: 'inline-block',
    whiteSpace: 'nowrap',
    paddingLeft: '100%',          // smooth continuous effect
    animation: 'marquee 60s linear infinite'
  }}>
    ✨ Latest Announcement: Join our Internship & Learning Program and gain real-world experience • MBET INDIA PVT LTD ✨ 📞 +91 96239 39692
  </span>
</div>

<style>{`
@keyframes marquee {
  0% {
    transform: translateX(0);     /* 👈 page open होताच दिसेल */
  }
  100% {
    transform: translateX(-100%);
  }
}
`}</style>
      {/* HERO */}
      <div className="hero" style={{ textAlign: 'center', padding: '50px 20px' }}>
        <h1>MBET INDIA PVT LTD</h1>
        <p className="subtitle">“IT Solutions By IT Masters”</p>
        <div className="highlight">✓ Building Brands • ✓ SEO Friendly Development</div>
      </div>

      {/* REST OF YOUR CODE STAYS SAME */}
      {/* ✔ I did not change any structure or design */}
      {/* ✔ I only added responsive behaviour above */}

{/* ANNOUNCEMENT SECTION */}
<section className="announcement-section">
  <h2>Latest Announcements</h2>
  <p className="subtitle">Join Our Internship & Learning Program</p>
  <p id="quote" className="quote-text">{quote}</p>
</section>

<style>{`
.announcement-section{
  max-width:900px;
  margin:40px auto 0 auto;
  padding:60px 30px;
  background:linear-gradient(135deg,#0f2027,#203a43,#2c5364);
  border-radius:22px;
  text-align:center;
  color:#fff;
  position:relative;
  box-shadow:0 25px 50px rgba(0,0,0,0.35);
}

/* Glow border */
.announcement-section::before{
  content:"";
  position:absolute;
  inset:-3px;
  border-radius:24px;
  background:linear-gradient(90deg,#00e0ff,#00bcd4,#00e0ff);
  z-index:-1;
  filter:blur(14px);
  opacity:.65;
}

.announcement-section h2{
  font-size:34px;
}

.announcement-section h2::after{
  content:'';
  width:60px;
  height:3px;
  background:#00e0ff;
  display:block;
  margin:12px auto;
}

.subtitle{
  color:#cdeaff;
  margin-bottom:30px;
  font-size:18px;
}

/* QUOTE TEXT – IMMEDIATE DISPLAY */
.quote-text{
  font-size:22px;
  font-weight:500;
  min-height:80px;
  padding:22px 28px;
  background:rgba(255,255,255,0.08);
  border-radius:14px;
  display:inline-block;
  backdrop-filter:blur(6px);
  box-shadow:0 12px 30px rgba(0,0,0,0.25);
}

/* Blinking cursor only */
.quote-text::after{
  content:"|";
  margin-left:6px;
  animation:blink 1s infinite;
}

@keyframes blink{
  0%,50%,100%{opacity:1;}
  25%,75%{opacity:0;}
}
`}</style>

      {/* PROCESS */}
      <section style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h2>Process We Follow</h2>
        <p className="subtitle">“A clear process builds reliable products”</p>
        <div className="process-box" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '25px', marginTop: '20px' }}>
          {[
            { icon: '🎨', title: 'Design', desc: 'Clean UI / UX' },
            { icon: '⚙️', title: 'Development', desc: 'Secure & Scalable' },
            { icon: '🚀', title: 'Delivery / Launch', desc: 'On-Time Execution' },
            { icon: '🛠️', title: 'Support', desc: 'Long-Term Partnership' }
          ].map((p, i) => (
            <div key={i} className="process" style={{
              flex: '1 1 220px',
              background: '#fff',
              borderRadius: '15px',
              padding: '25px 20px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              textAlign: 'center',
              fontWeight: 500,
              transition: '0.3s'
            }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>{p.icon}</div>
              <b>{p.title}</b><br />
              <span>{p.desc}</span>
            </div>
          ))}
        </div>
      </section>

     {/* SERVICES AUTO RUN */}
<section style={{ padding: '60px 20px', textAlign: 'center' }}>
  <h2>What We Do</h2>
  <p>Our Services</p>

  <div className="service-wrapper">
    <div className="service-track">
      {[
        { emoji: '🌐', title: 'Web App', desc: 'SEO websites' },
        { emoji: '📱', title: 'Mobile App', desc: 'Android & iOS' },
        { emoji: '📈', title: 'AI / ML', desc: 'Automation' },
        { emoji: '⚛️', title: 'MERN', desc: 'JS Stack' },
        { emoji: '☕', title: 'Java', desc: 'Spring Boot' },
        { emoji: '🛒', title: 'E-Commerce', desc: 'Online Store' },
        { emoji: '🔗', title: 'Blockchain', desc: 'DApps' }
      ].concat([
        // duplicate for smooth loop
        { emoji: '🌐', title: 'Web App', desc: 'SEO websites' },
        { emoji: '📱', title: 'Mobile App', desc: 'Android & iOS' },
        { emoji: '📈', title: 'AI / ML', desc: 'Automation' },
        { emoji: '⚛️', title: 'MERN', desc: 'JS Stack' },
        { emoji: '☕', title: 'Java', desc: 'Spring Boot' },
        { emoji: '🛒', title: 'E-Commerce', desc: 'Online Store' },
        { emoji: '🔗', title: 'Blockchain', desc: 'DApps' }
      ]).map((s, i) => (
        <div key={i} className="service-box">
          <div className="emoji">{s.emoji}</div>
          <b>{s.title}</b>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<style>{`
.service-wrapper {
  overflow: hidden;
  width: 100%;
  margin-top: 30px;
}

.service-track {
  display: flex;
  gap: 15px;
  animation: slide 35s linear infinite;
}

.service-box {
  min-width: 160px;
  background: #fff;
  border-radius: 12px;
  padding: 12px;
  text-align: center;
  font-size: 13px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
}

.service-box .emoji {
  font-size: 22px;
  margin-bottom: 6px;
}

.service-box p {
  font-size: 12px;
  margin: 5px 0 0;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
`}</style>
     {/* Team MARQUEE */}
<section style={{ padding: '60px 20px', background: '#f4f6f9', textAlign: 'center' }}>
  <h2 style={{ fontSize: '32px', color: '#0f2027', marginBottom: '10px' }}>
    Excellent Team Outstanding Performance
  </h2>
  <p style={{ fontSize: '18px', color: '#2c5364', marginBottom: '40px' }}>
    Experts behind MBET INDIA PVT LTD
  </p>

  <marquee
    behavior="scroll"
    direction="left"
    scrollamount="6"
    onMouseOver={e => e.currentTarget.stop()}
    onMouseOut={e => e.currentTarget.start()}
  >
    <div
      style={{
        display: 'flex',
        gap: '25px',
        alignItems: 'flex-start',
        justifyContent: 'center',
        whiteSpace: 'nowrap'
      }}
    >
      {[
        { name: "Sumit More", role: "Java Full Stack Developer", desc: "Web & Android Development", img: "https://i.postimg.cc/fybgGr33/sumit.jpg" },
        { name: "Devika Patil", role: "MERN Developer", desc: "SEO, Ads & Social Media", img: "https://i.postimg.cc/02gZcR21/Devika.jpg" },
        { name: "Abhishek Kalantre", role: "Java Developer", desc: "SEO, Ads & Social Media", img: "https://i.postimg.cc/kGR8W4tb/abhijeetk.jpg" },
        { name: "Komal Ghadge", role: "Web Developer", desc: "HTML, CSS, JavaScript & SEO", img: "https://i.postimg.cc/Qd6gPdQ2/komal.jpg" },
        { name: "Bhavesh Dandavate", role: "MERN Developer", desc: "SEO, Ads & Social Media", img: "https://i.postimg.cc/jSbgdVGZ/Bhavesh.jpg" },
        { name: "Shivani Ghadge", role: "UI / UX Designer", desc: "Modern and user-focused designs", img: "https://i.postimg.cc/y8f5PBkq/Shivani.jpg" },
        { name: "Omkar Yadav", role: "MERN Developer", desc: "SEO, Ads & Social Media", img: "https://i.postimg.cc/02dGnz41/Omkar.jpg" },
        { name: "Sanika Deshmukh", role: "Backend Developer", desc: "Java, Spring Boot & MySQL", img: "https://i.postimg.cc/4x8vMxvG/Sanikad.jpg" },
        { name: "Sanika Pawar", role: "Digital Marketer", desc: "SEO, Ads & Social Media", img: "https://i.postimg.cc/sXzpGGsS/sanikap.jpg" },
        { name: "Shraddha Babar", role: "MERN Developer", desc: "SEO, Ads & Social Media", img: "https://i.postimg.cc/Sxz8ZfKW/shraddha.jpg" },
        { name: "Bhumika Nikam", role: "MERN Developer", desc: "SEO, Ads & Social Media", img: "https://i.postimg.cc/C51nbjty/bhumika.jpg" },
        { name: "Sneha Patil", role: "MERN Developer", desc: "SEO, Ads & Social Media", img: "https://i.postimg.cc/cJccJrQF/snehap.jpg" }
      ].map((member, i) => (
        <div
          key={i}
          style={{
            minWidth: '260px',
            background: '#fff',
            borderRadius: '15px',
            padding: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: '0.3s'
          }}
        >
          <SmartImage
            src={member.img}
            alt={member.name}
            width={120}
            height={120}
            style={{
              borderRadius: '50%',
              marginBottom: '10px'
            }}
          />

          <h3 style={{ fontSize: '18px', margin: '5px 0' }}>{member.name}</h3>
          <span style={{ fontSize: '14px', color: '#2c5364', fontWeight: '600' }}>
            {member.role}
          </span>
          <p style={{ fontSize: '14px', color: '#555', marginTop: '10px' }}>
            {member.desc}
          </p>
        </div>
      ))}
    </div>
  </marquee>
</section>
 {/* INTERNSHIP SELECTED STUDENTS MARQUEE */}
<section style={{ padding: '60px 20px', background: '#ffffff', textAlign: 'center' }}>
  <h2 style={{ fontSize: '32px', color: '#0f2027', marginBottom: '10px' }}>
    🎉 Congratulations to Our Internship Selected Students! 🎉 
    <br />🌟 Batch: 2024–25 🌟
  </h2>
  <p style={{ fontSize: '18px', color: '#2c5364', marginBottom: '40px' }}>
    Selected interns of MBET INDIA PVT LTD
  </p>

  <marquee
    behavior="scroll"
    direction="left"
    scrollamount="6"
    onMouseOver={e => e.currentTarget.stop()}
    onMouseOut={e => e.currentTarget.start()}
  >
    <div
      style={{
        display: 'flex',
        gap: '25px',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'nowrap'
      }}
    >
      {[
        {
          name: "Asmita Kale",
          img: "https://i.postimg.cc/5y4W4g7r/asmitak.jpg",
          desc: "Selected as Java Developer Intern",
          college: "Mahila College,Tasgaon"
        },
        {
          name: "Rupali Margale",
          img: "https://i.postimg.cc/mk1dYF5p/rm2.jpg",
          desc: "Selected as Web Development Intern",
          college: "Dahiwadi College,Dahiwadi"
        },
        {
          name: "Rutuja Jagatap",
          img: "https://i.postimg.cc/Vvhx183G/rj2.jpg",
          desc: "Selected as Spring Boot Intern",
          college: "PDVP College,Tasgaon"
        },
        {
          name: "Sujata Saste",
          img: "https://i.postimg.cc/wxQ0DgMS/sujatas.jpg",
          desc: "Selected as Spring Boot Intern",
          college: "Dahiwadi College,Dahiwadi"
        },
        {
          name: "Pooja Patil",
          img: "https://i.postimg.cc/yddc94bP/poojap.jpg",
          desc: "Selected as Spring Boot Intern",
          college: "PDVP College,Tasgaon"
        },
        {
          name: "Shweta Kumbhar",
          img: "https://i.postimg.cc/pdhBrcss/shwetk.jpg",
          desc: "Selected as Spring Boot Intern",
          college: "Dahiwadi College,Dahiwadi"
        },
        {
          name: "Devaki Mandve",
          img: "https://i.postimg.cc/cCQ9HkL1/devkim.jpg",
          desc: "Selected as Spring Boot Intern",
          college: "YC College,Karad"
        }
      ].map((s, i) => (
        <div
          key={i}
          style={{
            minWidth: '260px',
            background: '#fff',
            borderRadius: '15px',
            padding: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <SmartImage
            src={s.img}
            alt={s.name}
            width={120}
            height={120}
            style={{
              borderRadius: '50%',
              marginBottom: 10,
              objectFit: 'cover'
            }}
          />
          <h3 style={{ margin: 5 }}>{s.name}</h3>
          <p style={{ color: '#2c5364', fontWeight: 600 }}>{s.college}</p>
          <p style={{ color: '#555', fontSize: 14 }}>{s.desc}</p>
        </div>
      ))}
    </div>
  </marquee>
</section>

{/* CELEBRATION MARQUEE */}
<section style={{ padding: '60px 20px', background: '#f4f6f9', textAlign: 'center' }}>
  <h2 style={{ fontSize: '32px', color: '#0f2027', marginBottom: '10px' }}>
    🥳 Celebration Moments
  </h2>
  <p style={{ fontSize: '18px', color: '#2c5364', marginBottom: '40px' }}>
    Our proud achievers and happy faces
  </p>

  <marquee
    behavior="scroll"
    direction="left"
    scrollamount="6"
    onMouseOver={e => e.currentTarget.stop()}
    onMouseOut={e => e.currentTarget.start()}
  >
    <div style={{ display: 'flex', gap: '25px', whiteSpace: 'nowrap' }}>
      {[
        { name: "Sumit More", img: "https://i.postimg.cc/jd98Cp44/sumitm.jpg" },
        { name: "Shivani Ghadge", img: "https://i.postimg.cc/nhSTN6M6/shivanig.jpg" },
        { name: "Omkar Jadhav", img: "https://i.postimg.cc/0QcT4tRp/omkarj.jpg" },
        { name: "Komal Ghadge", img: "https://i.postimg.cc/sfKWn5Bj/komalg.jpg" },
        { name: "Bhavesh Dandvate", img: "https://i.postimg.cc/yNQqQQzn/bhaveshd.jpg" },
        { name: "Devika Patil", img: "https://i.postimg.cc/QxwHPmjC/devikap.jpg" },
        { name: "Sanika Deshmukh", img: "https://i.postimg.cc/6QYws6Ch/sanikadd.jpg" },
        { name: "Omkar Yadav", img: "https://i.postimg.cc/QMJfKJ81/omkary.jpg" },
      ].map((c, i) => (
        <div
          key={i}
          style={{
            minWidth: '260px',
            background: '#fff',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <SmartImage
            src={c.img}
            alt={c.name}
            width={260}
            height={180}
            style={{ objectFit: 'cover', borderRadius: '15px' }}
          />
          <h3 style={{ padding: 10 }}>{c.name}</h3>
        </div>
      ))}
    </div>
  </marquee>
</section>
{/* COMPANY GALLERY MARQUEE */}
<section style={{ padding: '60px 20px', background: '#ffffff', textAlign: 'center' }}>
  <h2 style={{ fontSize: '32px', color: '#0f2027', marginBottom: '10px' }}>🏢 Company Gallery</h2>
  <p style={{ fontSize: '18px', color: '#2c5364', marginBottom: '40px' }}>
    Office, workspace and project snapshots
  </p>

  <marquee
    behavior="scroll"
    direction="left"
    scrollamount="6"
    onMouseOver={e => e.currentTarget.stop()}
    onMouseOut={e => e.currentTarget.start()}
  >
    <div style={{ display: 'flex', gap: '25px', whiteSpace: 'nowrap' }}>
      {[
        { title: "Projects", img: "https://i.postimg.cc/cHN62fwf/live.jpg" },
        { title: "Team Meeting", img: "https://i.postimg.cc/DwMxrwsM/meetup.jpg" },
        { title: "Team", img: "https://i.postimg.cc/T20qjPvt/team.jpg" },
        { title: "Celebrations", img: "https://i.postimg.cc/D0vD1ZKp/office1.jpg" }
      ].map((g, i) => (
        <div
          key={i}
          style={{
            minWidth: '260px',
            background: '#fff',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <SmartImage
            src={g.img}
            alt={g.title}
            width={260}
            height={180}
            style={{ objectFit: 'cover', borderRadius: '15px' }}
          />
          <h3 style={{ padding: 10 }}>{g.title}</h3>
        </div>
      ))}
    </div>
  </marquee>
</section>

      {/* STATS */}
<div
  className="stats"
  style={{
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '40px',
    padding: '70px 20px',
    background: 'linear-gradient(90deg, #2c5364, #203a43)',
    color: '#fff',
    textAlign: 'center'
  }}
>
  {[
    { icon: '🏢', value: '2', label: 'Offices (Maharashtra)' },
    { icon: '🤝', value: '25+', label: 'Clients' },
    { icon: '📦', value: '85+', label: 'Applications' }
  ].map((s, i) => (
    <div
      key={i}
      className="stat"
      style={{
        minWidth: '200px',
        padding: '20px'
      }}
    >
      <h1 style={{ fontSize: '42px', marginBottom: '10px' }}>
        {s.icon} {s.value}
      </h1>
      <p style={{ fontSize: '16px', opacity: 0.9 }}>{s.label}</p>
    </div>
  ))}
</div>


     {/* CONTACT */}
<section style={{ textAlign: 'center', padding: '60px 20px' }}>
  <h2>You’re Just One Click Away</h2>
  <p className="subtitle" style={{ color: '#00796b' }}>Kick start your dream project today</p>
  <p>📞 +91 96239 39692</p>
  <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Join our Internship & Hands-on Real Industry Project Program</p>

  <button
  onClick={() => router.push('/about')}
  style={{
    background: '#203a43',
    color: '#fff',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: '0.3s',
  }}
  onMouseOver={e => e.currentTarget.style.background = '#ffd700'}
  onMouseOut={e => e.currentTarget.style.background = '#203a43'}
>
  Apply Now
</button>
</section>
      {/* FOOTER */}
<footer
  style={{
    background: '#111827',
    color: '#e5e7eb',
    padding: '35px 20px',
    marginTop: '40px',
    borderTop: '1px solid #1f2937'
  }}
>
  <div
    style={{
      maxWidth: '1150px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
      gap: '25px'
    }}
  >
    {/* Company */}
    <div>
      <h3 style={{ marginBottom: '8px', color: '#facc15' }}>
        MBET INDIA PVT LTD
      </h3>
      <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#9ca3af' }}>
        “M.B.E.T India Pvt. Ltd. is established in year 2020 and has achieved a reputation
        as a reputed organization engaged in offering Internship, Research, and
        Software Development. Leading software Research & Development firm in
        Karad & Pune, Maharashtra.”
      </p>
    </div>

    {/* Newsletter */}
    <div>
      <h3 style={{ marginBottom: '8px' }}>Newsletter</h3>
      <div style={{ display: 'flex', gap: '6px' }}>
        <input
          type="email"
          placeholder="Email address"
          style={{
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid #374151',
            background: '#020617',
            color: '#e5e7eb',
            flex: 1
          }}
        />
        <button
          style={{
            padding: '8px 14px',
            borderRadius: '6px',
            border: 'none',
            background: '#facc15',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Subscribe
        </button>
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h3 style={{ marginBottom: '8px' }}>Quick Links</h3>
      <div style={{ fontSize: '14px', lineHeight: '1.9' }}>
        <Link href="/">Home</Link><br />
        <Link href="/about">About Us</Link><br />
        <Link href="/services">Services</Link><br />
        <Link href="/contact">Contact</Link>
      </div>
    </div>

    {/* Contact */}
    <div>
      <h3 style={{ marginBottom: '8px' }}>Contact</h3>
      <p style={{ fontSize: '14px' }}>📍 Krishna Canal, Vidyanagar, Karad, Maharashtra, India 415110 • 📍 Kothrud, Pune, Maharashtra, India 411038</p>
      <p style={{ fontSize: '14px' }}>📞 +91 96239 39692</p>
      <p style={{ fontSize: '14px' }}>✉ mbetindia@gmail.com</p>
    </div>
  </div>

  <hr style={{ margin: '25px 0', borderColor: '#1f2937' }} />

  <p
    style={{
      textAlign: 'center',
      fontSize: '13px',
      color: '#9ca3af'
    }}
  >
    © 2025 MBET INDIA PVT LTD — All Rights Reserved
  </p>
</footer>

    </>
  );
}
