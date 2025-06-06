import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "@fontsource-variable/jetbrains-mono";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(<HelmetProvider>
    <App />
</HelmetProvider>);
