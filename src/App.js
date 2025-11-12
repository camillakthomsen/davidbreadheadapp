// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Coffee from "./components/Coffee";
import Contact from "./components/Contact";
import Delivery from "./components/Delivery";
import Events from "./components/Events";
import Jobs from "./components/Jobs";
import Location from "./components/Location";
import Running from "./components/Running";
import Sourdough from "./components/Sourdough";

export default function App() {
  return (
    <Router>
      {/* Navigationen (kan senere laves til burger-menu) */}
      <NavBar />

      {/* Selve siderne */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/location" element={<Location />} />
        <Route path="/running" element={<Running />} />
        <Route path="/sourdough" element={<Sourdough />} />
      </Routes>
    </Router>
  );
}
