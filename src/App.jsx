import React, { useState } from "react";

const navigation = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

const skills = [
  { name: "HTML", image: "html5.webp" },
  { name: "CSS", image: "css3.jpeg" },
  { name: "Bootstrap", image: "boot.jpeg" },
  { name: "JavaScript", image: "js.png" },
  { name: "React", image: "re.webp" },
  { name: "Python", image: "Python-logo-notext.svg.png" },
  { name: "MySQL", image: "mysql.png" },
  { name: "Django", image: "django.png" },
];

const projects = [
  {
    name: "Solar Website",
    description:
      "A polished website project showcasing solar energy and clean-energy solutions.",
    image: "solar-project.jpeg",
    links: [
      { label: "GitHub", url: "https://github.com/Anitha-48/Senela-Solar-EPC" },
      { label: "Live", url: "https://senelasolar.tech/" },
    ],
  },
  {
    name: "Tiles and Minerals Website",
    description:
      "A business website showcasing tiles and mineral products with a polished online presence.",
    image: "tiles-project.jpeg",
    links: [
      { label: "GitHub", url: "https://github.com/Anitha-48/Senela-tiles-Minerals" },
      { label: "Live", url: "https://www.bouyaninternational.com/" },
    ],
  },
  {
    name: "Digital Technologies",
    description:
      "A modern website for digital technology services, products, and solutions.",
    image: "digital-project.jpeg",
    links: [
      { label: "GitHub", url: "https://github.com/Anitha-48/Senela-Digital-Website" },
      { label: "Live", url: "https://seneladigital.com/" },
    ],
  },
];

