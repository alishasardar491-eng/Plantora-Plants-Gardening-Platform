import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import {
  Heart,
  ShoppingBag,
  Menu,
  X,
  Leaf,
} from "lucide-react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Plants", path: "/plants" },
    { name: "Categories", path: "/categories" },
    { name: "Gardening Tips", path: "/gardening-tips" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  const updateCartCount = () => {
    const cart =
      JSON.parse(localStorage.getItem("plantora-cart")) || []

    const totalQuantity = cart.reduce(
      (total, item) => total + (item.quantity || 1),
      0
    )

    setCartCount(totalQuantity)
  }

  useEffect(() => {
    updateCartCount()

    const handleStorageChange = () => {
      updateCartCount()
    }

    window.addEventListener(
      "storage",
      handleStorageChange
    )

    window.addEventListener(
      "plantora-cart-updated",
      handleStorageChange
    )

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange
      )

      window.removeEventListener(
        "plantora-cart-updated",
        handleStorageChange
      )
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#fbfaf6]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2.5"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#315c3a] text-white transition-transform duration-300 group-hover:rotate-6">
            <Leaf size={21} strokeWidth={1.8} />
          </div>

          <div>
            <h1 className="text-xl font-semibold tracking-tight text-[#243b2a]">
              Plantora
            </h1>

            <p className="-mt-0.5 text-[10px] uppercase tracking-[0.2em] text-[#78907b]">
              Grow beautifully
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#315c3a]"
                    : "text-stone-600 hover:text-[#315c3a]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#315c3a] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">

          {/* Favorites */}
          <Link
            to="/favorites"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-stone-600 transition-all duration-300 hover:bg-[#edf3ec] hover:text-[#315c3a] sm:flex"
            aria-label="Favorites"
          >
            <Heart
              size={20}
              strokeWidth={1.8}
            />
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative hidden h-10 w-10 items-center justify-center rounded-full text-stone-600 transition-all duration-300 hover:bg-[#edf3ec] hover:text-[#315c3a] sm:flex"
            aria-label="Shopping cart"
          >
            <ShoppingBag
              size={20}
              strokeWidth={1.8}
            />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#315c3a] px-1 text-[10px] font-bold text-white shadow-sm">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-stone-700 transition-colors hover:bg-[#edf3ec] hover:text-[#315c3a] lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-stone-200/70 bg-[#fbfaf6] transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `border-b border-stone-200/60 py-3.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#315c3a]"
                    : "text-stone-600 hover:text-[#315c3a]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="flex gap-3 py-4">

            {/* Mobile Favorites */}
            <Link
              to="/favorites"
              onClick={() => setMenuOpen(false)}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#edf3ec] py-3 text-sm font-medium text-[#315c3a]"
            >
              <Heart size={17} />
              Favorites
            </Link>

            {/* Mobile Cart */}
            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="relative flex flex-1 items-center justify-center gap-2 rounded-full bg-[#315c3a] py-3 text-sm font-medium text-white"
            >
              <ShoppingBag size={17} />
              Cart

              {cartCount > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold text-[#315c3a]">
                  {cartCount > 99
                    ? "99+"
                    : cartCount}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar