import { motion } from "framer-motion"
import { ArrowUpRight, Leaf } from "lucide-react"
import { Link } from "react-router-dom"

function CategoryCard({ name, description, image }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl border border-stone-200/70 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#315c3a]/10"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17271c]/80 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
            <Leaf size={18} />
          </div>

          <h3 className="text-xl font-semibold">{name}</h3>

          <p className="mt-1 text-sm text-white/75">
            {description}
          </p>
        </div>

        <Link
          to="/categories"
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#315c3a] opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100"
          aria-label={`Explore ${name}`}
        >
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </motion.div>
  )
}

export default CategoryCard