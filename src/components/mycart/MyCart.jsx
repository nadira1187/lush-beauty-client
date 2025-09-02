import  { useState} from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
import CartItems from '../cartItems/CartItems';
import { useLoaderData } from 'react-router-dom';
const MyCart = () => {
  const card = useLoaderData();
  const [cartProducts, setCartProducts] = useState(card);

  return (
   
    <div>
        <Navbar></Navbar>
        <p className='text-2xl text-rose-500 text-center font-bold m-5'>Your Cart:</p>
        <div className=" ">
                {cartProducts.map(item => 
                    <CartItems
                    key={item._id} 
                    item={item} 
                    products={cartProducts} 
                    setCartProducts={setCartProducts} />
                )}
      </div>
      <Footer></Footer>
    </div>
  );
      }
export default MyCart;