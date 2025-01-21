import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ShoppingCartProject from "./pages/shoppingCartProject";
import TakingNotesProject from "./pages/takingNotesProject";
import MediaBoardProject from "./pages/mediaBoardProject";
import WeatherWheelProject from "./pages/weatherWheelProject";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/project/shopping-cart"
          element={<ShoppingCartProject />}
        />
        <Route path="/project/taking-notes" element={<TakingNotesProject />} />
        <Route path="/project/media-board" element={<MediaBoardProject />} />
        <Route
          path="/project/weather-wheel"
          element={<WeatherWheelProject />}
        />
      </Routes>
    </Router>
  );
}

export default App;
