import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Components/Modal/Modal";
import EnglishVersion from "./Components/MainPage/IndexPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/learn-more-in-english" element={<EnglishVersion />} />
        <Route path="/learn-more-in-urdu" element={<EnglishVersion />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
