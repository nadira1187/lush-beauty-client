import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import swal from "sweetalert";
const Details = () => {
    const product = useLoaderData();
const handleAddCart =() =>{
    fetch(`https://lush-beauty-server-m0luoj990-nadira1187.vercel.app/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            swal("Success", "Your product added successfully", "success");
        })
        .catch((error) => {
     
          console.error('Error adding product to cart:', error);
        });

}


    return (
        <div>
            <Navbar></Navbar>
           
                <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto py-10" key={product._id}> 
                    <div className="w-full rounded-md bg-cover bg-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="rounded-md w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-neutral-content">
                        <h1 className="pt-10 text-3xl font-bold text-rose-600">
                            {product.name}
                        </h1>
                        <p className="pt-4 text-base font-normal text-rose-600">
                            {product.description}
                        </p>
                        <div className="flex justify-between">
                            <p className="text-xl text-rose-600 font-semibold">Price: {product.price}</p>
                            <button className="my-6 btn normal-case btn-primary bg-rose-700 text-white border-none" onClick={handleAddCart}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Details;
