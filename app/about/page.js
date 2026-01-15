'use client';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function InternshipPage() {
  const [rating, setRating] = useState(0);
  const [success, setSuccess] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setSuccess(true);

  const form = new FormData(e.target);
  const name = form.get("name");
  const email = form.get("email");
  const mobile = form.get("mobile");
  const domain = form.get("domain");
  const message = form.get("message") || "";

  const reviewText = `Name: ${name} | Email: ${email} | Mobile: ${mobile} | Domain: ${domain} | Rating: ${rating}⭐ | Message: ${message}`;

  // Google Share
  window.open(
    `https://share.google/LCPmFSLjfXQR5PE7A?review=${encodeURIComponent(reviewText)}`,
    "_blank"
  );

  // Firestore Save
  try {
    const { db } = await import("../lib/firebaseConfig");
    const { collection, addDoc, Timestamp } = await import("firebase/firestore");

    await addDoc(collection(db, "internshipApplications"), {
      name,
      email,
      mobile,
      domain,
      rating,
      message,
      createdAt: Timestamp.now()
    });

    console.log("Saved in Firestore ✔");
  } catch (err) {
  console.error("Firestore Error Message:", err.message);
  alert(err.message);
}

  setRating(0);
  e.target.reset();
};
  return (
    <>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',Arial,sans-serif;}
        body{background:#f4f6f9;color:#333;}

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

        .left-box{display:flex;align-items:center;gap:12px;color:#fff;}
        .logo{font-size:22px;font-weight:bold;}
        ul.desktop-menu{list-style:none;display:flex;gap:25px;}
        ul.desktop-menu li a{color:#fff;text-decoration:none;}
        .hamburger{display:none;font-size:28px;cursor:pointer;}

        /* ✅ UPDATED MOBILE MENU */
        .mobile-menu {
  position: fixed;
  top: 60px;        /* navbar height वरून खाली start */
  left: 0;
  width: 100%;
  background: linear-gradient(180deg,#0f2027,#203a43,#2c5364);
  padding: 20px;
  border-radius: 0 0 15px 15px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 999;      /* header/marquee z-index > menu z-index */
  max-height: 80vh;
  overflow-y: auto;
}
.mobile-menu.open{
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.mobile-menu a{
  color:#fff;
  text-decoration:none;
  font-size:20px;
  font-weight:500;
}

.mobile-close{
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 28px;
  color: #fff;
  cursor:pointer;
  background: rgba(255,255,255,0.15);
  width: 36px;
  height: 36px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
}

        section{
          max-width:850px;
          margin:40px auto;
          background:#fff;
          padding:40px;
          border-radius:15px;
          box-shadow:0 10px 25px rgba(0,0,0,0.1);
        }

        .program-box{
          background:linear-gradient(135deg,#e0f7fa,#ffffff);
          padding:30px;
          border-radius:15px;
          margin-bottom:40px;
          border-left:6px solid #00acc1;
        }

        .program-box h2{text-align:center;color:#0f2027;margin-bottom:10px;}
        .program-box h3{text-align:center;color:#007c91;margin-bottom:20px;}
        .program-box ul{padding-left:20px;margin-top:10px;}
        .program-box li{margin-bottom:8px;}

        .highlight{
          background:#00acc1;
          color:#fff;
          display:inline-block;
          padding:6px 14px;
          border-radius:20px;
          font-weight:bold;
          margin:10px 0;
        }

        form{display:flex;flex-direction:column;gap:15px;}
        input, select, textarea{
          padding:12px;border-radius:8px;border:1px solid #ccc;font-size:16px;
        }
        textarea{resize:none;height:100px;}

        button{
          padding:12px;
          background:#00acc1;
          color:#fff;
          border:none;
          border-radius:8px;
          font-weight:bold;
          cursor:pointer;
        }
        button:hover{background:#007c91;}

        .rating{display:flex;gap:5px;font-size:30px;justify-content:center;}
        .rating span{cursor:pointer;color:#ccc;}
        .rating span.active{color:#f5b301;}

        .success{
          background:#d4edda;color:#155724;
          padding:12px;border-radius:8px;margin-bottom:15px;
        }

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
        <div className="mobile-close" onClick={()=>setMenuOpen(false)}>×</div>
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

      <section>
        {/* PROGRAM INFO */}
        <div className="program-box">
          <h2>🚀MBET INDIA PVT LTD <br /> INTERNSHIP PROGRAM</h2>
          <h3>Start Early • Build Skills • Achieve Your Dream IT Job</h3>

          <p>
            This exclusive program is designed for <b>IT Students & Freshers</b> who want
            practical training, real projects, and strong career support.
          </p>

          <div className="highlight">Who Can Join?</div>
          <ul>
            <li>✔ F.Y, S.Y, T.Y IT Students</li>
            <li>✔ IT Freshers Only</li>
          </ul>

          <div className="highlight">5-Step Career Roadmap</div>
          <ul>
            <li>1️⃣ Enroll in the Program</li>
            <li>2️⃣ 2 Months Expert Training & Guidance</li>
            <li>📜 2-Month Completion Certificate</li>
            <li>3️⃣ Real-Time Projects & Industry-Ready CV</li>
            <li>4️⃣ 2 Mock Interview Rounds</li>
            <li>5️⃣ Internship & Placement Support</li>
          </ul>

          <div className="highlight">Program Benefits</div>
          <ul>
            <li>✅ Industry-relevant skills</li>
            <li>✅ Real project experience</li>
            <li>✅ Resume & interview preparation</li>
            <li>✅ Get Paid Internship opportunities up to Rs: 2000 to 10000/-</li>
            <li>✅ 100% Job Assistance</li>
          </ul>

          <p><b>💰 Program Fee:</b> ₹2,000/- only</p>
        </div>

        {/* FORM */}
        <h2 style={{textAlign:"center"}}>Internship Application Form</h2>

        {success && <div className="success">✅ Application Submitted Successfully!</div>}

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <input name="mobile" placeholder="Mobile Number" required />

          <select name="domain" required>
            <option value="">Select Internship Domain</option>
            <option>Java Developer</option>
            <option>Web Developer</option>
            <option>Android Developer</option>
            <option>Digital Marketing</option>
          </select>

          <label><b>Rate Our Company</b></label>
          <div className="rating">
            {[1,2,3,4,5].map(num=>(
              <span key={num} className={rating>=num?"active":""} onClick={()=>setRating(num)}>★</span>
            ))}
          </div>

          <textarea name="message" placeholder="Message (Optional)" />
          <button type="submit">Apply Now</button>
        </form>
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
