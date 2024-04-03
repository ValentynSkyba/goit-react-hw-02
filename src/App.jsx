import { useState } from "react";
import Feedback from "./components/Feedback/Feedback.jsx";
import Desription from "./components/Description/Desription.jsx";
import Option from "./components/Option/Option.jsx";

const App = () => {
  return (
    <>
      <Desription />
      <Option />
      <Feedback />
    </>
  );
};

export default App;
