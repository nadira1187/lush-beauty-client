import  { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
const MyCart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {

    fetch(`http://localhost:5000/cart`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
       
      },
    })
      .then((response) => response.json())
      .then((data) => {

        setCartProducts(data);
      })
      .catch((error) => {
       
        console.error('Error fetching cart products:', error);
      });
  }, [user.email]);

  return (
   
    <div>
        <Navbar></Navbar>
        <p className='text-2xl text-rose-500 text-center font-bold m-5'>Your Cart:</p>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
      {cartProducts.map((product) => (
        <div key={product._id} className="card w-72 md:w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          {/* Use the image URL from the product data */}
          <img src={product.image} alt={product.name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">{product.name}</h2>
          <button className='btn btn-primary text-white normal-case bg-rose-500 border-rose-500'>Delete from cart</button>
          </div> 
          </div>
      ))}
      </div>
      <Footer></Footer>
    </div>
  );
      }
export default MyCart;