import { createRoot } from "react-dom/client";
import { Example } from "./Example";
import "./styles.css";

const App = () => <Example />;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
