import React from "react";
import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import AllFile from "./page/AllFile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllFile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
