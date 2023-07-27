import React, { useState, useEffect } from "react";
import "./EnglishVersion.css";

import JsonData from "../NewJson.json";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

const EnglishVersion = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

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
    <div className="english">
   

      <div className="container clear" style={{ paddingBottom: "200px" }}>
        <div className="row wrapper">
          <div className="sidepanel">
            <div className="inner-sidepanel">
              {JsonData[selectedLanguage].map((blog) => (
                <a
                  key={blog.id}
                  className="title"
                  href={`#${blog.id}`}
                  onClick={() => setSelectedLanguage(selectedLanguage)}
                >
                  {blog.title}
                </a>
              ))}
              <div className="divider left"></div>
              <Link className="title" to="/learn-more-in-urdu">
                {" "}
                Switch to Urdu!
              </Link>

              <div className="space double"></div>
            </div>
          </div>

          <div className="right-col">
            <h1> Hussain, the Martyr of Freedom and Humanity</h1>
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
      <Footer />
    </div>
  );
};

export default EnglishVersion;
