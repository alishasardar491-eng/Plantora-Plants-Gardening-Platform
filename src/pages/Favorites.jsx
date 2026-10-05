import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Heart, ArrowRight, Leaf, Trash2 } from "lucide-react"

function Favorites() {
  const [favorites, setFavorites] = useState([])

  const loadFavorites = () => {
    const savedFavorites =
      JSON.parse(
        localStorage.getItem("plantora-favorites")
      ) || []

    setFavorites(savedFavorites)
  }

  useEffect(() => {
    loadFavorites()
  }, [])

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter(
      (plant) => plant.id !== id
    )

    localStorage.setItem(
      "plantora-favorites",
      JSON.stringify(updatedFavorites)
    )

    setFavorites(updatedFavorites)
  }

  return (
    <main className="min-h-screen bg-[#fbfaf6]">

      {/* Header */}
      <section className="relative overflow-hidden bg-[#f1f3eb]">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#dfe9dc] blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#e7dcc9] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-2 text-[#315c3a]">
              <Heart size={18} />

              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Your Collection
              </span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-[#243b2a] sm:text-5xl lg:text-6xl">
              Your favorite
              <span className="block text-[#315c3a]">
                plants.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-stone-500 sm:text-lg">
              Keep the plants you love in one place and
              come back to them whenever you're ready.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Favorites */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">

        {favorites.length > 0 ? (
          <>
            {/* Results */}
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-stone-400">
                  Your collection
                </p>

                <h2 className="mt-1 text-2xl font-semibold text-[#243b2a]">
                  {favorites.length}{" "}
                  {favorites.length === 1
                    ? "Favorite"
                    : "Favorites"}
                </h2>
              </div>

              <button
                onClick={() => {
                  localStorage.removeItem(
                    "plantora-favorites"
                  )
                  setFavorites([])
                }}
                className="text-sm font-medium text-stone-400 transition-colors hover:text-red-500"
              >
                Clear all
              </button>
            </div>

            {/* Plant Grid */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {favorites.map((plant, index) => (
                <motion.div
                  key={plant.id}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
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

                    {/* Remove */}
                    <button
                      type="button"
                      onClick={() =>
                        removeFavorite(plant.id)
                      }
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#315c3a] shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-red-500 hover:text-white"
                      aria-label={`Remove ${plant.name} from favorites`}
                    >
                      <Heart
                        size={17}
                        fill="currentColor"
                      />
                    </button>

                    {/* View Details */}
                    <Link
                      to={`/plants/${plant.id}`}
                      className="absolute bottom-4 left-4 right-4 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-white/95 py-3 text-sm font-medium text-[#315c3a] opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      View Details
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Details */}
                  <div className="p-5">

                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-semibold text-[#243b2a]">
                          {plant.name}
                        </h3>

                        <p className="mt-1 text-sm text-stone-400">
                          {plant.environment}
                        </p>
                      </div>

                      <p className="text-sm font-semibold text-[#315c3a]">
                        Rs.{" "}
                        {plant.price.toLocaleString()}
                      </p>
                    </div>

                    <Link
                      to={`/plants/${plant.id}`}
                      className="mt-5 flex items-center justify-center gap-2 rounded-full border border-stone-200 py-2.5 text-sm font-medium text-[#315c3a] transition-colors hover:border-[#315c3a] hover:bg-[#edf3ec]"
                    >
                      Explore Plant
                      <ArrowRight size={15} />
                    </Link>

                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[2rem] border border-stone-200 bg-white px-6 py-20 text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#edf3ec] text-[#315c3a]">
              <Heart size={27} />
            </div>

            <h2 className="mt-6 text-2xl font-semibold text-[#243b2a]">
              No favorites yet
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-stone-400">
              Start exploring our plant collection and
              save the plants you love.
            </p>

            <Link
              to="/plants"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#315c3a] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#243b2a]"
            >
              Explore Plants
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        )}

      </section>
    </main>
  )
}

export default Favorites