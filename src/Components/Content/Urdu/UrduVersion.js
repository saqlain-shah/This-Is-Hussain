import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.jpg";
import JsonData from "../NewJson.json";
import "./UrduVersion.css";

const UrduVersion = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("urdu");
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollSpeed = 20; // Adjust the scroll speed as needed

  const handleMouseMove = (event) => {
    if (!isScrolling) {
      setIsScrolling(true);
      requestAnimationFrame(() => {
        scrollContent(event.movementY);
        setIsScrolling(false);
      });
    }
  };

  const scrollContent = (movementY) => {
    window.scrollBy(0, movementY * scrollSpeed);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isScrolling]);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./EnglishVersion.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // Clean up when the component unmounts
    };
  }, []);
  return (
    <div className="urdu">
      <div className="navbar clear nav-top">
        <div className="row content">
          <img className="logo" src={Logo} alt="Logo" />
          {/* Your other navbar links and content here */}
        </div>
      </div>

      <div className="container clear" style={{ paddingBottom: "200px" }}>
        <div className="row wrapper">
          <div className="sidepanel">
            {JsonData[selectedLanguage].map((blog) => (
              <a key={blog.id} className="title" href={`#${blog.id}`}>
                {blog.title}
              </a>
            ))}
            <div className="divider left"></div>
            <Link className="title" to="/learn-more-in-english">
              Switch to English!
            </Link>

            <div className="space double"></div>
          </div>

          <div className="right-col urdu-left-side">
            <h1> حسین شہیدِ حریت و آزادی بشر</h1>
            {JsonData[selectedLanguage].map((blog) => (
              <div key={blog.id}>
                <h2 id={blog.id}>{blog.title}</h2>
                <p>{blog.body.description}</p>
                <ul style={{ listStyleType: "none" }}>
                  {blog.body.bullet_points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrduVersion;
