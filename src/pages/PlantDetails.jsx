import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Heart,
  ShoppingBag,
  Star,
  Sun,
  Droplets,
  Home,
  Leaf,
  Check,
} from "lucide-react"

import PlantCard from "../components/PlantCard"
import plants from "../data/plants"

function PlantDetails() {
  const { id } = useParams()

  const plant = plants.find(
    (item) => item.id === Number(id)
  )

  const [isFavorite, setIsFavorite] = useState(false)
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  useEffect(() => {
    if (!plant) return

    const savedFavorites =
      JSON.parse(
        localStorage.getItem("plantora-favorites")
      ) || []

    const favoriteExists = savedFavorites.some(
      (item) => item.id === plant.id
    )

    setIsFavorite(favoriteExists)

    const savedCart =
      JSON.parse(
        localStorage.getItem("plantora-cart")
      ) || []

    const cartExists = savedCart.some(
      (item) => item.id === plant.id
    )

    setIsAddedToCart(cartExists)
  }, [plant])

  /* ---------------- FAVORITES ---------------- */

  const toggleFavorite = () => {
    if (!plant) return

    const savedFavorites =
      JSON.parse(
        localStorage.getItem("plantora-favorites")
      ) || []

    const exists = savedFavorites.some(
      (item) => item.id === plant.id
    )

    let updatedFavorites

    if (exists) {
      updatedFavorites = savedFavorites.filter(
        (item) => item.id !== plant.id
      )

      setIsFavorite(false)
    } else {
      updatedFavorites = [
        ...savedFavorites,
        plant,
      ]

      setIsFavorite(true)
    }

    localStorage.setItem(
      "plantora-favorites",
      JSON.stringify(updatedFavorites)
    )
  }

  /* ---------------- ADD TO CART ---------------- */

  const addToCart = () => {
    if (!plant) return

    const savedCart =
      JSON.parse(
        localStorage.getItem("plantora-cart")
      ) || []

    const existingItem = savedCart.find(
      (item) => item.id === plant.id
    )

    let updatedCart

    if (existingItem) {
      updatedCart = savedCart.map((item) =>
        item.id === plant.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    } else {
      updatedCart = [
        ...savedCart,
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

  /* ---------------- PLANT NOT FOUND ---------------- */

  if (!plant) {
    return (
      <main className="min-h-[70vh] bg-[#fbfaf6]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#edf3ec] text-[#315c3a]">
            <Leaf size={28} />
          </div>

          <h1 className="mt-6 text-3xl font-semibold text-[#243b2a]">
            Plant not found
          </h1>

          <p className="mt-3 max-w-md text-sm leading-6 text-stone-400">
            The plant you're looking for doesn't exist
            or may have been removed.
          </p>

          <Link
            to="/plants"
            className="mt-7 rounded-full bg-[#315c3a] px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-105"
          >
            Back to Plants
          </Link>
        </div>
      </main>
    )
  }

  const relatedPlants = plants.filter(
    (item) =>
      item.category === plant.category &&
      item.id !== plant.id
  )

  return (
    <main className="bg-[#fbfaf6]">
      {/* Main Details */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-16">

        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/plants"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition-colors hover:text-[#315c3a]"
          >
            <ArrowLeft size={17} />
            Back to Plants
          </Link>
        </motion.div>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] bg-[#edf1e9]"
          >
            <img
              src={plant.image}
              alt={plant.name}
              className="aspect-square h-full w-full object-cover"
            />

            {/* Category */}
            <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-[#315c3a] shadow-sm backdrop-blur-md">
              {plant.category}
            </div>

            {/* Favorite */}
            <button
              type="button"
              onClick={toggleFavorite}
              className={`absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full shadow-sm backdrop-blur-md transition-all duration-300 ${
                isFavorite
                  ? "bg-[#315c3a] text-white"
                  : "bg-white/90 text-stone-600 hover:bg-[#315c3a] hover:text-white"
              }`}
              aria-label={
                isFavorite
                  ? "Remove from favorites"
                  : "Add to favorites"
              }
            >
              <Heart
                size={19}
                strokeWidth={1.8}
                fill={
                  isFavorite
                    ? "currentColor"
                    : "none"
                }
              />
            </button>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78907b]">
              Plantora Collection
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#243b2a] sm:text-5xl">
              {plant.name}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1 text-amber-400">
                <Star
                  size={17}
                  fill="currentColor"
                />

                <span className="text-sm font-semibold">
                  {plant.rating}
                </span>
              </div>

              <span className="h-1 w-1 rounded-full bg-stone-300" />

              <span className="text-sm text-stone-400">
                Highly rated plant
              </span>
            </div>

            {/* Price */}
            <div className="mt-7">
              <p className="text-3xl font-semibold text-[#315c3a]">
                Rs. {plant.price.toLocaleString()}
              </p>

              <p className="mt-1 text-sm text-stone-400">
                Freshly selected for your space
              </p>
            </div>

            {/* Description */}
            <p className="mt-7 text-base leading-7 text-stone-500">
              {plant.description}
            </p>

            {/* Care Information */}
            <div className="mt-8 grid grid-cols-3 gap-3">

              <div className="rounded-2xl border border-stone-200/70 bg-white p-4">
                <Sun
                  size={20}
                  className="text-[#315c3a]"
                  strokeWidth={1.7}
                />

                <p className="mt-3 text-xs text-stone-400">
                  Light
                </p>

                <p className="mt-1 text-sm font-medium leading-5 text-[#243b2a]">
                  {plant.light}
                </p>
              </div>

              <div className="rounded-2xl border border-stone-200/70 bg-white p-4">
                <Droplets
                  size={20}
                  className="text-[#315c3a]"
                  strokeWidth={1.7}
                />

                <p className="mt-3 text-xs text-stone-400">
                  Watering
                </p>

                <p className="mt-1 text-sm font-medium leading-5 text-[#243b2a]">
                  {plant.watering}
                </p>
              </div>

              <div className="rounded-2xl border border-stone-200/70 bg-white p-4">
                <Home
                  size={20}
                  className="text-[#315c3a]"
                  strokeWidth={1.7}
                />

                <p className="mt-3 text-xs text-stone-400">
                  Environment
                </p>

                <p className="mt-1 text-sm font-medium leading-5 text-[#243b2a]">
                  {plant.environment}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              {/* Add To Cart */}
              <button
                type="button"
                onClick={addToCart}
                className={`flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${
                  isAddedToCart
                    ? "bg-[#243b2a] shadow-[#243b2a]/15"
                    : "bg-[#315c3a] shadow-[#315c3a]/15 hover:bg-[#243b2a]"
                }`}
              >
                {isAddedToCart ? (
                  <>
                    <Check size={18} />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    Add to Cart
                  </>
                )}
              </button>

              {/* Favorite */}
              <button
                type="button"
                onClick={toggleFavorite}
                className={`flex items-center justify-center gap-2 rounded-full border px-6 py-4 text-sm font-semibold transition-all duration-300 ${
                  isFavorite
                    ? "border-[#315c3a] bg-[#edf3ec] text-[#315c3a]"
                    : "border-stone-200 bg-white text-[#315c3a] hover:border-[#315c3a] hover:bg-[#edf3ec]"
                }`}
              >
                <Heart
                  size={18}
                  fill={
                    isFavorite
                      ? "currentColor"
                      : "none"
                  }
                />

                {isFavorite
                  ? "Saved"
                  : "Save"}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Plants */}
      {relatedPlants.length > 0 && (
        <section className="border-t border-stone-200/70 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78907b]">
                  You may also like
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#243b2a]">
                  More from this collection
                </h2>
              </div>

              <Link
                to="/plants"
                className="hidden text-sm font-medium text-[#315c3a] sm:block"
              >
                View all →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPlants
                .slice(0, 3)
                .map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                  >
                    <PlantCard plant={item} />
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

export default PlantDetails