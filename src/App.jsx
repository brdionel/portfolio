import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ShoppingCartProject from "./pages/shoppingCartProject";
import TakingNotesProject from "./pages/takingNotesProject";
import MediaBoardProject from "./pages/mediaBoardProject";
import WeatherWheelProject from "./pages/weatherWheelProject";
import FootballTableProject from "./pages/footballTableProject";
import PageNotFound from "./pages/pageNotFound";
import SalesServicesDNDProject from "./pages/salesServiceDNDProjext";
import ReplicaVeladaIIIProject from "./pages/replicaVeladaIII";

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
        <Route
          path="/project/football-table"
          element={<FootballTableProject />}
        />
        <Route 
          path="/project/sales-services"
          element={<SalesServicesDNDProject />}
        />
        <Route 
          path="/project/replica-velada-III"
          element={<ReplicaVeladaIIIProject />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
