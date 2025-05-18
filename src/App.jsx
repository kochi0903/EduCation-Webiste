import { useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetail";
import Registration from "./pages/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
         <Route path="courses" element={<Courses />} /> 
        <Route path="courses/:id" element={<CourseDetails />} />
        <Route path="register" element={<Registration />} /> *
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
