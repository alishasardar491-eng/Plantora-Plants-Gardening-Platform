import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Plants from "./pages/Plants"
import PlantDetails from "./pages/PlantDetails"
import Categories from "./pages/Categories"
import GardeningTips from "./pages/GardeningTips"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Favorites from "./pages/Favorites"
import Cart from "./pages/Cart"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#fbfaf6] text-stone-800">
        <Navbar />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Plants */}
          <Route path="/plants" element={<Plants />} />

          {/* Plant Details */}
          <Route
            path="/plants/:id"
            element={<PlantDetails />}
          />

          {/* Categories */}
          <Route
            path="/categories"
            element={<Categories />}
          />

          {/* Gardening Tips */}
          <Route
            path="/gardening-tips"
            element={<GardeningTips />}
          />

          {/* About */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* Favorites */}
          <Route
            path="/favorites"
            element={<Favorites />}
          />

          {/* Cart */}
          <Route
            path="/cart"
            element={<Cart />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App