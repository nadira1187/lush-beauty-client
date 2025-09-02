"use client"

import { useState } from "react"
import { Button } from "../ui/button" 
 import { Input } from "../ui/input"
import { Label } from "../ui/label" 
import { Textarea } from "../ui/textarea" 
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select" 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card" 
import { Badge } from "../ui/badge" 
import { Edit3, Package, Star, DollarSign, ImageIcon, Tag, Type, FileText, Save, AlertCircle } from "lucide-react"

const UpdateProduct = ({ product }) => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    _id = "",
    name = "",
    image = "",
    brand = "",
    type = "",
    price = "",
    description = "",
    rating = "",
  } = product || {}

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <AlertCircle className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">No Product Data</h2>
                <p className="text-gray-600">
                  No product data was provided for updating. Please select a product to edit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  const handleUpdate = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    const form = event.target
    const formData = new FormData(form)

    const productData = {
      image: formData.get("image"),
      name: formData.get("name"),
      brand: formData.get("brand"),
      type: formData.get("type"),
      price: formData.get("price"),
      description: formData.get("description"),
      rating: formData.get("rating"),
    }

    try {
      const response = await fetch(`https://lush-beauty-server-m0luoj990-nadira1187.vercel.app/products/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productData),
      })

      const data = await response.json()

      if (data.modifiedCount > 0) {
        alert("Product updated successfully!")
      }
    } catch (error) {
      console.error("Error updating product:", error)
      alert("Failed to update product. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
              <Edit3 className="w-8 h-8 text-pink-600" />
            </div>
            <h1 className="text-4xl font-bold text-pink-600 mb-2">Update Product</h1>
            <div className="flex items-center justify-center gap-2 mb-2">
              <p className="text-gray-600 text-lg">Editing:</p>
              <Badge variant="secondary" className="bg-pink-100 text-pink-700 px-3 py-1 text-base">
                {name || "Unnamed Product"}
              </Badge>
            </div>
          </div>

          {/* Form Card */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                <Package className="w-6 h-6" />
                Product Details
              </CardTitle>
              <CardDescription className="text-pink-100">
                Update the information below to modify your product
              </CardDescription>
            </CardHeader>

            <CardContent className="p-8">
              <form onSubmit={handleUpdate} className="space-y-8">
                {/* Image and Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="image" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-pink-500" />
                      Product Image URL
                    </Label>
                    <Input
                      id="image"
                      name="image"
                      type="url"
                      defaultValue={image}
                      placeholder="https://example.com/image.jpg"
                      className="border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Tag className="w-4 h-4 text-pink-500" />
                      Product Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      defaultValue={name}
                      placeholder="Enter product name"
                      className="border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                      required
                    />
                  </div>
                </div>

                {/* Brand and Type Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="brand" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Package className="w-4 h-4 text-pink-500" />
                      Brand Name
                    </Label>
                    <Select name="brand" defaultValue={brand} required>
                      <SelectTrigger className="border-pink-200 focus:border-pink-500 focus:ring-pink-500">
                        <SelectValue placeholder="Select a brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="L'Oréal">L'Oréal</SelectItem>
                        <SelectItem value="Estée Lauder">Estée Lauder</SelectItem>
                        <SelectItem value="Chanel">Chanel</SelectItem>
                        <SelectItem value="Dior">Dior</SelectItem>
                        <SelectItem value="Urban Decay">Urban Decay</SelectItem>
                        <SelectItem value="Procter & Gamble">Procter & Gamble</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Type className="w-4 h-4 text-pink-500" />
                      Product Type
                    </Label>
                    <Input
                      id="type"
                      name="type"
                      type="text"
                      defaultValue={type}
                      placeholder="e.g., Lipstick, Foundation, Mascara"
                      className="border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                      required
                    />
                  </div>
                </div>

                {/* Price and Rating Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="price" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-pink-500" />
                      Price
                    </Label>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      step="0.01"
                      defaultValue={price}
                      placeholder="0.00"
                      className="border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rating" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Star className="w-4 h-4 text-pink-500" />
                      Rating (1-5)
                    </Label>
                    <Input
                      id="rating"
                      name="rating"
                      type="number"
                      min="1"
                      max="5"
                      step="0.1"
                      defaultValue={rating}
                      placeholder="4.5"
                      className="border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                      required
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-pink-500" />
                    Product Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    defaultValue={description}
                    placeholder="Enter a detailed description of the product..."
                    className="border-pink-200 focus:border-pink-500 focus:ring-pink-500 min-h-[100px]"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Updating Product...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Save className="w-5 h-5 mr-2" />
                        Update Product
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default UpdateProduct
