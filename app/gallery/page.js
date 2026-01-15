'use client';

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const teamMembers = [
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
  { name: "Sneha Patil", role: "MERN Developer", desc: "SEO, Ads & Social Media", img: "https://i.postimg.cc/cJccJrQF/snehap.jpg" },
];

const selectedStudents = [
  { name: "Asmita Kale", img: "https://i.postimg.cc/5y4W4g7r/asmitak.jpg", desc: "Selected as Java Developer Intern", college: "Mahila College,Tasgaon" },
  { name: "Rupali Margale", img: "https://i.postimg.cc/mk1dYF5p/rm2.jpg", desc: "Selected as Web Development Intern", college: "Dahiwadi College,Dahiwadi" },
  { name: "Rutuja Jagatap", img: "https://i.postimg.cc/Vvhx183G/rj2.jpg", desc: "Selected as Spring Boot Intern", college: "PDVP College,Tasgaon" },
  { name: "Sujata Saste", img: "https://i.postimg.cc/wxQ0DgMS/sujatas.jpg", desc: "Selected as Spring Boot Intern", college: "Dahiwadi College,Dahiwadi" },
  { name: "Pooja Patil", img: "https://i.postimg.cc/yddc94bP/poojap.jpg", desc: "Selected as Spring Boot Intern", college: "PDVP College,Tasgaon" },
  { name: "Shweta Kumbhar", img: "https://i.postimg.cc/pdhBrcss/shwetk.jpg", desc: "Selected as Spring Boot Intern", college: "Dahiwadi College,Dahiwadi" },
  { name: "Devaki Mandve", img: "https://i.postimg.cc/cCQ9HkL1/devkim.jpg", desc: "Selected as Spring Boot Intern", college: "YC College,Karad" },
];

const celebration = [
  {name:"Sumit More",img:"https://i.postimg.cc/jd98Cp44/sumitm.jpg"},
  {name:"Shivani Ghadge",img:"https://i.postimg.cc/nhSTN6M6/shivanig.jpg"},
  {name:"Omkar Jadhav",img:"https://i.postimg.cc/0QcT4tRp/omkarj.jpg"},
  {name:"Komal Ghadge",img:"https://i.postimg.cc/sfKWn5Bj/komalg.jpg"},
  {name:"Bhavesh Dandvate",img:"https://i.postimg.cc/yNQqQQzn/bhaveshd.jpg"},
  {name:"Devika Patil",img:"https://i.postimg.cc/QxwHPmjC/devikap.jpg"},
  {name:"Sanika Deshmukh",img:"https://i.postimg.cc/6QYws6Ch/sanikadd.jpg"},
  {name:"Omkar Yadav",img:"https://i.postimg.cc/QMJfKJ81/omkary.jpg"},
];

const company = [
  {title:"Projects",img:"https://i.postimg.cc/cHN62fwf/live.jpg"},
  {title:"Meeting",img:"https://i.postimg.cc/DwMxrwsM/meetup.jpg"},
  {title:"Team",img:"https://i.postimg.cc/T20qjPvt/team.jpg"},
  { title: "Celebrations", img: "https://i.postimg.cc/D0vD1ZKp/office1.jpg" },
];

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',Arial,sans-serif;}
        body{background:#f4f6f9;color:#333;line-height:1.6;}

        /* NAVBAR */
        nav.navbar{
          background:linear-gradient(90deg,#0f2027,#203a43,#2c5364);
          padding:15px 20px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          position:sticky;
          top:0;
          z-index:1000;
        }
        .left-box{
          display:flex;
          align-items:center;
          gap:12px;
          color:#fff;
        }
        .logo{font-size:22px;font-weight:bold;color:#fff;}
        .hamburger{font-size:28px;cursor:pointer;display:none;}
        ul.desktop-menu{list-style:none;display:flex;gap:25px;}
        ul.desktop-menu li a{color:#fff;text-decoration:none;font-weight:500;}
        ul.desktop-menu li a:hover{color:#00e0ff;}

        /* MOBILE SIDEBAR */
        .mobile-menu{
  position:fixed;
  top:70px;              /* navbar खालून start */
  left:0;
  width:250px;
  height:auto;           /* 👈 full height काढली */
  max-height:fit-content;
  background:linear-gradient(180deg,#0f2027,#203a43,#2c5364);
  padding:20px;
  display:flex;
  flex-direction:column;
  gap:18px;
  transform:translateX(-100%);
  transition:0.3s;
  z-index:999;
  border-bottom-right-radius:20px;
}

        .mobile-menu.open{transform:translateX(0);}
        .mobile-menu a{color:#fff;text-decoration:none;font-size:18px;}
        .close-btn{align-self:flex-end;font-size:30px;color:red;cursor:pointer;}

        section{max-width:1200px;margin:70px auto;padding:0 30px;text-align:center;}
        section h2{font-size:36px;color:#0f2027;margin-bottom:15px;}
        section p{color:#666;margin-bottom:40px;}

        /* SCROLLING CARDS */
        .scroll-container{overflow:hidden;position:relative;}
        .scroll-track{display:flex;gap:25px;width:max-content;animation:scrollLeft 40s linear infinite;}
        .scroll-track:hover{animation-play-state:paused;}
        @keyframes scrollLeft{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}

        .team-card{width:260px;min-height:360px;background:#fff;border-radius:18px;padding:20px;box-shadow:0 10px 25px rgba(0,0,0,0.12);text-align:center;display:flex;flex-direction:column;align-items:center;}
        .team-card img,.student-img{width:140px;height:140px;border-radius:50%;object-fit:cover;border:3px solid #2c5364;margin-bottom:15px;}
        .team-card h3{font-size:18px;margin-bottom:5px;color:#0f2027;}
        .team-card span{color:#2c5364;font-weight:600;display:block;margin-bottom:10px;}
        .team-card p{font-size:14px;color:#555;line-height:1.4;}

        .gallery-wrapper{overflow:hidden;margin-bottom:60px;}
        .gallery{display:flex;gap:25px;width:max-content;animation:galleryRun 25s linear infinite;}
        .gallery:hover{animation-play-state:paused;}
        @keyframes galleryRun{0%{transform:translateX(0);}100%{transform:translateX(-50%);} }
        .gallery-card{min-width:260px;background:#fff;border-radius:15px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.12);}
        .gallery-card img{width:100%;height:200px;object-fit:cover;}
        .gallery-card h4{padding:15px;background:#f8f9fb;}

        @media(max-width:768px){
          ul.desktop-menu{display:none;}
          .hamburger{display:block;}
        }
          /* FOOTER */
.footer {
  background: linear-gradient(90deg,#0f2027,#203a43,#2c5364);
  color: #fff;
  padding: 40px 20px;
  text-align: center;
  margin-top: 60px;
  border-top: 4px solid #00e0ff;
}

.footer h3 {
  font-size: 22px;
  margin-bottom: 12px;
}

.footer p {
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 1.6;
}

.footer .socials {
  margin: 15px 0;
}

.footer .socials a {
  display: inline-block;
  margin: 0 8px;
  font-size: 22px;
  color: #00e0ff;
  transition: 0.3s;
}

.footer .socials a:hover {
  color: #fff;
  transform: scale(1.2);
}

.footer .copyright {
  margin-top: 12px;
  font-size: 14px;
  color: #ccc;
}

@media(max-width:768px){
  .footer h3 {
    font-size: 20px;
  }
  .footer p {
    font-size: 15px;
  }
  .footer .socials a {
    font-size: 20px;
    margin: 0 6px;
  }
}
      `}</style>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="left-box">
          <div className="hamburger" onClick={()=>setMenuOpen(true)}>☰</div>
          <div className="logo">MBET INDIA PVT LTD</div>
        </div>

        <ul className="desktop-menu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/gallery">Events</Link></li>
          <li><Link href="/about">Careers</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div ref={menuRef} className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={()=>setMenuOpen(false)}>×</div>
        <Link href="/" onClick={()=>setMenuOpen(false)}>Home</Link>
        <Link href="/services" onClick={()=>setMenuOpen(false)}>Services</Link>
        <Link href="/projects" onClick={()=>setMenuOpen(false)}>Projects</Link>
        <Link href="/gallery" onClick={()=>setMenuOpen(false)}>Events</Link>
        <Link href="/about" onClick={()=>setMenuOpen(false)}>Careers</Link>
        <Link href="/contact" onClick={()=>setMenuOpen(false)}>Contact</Link>
      </div>
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
      {/* YOUR ORIGINAL SECTIONS */}
      {/* TEAM MEMBERS */}
      <section>
        <h2>Our Team</h2>
        <p>Experts behind MBET INDIA PVT LTD</p>
        <div className="scroll-container">
          <div className="scroll-track">
            {teamMembers.concat(teamMembers).map((m,i)=>(
              <div className="team-card" key={i}>
                <img src={m.img} alt={m.name} />
                <h3>{m.name}</h3>
                <span>{m.role}</span>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED INTERNS */}
      <section>
        <h2>🎉 Congratulations Internship Selected Students</h2>
        <p>Eligible & Selected Candidates for MBET INDIA PVT LTD Internship Program</p>
        <div className="scroll-container">
          <div className="scroll-track">
            {selectedStudents.concat(selectedStudents).map((s,i)=>(
              <div className="team-card" key={i}>
                <img className="student-img" src={s.img} alt={s.name} />
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <p>{s.college}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CELEBRATION */}
      <section>
        <h2>Celebrating Excellence</h2>
        <p>Achievements & proud moments</p>
        <div className="gallery-wrapper">
          <div className="gallery">
            {celebration.map((g,i)=>(
              <div className="gallery-card" key={i}>
                <img src={g.img}/>
                <h4>{g.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY */}
      <section>
        <h2>Company Gallery</h2>
        <p>Office & Projects</p>
        <div className="gallery-wrapper">
          <div className="gallery">
            {company.map((g,i)=>(
              <div className="gallery-card" key={i}>
                <img src={g.img}/>
                <h4>{g.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="footer">
  <div className="footer-content">
    <h3>MBET INDIA PVT LTD</h3>
    <p>Empowering students and businesses with practical IT skills, live projects, and career-oriented solutions.</p>
    <div className="socials">
      <a href="#" target="_blank">🌐</a>
      <a href="#" target="_blank">📧</a>
      <a href="#" target="_blank">📱</a>
    </div>
    <p className="copyright">© 2026 MBET INDIA PVT LTD. All rights reserved.</p>
  </div>
</footer>
    </>
  );
}
