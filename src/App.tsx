import "./styles/main.scss";

import React from "react";
import Header from "../src/components/Header/Header";
import ProjectCatalog from "../src/components/Main/ProjectCatalog/ProjectCatalog";
import IncludeSection from "../src/components/Main/IncludeSection/IncludeSection";
import Individual from "../src/components/Main/Individual/Individual";
import CountSection from "../src/components/Main/Count/CountSection";
import AboutSection from "../src/components/Main/About/About";
import AskSection from "../src/components/Main/AskSection/AskSection";
import FormSection from "../src/components/Main/FormSection/FormSection";
import Partners from "../src/components/Main/Partners/Partners";
import PayOptions from "../src/components/Main/PayOptions/PayOptions";
import Footer from "../src/components/Footer/Footer";

const App = () => {
  return (
    <div className="app_container">
      <Header />

      <main>
        <ProjectCatalog />
        <IncludeSection />
        <Individual />
        <CountSection />
        <AboutSection />
        <AskSection />
        <FormSection />
        <Partners />
        <PayOptions />
      </main>

      <Footer />
    </div>
  );
};

export default App;
