const SmallCard = () => {
  const services = [
    {
      image: "https://i.ibb.co/5vdtnhJ/1.webp",
      title: "Hair Care",
      bgColor: "bg-gradient-to-br from-emerald-200 via-green-200 to-emerald-300",
      hoverColor: "hover:from-emerald-300 hover:via-green-300 hover:to-emerald-400",
      glowColor: "group-hover:shadow-emerald-300/50",
    },
    {
      image: "https://i.ibb.co/VDzTycg/2.webp",
      title: "Skin Care",
      bgColor: "bg-gradient-to-br from-amber-200 via-yellow-200 to-amber-300",
      hoverColor: "hover:from-amber-300 hover:via-yellow-300 hover:to-amber-400",
      glowColor: "group-hover:shadow-amber-300/50",
    },
    {
      image: "https://i.ibb.co/30KsQTz/3.webp",
      title: "Lip Sticks",
      bgColor: "bg-gradient-to-br from-violet-200 via-purple-200 to-violet-300",
      hoverColor: "hover:from-violet-300 hover:via-purple-300 hover:to-violet-400",
      glowColor: "group-hover:shadow-violet-300/50",
    },
    {
      image: "https://i.ibb.co/GRYc27T/4.webp",
      title: "Face Care",
      bgColor: "bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300",
      hoverColor: "hover:from-yellow-200 hover:via-yellow-300 hover:to-yellow-400",
      glowColor: "group-hover:shadow-yellow-300/50",
    },
    {
      image: "https://i.ibb.co/gJQwjdM/5.webp",
      title: "Blusher",
      bgColor: "bg-gradient-to-br from-rose-200 via-pink-200 to-rose-300",
      hoverColor: "hover:from-rose-300 hover:via-pink-300 hover:to-rose-400",
      glowColor: "group-hover:shadow-rose-300/50",
    },
    {
      image: "https://i.ibb.co/fGskhJX/6.webp",
      title: "Natural",
      bgColor: "bg-gradient-to-br from-lime-100 via-green-100 to-lime-200",
      hoverColor: "hover:from-lime-200 hover:via-green-200 hover:to-lime-300",
      glowColor: "group-hover:shadow-lime-300/50",
    },
  ]

  return (
    <div className="relative py-12">
      <div className="text-center mb-12 relative">
        <h2 className="text-4xl font-bold text-rose-600 mb-4 relative inline-block">
          Our Services
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
        </h2>
        <p className="text-rose-700 text-lg max-w-2xl mx-auto mt-6">
          Comprehensive beauty solutions tailored to enhance your unique style and confidence
        </p>

        {/* Decorative floating elements */}
        <div className="absolute top-0 left-1/4 w-3 h-3 bg-rose-300 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-8 right-1/4 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 justify-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group relative card w-48 h-56 ${service.bgColor} ${service.hoverColor} transition-all duration-500 transform hover:scale-110 hover:shadow-2xl ${service.glowColor} cursor-pointer overflow-hidden rounded-2xl border border-white/50`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute top-3 right-3 w-8 h-8 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-180"></div>
            <div className="absolute bottom-3 left-3 w-6 h-6 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform group-hover:scale-150"></div>
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 delay-200 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-200"></div>

            <div className="card-body items-center justify-center p-6 relative z-10">
              <div className="relative mb-4 group/image">
                <img
                  className="w-28 h-28 object-contain transition-all duration-500 group-hover:scale-125 group-hover:rotate-6"
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                />
                <div className="absolute inset-0 bg-white/30 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 transform group-hover:scale-150"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-all duration-700 delay-100"></div>
              </div>

              <p className="text-lg font-bold text-gray-800 text-center group-hover:text-gray-900 transition-all duration-300 transform group-hover:scale-105">
                {service.title}
              </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1200 delay-200"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SmallCard
