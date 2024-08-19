import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import { HomePage } from "./Components/HomePage/HomePage";
import { MenuPage } from "./Components/NavBar/MenuPage";
import { ServicesPage } from "./Components/ServicesPage/ServicesPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/services" element={<ServicesPage />}/>
      </Routes>
    </Router>
  );
};

export default App;
