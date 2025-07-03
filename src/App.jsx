import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast"; 


import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetail";
import Consultancy from "./pages/Consultancy";
import Register from "./pages/Register";
import LoginForm from "./pages/Login";


export default function App() {
  return (
    <>
      <Toaster
        position="top-center" 
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{
          zIndex: 9999 // Ensures the toast appears on top of other elements
        }}
        toastOptions={{
          // Default options for all toasts
          className: '',
          duration: 3000, 
          style: {
            background: '#363636',
            color: '#fff',
          },
          // Options for success toasts
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
            style: {
              background: '#28a745', // Green background for success
              color: '#fff',
            },
          },
          // Options for error toasts
          error: {
            duration: 4000, 
            theme: {
              primary: 'red',
              secondary: 'black',
            },
            style: {
              background: '#ff6b6b', // Red background for error
              color: '#fff',
            },
          },
        }}
      />

      <Routes>
        {/* Your existing routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="register" element={<Register/>} />
          <Route path="consultancy" element={<Consultancy/>} />
          <Route path="login" element={<LoginForm />} /> {/* Ensure login path is correct */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}