import Header from './components/Header';
import Hero from './components/Hero';
import React, { useState, useEffect } from 'react';
import Project from './components/Project';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { Routes, Route } from "react-router-dom";


function App() {
  const [loading, Setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      Setloading(false)
    }, 4000)

    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "";

    (function () {
      var d = document;
      var s = d.createElement("script");

      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();

  }, [])
  return (
    <div className='App container my-10 mx-auto max-w-screen-lg bg-black'>
      {
        <>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </>
      }
    </div>
  );
}

export default App;
