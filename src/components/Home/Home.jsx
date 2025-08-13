import Navbar from "../Navbar/Navbar"
import Banner from"../banner/Banner";
import Card from"../cards/Card";
import Footer from "../footer/Footer";
import JoinUs from "../join/JoinUs";
import SmallCard from "../smallCard/SmallCard"
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50">
      <Navbar />

      {/* Enhanced banner section */}
      <Banner/>

      {/* Content sections with improved spacing and backgrounds */}
      <div className="relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-rose-50/50"></div>

        {/* Cards section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            {/* <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent mb-4">
                Featured Collections
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover our carefully curated selection of premium beauty products
              </p>
            </div> */}
            <Card />
          </div>
        </section>

        {/* Small cards section with enhanced background */}
        <section className="py-20 bg-gradient-to-r from-rose-100/50 via-rose-50/30 to-rose-100/50 relative overflow-hidden">
          {/* Simplified decorative pattern */}
          <div className="absolute inset-0 opacity-40">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(244, 63, 94, 0.15) 1px, transparent 0)`,
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 relative">
            {/* <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent mb-4">
                Our Services
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Experience the difference with our premium beauty solutions
              </p>
            </div> */}
            <SmallCard />
          </div>
        </section>

        {/* Join us section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <JoinUs />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Home
