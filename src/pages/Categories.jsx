import { motion } from "framer-motion"
import {
  ArrowRight,
  Leaf,
  Flower2,
  Sun,
} from "lucide-react"
import { Link } from "react-router-dom"

import monstera from "../assets/plants/monstera.jpg"

function Categories() {
  const categories = [
    {
      name: "Indoor Plants",
      description:
        "Beautiful greenery that brings a fresh and calming touch to your indoor spaces.",
      count: "2 plants",
      icon: Leaf,
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=85",
      filter: "Indoor Plants",
    },
    {
      name: "Flowering Plants",
      description:
        "Add natural color and soft blooms to brighten up your everyday spaces.",
      count: "1 plant",
      icon: Flower2,
      image:
        "https://images.unsplash.com/photo-1455582916367-25f75bfc6710?auto=format&fit=crop&w=1000&q=85",
      filter: "Flowering Plants",
    },
    {
      name: "Succulents",
      description:
        "Low-maintenance plants with unique shapes, perfect for simple modern spaces.",
      count: "1 plant",
      icon: Sun,
      image:
        "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=1000&q=85",
      filter: "Succulents",
    },
  ]

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
                Explore Plantora
              </span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-[#243b2a] sm:text-5xl lg:text-6xl">
              Find your perfect
              <span className="block text-[#315c3a]">
                kind of green.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-stone-500 sm:text-lg">
              Explore our carefully selected plant categories
              and discover greenery that fits your space,
              lifestyle, and everyday routine.
            </p>

            {/* Stats */}
            <div className="mt-8 flex items-center gap-6 text-sm text-stone-500">

              <div>
                <p className="text-2xl font-semibold text-[#315c3a]">
                  3
                </p>

                <p className="mt-1">
                  Categories
                </p>
              </div>

              <div className="h-10 w-px bg-stone-300" />

              <div>
                <p className="text-2xl font-semibold text-[#315c3a]">
                  4+
                </p>

                <p className="mt-1">
                  Plants to explore
                </p>
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
                  alt="Beautiful plant collection"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#17271c]/60 via-transparent to-transparent" />

                {/* Floating Info */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-lg backdrop-blur-md">

                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#78907b]">
                    Find your match
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-[#243b2a]">
                    Greenery for every space
                  </h3>

                  <p className="mt-1 text-sm text-stone-400">
                    From easy-care succulents to lush indoor
                    plants.
                  </p>

                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -left-4 top-8 rounded-2xl border border-white/70 bg-white px-4 py-3 shadow-xl sm:-left-5">

              <p className="text-xs text-stone-400">
                Plantora
              </p>

              <p className="mt-0.5 text-sm font-semibold text-[#315c3a]">
                Explore • Choose • Grow
              </p>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">

        <div className="grid gap-7 md:grid-cols-3">

          {categories.map((category, index) => {
            const Icon = category.icon

            return (
              <motion.article
                key={category.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -7,
                }}
                className="group overflow-hidden rounded-[2rem] border border-stone-200/70 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#315c3a]/10"
              >

                {/* Image */}
                <div className="relative h-80 overflow-hidden">

                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#17271c]/80 via-[#17271c]/10 to-transparent" />

                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#315c3a] shadow-sm backdrop-blur-md">
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 text-white">

                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/65">
                      {category.count}
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold">
                      {category.name}
                    </h2>

                  </div>
                </div>

                {/* Content */}
                <div className="p-6">

                  <p className="text-sm leading-6 text-stone-500">
                    {category.description}
                  </p>

                  <Link
                    to={`/plants?category=${encodeURIComponent(
                      category.filter
                    )}`}
                    className="mt-6 flex items-center justify-between rounded-full border border-stone-200 px-5 py-3 text-sm font-semibold text-[#315c3a] transition-all duration-300 hover:border-[#315c3a] hover:bg-[#edf3ec]"
                  >
                    Explore {category.name}

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                </div>
              </motion.article>
            )
          })}

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="overflow-hidden rounded-[2rem] bg-[#243b2a] px-6 py-12 text-center sm:px-10 lg:px-16 lg:py-16"
        >

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
            <Leaf size={22} />
          </div>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Not sure where to start?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/55 sm:text-base">
            Browse our complete collection and find a plant
            that feels right for your space.
          </p>

          <Link
            to="/plants"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#315c3a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f4f0e7]"
          >
            Explore All Plants
            <ArrowRight size={17} />
          </Link>

        </motion.div>
      </section>

    </main>
  )
}

export default Categories