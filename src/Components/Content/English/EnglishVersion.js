import React, { useState } from "react";
import "./EnglishVersion.css";
import Logo from "../../images/rinor.png";
import JsonData from "../NewJson.json";
import { Link } from "react-router-dom";


const MainPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  return (
    <div>
      <div className="navbar clear nav-top">
        <div className="row content">
          <img className="logo" src={Logo} alt="Logo" />

          <a
            className="right"
            style={{ textDecoration: "none" }}
            href="tel:05815457424"
          >
            <i className="fas fa-phone"></i>&nbsp; (058154) 57424
          </a>
          <a
            className="right"
            style={{ textDecoration: "none" }}
            href="tel:03400596665"
          >
            <i className="fas fa-phone"></i>&nbsp; 0340-0596665
          </a>
          <a className="right" href="mailto:info@rinor.com" target="_blank">
            <i className="fas fa-paper-plane"></i>&nbsp; info@rinor.com
          </a>
        </div>
      </div>

      <div className="container clear" style={{ paddingBottom: "200px" }}>
        <div className="row wrapper">
          <div className="sidepanel">
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
            <Link className="title" to="/learn-more-in-urdu"> Switch to Urdu!</Link>
    
            <div className="space double"></div>
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
    </div>
  );
};

export default MainPage;
