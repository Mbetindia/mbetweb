"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Services() {

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

        /* SERVICES INTRO PARAGRAPH */
        .services-intro {
          max-width: 1000px;
          margin: 20px auto 40px;  /* reduced gap from navbar */
          padding: 35px 30px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
          border: 3px solid transparent;
          background-image: linear-gradient(white, white), 
                            linear-gradient(135deg, #00e0ff, #0077ff, #203a43);
          background-origin: border-box;
          background-clip: padding-box, border-box;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .services-intro:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.18);
        }

        .services-intro h2 {
          font-size: 36px;
          margin-bottom: 15px;
          color: #0f2027;
          position: relative;
        }

        .services-intro h2::after {
          content: "";
          width: 70px;
          height: 4px;
          background: linear-gradient(90deg, #00e0ff, #0077ff);
          display: block;
          margin: 10px auto 0;
          border-radius: 5px;
        }

        .services-intro p {
          font-size: 17px;
          line-height: 1.7;
          color: #444;
          margin-top: 15px;
        }

        .services-intro strong {
          color: #203a43;
        }

        @media (max-width: 768px) {
          .services-intro {
            padding: 25px 20px;
            margin: 15px 10px 30px;
          }
          .services-intro h2 {
            font-size: 28px;
          }
          .services-intro p {
            font-size: 15.5px;
            line-height: 1.6;
          }
        }

        /* NAVBAR */
        nav.navbar{
          background: linear-gradient(90deg,#0f2027,#203a43,#2c5364);
          padding:15px 20px;
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .left-box{
          display:flex;
          align-items:center;
          gap:12px;
          color:#fff;
        }

        .logo{
          font-size:22px;
          font-weight:bold;
        }

        ul.desktop-menu{
          list-style:none;
          display:flex;
          gap:25px;
        }

        ul.desktop-menu li a{
          color:#fff;
          text-decoration:none;
          font-weight:500;
        }

        ul.desktop-menu li a:hover{color:#00e0ff;}

        .hamburger{
          font-size:28px;
          cursor:pointer;
          display:none;
        }

        /* MOBILE MENU */
        .mobile-menu{
          position:fixed;
          top:70px;              /* below navbar */
          left:0;
          width:250px;
          background:linear-gradient(180deg,#0f2027,#203a43,#2c5364);
          padding:20px;
          display:flex;
          flex-direction:column;
          gap:18px;
          transform:translateX(-100%);
          transition:0.3s;
          z-index:999;
          border-top-right-radius:12px;
          border-bottom-right-radius:12px;
          box-shadow:4px 0 20px rgba(0,0,0,0.3);
        }

        .mobile-menu.open{
          transform:translateX(0);
        }

        .mobile-menu a{
          color:#fff;
          text-decoration:none;
          font-size:18px;
        }

        .close-btn{
          align-self:flex-end;
          font-size:30px;
          color:red;
          cursor:pointer;
        }

        section{
          max-width:1100px;
          margin:0 auto 60px;
          padding:20px;
          text-align:center;
        }

        section h2{
          font-size:36px;
          margin-bottom:40px;
          color:#0f2027;
        }

        .services-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:25px;
        }

        .service-card{
          background:#fff;
          border-radius:15px;
          overflow:hidden;
          box-shadow:0 10px 25px rgba(0,0,0,0.1);
          position:relative;
        }

        .service-card::before{
          content:"";
          position:absolute;
          top:0;
          left:-100%;
          width:100%;
          height:4px;
          background:linear-gradient(90deg,#00e0ff,#0f2027);
          animation:lineRun 3s linear infinite;
        }

        @keyframes lineRun{
          0%{left:-100%;}
          100%{left:100%;}
        }

        .service-card img{width:100%;height:160px;object-fit:cover;}
        .service-card .content{padding:20px;}

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

      {/* MOBILE MENU */}
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

      {/* SERVICES INTRO */}
      <section className="services-intro">
        <h2>Our Services</h2>
        <p>
          At <strong>MBET INDIA PVT LTD</strong>, we deliver smart, reliable, and
          future-ready technology services designed to meet real-world business needs.
          From custom software development and web applications to mobile solutions
          and IT training, our services focus on quality, performance, and scalability.
          We combine industry expertise with hands-on practical execution to help
          businesses grow and students become job-ready professionals. Every service
          we offer is driven by innovation, real-time implementation, and a commitment
          to excellence—ensuring measurable results, enhanced user experience, and
          long-term success in today’s competitive digital landscape.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section>
        <div className="services-grid">
          {[
            ["Web Design & Application Development","High performance & SEO optimized websites.","https://images.unsplash.com/photo-1521737604893-d14cc237f11d"],
            ["Mobile Application Development","Android & iOS app development solutions.","https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"],
            ["Cloud Computing","Scalable and secure cloud-based solutions.","https://images.unsplash.com/photo-1498050108023-c5249f4df085"],
            ["Cyber Security","Protect your applications and data securely.","https://images.unsplash.com/photo-1550751827-4bd374c3f58b"],
            ["MERN Stack Development","Modern JavaScript full-stack solutions.","https://images.unsplash.com/photo-1555066931-4365d14bab8c"],
            ["Java Full Stack Development","Enterprise-level Spring Boot applications.","https://images.unsplash.com/photo-1518770660439-4636190af475"],
          ].map((s,i)=>(
            <div key={i} className="service-card">
              <img src={s[2]} />
              <div className="content">
                <h3>{s[0]}</h3>
                <p>{s[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* FOOTER */}
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
