import "./App.css";
import ItemShop from "./Components/ItemShop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Information from "./Components/Information";
import AllProduct from "./Components/AllProduct";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ItemShop />}  />
        <Route path="/:id" element={<Information />} />
        <Route path="/Allproduct" element={<AllProduct />} />
      </Routes>
    </div>
  );
}

export default App;
