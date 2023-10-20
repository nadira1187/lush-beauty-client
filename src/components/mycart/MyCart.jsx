import  { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
import swal from 'sweetalert';
const MyCart = (cart) => {
    const {_id} =cart;
  const [cartProducts, setCartProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const handleDelete =_id => {
    console.log(_id)
    fetch(`http://localhost:5000/cart/${_id}` ,{
        method : 'DELETE'
    })
    .then(res =>res.json())
    .then (data =>{
        console.log(data)
        if(data.deletedCount >0){
            setCartProducts((prevProducts) =>
            prevProducts.filter((product) => product._id !== _id))
            swal("Success", "Your product deleted successfully", "success")
        }
    })
  }

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
      {cartProducts.map((product) => (
        <div key={product._id} className="card w-72 md:w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          {/* Use the image URL from the product data */}
          <img src={product.image} alt={product.name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">{product.name}</h2>
          <button onClick={() => handleDelete(product._id)} className='btn btn-primary text-white normal-case bg-rose-500 border-rose-500'>Delete from cart</button>
          </div> 
          </div>
      ))}
      <Footer></Footer>
    </div>
  );
      }
export default MyCart;