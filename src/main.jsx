import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { EventProvider } from "./context/EventContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <EventProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </EventProvider>
  </AuthProvider>
);
