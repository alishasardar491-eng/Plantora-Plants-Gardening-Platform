import { motion } from "framer-motion"
import {
  Leaf,
  Droplets,
  Sun,
  Sprout,
  Flower2,
  Scissors,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import { Link } from "react-router-dom"

import monstera from "../assets/plants/monstera.jpg"

function GardeningTips() {
  const tips = [
    {
      icon: Droplets,
      title: "Watering",
      description:
        "Water your plants according to their needs. Always check the soil before watering instead of following a fixed schedule.",
      points: [
        "Check the top layer of soil before watering.",
        "Avoid overwatering and waterlogged soil.",
        "Use pots with proper drainage holes.",
      ],
    },
    {
      icon: Sun,
      title: "Light",
      description:
        "The right amount of light helps plants grow strong and healthy. Place each plant according to its light requirements.",
      points: [
        "Give bright-light plants access to indirect sunlight.",
        "Keep low-light plants away from harsh direct sun.",
        "Rotate plants occasionally for even growth.",
      ],
    },
    {
      icon: Sprout,
      title: "Healthy Growth",
      description:
        "Give your plants the right environment and a little regular attention to encourage healthy new growth.",
      points: [
        "Use suitable soil for each type of plant.",
        "Keep leaves clean and dust-free.",
        "Check plants regularly for signs of stress.",
      ],
    },
    {
      icon: Flower2,
      title: "Indoor Plants",
      description:
        "Indoor plants can transform your space into a calmer and fresher environment with the right care.",
      points: [
        "Choose plants that suit your indoor lighting.",
        "Keep plants away from extreme temperature changes.",
        "Give plants enough room to grow naturally.",
      ],
    },
    {
      icon: Scissors,
      title: "Pruning",
      description:
        "Simple pruning helps plants stay neat and encourages healthier growth by removing damaged or unwanted parts.",
      points: [
        "Remove yellow or damaged leaves.",
        "Use clean scissors or pruning tools.",
        "Avoid removing too much healthy growth at once.",
      ],
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
                Plant Care Guide
              </span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-[#243b2a] sm:text-5xl lg:text-6xl">
              Grow happier,
              <span className="block text-[#315c3a]">
                healthier plants.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-stone-500 sm:text-lg">
              Simple and practical gardening tips to help
              you understand your plants and keep your
              green space looking beautiful.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-[#315c3a]/10 bg-white/70 px-5 py-2.5 text-sm font-medium text-[#315c3a]">
                Easy to follow
              </div>

              <div className="rounded-full border border-[#315c3a]/10 bg-white/70 px-5 py-2.5 text-sm font-medium text-[#315c3a]">
                Beginner friendly
              </div>

              <div className="rounded-full border border-[#315c3a]/10 bg-white/70 px-5 py-2.5 text-sm font-medium text-[#315c3a]">
                Everyday care
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
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#dfe9dc] blur-2xl" />

            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#e7dcc9] blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white p-3 shadow-2xl shadow-[#315c3a]/10">
              <div className="relative h-[380px] overflow-hidden rounded-[2rem] sm:h-[420px]">
                <img
                  src={monstera}
                  alt="Monstera plant"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#17271c]/60 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#315c3a] text-white">
                      <Leaf size={18} />
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#78907b]">
                        Plantora Guide
                      </p>

                      <h3 className="mt-1 text-lg font-semibold text-[#243b2a]">
                        Small care, big growth
                      </h3>
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

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
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
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78907b]">
            Simple plant care
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#243b2a] sm:text-4xl">
            A little attention goes a long way.
          </h2>

          <p className="mt-5 text-sm leading-7 text-stone-500 sm:text-base">
            You don't need to be an expert gardener to grow
            beautiful plants. Start with a few simple habits,
            understand what your plants need, and enjoy the
            process of watching them grow.
          </p>
        </motion.div>
      </section>

      {/* Tips */}
      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:px-10 lg:pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip, index) => {
            const Icon = tip.icon

            return (
              <motion.article
                key={tip.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="rounded-[2rem] border border-stone-200/70 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#315c3a]/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf3ec] text-[#315c3a]">
                  <Icon
                    size={22}
                    strokeWidth={1.7}
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#243b2a]">
                  {tip.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-stone-500">
                  {tip.description}
                </p>

                <div className="mt-6 space-y-3 border-t border-stone-100 pt-5">
                  {tip.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#315c3a]"
                        strokeWidth={1.8}
                      />

                      <p className="text-sm leading-5 text-stone-500">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      {/* Quick Routine */}
      <section className="border-y border-stone-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="max-w-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78907b]">
                Easy routine
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#243b2a] sm:text-4xl">
                Your simple plant-care routine.
              </h2>

              <p className="mt-5 text-sm leading-7 text-stone-500 sm:text-base">
                Make plant care part of your everyday routine
                without making it complicated.
              </p>

              <Link
                to="/plants"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#315c3a] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#243b2a]"
              >
                Find Your Plant
                <ArrowRight size={17} />
              </Link>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="grid gap-4 sm:grid-cols-3"
            >
              <div className="rounded-3xl bg-[#f1f3eb] p-6">
                <span className="text-3xl font-semibold text-[#315c3a]">
                  01
                </span>

                <h3 className="mt-5 font-semibold text-[#243b2a]">
                  Check
                </h3>

                <p className="mt-2 text-sm leading-6 text-stone-500">
                  Check the soil, leaves, and overall condition.
                </p>
              </div>

              <div className="rounded-3xl bg-[#f1f3eb] p-6">
                <span className="text-3xl font-semibold text-[#315c3a]">
                  02
                </span>

                <h3 className="mt-5 font-semibold text-[#243b2a]">
                  Care
                </h3>

                <p className="mt-2 text-sm leading-6 text-stone-500">
                  Give your plant the water and light it needs.
                </p>
              </div>

              <div className="rounded-3xl bg-[#f1f3eb] p-6">
                <span className="text-3xl font-semibold text-[#315c3a]">
                  03
                </span>

                <h3 className="mt-5 font-semibold text-[#243b2a]">
                  Enjoy
                </h3>

                <p className="mt-2 text-sm leading-6 text-stone-500">
                  Give it time and enjoy watching it grow.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
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
            <Sprout size={22} />
          </div>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to grow something beautiful?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/55 sm:text-base">
            Explore the Plantora collection and find a
            plant that's perfect for your space.
          </p>

          <Link
            to="/plants"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#315c3a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f4f0e7]"
          >
            Explore Plants
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </section>
    </main>
  )
}

export default GardeningTips