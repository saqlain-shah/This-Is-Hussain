import React, { useState, useEffect } from "react";
import MainPage from "./MainPage";

const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  useEffect(() => {
    // Check the current URL to determine the selected language
    const currentPath = window.location.pathname;
    if (currentPath === "/learn-more-in-urdu") {
      setSelectedLanguage("urdu");
    } else {
      setSelectedLanguage("english");
    }
  }, []);

  return <MainPage selectedLanguage={selectedLanguage} />;
};

export default LanguageSwitcher;
