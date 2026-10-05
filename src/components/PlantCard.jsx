import { useState } from "react"
import { motion } from "framer-motion"
import {
  Heart,
  Star,
  ArrowUpRight,
  ShoppingBag,
  Check,
} from "lucide-react"
import { Link } from "react-router-dom"

function PlantCard({ plant }) {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites =
      JSON.parse(
        localStorage.getItem("plantora-favorites")
      ) || []

    return favorites.some(
      (item) => item.id === plant.id
    )
  })

  const [isAddedToCart, setIsAddedToCart] = useState(() => {
    const cart =
      JSON.parse(
        localStorage.getItem("plantora-cart")
      ) || []

    return cart.some(
      (item) => item.id === plant.id
    )
  })

  const toggleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const favorites =
      JSON.parse(
        localStorage.getItem("plantora-favorites")
      ) || []

    const alreadyFavorite = favorites.some(
      (item) => item.id === plant.id
    )

    let updatedFavorites

    if (alreadyFavorite) {
      updatedFavorites = favorites.filter(
        (item) => item.id !== plant.id
      )

      setIsFavorite(false)
    } else {
      updatedFavorites = [
        ...favorites,
        plant,
      ]

      setIsFavorite(true)
    }

    localStorage.setItem(
      "plantora-favorites",
      JSON.stringify(updatedFavorites)
    )
  }

  const addToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const cart =
      JSON.parse(
        localStorage.getItem("plantora-cart")
      ) || []

    const existingItem = cart.find(
      (item) => item.id === plant.id
    )

    let updatedCart

    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.id === plant.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    } else {
      updatedCart = [
        ...cart,
        {
          ...plant,
          quantity: 1,
        },
      ]
    }

    localStorage.setItem(
      "plantora-cart",
      JSON.stringify(updatedCart)
    )

    // Update Navbar cart badge immediately
    window.dispatchEvent(
      new Event("plantora-cart-updated")
    )

    setIsAddedToCart(true)
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl border border-stone-200/70 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#315c3a]/10"
    >
      {/* Image */}
      <div className="relative aspect-[4/4.5] overflow-hidden bg-[#edf1e9]">
        <img
          src={plant.image}
          alt={plant.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-[#315c3a] shadow-sm backdrop-blur-sm">
          {plant.category}
        </span>

        {/* Favorite */}
        <button
          type="button"
          onClick={toggleFavorite}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full shadow-sm backdrop-blur-sm transition-all duration-300 ${
            isFavorite
              ? "bg-[#315c3a] text-white"
              : "bg-white/90 text-stone-600 hover:bg-[#315c3a] hover:text-white"
          }`}
          aria-label={
            isFavorite
              ? `Remove ${plant.name} from favorites`
              : `Add ${plant.name} to favorites`
          }
        >
          <Heart
            size={17}
            strokeWidth={1.8}
            fill={
              isFavorite
                ? "currentColor"
                : "none"
            }
          />
        </button>

        {/* View Details */}
        <Link
          to={`/plants/${plant.id}`}
          className="absolute bottom-4 left-4 right-4 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-white/95 py-3 text-sm font-medium text-[#315c3a] opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          View Details
          <ArrowUpRight size={16} />
        </Link>
      </div>

      {/* Plant Information */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-[#243b2a]">
              {plant.name}
            </h3>

            <p className="mt-1 text-sm text-stone-400">
              {plant.environment}
            </p>
          </div>

          <div className="flex items-center gap-1 text-xs text-stone-500">
            <Star
              size={14}
              fill="currentColor"
              className="text-amber-400"
            />

            {plant.rating}
          </div>
        </div>

        {/* Price */}
        <div className="mt-5 border-t border-stone-100 pt-4">
          <p className="text-lg font-semibold text-[#315c3a]">
            Rs. {plant.price.toLocaleString()}
          </p>
        </div>

        {/* Add to Cart */}
        <button
          type="button"
          onClick={addToCart}
          className={`mt-4 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
            isAddedToCart
              ? "bg-[#243b2a] text-white"
              : "bg-[#315c3a] text-white hover:bg-[#243b2a]"
          }`}
        >
          {isAddedToCart ? (
            <>
              <Check size={17} />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingBag size={17} />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </motion.div>
  )
}

export default PlantCard