import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Category, ItemDetailContainer } from "../pages";
import { NavBarComponent } from "../components";
import { propTypes } from "react-bootstrap/esm/Image";
import {CreateProduct} from "../pages";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:productId" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
};
