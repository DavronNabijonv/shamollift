// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deploy from "./layouts";
import Info from "./components/infopage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Deploy />} />
        <Route path="/info/:itemIndex" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
