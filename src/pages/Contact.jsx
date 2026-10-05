import { useState } from "react"
import { motion } from "framer-motion"
import {
  Leaf,
  Mail,
  MapPin,
  Phone,
  Send,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

import monstera from "../assets/plants/monstera.jpg"

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
    }, 4000)
  }

  return (
    <main className="bg-[#fbfaf6]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f1f3eb]">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#dfe9dc] blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#e7dcc9] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-16">
          {/* Hero Content */}
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
                Get in Touch
              </span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-[#243b2a] sm:text-5xl lg:text-6xl">
              We'd love to hear
              <span className="block text-[#315c3a]">
                from you.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-stone-500 sm:text-lg">
              Have a question about a plant, need some
              gardening advice, or simply want to say hello?
              Send us a message and we'll be happy to help.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-[#315c3a]/10 bg-white/70 px-5 py-2.5 text-sm font-medium text-[#315c3a]">
                Plant advice
              </div>

              <div className="rounded-full border border-[#315c3a]/10 bg-white/70 px-5 py-2.5 text-sm font-medium text-[#315c3a]">
                Gardening help
              </div>

              <div className="rounded-full border border-[#315c3a]/10 bg-white/70 px-5 py-2.5 text-sm font-medium text-[#315c3a]">
                Friendly support
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
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

            {/* Main Image Card */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white p-3 shadow-2xl shadow-[#315c3a]/10">
              <div className="relative h-[380px] overflow-hidden rounded-[2rem] sm:h-[420px]">
                <img
                  src={monstera}
                  alt="Monstera plant"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#17271c]/65 via-transparent to-transparent" />

                {/* Floating Contact Card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#315c3a] text-white">
                      <Mail size={19} />
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#78907b]">
                        Plantora Support
                      </p>

                      <h3 className="mt-1 text-base font-semibold text-[#243b2a]">
                        Let's grow together.
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
                We're here to help 🌿
              </p>
            </div>

            {/* Floating Response Badge */}
            <div className="absolute -bottom-4 -right-3 rounded-2xl border border-white/70 bg-white px-4 py-3 shadow-xl sm:-right-5">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#edf3ec] text-[#315c3a]">
                  <CheckCircle2 size={15} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-stone-400">
                    Support
                  </p>

                  <p className="text-xs font-semibold text-[#315c3a]">
                    Always happy to help
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Contact Information */}
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
            <div className="rounded-[2rem] bg-[#243b2a] p-7 text-white sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Leaf size={22} />
              </div>

              <h2 className="mt-6 text-2xl font-semibold">
                Let's talk plants.
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/55">
                We're here to make your plant journey easier,
                from choosing your first plant to caring for a
                growing collection.
              </p>

              <div className="mt-8 space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Mail size={18} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      hello@plantora.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      +92 300 1234567
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      Lahore, Pakistan
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Clock size={18} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                      Availability
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      Mon — Sat, 9 AM — 6 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Info Card */}
            <div className="mt-5 rounded-[2rem] border border-stone-200/70 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78907b]">
                Plantora Support
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#243b2a]">
                Need help choosing a plant?
              </h3>

              <p className="mt-2 text-sm leading-6 text-stone-500">
                Tell us about your space, lighting, and
                lifestyle. We'll help point you in the right
                direction.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
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
              delay: 0.1,
            }}
            className="rounded-[2rem] border border-stone-200/70 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78907b]">
                Send a Message
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#243b2a]">
                How can we help?
              </h2>

              <p className="mt-3 text-sm leading-6 text-stone-500">
                Fill out the form below and we'll get back to
                you as soon as possible.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="mt-8 rounded-3xl bg-[#edf3ec] px-6 py-12 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#315c3a] text-white">
                  <CheckCircle2 size={27} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[#243b2a]">
                  Message sent!
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-stone-500">
                  Thank you for reaching out to Plantora.
                  We'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-stone-600"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="h-12 w-full rounded-2xl border border-stone-200 bg-[#fbfaf6] px-4 text-sm text-stone-700 outline-none transition-all placeholder:text-stone-400 focus:border-[#315c3a] focus:ring-4 focus:ring-[#315c3a]/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-stone-600"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="h-12 w-full rounded-2xl border border-stone-200 bg-[#fbfaf6] px-4 text-sm text-stone-700 outline-none transition-all placeholder:text-stone-400 focus:border-[#315c3a] focus:ring-4 focus:ring-[#315c3a]/10"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-stone-600"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="What would you like to ask?"
                    required
                    className="h-12 w-full rounded-2xl border border-stone-200 bg-[#fbfaf6] px-4 text-sm text-stone-700 outline-none transition-all placeholder:text-stone-400 focus:border-[#315c3a] focus:ring-4 focus:ring-[#315c3a]/10"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-stone-600"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell us how we can help..."
                    required
                    className="w-full resize-none rounded-2xl border border-stone-200 bg-[#fbfaf6] px-4 py-3 text-sm leading-6 text-stone-700 outline-none transition-all placeholder:text-stone-400 focus:border-[#315c3a] focus:ring-4 focus:ring-[#315c3a]/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#315c3a] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#315c3a]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#243b2a]"
                >
                  Send Message
                  <Send size={17} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
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
          className="overflow-hidden rounded-[2rem] bg-[#f1f3eb] px-6 py-12 text-center sm:px-10 lg:px-16 lg:py-14"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#315c3a] text-white">
            <Leaf size={22} />
          </div>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-[#243b2a] sm:text-4xl">
            Let's make your space a little greener.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-stone-500 sm:text-base">
            Explore our collection and discover a plant that
            feels right for your space.
          </p>

          <a
            href="/plants"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#315c3a] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#243b2a]"
          >
            Explore Plants
            <ArrowRight size={17} />
          </a>
        </motion.div>
      </section>
    </main>
  )
}

export default Contact