import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Spotlight from "./pages/Spotlight";
import Trays from "./pages/Trays";
import ThonetChairs from "./pages/ThonetChairs";
import Lamps from "./pages/Lamps";
import Collections from "./pages/collections";
import ModernFurniture from "./pages/ModernFurniture";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/trays" element={<Trays />} />
          <Route path="/thonet-chairs" element={<ThonetChairs />} />
          <Route path="/modern-furniture" element={<ModernFurniture />} />
          <Route path="/lamps" element={<Lamps />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/spotlight" element={<Spotlight />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
