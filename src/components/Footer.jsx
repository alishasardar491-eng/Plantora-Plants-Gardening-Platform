import { Link } from "react-router-dom"
import { Leaf } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-[#243b2a] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Brand */}
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#315c3a]">
                <Leaf size={22} />
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  Plantora
                </h2>

                <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                  Grow beautifully
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-6 text-white/55">
              Discover beautiful plants, simple gardening tips, and
              inspiration to bring more green into your everyday life.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold">
              Explore
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/plants"
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                Plants
              </Link>

              <Link
                to="/categories"
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                Categories
              </Link>

              <Link
                to="/gardening-tips"
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                Gardening Tips
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/about"
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                Contact
              </Link>

              <Link
                to="/favorites"
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                Favorites
              </Link>

              <Link
                to="/cart"
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                Shopping Cart
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs text-white/35">
            © 2026 Plantora. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer