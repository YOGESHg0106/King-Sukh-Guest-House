import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter as Router
import Header from "./components/Header";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AuthProvider } from "./context/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <AuthProvider>
      {/* Removed Router here */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main>
                <section id="about">
                  <About />
                </section>
                <section id="services">
                  <Services />
                </section>
                <section id="rooms">
                  <Rooms />
                </section>
                <section id="gallery">
                  <Gallery />
                </section>
                <section id="contact">
                  <Contact />
                </section>
                <section id="map">
                  <Map />
                </section>
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
