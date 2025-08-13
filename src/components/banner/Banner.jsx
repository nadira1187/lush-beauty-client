import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Enhanced background with gradient overlay */}
      <div
        style={{ backgroundImage: "url('https://i.ibb.co/84pPft4/banner.jpg')" }}
        className="hero min-h-screen bg-cover bg-center relative"
      >
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/40 via-rose-800/30 to-transparent"></div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-rose-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-rose-300/15 rounded-full blur-2xl"></div>

        <div className="hero-content flex-col-reverse lg:flex-row-reverse relative z-10 max-w-7xl mx-auto px-6">
          {/* Enhanced image section */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring around image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-rose-600 rounded-full opacity-20 blur-lg"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-300 to-rose-500 rounded-full opacity-30"></div>
              <img
                src="https://i.ibb.co/9tn74f7/31458.jpg"
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover relative z-10 shadow-2xl border-4 border-white/20"
                alt="Beauty model"
              />
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-rose-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-rose-300 rounded-full opacity-80 animate-bounce"></div>
            </div>
          </div>

          {/* Enhanced text section */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-8">
            {/* Premium badge */}
            <div className="inline-flex items-center px-4 py-2 bg-rose-100/90 backdrop-blur-sm rounded-full text-rose-800 text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-rose-500 rounded-full mr-2 animate-pulse"></span>
              Premium Beauty Collection
            </div>

            {/* Enhanced heading with gradient text */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-rose-600 via-rose-500 to-rose-700 bg-clip-text text-transparent">
                Discover the Beauty
              </span>
              <br />
              <span className="text-white drop-shadow-lg">of Lush</span>
            </h1>

            {/* Enhanced description */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20">
              Indulge in <span className="text-rose-200 font-semibold">Luxurious Beauty Products</span> for a Radiant
              You! Explore Our Lush Beauty Collection Today and Unveil Your Natural Glamour.
            </p>

            {/* Enhanced CTA button */}
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <Link to="/login">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-rose-500/25">
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                </button>
              </Link>

              {/* Secondary CTA */}
              <button className="px-6 py-3 border-2 border-white/30 text-white hover:bg-white/10 rounded-full transition-all duration-300 backdrop-blur-sm">
                Watch Demo
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm text-rose-200">Happy Customers</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-rose-200">Premium Products</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5★</div>
                <div className="text-sm text-rose-200">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
