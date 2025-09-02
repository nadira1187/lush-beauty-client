import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-100">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-rose-200/30 to-rose-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-l from-rose-400/20 to-rose-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-t from-rose-300/25 to-rose-200/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500/10 to-rose-600/10 backdrop-blur-sm rounded-full border border-rose-200/50">
              <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
              <span className="text-rose-700 font-medium text-sm">Luxury Beauty Experience</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-800">Unleash Your</span>
                <span className="block bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700 bg-clip-text text-transparent">
                  Inner Glow
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full mx-auto lg:mx-0"></div>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Transform your beauty routine with our curated collection of
              <span className="text-rose-600 font-semibold"> premium cosmetics</span> and
              <span className="text-rose-600 font-semibold"> skincare essentials</span>. Discover products that
              celebrate your unique beauty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start pt-4">
              <Link to="/login">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-rose-500/25 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Explore Collection
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </Link>

              <button className="px-8 py-4 border-2 border-rose-300 text-rose-700 hover:bg-rose-50 rounded-2xl transition-all duration-300 font-semibold">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-12">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-rose-100/50">
                <div className="text-3xl font-bold text-rose-600">15K+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-rose-100/50">
                <div className="text-3xl font-bold text-rose-600">800+</div>
                <div className="text-sm text-gray-600 mt-1">Products</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-rose-100/50">
                <div className="text-3xl font-bold text-rose-600">4.9★</div>
                <div className="text-sm text-gray-600 mt-1">Rating</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-rose-600/30 rounded-3xl transform rotate-6 scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-rose-300/20 to-rose-500/20 rounded-3xl transform -rotate-3 scale-110"></div>

              <div className="relative z-10 p-8">
                <img
                  src="https://i.ibb.co/9tn74f7/31458.jpg"
                  className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-3xl object-cover shadow-2xl border-4 border-white/80"
                  alt="Beauty model"
                />

                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-white text-2xl">✨</span>
                </div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-white text-2xl">💄</span>
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg animate-ping">
                  <span className="text-white text-lg">💋</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-rose-600 text-sm font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-rose-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-rose-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
