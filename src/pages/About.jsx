import { motion } from "framer-motion"
import {
  Leaf,
  Heart,
  Sparkles,
  Sprout,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import { Link } from "react-router-dom"

import monstera from "../assets/plants/monstera.jpg"

function About() {
  const values = [
    {
      icon: Leaf,
      title: "Love for Plants",
      description:
        "We believe plants make everyday spaces feel fresher, calmer, and more alive.",
    },
    {
      icon: Heart,
      title: "Simple Care",
      description:
        "Plant care should feel enjoyable and approachable, especially for beginners.",
    },
    {
      icon: Sparkles,
      title: "Beautiful Spaces",
      description:
        "We help you discover greenery that naturally fits your home and lifestyle.",
    },
  ]

  const benefits = [
    "Beginner-friendly plant collection",
    "Simple and practical gardening guidance",
    "Plants for different spaces and lifestyles",
    "A calm and aesthetic shopping experience",
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
                About Plantora
              </span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-[#243b2a] sm:text-5xl lg:text-6xl">
              Bringing a little more
              <span className="block text-[#315c3a]">
                green into everyday life.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-stone-500 sm:text-lg">
              Plantora is a modern plant and gardening platform
              created to make discovering, choosing, and caring
              for plants simple, beautiful, and enjoyable.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/plants"
                className="inline-flex items-center gap-2 rounded-full bg-[#315c3a] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#315c3a]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#243b2a]"
              >
                Explore Plants
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/gardening-tips"
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#315c3a] transition-all duration-300 hover:border-[#315c3a] hover:bg-[#edf3ec]"
              >
                Plant Care Tips
              </Link>
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
                  alt="Green Monstera plant"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#17271c]/60 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#315c3a] text-white">
                      <Sprout size={18} />
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#78907b]">
                        Our Philosophy
                      </p>

                      <h3 className="mt-1 text-lg font-semibold text-[#243b2a]">
                        Grow beautifully.
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
                Plants • Care • Inspiration
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
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
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78907b]">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#243b2a] sm:text-4xl">
              Plants can change the feeling of a space.
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-stone-500 sm:text-base">
              <p>
                We created Plantora around a simple idea:
                bringing plants into your space should feel
                inspiring rather than overwhelming.
              </p>

              <p>
                From finding the right plant to understanding
                how much light and water it needs, Plantora
                brings everything together in one simple
                experience.
              </p>

              <p>
                Whether you're buying your first plant or
                already have a growing collection, we're here
                to make every step a little easier.
              </p>
            </div>
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
            className="grid grid-cols-2 gap-4"
          >
            <div className="rounded-3xl bg-[#243b2a] p-7 text-white">
              <p className="text-4xl font-semibold">
                4+
              </p>

              <p className="mt-2 text-sm text-white/55">
                Plants to explore
              </p>
            </div>

            <div className="rounded-3xl bg-[#edf3ec] p-7">
              <p className="text-4xl font-semibold text-[#315c3a]">
                3
              </p>

              <p className="mt-2 text-sm text-stone-500">
                Plant categories
              </p>
            </div>

            <div className="rounded-3xl bg-[#f4f0e7] p-7">
              <p className="text-4xl font-semibold text-[#315c3a]">
                100%
              </p>

              <p className="mt-2 text-sm text-stone-500">
                Beginner friendly
              </p>
            </div>

            <div className="rounded-3xl bg-[#dfe9dc] p-7">
              <p className="text-4xl font-semibold text-[#315c3a]">
                ∞
              </p>

              <p className="mt-2 text-sm text-stone-500">
                Green inspiration
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-stone-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          <motion.div
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
              duration: 0.5,
            }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78907b]">
              What We Believe
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#243b2a] sm:text-4xl">
              Simple ideas behind Plantora.
            </h2>

            <p className="mt-4 text-sm leading-6 text-stone-500 sm:text-base">
              Everything we do is built around making plant
              ownership feel natural, enjoyable, and inspiring.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon

              return (
                <motion.article
                  key={value.title}
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
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-[2rem] border border-stone-200/70 bg-[#fbfaf6] p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#315c3a]/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf3ec] text-[#315c3a]">
                    <Icon
                      size={22}
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#243b2a]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-stone-500">
                    {value.description}
                  </p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Plantora */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
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
            className="order-2 lg:order-1"
          >
            <div className="rounded-[2rem] bg-[#f1f3eb] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78907b]">
                Why Plantora
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#243b2a] sm:text-4xl">
                Everything you need to grow with confidence.
              </h2>

              <div className="mt-7 space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#315c3a]"
                      strokeWidth={1.8}
                    />

                    <p className="text-sm leading-6 text-stone-600">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
            className="order-1 lg:order-2"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78907b]">
              More Than Plants
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#243b2a] sm:text-4xl">
              Create a space that feels like you.
            </h2>

            <p className="mt-5 text-sm leading-7 text-stone-500 sm:text-base">
              Plants aren't just decoration. They can add
              character, freshness, and a sense of calm to the
              places where you spend your time.
            </p>

            <p className="mt-4 text-sm leading-7 text-stone-500 sm:text-base">
              Plantora makes it easier to discover greenery
              that works with your space, your routine, and
              your level of experience.
            </p>

            <Link
              to="/categories"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#315c3a] transition-colors hover:text-[#243b2a]"
            >
              Explore Plant Categories
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:px-10 lg:pb-20">
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
            Let's grow something beautiful together.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/55 sm:text-base">
            Discover your next favorite plant and bring a
            little more green into your everyday life.
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

export default About