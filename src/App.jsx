import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ThankYou from "./components/ThankYou";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/cart" exact element={<Cart />} />
        <Route path="/thankyou" exact element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
