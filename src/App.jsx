import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Contact from "./features/contact/Contact";
import Spotlight from "./features/spotLight/Spotlight";
import Trays from "./pages/Trays";
import Thonet from "./pages/Thonet";
import Lamps from "./pages/Lamps";
import Collections from "./pages/collections";
import ModernFurniture from "./pages/ModernFurniture";
import ContextAllProvider from "./context/contextAll";
import ScrollToTop from "./helper/ScrollToTop";
import ItemInfo from "./components/ItemInfo";
import About from "./features/about/About";
import CartOverview from "./features/cart/CartOverview";

function App() {
  const queryClient = new QueryClient();

  return (
    <ContextAllProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/trays" element={<Trays />} />
              <Route path="/thonet-chairs" element={<Thonet />} />
              <Route path="/modern-furniture" element={<ModernFurniture />} />
              <Route path="/lamps" element={<Lamps />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/about" element={<About />} />
              <Route path="/spotlight" element={<Spotlight />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="/cart" element={<CartOverview />} />
            <Route path="/item-info" element={<ItemInfo />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ContextAllProvider>
  );
}

export default App;
