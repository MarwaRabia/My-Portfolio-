import React, { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/config";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact/Contact";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

import "./styles/main.scss";

// Loading component
const Loading: React.FC = () => (
  <div className="loading">
    <div className="loading__spinner"></div>
    <p>Loading...</p>
  </div>
);

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<Loading />}>
        <div className="app">
          <Navbar/>
          <Hero />
          <About />
          <Projects />
          <Skills/>
          <Contact/>
          <Footer/>
        </div>
      </Suspense>
    </I18nextProvider>
  );
};

export default App;
