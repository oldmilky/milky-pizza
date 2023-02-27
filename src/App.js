import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <>
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
