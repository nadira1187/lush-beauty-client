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
  <div id="slide1" className="carousel-item  relative w-full">
    <img src="https://i.ibb.co/nkDmDs8/s1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative  w-full">
    <img src="https://i.ibb.co/sqGTCBG/s2.jpg" className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"> 
        {products.map((cart) => (
        <div key={cart._id} className="card w-72 md:w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            {/* Use the image URL from the cart data */}
            <img src={cart.image} alt={cart.name} className="rounded-xl" />
          </figure>
          <div className=" p-4">
            <h2 className="card-title">{cart.name}</h2>
            <p className="text-lg font-medium">Brand: {cart.brand}</p>
            <p  className="text-lg font-medium">Product Type:{cart.type}</p>
            <p className="text-lg font-medium">Price:{cart.price}</p>
            <div className="flex items-center">
  <span className="text-xl mr-2">Rating: </span>
  {Array.from({ length: 5 }).map((_, index) => {
    if (index < Math.floor(cart.rating)) {
      // Whole star
      return (
        <span key={index} className="text-yellow-400 text-2xl">
          ★
        </span>
      );
    } else if (index === Math.floor(cart.rating) && cart.rating % 1 !== 0) {
      // Partial star (e.g., for a rating like 3.5)
      return (
        <span key={index} className="text-yellow-400 text-2xl">
          ★
        </span>
      );
    } else {
      // Empty star
      return (
        <span key={index} className="text-gray-400 text-2xl">
          ☆
        </span>
      );
    }
  })}
</div>


              <div className="flex justify-between"> <button className="btn btn-primary text-white normal-case bg-rose-500 border-rose-500"><Link to= {`/details/${cart._id}`}>See Details </Link></button>
              <button className="btn btn-primary text-white normal-case bg-rose-500 border-rose-500"> <Link to= {`/updateProducts/${cart._id}`}>Update Products</Link></button></div>
           
            </div> 
            </div>
         
      ))} 
       </div>
       <Footer></Footer>
        </div>
    );
};

export default ProductList;