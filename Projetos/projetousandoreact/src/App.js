import React from "react";

import "./App.css";

import { Nav } from "./components/Nav/Nav";
import { Start } from "./components/Start/Start";
import { Program } from "./components/Program/Program";
import { Class } from "./components/Class/Class";
import { JoinUs } from "./components/JoinUs/JoinUs";
import { Plans } from "./components/Plans/Plans";
import { Comment } from "./components/Comment/Comment";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Start />
      <Program />
      <Class />
      <JoinUs />
      <Plans />
      <Comment />
      <Footer />
    </>
  );
}

export default App;
