import React, { useEffect } from "react";
import "../styles/legacy.css"; // optional: only if your CSS is there
import githubIcon from "../assets/github-mark.png";
import linkedinIcon from "../assets/LinkedIn_logo_initials.png";

const Home = () => {
  useEffect(() => {
    // FADE-IN EFFECT
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, i) => {
      el.classList.add("visible");
      el.style.transitionDelay = `${i * 200}ms`;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add("visible");
              setTimeout(() => {
                el.style.transitionDelay = "0s";
              }, 600 + i * 200);
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(el);
    });

    // STICKY NAV ON SCROLL
    const nav = document.querySelector("nav");
    const handleScroll = () => {
      const stickyThreshold = 10;
      if (window.scrollY > stickyThreshold) {
        nav?.classList.add("sticky-active");
      } else {
        nav?.classList.remove("sticky-active");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // CLOSE BANNER
    const closeBtn = document.getElementById("close-banner");
    const banner = document.getElementById("updates-banner");

    closeBtn?.addEventListener("click", () => {
      if (banner) banner.style.display = "none";
    });

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      closeBtn?.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div className="page-wrapper">
      <section className="sticky-wrapper">
        <nav>
          <div
            style={{
              fontFamily: "Lugrasimo, Roboto, sans-serif",
              fontSize: "1.2rem",
              flex: 2,
              fontWeight: 500,
            }}
          >
            Allan Anderson
          </div>
          <div className="menu-bar">
            <div className="menu-option">
              <a href="">MY LIFE</a>
            </div>
            <div className="menu-option">
              <a href="">MY WORK</a>
            </div>
            <div className="menu-option">
              <a href="">MY DREAM</a>
            </div>
          </div>
          <div
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 600,
              display: "flex",
              flex: 2,
              justifyContent: "end",
            }}
          >
            <a
              href="https://drive.google.com/file/d/11M4CrvhuC9pN6Sanh3MR4WEFlkg9gpB2/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              RESUME
            </a>
          </div>
        </nav>

        <div id="updates-banner">
          <span>
            This website is still extremely barebones! Changes and improvements
            will appear as I learn the secret arts of HTML and CSS.{" "}
            <strong>Current version: 0.22</strong>
          </span>
          <button id="close-banner">&times;</button>
        </div>
      </section>

      <section className="hero">
        <div className="overlay">
          <h1>Welcome to My Projects</h1>
          <p>Explore the things I&apos;ve made</p>
        </div>
      </section>

      <section className="grid">
        <a
          href="https://github.com/allanderson-mocha/SCavenger"
          target="_blank"
          className="card fade-in"
          style={{ transitionDelay: "0s" }}
          rel="noreferrer"
        >
          The SCavenger
        </a>
        <a
          href="https://github.com/allanderson-mocha/VerilogSnake"
          target="_blank"
          className="card fade-in"
          style={{ transitionDelay: "0.2s" }}
          rel="noreferrer"
        >
          Snake in Verilog!
        </a>
        <a
          href="https://github.com/allanderson-mocha/portfolio"
          target="_blank"
          className="card fade-in"
          style={{ transitionDelay: "0.4s" }}
          rel="noreferrer"
        >
          This very website! (WIP)
        </a>
      </section>

      <section className="highlights">
        <div style={{ position: "absolute", bottom: "40%" }}></div>
      </section>

      <section className="contacts">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            height: "100%",
          }}
        >
          <div style={{ height: "100%", width: "100%", padding: "2rem 7rem" }}>
            <form
              className="email-form"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="91786e51-3e01-4fbd-b6ee-a058c8461dc0"
              />
              <p className="email-texthead">Shoot me an email!</p>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea
                style={{ resize: "none", height: "50%" }}
                name="message"
                placeholder="Message here..."
                required
              ></textarea>
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />
              <button type="submit">SUBMIT</button>
            </form>
          </div>

          <section className="social-media">
            <h1>SOCIALS</h1>
            <div className="socials-container">
              <a
                href="https://github.com/allanderson-mocha"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-button">
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    style={{ height: "2rem", width: "2rem" }}
                  />
                  <p>allanderson-mocha</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/allan-anderson-6a06a3258/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-button">
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    style={{ height: "2rem", width: "2rem" }}
                  />
                  <p>Allan Anderson</p>
                </div>
              </a>
            </div>
          </section>
        </div>
      </section>

      <section
        id="copyright"
        style={{
          textAlign: "center",
          backgroundColor: "#E6E6E6",
          paddingBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        © 2025 Allan Anderson. All rights reserved.
      </section>
    </div>
  );
};

export default Home;
