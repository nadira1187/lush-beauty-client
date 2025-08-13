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
                setCards(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    // Mock data for demonstration - replace with your actual API call
    // const mockData = [
    //   {
    //     _id: "1",
    //     name: "Luxury Skincare",
    //     image: "https://i.ibb.co/84pPft4/banner.jpg",
    //   },
    //   {
    //     _id: "2",
    //     name: "Premium Makeup",
    //     image: "https://i.ibb.co/9tn74f7/31458.jpg",
    //   },
    //   {
    //     _id: "3",
    //     name: "Hair Essentials",
    //     image: "https://i.ibb.co/FsLKL2Z/9771.jpg",
    //   },
    // ]

    // // Simulate API call
    // setTimeout(() => {
    //   setCards(mockData)
    //   setLoading(false)
    // }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-rose-200 border-t-rose-500"></div>
          <div className="absolute inset-0 bg-rose-400 rounded-full blur-lg opacity-20 animate-pulse"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Featured Collections
        </h2>
        <p className="text-rose-700 text-lg max-w-2xl mx-auto">
          Discover our curated selection of premium beauty products designed to enhance your natural radiance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {cards.map((cart, index) => (
          <div
            key={cart._id}
            className="group relative card w-80 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-rose-100 rounded-2xl"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-pink-500/5 to-rose-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Floating decorative elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-rose-200 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 transform group-hover:scale-110"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-pink-200 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-700 transform group-hover:scale-125"></div>

            <figure className="px-6 pt-6 relative">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={cart.image || "/placeholder.svg"}
                  alt={cart.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </figure>

            <div className="card-body items-center text-center p-6 relative z-10">
              <h2 className="card-title text-2xl font-bold text-gray-800 mb-6 group-hover:text-rose-700 transition-colors duration-300">
                {cart.name}
              </h2>

              <Link to={`/productList/${cart.name}`}>
                <button className="btn bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-rose-500/25 border-none group/btn">
                  <span className="flex items-center">
                    See Products
                    <svg
                      className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-200/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 delay-200"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card

  
