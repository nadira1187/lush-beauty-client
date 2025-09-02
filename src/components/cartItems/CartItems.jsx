"use client"

import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, CreditCard } from "lucide-react"
import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"

const CartItems = () => {
  const cartData = useLoaderData()
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    if (cartData) {
      const itemsWithQuantity = cartData.map((item) => ({
        ...item,
        quantity: item.quantity || 1, // Default to 1 if quantity is not set
      }))
      setCartItems(itemsWithQuantity)
      setLoading(false)
    }
  }, [cartData])

  const handleDelete = async (id) => {
    // Custom modal using your existing modal pattern
    const modal = document.createElement("div")
    modal.className = "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    modal.innerHTML = `
      <div class="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl transform scale-95 transition-transform duration-300">
        <div class="text-center space-y-4">
          <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900">Remove Item?</h3>
          <p class="text-gray-600">Are you sure you want to remove this item from your cart?</p>
          <div class="flex space-x-3 pt-4">
            <button id="cancel-btn" class="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">Cancel</button>
            <button id="confirm-btn" class="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200">Remove</button>
          </div>
        </div>
      </div>
    `

    document.body.appendChild(modal)
    setTimeout(() => modal.firstElementChild.classList.add("scale-100"), 10)

    const cancelBtn = modal.querySelector("#cancel-btn")
    const confirmBtn = modal.querySelector("#confirm-btn")

    const closeModal = () => {
      modal.firstElementChild.classList.add("scale-95")
      setTimeout(() => document.body.removeChild(modal), 300)
    }

    cancelBtn.onclick = closeModal
    confirmBtn.onclick = async () => {
      try {
        // Using your existing API endpoint
        const response = await fetch(`https://lush-beauty-server-dpk93850r-nadira1187.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
        const data = await response.json()

        if (data.deletedCount > 0) {
          setCartItems((prev) => prev.filter((item) => item._id !== id))

          // Success notification using your existing pattern
          const notification = document.createElement("div")
          notification.className =
            "fixed top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300"
          notification.textContent = "Item removed successfully!"
          document.body.appendChild(notification)

          setTimeout(() => notification.classList.remove("translate-x-full"), 100)
          setTimeout(() => {
            notification.classList.add("translate-x-full")
            setTimeout(() => document.body.removeChild(notification), 300)
          }, 3000)
        }
      } catch (error) {
        console.error("Error deleting product:", error)
      }
      closeModal()
    }
  }

  const updateQuantity = (id, change) => {
    setCartItems((prev) =>
      prev.map((item) => (item._id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item)),
    )
  }

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      setDiscount(0.1)
      // Success notification
      const notification = document.createElement("div")
      notification.className =
        "fixed top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300"
      notification.textContent = "Promo code applied! 10% off"
      document.body.appendChild(notification)
      setTimeout(() => notification.classList.remove("translate-x-full"), 100)
      setTimeout(() => {
        notification.classList.add("translate-x-full")
        setTimeout(() => document.body.removeChild(notification), 300)
      }, 3000)
    }
  }

  const subtotal = cartItems.reduce((sum, item) => {
    const price = Number.parseFloat(item.price) || 0
    const quantity = Number.parseInt(item.quantity) || 1
    return sum + price * quantity
  }, 0)
  const discountAmount = subtotal * discount
  const tax = (subtotal - discountAmount) * 0.08
  const total = subtotal - discountAmount + tax

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-pink-400 rounded-full blur-xl animate-spin mx-auto mt-2 ml-2"></div>
          </div>
          <p className="text-rose-600 font-medium">Loading your cart...</p>
        </div>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-rose-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-white">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-rose-100/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-white/50 rounded-lg transition-colors duration-200">
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Shopping Cart
              </h1>
              <p className="text-gray-600">{cartItems.length} items in your cart</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-rose-100"
              >
                <div className="flex items-center space-x-6">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-xl"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <span className="inline-flex items-center px-3 py-1 bg-rose-100 text-rose-700 text-sm font-medium rounded-full">
                          {item.brand}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-gray-500">{item.type}</p>
                      </div>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="p-2 hover:bg-red-50 text-red-400 hover:text-red-600 rounded-lg transition-colors duration-200"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item._id, -1)}
                          className="p-2 hover:bg-white rounded-md transition-colors duration-200"
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="px-4 py-2 font-semibold text-gray-900 min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item._id, 1)}
                          className="p-2 hover:bg-white rounded-md transition-colors duration-200"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-900">
                          ${((Number.parseFloat(item.price) || 0) * (Number.parseInt(item.quantity) || 1)).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500">${Number.parseFloat(item.price).toFixed(2)} each</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-rose-100 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              {/* Promo Code */}
              <div className="space-y-3 mb-6">
                <label className="text-sm font-medium text-gray-700">Promo Code</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                  <button
                    onClick={applyPromoCode}
                    className="px-4 py-2 bg-rose-100 text-rose-700 rounded-lg hover:bg-rose-200 transition-colors duration-200"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (10%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <CreditCard className="w-5 h-5" />
                <span>Proceed to Checkout</span>
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">Secure checkout powered by SSL encryption</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
