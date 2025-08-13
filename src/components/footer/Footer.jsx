import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="relative mt-16">
      <footer className="relative footer footer-center p-12 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 text-base-content rounded-2xl shadow-xl border border-rose-200 overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-rose-300 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-300 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-rose-400 rounded-full blur-md"></div>
        </div>

        <nav className="grid grid-flow-col gap-8 relative z-10">
          <Link
            to="/"
            className="link link-hover text-rose-700 hover:text-rose-800 font-medium transition-all duration-300 hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/addproduct"
            className="link link-hover text-rose-700 hover:text-rose-800 font-medium transition-all duration-300 hover:scale-105"
          >
            Add Product
          </Link>
          <Link
            to="/mycart"
            className="link link-hover text-rose-700 hover:text-rose-800 font-medium transition-all duration-300 hover:scale-105"
          >
            My Cart
          </Link>
          <a className="link link-hover text-rose-700 hover:text-rose-800 font-medium transition-all duration-300 hover:scale-105">
            Contact
          </a>
        </nav>

        <nav className="relative z-10">
          <div className="grid grid-flow-col gap-6">
            <a className="group cursor-pointer">
              <div className="relative p-3 bg-white rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-rose-600 group-hover:text-rose-700 transition-colors"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
                <div className="absolute inset-0 bg-rose-400 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
            </a>

            <a className="group cursor-pointer">
              <div className="relative p-3 bg-white rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-rose-600 group-hover:text-rose-700 transition-colors"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
                <div className="absolute inset-0 bg-rose-400 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
            </a>

            <a className="group cursor-pointer">
              <div className="relative p-3 bg-white rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-rose-600 group-hover:text-rose-700 transition-colors"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
                <div className="absolute inset-0 bg-rose-400 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
            </a>
          </div>
        </nav>

        <aside className="relative z-10">
          <p className="text-rose-800 font-medium">
            Copyright © 2023 - All right reserved by{" "}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-bold">
              Lush Beauty
            </span>{" "}
            corporation Ltd.
          </p>
        </aside>

        {/* Floating decorative elements */}
        <div className="absolute top-4 left-8 w-3 h-3 bg-rose-300 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-6 right-12 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-rose-500 rounded-full opacity-40 animate-ping"></div>
      </footer>
    </div>
  )
}

export default Footer
