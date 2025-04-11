import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import Previous from "../components/previous";
import Next from "../components/next";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<App />} />
        <Route path="/previous" element={<Previous />} />
        <Route path="/next" element={<Next />} />

        {/* Redirección para rutas desconocidas */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
