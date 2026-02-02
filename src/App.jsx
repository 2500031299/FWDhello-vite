import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h1 className="logo">Neha Chowdary</h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="hero">
        <h2>Hello, I'm <span>Neha</span></h2>
        <p>Creative Front-End Developer & Designer</p>
        <button className="btn">View My Work</button>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I’m a passionate web developer skilled in crafting elegant, responsive
          websites using modern web technologies like React, HTML, CSS, and JavaScript.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">Portfolio Website</div>
          <div className="project-card">E-commerce App</div>
          <div className="project-card">Weather Dashboard</div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:nehachowdary@example.com">nehachowdary@example.com</a></p>
        <p>LinkedIn: <a href="#">linkedin.com/in/nehachowdary</a></p>
      </section>

      <footer className="footer">
        <p>© 2026 Neha Chowdary. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;