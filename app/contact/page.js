'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:'Segoe UI',Arial,sans-serif;
        }

        body {
          background:#f4f6f9;
        }

        nav.navbar{
          background: linear-gradient(90deg,#0f2027,#203a43,#2c5364);
          padding:15px 40px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          position:sticky;
          top:0;
          z-index:1000;
        }

        nav .logo{
          color:#fff;
          font-size:24px;
          font-weight:bold;
        }

        nav ul{
          list-style:none;
          display:flex;
          gap:25px;
        }

        nav ul li a{
          color:#fff;
          text-decoration:none;
          transition:0.3s;
          font-weight:500;
        }

        nav ul li a:hover{
          color:#00e0ff;
        }

        .menu-btn{
          display:none;
          font-size:26px;
          color:#fff;
          background:none;
          border:none;
          cursor:pointer;
        }

        /* Mobile Menu */
        .mobile-menu{
          display:none;
        }

        @media(max-width:768px){
          .menu-btn{
            display:block;
          }
          nav ul{
            display:none;
          }
          .mobile-menu{
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            background:#203a43;
            gap:18px;
            padding:20px 25px;
            width:100%;
            position:sticky;
            top:60px;
            left:0;
            z-index:999;
          }
          .mobile-menu a{
            color:#fff;
            font-size:18px;
            text-decoration:none;
            width:100%;
            padding:5px 0;
          }
          .mobile-menu a:hover{
            color:#00e0ff;
          }
        }

        .announcement-bar{
          background:#0f2027;
          padding:10px 0;
          overflow:hidden;
          color:#fff;
          font-weight:500;
        }

        .announcement-bar span{
          display:inline-block;
          white-space:nowrap;
          padding-left:100%;
          animation:marquee 60s linear infinite;
        }

        @keyframes marquee{
          0%{ transform:translateX(0); }
          100%{ transform:translateX(-100%); }
        }

        .contact-section{
          max-width:900px;
          margin:60px auto;
          padding:40px 30px;
          background:#fff;
          border-radius:20px;
          box-shadow:0 10px 25px rgba(0,0,0,0.1);
          text-align:center;
        }

        .contact-section h2{
          font-size:36px;
          margin-bottom:20px;
          color:#0f2027;
        }

        .contact-section p{
          font-size:18px;
          color:#2c5364;
          margin:12px 0;
        }

        .contact-cards{
          display:flex;
          flex-wrap:wrap;
          justify-content:center;
          gap:25px;
          margin-top:30px;
        }

        .contact-card{
          flex:1 1 220px;
          background:linear-gradient(135deg,#00e0ff,#00bcd4);
          color:#fff;
          padding:25px 20px;
          border-radius:15px;
          box-shadow:0 8px 20px rgba(0,0,0,0.2);
          transition:0.3s;
        }

        .contact-card:hover{
          transform:translateY(-5px);
          box-shadow:0 12px 25px rgba(0,0,0,0.3);
        }

        .contact-card h3{
          font-size:22px;
          margin-bottom:12px;
        }

        .contact-card p{
          font-size:16px;
          color:#f0f0f0;
        }

        footer{
          text-align:center;
          padding:30px 20px;
          background:#111827;
          color:#e5e7eb;
        }

        footer h3{
          font-size:20px;
          margin-bottom:10px;
          color:#facc15;
        }

        footer p{
          font-size:14px;
          color:#9ca3af;
          margin:5px 0;
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">MBET INDIA PVT LTD</div>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✖' : '☰'}
        </button>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/gallery">Events</Link></li>
          <li><Link href="/about">Careers</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/gallery" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>Careers</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}

      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span>
          ✨ Latest Announcement: Join our Internship & Learning Program • MBET INDIA PVT LTD ✨ 📞 +91 96239 39692
        </span>
      </div>

      {/* Contact Info Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>We’re here to assist you. Reach out to us through any of the below channels.</p>

        <div className="contact-cards">
          <div className="contact-card">
            <h3>📞 Phone</h3>
            <p>+91 96239 39692</p>
          </div>
          <div className="contact-card">
            <h3>✉ Email</h3>
            <p>mbetindia@gmail.com</p>
          </div>
          <div className="contact-card">
            <h3>📍 Location</h3>
            <p>Krishna Canal, Vidyanagar, Karad, Maharashtra</p>
            <p>Kothrud, Pune, Maharashtra</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <h3>MBET INDIA PVT LTD</h3>
        <p>Empowering students & businesses with practical IT skills, live projects, and career-oriented solutions.</p>
        <p>© 2026 MBET INDIA PVT LTD. All rights reserved.</p>
      </footer>
    </>
  );
}
