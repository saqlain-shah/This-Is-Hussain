import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import EnglishVersion from "./Components/Content/English/EnglishVersion";
import UrduVersion from "./Components/Content/Urdu/UrduVersion";

function App() {

 {
   /*
   const selectedLanguage = "english";
    if (selectedLanguage === "english") {
      return <EnglishVersion selectedLanguage={selectedLanguage} />;
    } else if (selectedLanguage === "urdu") {
      return <UrduVersion selectedLanguage={selectedLanguage} />;
    }
*/
 } 
 


  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/learn-more-in-english" element={<EnglishVersion />} />
        <Route path="/learn-more-in-urdu" element={<UrduVersion />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
