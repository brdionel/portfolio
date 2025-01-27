import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ShoppingCartProject from "./pages/shoppingCartProject";
import TakingNotesProject from "./pages/takingNotesProject";
import MediaBoardProject from "./pages/mediaBoardProject";
import WeatherWheelProject from "./pages/weatherWheelProject";
import FootballTableProject from "./pages/footballTableProject";
import ScrollToTop from "./componentes/scrollToTop";
import PageNotFound from "./pages/pageNotFound";

function App() {
  return (
    <Router>
      <ScrollToTop />
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
        <Route
          path="/project/football-table"
          element={<FootballTableProject />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
