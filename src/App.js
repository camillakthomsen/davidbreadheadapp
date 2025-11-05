import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/Home";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Coffee from "./components/Coffee";
import Contact from "./components/Contact";
import Delivery from "./components/Delivery";
import Jobs from "./components/Jobs";
import Location from "./components/Location";
import Running from "./components/Running";
import Sourdough from "./components/Sourdough";

function Layout({ children }) {
  const location = useLocation();
  const hideNavOn = ["/"];
  const showNav = !hideNavOn.includes(location.pathname);
  return (
    <>
      {showNav && <NavBar />}
      {children}
    </>
  );
}

const pageVariants = {
  initial: { y: 80, opacity: 0 },       // starter lidt nede (føles som scroll ned)
  animate: { y: 0, opacity: 1 },
  exit:    { y: -80, opacity: 0 },      // glider let op ved exit
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.main
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.55, ease: "easeInOut" }}
            >
              <Home />
            </motion.main>
          }
        />
        <Route
          path="/homepage"
          element={
            <motion.main
              variants={pageVariants}
              initial={{ y: 120, opacity: 0 }}   // kommer nedefra → “scroll ned” følelse
              animate="animate"
              exit="exit"
              transition={{ duration: 0.55, ease: "easeInOut" }}
            >
              <HomePage />
            </motion.main>
          }
        />
        {/* øvrige sider */}
        <Route path="/coffee"   element={<motion.div {...animProps}><Coffee /></motion.div>} />
        <Route path="/contact"  element={<motion.div {...animProps}><Contact /></motion.div>} />
        <Route path="/delivery" element={<motion.div {...animProps}><Delivery /></motion.div>} />
        <Route path="/jobs"     element={<motion.div {...animProps}><Jobs /></motion.div>} />
        <Route path="/location" element={<motion.div {...animProps}><Location /></motion.div>} />
        <Route path="/running"  element={<motion.div {...animProps}><Running /></motion.div>} />
        <Route path="/sourdough" element={<motion.div {...animProps}><Sourdough /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}

const animProps = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -40, opacity: 0 },
  transition: { duration: 0.45, ease: "easeInOut" }
};

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}
