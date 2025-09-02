"use client"

import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../footer/Footer"

const ProductList = () => {
  const products = useLoaderData()
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      image: "https://i.ibb.co/nkDmDs8/s1.jpg",
      title: "Luxury Beauty Collection",
      subtitle: "Discover premium cosmetics for every occasion",
    },
    {
      image: "https://i.ibb.co/sqGTCBG/s2.jpg",
      title: "Skincare Essentials",
      subtitle: "Nourish your skin with our curated selection",
    },
    {
      image: "https://i.ibb.co/G5ZBj60/s4.jpg",
      title: "Makeup Artistry",
      subtitle: "Express yourself with professional-grade products",
    },
  ]

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <Navbar />

      <div className="relative h-[70vh] overflow-hidden rounded-b-3xl shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>

        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Overlay content */}
        <div className="absolute inset-0 z-20 flex items-center justify-start pl-8 md:pl-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg">{heroSlides[currentSlide].title}</h1>
            <p className="text-lg md:text-xl mb-8 text-rose-100">{heroSlides[currentSlide].subtitle}</p>
            <button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <div className="bg-white rounded-3xl shadow-lg p-12 max-w-md mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8l-4 4m0 0l-4-4m4 4V3"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Products Available</h3>
                <p className="text-gray-600">No products available in this brand at the moment.</p>
              </div>
            </div>
          ) : (
            products.map((product) => (
              <div key={product._id} className="group">
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                  {/* Product image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Floating price tag */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                      ${product.price}
                    </div>
                  </div>

                  {/* Product details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors duration-300">
                      {product.name}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <p className="text-gray-600">
                        <span className="font-semibold text-rose-600">Brand:</span> {product.brand}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold text-rose-600">Type:</span> {product.type}
                      </p>
                    </div>

                    {/* Rating stars */}
                    <div className="flex items-center mb-6">
                      <span className="text-gray-700 font-semibold mr-2">Rating:</span>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span
                            key={index}
                            className={`text-2xl ${
                              index < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600 font-medium">({product.rating})</span>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <Link
                        to={`/details/${product._id}`}
                        className="flex-1 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white text-center py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        See Details
                      </Link>
                      <Link
                        to={`/updateProducts/${product._id}`}
                        className="flex-1 bg-white border-2 border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white text-center py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        Update
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProductList
