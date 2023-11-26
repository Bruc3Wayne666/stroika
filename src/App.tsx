import "./styles/main.scss";

import React from "react";
import Header from "../src/components/Header/Header";
import ProjectCatalog from "../src/components/Main/ProjectCatalog/ProjectCatalog";
import IncludeSection from "../src/components/Main/IncludeSection/IncludeSection";
import Individual from "../src/components/Main/Individual/Individual";
import CountSection from "../src/components/Main/Count/CountSection";

const App = () => {
  return (
    <div className="app_container">
      <Header />

      <main>
        <ProjectCatalog />
        <IncludeSection />
        <Individual />
        <CountSection />
      </main>
    </div>
  );
};

export default App;
