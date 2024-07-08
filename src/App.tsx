import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import { HomePage } from "./Components/HomePage/HomePage";
import { MenuPage } from "./Components/NavBar/MenuPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
};

export default App;
