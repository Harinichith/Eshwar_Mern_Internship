import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./../styles/Home.css";
import profileImage from "../assets/profile.jpg"; // Properly imported image
import resume from "../assets/hariniresume.docx"; // Import the resume PDF

const Home = () => {
  const [currentRole, setCurrentRole] = useState("Machine Learning Engineer");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate(); // Use navigate hook

  useEffect(() => {
    const roles = ["Machine Learning Engineer", "Full-Stack Developer"];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % roles.length;
      setCurrentRole(roles[index]);
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleLetsTalk = () => {
    navigate("/contact"); // Navigate to the contact page
  };

  return (
    <div className="home grid-container" data-aos="fade-up">
      {/* Left Section */}
      <div className="home-content">
        <h1>
          Hi, I'm <span className="name">Harini</span>
        </h1>
        <p>
          I'm a <span className="blinking">{currentRole}</span> passionate
          about creating innovative solutions and intelligent systems.
        </p>
        <div className="button-group">
          <button
            className="btn btn-outline-primary"
            onClick={() => window.open(resume, "_blank")} // Use imported resume path
          >
            Download Resume
          </button>
          <button
            className="btn btn-primary"
            onClick={() => window.location.assign("/projects")}
          >
            View My Projects
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="home-profile-box">
        <div className="profile-image-container">
          <img
            src={profileImage} // Use the imported image here
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="profile-name">Harini C</div>
        <div className="social-links">
          <a href="mailto:harini.c2023aiml@sece.ac.in" className="social-link">
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://github.com/Harinichith"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/harini-c-b369172b8"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* "Let's Talk" Button Section (Under Profile Box) */}
      <div className="home-lets-talk">
        <button
          className="btn btn-primary"
          onClick={handleLetsTalk} // On click, navigate to the contact page
        >
          Let's Talk
        </button>
      </div>

      {/* Footer Section */}
      <div className="home-footer">
        <p>
          Want to connect?{" "}
          <a href="mailto:harini.c2023aiml@sece.ac.in">
            <i className="fas fa-envelope"></i> Email
          </a>{" "}
          or follow me on{" "}
          <a
            href="https://github.com/Harinichith"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/harini-c-b369172b8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          .
        </p>
      </div>

      {/* Custom Cursor */}
      <div
        className="cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
    </div>
  );
};

export default Home;
