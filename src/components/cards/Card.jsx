"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Card = () => {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://lush-beauty-server-m0luoj990-nadira1187.vercel.app/brand")
      .then((res) => res.json())
      .then((data) => {
        setCards(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="relative">
          <div className="animate-spin rounded-full h-20 w-20 border-4 border-rose-100 border-t-rose-500"></div>
          <div
            className="animate-spin rounded-full h-16 w-16 border-4 border-pink-100 border-t-pink-400 absolute top-2 left-2"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-rose-600 font-medium text-sm">
            Loading...
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative py-16 px-4 bg-gradient-to-br from-rose-50/50 via-white to-pink-50/30">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-32 right-16 w-40 h-40 bg-pink-200/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-rose-300/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 text-sm font-semibold rounded-full border border-rose-200/50">
              ✨ Premium Collections
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent mb-6 leading-tight">
            Featured Collections
          </h2>
          <p className="text-rose-700/80 text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our curated selection of premium beauty products designed to enhance your natural radiance and
            elevate your beauty routine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((cart, index) => (
            <div
              key={cart._id}
              className="group relative bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden border border-rose-100/50 rounded-3xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 via-pink-500/0 to-rose-600/5 group-hover:from-rose-500/10 group-hover:via-pink-500/5 group-hover:to-rose-600/15 transition-all duration-700"></div>

              {/* Enhanced floating decorative elements */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-rose-300 rounded-full opacity-0 group-hover:opacity-70 transition-all duration-500 transform group-hover:scale-150"></div>
              <div className="absolute top-12 right-12 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-700 transform group-hover:scale-200"></div>
              <div className="absolute bottom-8 left-6 w-4 h-4 bg-rose-200 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-600 transform group-hover:scale-125"></div>

              <div className="relative p-6 pb-0">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src={cart.image || "/placeholder.svg?height=300&width=400&query=luxury beauty collection"}
                    alt={cart.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Enhanced overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/30 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>

              <div className="p-8 pt-6 text-center relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-rose-700 transition-colors duration-300 leading-tight">
                  {cart.name}
                </h3>

                <Link to={`/productList/${cart.name}`}>
                  <button className="relative overflow-hidden bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-rose-500/30 border-none group/btn w-full">
                    <span className="relative z-10 flex items-center justify-center">
                      Explore Collection
                      <svg
                        className="w-5 h-5 ml-3 group-hover/btn:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                    {/* Button shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  </button>
                </Link>
              </div>

              {/* Enhanced card shimmer effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-200/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 delay-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
