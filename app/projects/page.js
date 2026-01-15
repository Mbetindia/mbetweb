"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* OVERLAY */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          {/* MOBILE TOGGLE */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>

          <div className="logo">MBET INDIA PVT LTD</div>
        </div>

        <ul className={menuOpen ? "active" : ""}>
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link href="/gallery" onClick={() => setMenuOpen(false)}>Events</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>Careers</Link></li>
          <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>

      {/* MARQUEE */}
      <div className="marquee">
        <marquee>
          🚀 MBET INDIA PVT LTD – Internship | Live Projects | Training | Placement Assistance 🚀
        </marquee>
      </div>

      {/* INTRO */}
      <section>
        <h2>Our Projects</h2>
        <p className="projects-intro">
          Our Projects reflect the real-world challenges faced by modern
          businesses and startups. At <strong>MBET INDIA PVT LTD</strong>, we
          design and develop industry-oriented applications that focus on
          performance, scalability, and user experience.
        </p>
      </section>

       {/* PROJECTS SECTION */}
      <section>
        <h2>Our Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" />
            <h3>📦 Inventory Management System</h3>
            <p>Real-time stock, sales and warehouse management.</p>
          </div>

          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" />
            <h3>🛒 E-Commerce Web Application</h3>
            <p>Online store, payment gateway and admin panel.</p>
          </div>

          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" />
            <h3>📱 Android Order Collection App</h3>
            <p>Mobile based order & delivery tracking system.</p>
          </div>

          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786" />
            <h3>💼 Business Management System</h3>
            <p>Clients, tasks, reports and analytics.</p>
          </div>

          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" />
            <h3>⚙️ AutoCart Management System</h3>
            <p>Billing, inventory and customer automation.</p>
          </div>

          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" />
            <h3>🎉 Event Management System</h3>
            <p>Event planning, registration and coordination.</p>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} MBET INDIA PVT LTD</p>
        <p>📞 9623939692 | 📧 mbetindia@gmail.com</p>
      </footer>

      {/* STYLES */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Segoe UI, Arial;
        }

        body {
          background: #f4f6f9;
        }

        .overlay {
          position: fixed;
          inset: 0;
          z-index: 900;
        }

        .navbar {
          background: linear-gradient(90deg, #0f2027, #203a43, #2c5364);
          padding: 15px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo {
          color: white;
          font-size: 24px;
          font-weight: bold;
          white-space: nowrap;
        }

        ul {
          list-style: none;
          display: flex;
          gap: 25px;
        }

        ul li a {
          color: white;
          text-decoration: none;
        }

        ul li a:hover {
          color: #00e0ff;
        }

        .menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 28px;
          color: white;
          cursor: pointer;
        }

        section {
          max-width: 1100px;
          margin: 50px auto;
          padding: 20px;
          text-align: center;
        }

        h2 {
          font-size: 36px;
          margin-bottom: 30px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .project-card {
          background: #f8c5c5;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.12);
          overflow: hidden;
        }

        .project-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .footer {
          background: #0f2027;
          color: white;
          padding: 20px;
          text-align: center;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .menu-btn {
            display: block;
          }

          ul {
            position: absolute;
            top: 50px;
            left: 0;
            width: 100%;
            background: #203a43;
            flex-direction: column;
            align-items: center;
            display: none;
            padding: 20px 0;
          }

          ul.active {
            display: flex;
          }
        }
          //Marque style
          .marquee {
  background: linear-gradient(90deg, #0f2027, #203a43, #2c5364);
  color: #ffffff;
  padding: 10px 0;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  border-top: 2px solid #00e0ff;
  border-bottom: 2px solid #00e0ff;
  position: relative;
  overflow: hidden;
}

.marquee marquee {
  animation-timing-function: linear;
}

.marquee marquee::before,
.marquee marquee::after {
  content: "";
  margin: 0 0px;
  color: #00e0ff;
}

@media (max-width: 768px) {
  .marquee {
    font-size: 20px;
    padding: 8px 0;
  }
}

      `}</style>
    </>
  );
}
