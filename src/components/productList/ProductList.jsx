
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

const ProductList = () => {
    const products = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/nkDmDs8/s1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/sqGTCBG/s2.jpg" className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/G5ZBj60/s4.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="ml-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4 mt-5">
                {products.length === 0 ? (
                    <p className="card shadow-xl m-3 text-5xl text-rose-600 font-bold p-6 text-center">No products available in this brand</p>
                ) : (
                    products.map((cart) => (
                        <div key={cart._id} className="card w-72 md:w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={cart.image} alt={cart.name} className="rounded-xl" />
                            </figure>
                            <div className="p-4">
                                <h2 className="card-title">{cart.name}</h2>
                                <p className="text-lg font-medium">Brand: {cart.brand}</p>
                                <p className="text-lg font-medium">Product Type: {cart.type}</p>
                                <p className="text-lg font-medium">Price: {cart.price}</p>
                                <div className="flex items-center">
                                    <span className="text-xl mr-2">Rating: </span>
                                    {Array.from({ length: 5 }).map((_, index) => {
                                        if (index < Math.floor(cart.rating)) {
                                            return (
                                                <span key={index} className="text-yellow-400 text-2xl">
                                                    ★
                                                </span>
                                            );
                                        } else if (index === Math.floor(cart.rating) && cart.rating % 1 !== 0) {
                                            return (
                                                <span key={index} className="text-yellow-400 text-2xl">
                                                    ★
                                                </span>
                                            );
                                        } else {
                                            return (
                                                <span key={index} className="text-gray-400 text-2xl">
                                                    ☆
                                                </span>
                                            );
                                        }
                                    })}
                                </div>
                                <div className="flex justify-between">
                                    <button className="btn btn-primary text-white normal-case bg-rose-500 border-rose-500">
                                        <Link to={`/details/${cart._id}`}>See Details</Link>
                                    </button>
                                    <button className="btn btn-primary text-white normal-case bg-rose-500 border-rose-500">
                                        <Link to={`/updateProducts/${cart._id}`}>Update Products</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductList;
