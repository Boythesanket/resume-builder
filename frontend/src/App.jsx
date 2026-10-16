import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import Preview from "./pages/Preview";
import Layout from "./pages/Layout";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<Layout />} path="app">
          <Route index element={<Dashboard />} />
          <Route element={<ResumeBuilder />} path="builder/:resumeId" />
        </Route>

        <Route element={<Preview />} path="view/:resumeId" />
        <Route element={<Login />} path="login" />
      </Routes>
    </>
  );
}

export default App;
