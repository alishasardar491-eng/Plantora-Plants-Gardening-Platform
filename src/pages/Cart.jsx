import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  Leaf,
} from "lucide-react"

function Cart() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("plantora-cart")) || []

    setCart(savedCart)
  }, [])

  const updateQuantity = (id, change) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: Math.max(1, item.quantity + change),
          }
        }

        return item
      })

    localStorage.setItem(
      "plantora-cart",
      JSON.stringify(updatedCart)
    )

    setCart(updatedCart)
  }

  const removeItem = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    )

    localStorage.setItem(
      "plantora-cart",
      JSON.stringify(updatedCart)
    )

    setCart(updatedCart)
  }

  const clearCart = () => {
    localStorage.removeItem("plantora-cart")
    setCart([])
  }

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  )

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
              <ShoppingBag size={18} />

              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Your Cart
              </span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-[#243b2a] sm:text-5xl lg:text-6xl">
              Your plant
              <span className="block text-[#315c3a]">
                collection.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-stone-500 sm:text-lg">
              Review the plants you've selected and
              make your space a little greener.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cart */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        {cart.length > 0 ? (
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            {/* Cart Items */}
            <div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-stone-400">
                    Shopping cart
                  </p>

                  <h2 className="mt-1 text-2xl font-semibold text-[#243b2a]">
                    {cart.length}{" "}
                    {cart.length === 1
                      ? "Plant"
                      : "Plants"}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={clearCart}
                  className="text-sm font-medium text-stone-400 transition-colors hover:text-red-500"
                >
                  Clear cart
                </button>
              </div>

              <div className="mt-8 space-y-4">
                {cart.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    className="rounded-3xl border border-stone-200/70 bg-white p-4 shadow-sm sm:p-5"
                  >
                    <div className="flex gap-4 sm:gap-5">
                      {/* Image */}
                      <Link
                        to={`/plants/${item.id}`}
                        className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-[#edf1e9] sm:h-32 sm:w-32"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </Link>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-xs font-medium text-[#78907b]">
                              {item.category}
                            </p>

                            <Link
                              to={`/plants/${item.id}`}
                              className="mt-1 block text-base font-semibold text-[#243b2a] transition-colors hover:text-[#315c3a] sm:text-lg"
                            >
                              {item.name}
                            </Link>

                            <p className="mt-1 text-sm text-stone-400">
                              {item.environment}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              removeItem(item.id)
                            }
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-stone-400 transition-colors hover:bg-red-50 hover:text-red-500"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>

                        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                          {/* Quantity */}
                          <div className="flex items-center rounded-full border border-stone-200 bg-[#fbfaf6]">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  -1
                                )
                              }
                              className="flex h-9 w-9 items-center justify-center text-stone-500 transition-colors hover:text-[#315c3a]"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={15} />
                            </button>

                            <span className="w-8 text-center text-sm font-semibold text-[#243b2a]">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  1
                                )
                              }
                              className="flex h-9 w-9 items-center justify-center text-stone-500 transition-colors hover:text-[#315c3a]"
                              aria-label="Increase quantity"
                            >
                              <Plus size={15} />
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="text-xs text-stone-400">
                              Rs.{" "}
                              {item.price.toLocaleString()}{" "}
                              each
                            </p>

                            <p className="mt-1 text-lg font-semibold text-[#315c3a]">
                              Rs.{" "}
                              {(
                                item.price *
                                item.quantity
                              ).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="h-fit rounded-3xl border border-stone-200/70 bg-white p-6 shadow-sm lg:sticky lg:top-28"
            >
              <div className="flex items-center gap-2">
                <Leaf
                  size={18}
                  className="text-[#315c3a]"
                />

                <h2 className="text-lg font-semibold text-[#243b2a]">
                  Order Summary
                </h2>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-stone-500">
                    Subtotal
                  </span>

                  <span className="font-medium text-[#243b2a]">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-stone-500">
                    Delivery
                  </span>

                  <span className="font-medium text-[#315c3a]">
                    Free
                  </span>
                </div>

                <div className="border-t border-stone-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#243b2a]">
                      Total
                    </span>

                    <span className="text-xl font-semibold text-[#315c3a]">
                      Rs. {subtotal.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#315c3a] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#315c3a]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#243b2a]"
              >
                Proceed to Checkout
                <ArrowRight size={17} />
              </button>

              <Link
                to="/plants"
                className="mt-3 flex w-full items-center justify-center rounded-full border border-stone-200 px-6 py-4 text-sm font-medium text-[#315c3a] transition-colors hover:border-[#315c3a] hover:bg-[#edf3ec]"
              >
                Continue Shopping
              </Link>
            </motion.div>
          </div>
        ) : (
          /* Empty Cart */
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="rounded-[2rem] border border-stone-200 bg-white px-6 py-20 text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#edf3ec] text-[#315c3a]">
              <ShoppingBag size={27} />
            </div>

            <h2 className="mt-6 text-2xl font-semibold text-[#243b2a]">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-stone-400">
              Explore our plant collection and add
              something green to your cart.
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

export default Cart