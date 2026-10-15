import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import Preview from "./pages/Preview";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Layout />} path="app">
          <Route index element={<Dashboard />} />
          <Route element={<ResumeBuilder />} path="builder/:resumeId" />
        </Route>

        <Route element={<Preview />} path="view/:resumeId" />
      </Routes>
    </>
  );
}

export default App;
