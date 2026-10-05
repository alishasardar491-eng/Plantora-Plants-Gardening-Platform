import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { useSearchParams } from "react-router-dom"
import {
  Search,
  SlidersHorizontal,
  ArrowDownUp,
  Leaf,
} from "lucide-react"

import PlantCard from "../components/PlantCard"
import plants from "../data/plants"
import monstera from "../assets/plants/monstera.jpg"

function Plants() {
  const [searchParams] = useSearchParams()

  const categoryFromUrl = searchParams.get("category")

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState(
    categoryFromUrl || "All"
  )
  const [sortBy, setSortBy] = useState("default")
  const [maxPrice, setMaxPrice] = useState(3000)

  const categories = [
    "All",
    "Indoor Plants",
    "Flowering Plants",
    "Succulents",
  ]

  const filteredPlants = useMemo(() => {
    let result = plants.filter((plant) => {
      const matchesSearch = plant.name
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesCategory =
        category === "All" ||
        plant.category === category

      const matchesPrice =
        plant.price <= maxPrice

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice
      )
    })

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price)
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price)
    }

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [search, category, sortBy, maxPrice])

  const clearFilters = () => {
    setSearch("")
    setCategory("All")
    setSortBy("default")
    setMaxPrice(3000)
  }

  return (
    <main className="bg-[#fbfaf6]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f1f3eb]">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#dfe9dc] blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#e7dcc9] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-16">

          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="max-w-2xl"
          >
            <div className="mb-5 flex items-center gap-2 text-[#315c3a]">
              <Leaf
                size={18}
                strokeWidth={1.8}
              />

              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Plant Collection
              </span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-[#243b2a] sm:text-5xl lg:text-6xl">
              Find a plant that
              <span className="block text-[#315c3a]">
                feels like home.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-stone-500 sm:text-lg">
              Explore our collection of beautiful indoor
              plants, flowering plants, and easy-care
              greenery for every space.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-[#315c3a]/10 bg-white/70 px-5 py-2.5 text-sm font-medium text-[#315c3a]">
                Indoor Plants
              </div>

              <div className="rounded-full border border-[#315c3a]/10 bg-white/70 px-5 py-2.5 text-sm font-medium text-[#315c3a]">
                Flowering Plants
              </div>

              <div className="rounded-full border border-[#315c3a]/10 bg-white/70 px-5 py-2.5 text-sm font-medium text-[#315c3a]">
                Succulents
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="relative mx-auto w-full max-w-lg"
          >
            {/* Decorative circles */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#dfe9dc] blur-2xl" />

            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#e7dcc9] blur-2xl" />

            {/* Image Card */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white p-3 shadow-2xl shadow-[#315c3a]/10">
              <div className="relative h-[380px] overflow-hidden rounded-[2rem] sm:h-[420px]">

                <img
                  src={monstera}
                  alt="Beautiful Monstera plant"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#17271c]/50 via-transparent to-transparent" />

                {/* Floating Plant Info */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4">

                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#78907b]">
                        Featured Plant
                      </p>

                      <h3 className="mt-1 text-lg font-semibold text-[#243b2a]">
                        Monstera Deliciosa
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#315c3a] text-white">
                      <Leaf size={18} />
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -left-4 top-8 rounded-2xl border border-white/70 bg-white px-4 py-3 shadow-xl sm:-left-5">
              <p className="text-xs text-stone-400">
                Plantora
              </p>

              <p className="mt-0.5 text-sm font-semibold text-[#315c3a]">
                Grow beautifully 🌿
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">

        {/* Search */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <div className="relative max-w-xl">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search plants..."
              className="h-13 w-full rounded-full border border-stone-200 bg-white pl-12 pr-5 text-sm text-stone-700 outline-none transition-all placeholder:text-stone-400 focus:border-[#315c3a] focus:ring-4 focus:ring-[#315c3a]/10"
            />
          </div>
        </motion.div>

        {/* Filter Box */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="mt-6 rounded-3xl border border-stone-200/70 bg-white p-5 sm:p-6"
        >
          <div className="flex flex-col gap-6">

            {/* Categories */}
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-stone-600">
                <SlidersHorizontal size={16} />
                Category
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      setCategory(item)
                    }
                    className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                      category === item
                        ? "bg-[#315c3a] text-white shadow-md shadow-[#315c3a]/15"
                        : "border border-stone-200 bg-[#fbfaf6] text-stone-500 hover:border-[#315c3a]/30 hover:text-[#315c3a]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Price + Sorting */}
            <div className="grid gap-6 border-t border-stone-100 pt-6 md:grid-cols-2">

              {/* Price */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-sm font-medium text-stone-600">
                    Maximum Price
                  </label>

                  <span className="text-sm font-semibold text-[#315c3a]">
                    Rs. {maxPrice.toLocaleString()}
                  </span>
                </div>

                <input
                  type="range"
                  min="1000"
                  max="3000"
                  step="100"
                  value={maxPrice}
                  onChange={(e) =>
                    setMaxPrice(
                      Number(e.target.value)
                    )
                  }
                  className="w-full accent-[#315c3a]"
                />

                <div className="mt-2 flex justify-between text-xs text-stone-400">
                  <span>Rs. 1,000</span>
                  <span>Rs. 3,000</span>
                </div>
              </div>

              {/* Sorting */}
              <div>
                <label className="mb-3 flex items-center gap-2 text-sm font-medium text-stone-600">
                  <ArrowDownUp size={16} />
                  Sort By
                </label>

                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value)
                  }
                  className="h-11 w-full rounded-full border border-stone-200 bg-[#fbfaf6] px-4 text-sm text-stone-600 outline-none transition-all focus:border-[#315c3a] focus:ring-4 focus:ring-[#315c3a]/10"
                >
                  <option value="default">
                    Recommended
                  </option>

                  <option value="price-low">
                    Price: Low to High
                  </option>

                  <option value="price-high">
                    Price: High to Low
                  </option>

                  <option value="rating">
                    Rating: High to Low
                  </option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Header */}
        <div className="mt-12 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-stone-400">
              Showing
            </p>

            <h2 className="mt-1 text-xl font-semibold text-[#243b2a]">
              {filteredPlants.length}{" "}
              {filteredPlants.length === 1
                ? "Plant"
                : "Plants"}
            </h2>
          </div>

          {(search ||
            category !== "All" ||
            sortBy !== "default" ||
            maxPrice !== 3000) && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm font-medium text-[#315c3a] transition-colors hover:text-[#243b2a]"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Plants */}
        {filteredPlants.length > 0 ? (
          <motion.div
            layout
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredPlants.map(
              (plant, index) => (
                <motion.div
                  key={plant.id}
                  layout
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
                >
                  <PlantCard plant={plant} />
                </motion.div>
              )
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="mt-10 rounded-3xl border border-stone-200 bg-white px-6 py-20 text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#edf3ec] text-[#315c3a]">
              <Leaf size={24} />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#243b2a]">
              No plants found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-stone-400">
              Try changing your search, category,
              or price filter.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-full bg-[#315c3a] px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-105"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </section>
    </main>
  )
}

export default Plants