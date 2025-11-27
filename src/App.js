// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Jobs from "./components/Jobs";
import Location from "./components/Location";
import Running from "./components/Running";
import Surdejskursus from "./components/Surdejskursus";
import MenuMG from "./components/Menu_MorksGade";
import MenuNM from "./components/Menu_NyMunkegade";
import Bakery2Business from "./components/Bakery2Business";
import Historie from "./components/Historie";

export default function App() {
  return (
    <Router>
      {/* Navigationen (kan senere laves til burger-menu) */}
      <NavBar />

      {/* Selve siderne */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bakery2business" element={<Bakery2Business />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menumorksgade" element={<MenuMG />} />
        <Route path="/menunymunke" element={<MenuNM />} />
        <Route path="/events" element={<Events />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/location" element={<Location />} />
        <Route path="/running" element={<Running />} />
        <Route path="/surdejskursus" element={<Surdejskursus />} />
        <Route path="/historie" element={<Historie />} />
      </Routes>
    </Router>
  );
}
