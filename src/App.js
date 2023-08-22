import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
// We will create these two pages in a moment
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/:id" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
