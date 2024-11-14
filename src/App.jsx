import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import OurGallery from "./pages/OurGallery";
import SpotlightAndMore from "./pages/SpotlightAndMore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/spotlightAndMore" element={<SpotlightAndMore />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ourGallery" element={<OurGallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
