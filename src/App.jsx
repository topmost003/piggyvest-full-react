import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./static/Footer";
import Navbar from "./static/Navbar";
import Invest from "./pages/Invest";
import Shop from "./pages/Shop";
import HouseMoney from "./pages/HouseMoney";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import FlexDollar from "./pages/FlexDollar";
import Targets from "./pages/Targets";
import FAQs from "./pages/FAQs";
import Safelock from "./pages/Safelock";
import FlexNaira from "./pages/FlexNaira";
import Piggyvest from "./pages/Piggyvest";
import Stories from "./pages/Stories";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <div className="max-w-[1300px] mx-auto  ">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/housemoney" element={<HouseMoney />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/flex-dollar" element={<FlexDollar />} />
            <Route path="/targets" element={<Targets />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/safelock" element={<Safelock />} />
            <Route path="/flexnaira" element={<FlexNaira />} />
            <Route path="/piggybank" element={<Piggyvest />} />
            <Route path="/stories" element={<Stories />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
