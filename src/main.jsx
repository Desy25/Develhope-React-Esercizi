import { StrictMode } from "react";
import { App } from "./App";
import { createRoot } from "react-dom/client"
import "./index.css"

// Io ho usato il main.jsx e non index.jsx quindi lo passo qui.

createRoot(document.getElementById('root')).render(<App />)