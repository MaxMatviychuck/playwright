import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Header from "./components/Header";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
