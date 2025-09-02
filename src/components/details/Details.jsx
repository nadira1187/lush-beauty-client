"use client"

import { useLoaderData } from "react-router-dom"
import { Star, Heart, ShoppingCart, Shield, Truck, RotateCcw } from "lucide-react"
import { useState } from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../footer/Footer"

const Details = () => {
  const product = useLoaderData()
  const [isLoading, setIsLoading] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const handleAddCart = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://lush-beauty-server-m0luoj990-nadira1187.vercel.app/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
      const data = await response.json()
      console.log(data)

      // Modern success notification
      const notification = document.createElement("div")
      notification.className =
        "fixed top-4 right-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300"
      notification.textContent = "Product added to cart successfully!"
      document.body.appendChild(notification)

      setTimeout(() => notification.classList.remove("translate-x-full"), 100)
      setTimeout(() => {
        notification.classList.add("translate-x-full")
        setTimeout(() => document.body.removeChild(notification), 300)
      }, 3000)
    } catch (error) {
      console.error("Error adding product to cart:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <Navbar/>
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-rose-100/30 to-pink-100/30 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Image Section */}
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-xl">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="absolute top-8 right-8 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Heart className={`w-6 h-6 ${isFavorite ? "fill-rose-500 text-rose-500" : "text-gray-400"}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full">
                <span className="text-sm font-medium text-rose-700">{product.brand}</span>
              </div>

              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">{renderStars(product.rating || 5)}</div>
                <span className="text-gray-600">({product.rating || 5}.0)</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">128 reviews</span>
              </div>

              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-rose-600">{product.price}</span>
                <span className="text-lg text-gray-500 line-through">
                  {(Number.parseFloat(product.price) * 1.2).toFixed(2)}
                </span>
                <span className="px-2 py-1 bg-rose-100 text-rose-700 text-sm font-medium rounded-full">20% OFF</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm">
                <Shield className="w-5 h-5 text-rose-500" />
                <span className="text-sm text-gray-600">Authentic</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm">
                <Truck className="w-5 h-5 text-rose-500" />
                <span className="text-sm text-gray-600">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm">
                <RotateCcw className="w-5 h-5 text-rose-500" />
                <span className="text-sm text-gray-600">30-Day Return</span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="space-y-4">
              <button
                onClick={handleAddCart}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              <button className="w-full bg-white border-2 border-rose-200 text-rose-600 font-semibold py-4 px-8 rounded-xl hover:bg-rose-50 transition-all duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Details
