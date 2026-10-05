import { motion } from "framer-motion"
import {
  ArrowRight,
  Leaf,
  Sparkles,
  Heart,
  Sun,
  Sprout,
} from "lucide-react"
import { Link } from "react-router-dom"
import PlantCard from "../components/PlantCard"
import CategoryCard from "../components/CategoryCard"
import plants from "../data/plants"

function Home() {
  return (
    <main>
      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="relative overflow-hidden bg-[#f4f0e7]">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#dfe9dc] opacity-60 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#e7dcc9] opacity-50 blur-3xl" />

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d5dfd1] bg-white/70 px-4 py-2 text-sm text-[#56715b] backdrop-blur-sm">
              <Sparkles size={15} />
              <span>Bring nature home</span>
            </div>

            <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight text-[#243b2a] sm:text-6xl lg:text-7xl">
              Make your space
              <span className="block font-serif italic font-normal text-[#527657]">
                bloom beautifully.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-stone-600 sm:text-lg">
              Discover beautiful plants, thoughtful gardening essentials, and
              simple care guidance to help your little green corner thrive.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/plants"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#315c3a] px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#315c3a]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#264b2f]"
              >
                Explore Plants
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/gardening-tips"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cbd7c8] bg-white/70 px-7 py-3.5 text-sm font-medium text-[#315c3a] backdrop-blur-sm transition-all duration-300 hover:bg-white"
              >
                Gardening Tips
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-8 border-t border-stone-300/60 pt-7">
              <div>
                <p className="text-2xl font-semibold text-[#243b2a]">50+</p>
                <p className="mt-1 text-xs text-stone-500">
                  Plant varieties
                </p>
              </div>

              <div className="h-9 w-px bg-stone-300" />

              <div>
                <p className="text-2xl font-semibold text-[#243b2a]">4.8</p>
                <p className="mt-1 text-xs text-stone-500">
                  Average rating
                </p>
              </div>

              <div className="h-9 w-px bg-stone-300" />

              <div>
                <p className="text-2xl font-semibold text-[#243b2a]">100%</p>
                <p className="mt-1 text-xs text-stone-500">
                  Plant love
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -left-5 top-16 z-10 hidden rounded-2xl border border-white/70 bg-white/85 p-4 shadow-xl backdrop-blur-md sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf3ec] text-[#315c3a]">
                  <Leaf size={19} />
                </div>

                <div>
                  <p className="text-xs text-stone-500">Today's mood</p>
                  <p className="text-sm font-medium text-[#315c3a]">
                    Stay grounded
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.5rem] bg-[#d9e1d5] p-3 shadow-2xl shadow-[#315c3a]/10">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85"
                  alt="Beautiful green houseplant"
                  className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[600px]"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md sm:-right-8">
              <p className="text-xs text-stone-500">A little green</p>
              <p className="mt-1 text-sm font-medium text-[#315c3a]">
                Changes everything.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================
          INTRO SECTION
      ========================== */}
      <section className="bg-[#fbfaf6] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#78907b]">
            Welcome to Plantora
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#243b2a] sm:text-4xl">
            A greener way to live.
          </h2>

          <p className="mt-5 text-base leading-8 text-stone-500">
            Whether you're bringing home your first plant or creating your own
            indoor jungle, Plantora makes discovering and caring for plants
            simple, beautiful, and enjoyable.
          </p>
        </div>
      </section>

      {/* =========================
          FEATURED PLANTS
      ========================== */}
      <section className="bg-[#fbfaf6] px-5 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#78907b]">
                Curated for you
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#243b2a] sm:text-4xl">
                Featured plants
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-stone-500">
                A few of our favorite greens to bring more life and character
                into your space.
              </p>
            </div>

            <Link
              to="/plants"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#315c3a]"
            >
              View all plants
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plants.slice(0, 4).map((plant, index) => (
              <motion.div
                key={plant.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <PlantCard plant={plant} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          POPULAR CATEGORIES
      ========================== */}
      <section className="bg-[#f4f0e7] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#78907b]">
                Explore by type
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#243b2a] sm:text-4xl">
                Find your kind of green
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-stone-500">
                From easy-care indoor plants to beautiful flowering varieties,
                discover something that fits your space.
              </p>
            </div>

            <Link
              to="/categories"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#315c3a]"
            >
              View categories
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <CategoryCard
              name="Indoor Plants"
              description="Fresh greens for beautiful interiors."
              image="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=85"
            />

            <CategoryCard
              name="Flowering Plants"
              description="Add a soft touch of color and life."
              image="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85"
            />

            <CategoryCard
              name="Succulents"
              description="Minimal, charming and easy to care for."
              image="https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=900&q=85"
            />
          </div>
        </div>
      </section>

      {/* =========================
          NEW ARRIVALS
      ========================== */}
      <section className="bg-[#fbfaf6] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#78907b]">
                Freshly added
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#243b2a] sm:text-4xl">
                New arrivals
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-stone-500">
                Meet the newest additions to our collection, selected to bring
                a little more life and freshness into your space.
              </p>
            </div>

            <Link
              to="/plants"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#315c3a]"
            >
              Explore collection
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plants
              .slice()
              .reverse()
              .map((plant, index) => (
                <motion.div
                  key={`new-${plant.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <PlantCard plant={plant} />
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* =========================
          GARDENING TIPS
      ========================== */}
      <section className="bg-[#f4f0e7] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#78907b]">
              Grow with confidence
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#243b2a] sm:text-4xl">
              Simple gardening tips
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-stone-500">
              Small habits can make a big difference. Learn simple ways to
              keep your plants healthy, fresh, and happy.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Tip 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-3xl border border-stone-200/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#315c3a]/10"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=85"
                  alt="Person caring for plants"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#78907b]">
                  Plant Care
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#243b2a]">
                  Know when to water
                </h3>

                <p className="mt-3 text-sm leading-6 text-stone-500">
                  Check the soil before watering instead of following a strict
                  schedule. Your plants will tell you what they need.
                </p>

                <Link
                  to="/gardening-tips"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#315c3a]"
                >
                  Read more
                  <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>

            {/* Tip 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group overflow-hidden rounded-3xl border border-stone-200/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#315c3a]/10"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=900&q=85"
                  alt="Plants near a bright window"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#78907b]">
                  Light
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#243b2a]">
                  Find the right light
                </h3>

                <p className="mt-3 text-sm leading-6 text-stone-500">
                  Understanding how much sunlight your plant needs is one of
                  the easiest ways to help it grow beautifully.
                </p>

                <Link
                  to="/gardening-tips"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#315c3a]"
                >
                  Read more
                  <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>

            {/* Tip 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group overflow-hidden rounded-3xl border border-stone-200/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#315c3a]/10"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=900&q=85"
                  alt="Healthy green houseplants"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#78907b]">
                  Growth
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#243b2a]">
                  Keep your plants happy
                </h3>

                <p className="mt-3 text-sm leading-6 text-stone-500">
                  Clean leaves, healthy soil, and occasional feeding can help
                  your plants stay fresh and encourage beautiful growth.
                </p>

                <Link
                  to="/gardening-tips"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#315c3a]"
                >
                  Read more
                  <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================
          WHY CHOOSE PLANTORA
      ========================== */}
      <section className="bg-[#fbfaf6] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#78907b]">
              Why Plantora
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#243b2a] sm:text-4xl">
              Everything you need to grow beautifully
            </h2>

            <p className="mt-4 text-base leading-7 text-stone-500">
              From choosing the right plant to learning how to care for it,
              Plantora makes your gardening journey simple and enjoyable.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Benefit 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group rounded-3xl border border-stone-200/70 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#315c3a]/10"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#edf3ec] text-[#315c3a] transition-transform duration-300 group-hover:scale-110">
                <Sprout size={25} strokeWidth={1.7} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#243b2a]">
                Carefully Selected
              </h3>

              <p className="mt-3 text-sm leading-6 text-stone-500">
                Discover a thoughtfully selected collection of beautiful
                plants for every kind of space.
              </p>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group rounded-3xl border border-stone-200/70 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#315c3a]/10"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#edf3ec] text-[#315c3a] transition-transform duration-300 group-hover:scale-110">
                <Heart size={24} strokeWidth={1.7} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#243b2a]">
                Beginner Friendly
              </h3>

              <p className="mt-3 text-sm leading-6 text-stone-500">
                Simple plant information and practical tips help beginners
                confidently care for their plants.
              </p>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group rounded-3xl border border-stone-200/70 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#315c3a]/10"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#edf3ec] text-[#315c3a] transition-transform duration-300 group-hover:scale-110">
                <Sun size={24} strokeWidth={1.7} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#243b2a]">
                For Every Space
              </h3>

              <p className="mt-3 text-sm leading-6 text-stone-500">
                Find plants that fit beautifully into bedrooms, living rooms,
                balconies, offices, and outdoor spaces.
              </p>
            </motion.div>

            {/* Benefit 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group rounded-3xl border border-stone-200/70 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#315c3a]/10"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#edf3ec] text-[#315c3a] transition-transform duration-300 group-hover:scale-110">
                <Leaf size={24} strokeWidth={1.7} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#243b2a]">
                Easy to Explore
              </h3>

              <p className="mt-3 text-sm leading-6 text-stone-500">
                Browse plants, discover categories, save favorites, and learn
                helpful gardening tips in one place.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================
          CTA SECTION
      ========================== */}
      <section className="relative overflow-hidden bg-[#315c3a] px-5 py-24 sm:px-8 lg:px-10">
        {/* Decorative circles */}
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#a8c4a9]/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 px-7 py-14 text-center shadow-2xl backdrop-blur-sm sm:px-12 lg:px-20"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white">
              <Leaf size={29} strokeWidth={1.6} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8d9c7]">
              Start growing today
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Bring a little more green into your everyday life.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Explore our collection of beautiful plants and find the perfect
              green companion for your space.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/plants"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#315c3a] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#f4f0e7]"
              >
                Explore Plants
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/categories"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
              >
                Browse Categories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Home