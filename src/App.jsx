import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ShoppingCartProject from "./pages/shoppingCartPoject";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/project/shopping-cart"
          element={<ShoppingCartProject />}
        />
      </Routes>
    </Router>
  );
}

export default App;
