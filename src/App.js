import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { Landing } from "./components/Landing";
import { MovieDetail } from "./components/MovieDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/movie/:movieId" element={<MovieDetail />} />

        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