const services = [
  {
    number: "01",
    title: "Website development",
    description:
      "Clean, responsive websites designed to introduce your business and make a lasting first impression.",
    image:
      "https://mojodesign.io/wp-content/uploads/2023/12/Screenshot_7.jpeg",
    imageAlt: "Website development project example",
    icon: "↗",
  },
  {
    number: "02",
    title: "Responsive UI",
    description:
      "Mobile-first interfaces that feel clear, consistent, and easy to use on every screen.",
    image:
      "https://www.skillshare.com/blog/wp-content/uploads/2024/04/skillshare-responsive-web-design-101-1024x574.jpg",
    imageAlt: "Responsive website shown across screen sizes",
    icon: "▤",
  },
  {
    number: "03",
    title: "AI Videos",
    description:
      "Engaging AI-powered video content designed to bring ideas and stories to life.",
    image:
      "https://www.unite.ai/wp-content/uploads/2022/11/AI-Video-Generators-1-942x600.png",
    imageAlt: "AI video generation concept",
    icon: "{ }",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleContactSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`,
    );
    window.location.href = `mailto:anithav8200@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Anitha home">
          anitha<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "navigation navigation-open" : "navigation"} aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero page-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              Open to entry-level opportunities
            </div>
            <p className="eyebrow hero-eyebrow">PYTHON FULL-STACK DEVELOPER · CHENNAI, INDIA</p>
            <h1>
              Thoughtful code.
              <br />
              <span>Meaningful</span> experiences.
            </h1>
            <p className="hero-description">
              Hello, I&apos;m Anitha — a software developer building responsive web
              experiences with a love for Python, thoughtful design, and learning
              something new every day.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#contact">
                Get in touch <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="social-links" aria-label="Social profiles">
              <a
                className="hero-social github"
                href="https://github.com/Anitha-48"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.14a10.6 10.6 0 0 1 5.57 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
              </a>
              <a
                className="hero-social linkedin"
                href="https://www.linkedin.com/in/anithav04/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.68H9.36V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
              <a
                className="hero-social whatsapp"
                href="https://wa.me/918870086705?text=Hello%2C%20I%20Want%20connect%20with%20you"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp: send a message"
                title="WhatsApp"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.5 3.5A11.8 11.8 0 0 0 2 17.7L.7 23l5.4-1.3a11.8 11.8 0 0 0 5.6 1.4h.01A11.8 11.8 0 0 0 20.5 3.5ZM11.7 21a9.8 9.8 0 0 1-5-.14l-.36-.13-3.2.77.78-3.12-.16-.36a9.8 9.8 0 1 1 7.94 2.98Zm5.38-7.35c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.08-.8.37-.28.3-1.05 1.02-1.05 2.49s1.08 2.89 1.23 3.09c.15.2 2.12 3.24 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img
                className="portrait"
                src="/images/WhatsApp%20Image%202025-12-27%20at%203.51.31%20PM.jpeg"
                alt="Anitha"
              />
              <span className="portrait-caption">A little bit of code, a lot of curiosity.</span>
            </div>
            <div className="rank-card">
              <span className="rank-star" aria-hidden="true">✳</span>
              <span><strong>5th</strong><small>University rank</small></span>
            </div>
            <span className="hero-orbit orbit-one" />
            <span className="hero-orbit orbit-two" />
          </div>
          <a className="scroll-cue" href="#about">
            <span /> Scroll to explore
          </a>
        </section>

        <section className="about section-block" id="about">
          <div className="page-wrap about-layout">
            <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious by nature. Building by design." />
            <div className="about-copy">
              <p>
                Hi, I&apos;m Anitha, a BCA graduate and Web Developer passionate
                about building modern, responsive, and user-friendly websites.
                I specialize in frontend development using React.js and backend
                development using Python, Django, and REST APIs.
              </p>
              <p>
                I&apos;m currently working as a Web Developer at Senela
                International Ventures Pvt. Ltd., developing and maintaining
                business websites. I&apos;m also interested in creating
                AI-powered videos that help businesses promote their brands
                and connect with their audiences.
              </p>
              <p>
                My key skills include React.js, Python, Django, REST API
                integration, responsive web design, and website development.
                I enjoy learning new technologies, solving problems, and
                turning ideas into practical digital solutions.
              </p>
              <a className="text-link" href="#contact">More about working together <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="page-wrap highlight-row">
            <div><strong>5th</strong><span>University rank</span></div>
            <div><strong>81.66<span className="stat-unit">%</span></strong><span>BCA result</span></div>
            <div><strong>Python</strong><span>Full-stack focus</span></div>
          </div>
        </section>

        <section className="services section-block" id="services">
          <div className="page-wrap">
            <SectionHeading
              eyebrow="WHAT I CAN HELP WITH"
              title="Services"
              description="Thoughtful digital foundations for people and businesses ready to grow online."
            />
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <img
                    className="service-image"
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                  />
                  <div className="service-content">
                    <div className="service-topline">
                      <span className="service-number">{service.number}</span>
                      <span className="service-icon" aria-hidden="true">{service.icon}</span>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <a href="#contact" aria-label={`Ask about ${service.title}`}>
                      Discuss a project <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills section-block" id="skills">
          <div className="page-wrap">
            <SectionHeading
              eyebrow="TOOLS OF THE TRADE"
              title="Skills & technologies"
              description="A growing toolkit for creating useful, accessible web experiences."
            />
            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.name}>
                  <div className="skill-image-wrap">
                    <img src={`/images/${skill.image}`} alt="" loading="lazy" />
                  </div>
                  <span>{skill.name}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section-block" id="projects">
          <div className="page-wrap">
            <div className="projects-heading">
              <SectionHeading
                eyebrow="SELECTED WORK"
                title="A few things I&apos;ve built."
                description="Personal projects where I put my skills into practice and kept learning along the way."
              />
              <span className="project-count">03 PROJECTS</span>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.name}>
                  <div className="project-image">
                    <img src={`/images/${project.image}`} alt={`${project.name} preview`} loading="lazy" />
                    <span className="project-index">0{index + 1}</span>
                  </div>
                  <div className="project-info">
                    <div>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                    </div>
                    <div className="project-tags">
                      {project.links.map((link) => (
                        <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                          {link.label} <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="education section-block" id="education">
          <div className="page-wrap education-layout">
            <SectionHeading
              eyebrow="THE LEARNING SO FAR"
              title="Education"
              description="Building a strong foundation in computer applications and software development."
            />
            <div className="education-list">
              <article className="education-card">
                <span className="education-year">2022 — 2025</span>
                <div>
                  <h3>Bachelor of Computer Applications (BCA)</h3>
                  <p>Madurai Sivakasi Nadar&apos;s Pioneer Meenakshi Women&apos;s College</p>
                  <p>Affiliated to Alagappa University · 81.66%</p>
                </div>
                <span className="education-rank">5th university rank</span>
              </article>
              <article className="education-card">
                <span className="education-year">2022</span>
                <div>
                  <h3>Higher Secondary Certificate (HSC)</h3>
                  <p>Government Higher Secondary School</p>
                  <p>Computer Mathematics · 80%</p>
                </div>
                <span className="education-rank">HSC</span>
              </article>
            </div>
          </div>
        </section>

        <section className="contact section-block" id="contact">
          <div className="page-wrap contact-layout">
            <div className="contact-copy">
              <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
              <h2>Let&apos;s make something <span>meaningful.</span></h2>
              <p>
                Whether you have an opportunity, a project idea, or just want to
                say hello, I&apos;d love to hear from you.
              </p>
              <a className="contact-email" href="mailto:anithav8200@example.com">
                anithav8200@example.com <span aria-hidden="true">↗</span>
              </a>
              <p className="contact-location">Chennai, India <span>·</span> 8870086705</p>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" placeholder="How should I call you?" required />
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />
              <label htmlFor="message">A little about your project</label>
              <textarea id="message" name="message" rows="4" placeholder="Tell me what you have in mind..." required />
              <button className="button button-primary" type="submit">
                Start a conversation <span aria-hidden="true">↗</span>
              </button>
              <span className="form-note">Opens your email app with your message ready to send.</span>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#home">anitha<span>.</span></a>
        <p>Designed with care. Built with curiosity.</p>
        <nav className="footer-socials" aria-label="Social media">
          <a
            className="footer-social github"
            href="https://github.com/Anitha-48"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.14a10.6 10.6 0 0 1 5.57 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
          </a>
          <a
            className="footer-social linkedin"
            href="https://www.linkedin.com/in/anithav04/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.68H9.36V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
          <a
            className="footer-social instagram"
            href="https://www.instagram.com/aniiithaa__/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle className="instagram-dot" cx="17.5" cy="6.8" r="1" />
            </svg>
          </a>
          <a
            className="footer-social whatsapp"
            href="https://wa.me/918870086705"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.5 3.5A11.8 11.8 0 0 0 2 17.7L.7 23l5.4-1.3a11.8 11.8 0 0 0 5.6 1.4h.01A11.8 11.8 0 0 0 20.5 3.5ZM11.7 21a9.8 9.8 0 0 1-5-.14l-.36-.13-3.2.77.78-3.12-.16-.36a9.8 9.8 0 1 1 7.94 2.98Zm5.38-7.35c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.08-.8.37-.28.3-1.05 1.02-1.05 2.49s1.08 2.89 1.23 3.09c.15.2 2.12 3.24 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            </svg>
          </a>
        </nav>
        <span>© {new Date().getFullYear()} Anitha V.</span>
      </footer>
    </>
  );
}

export default App;
