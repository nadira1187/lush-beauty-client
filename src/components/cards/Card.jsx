import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {

    const handleAddBrand = event => {
        event.preventDefault();
        const form =event.target;
        const image =form.image.value;
        const name =form.name.value;
        const brandData ={image,name}
        fetch(`http://localhost:5000/brand`,{
            method: 'POST',
            headers: {
                'content-type' :'application/json'
            },
            body:JSON.stringify(brandData)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
        })
    }
    const [cards, setCards] = useState([]);

  useEffect(() => {
    // Use the correct path to your JSON file.
    fetch("http://localhost:5000/brand")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
    return (
        <div className="mt-5">
         <form onSubmit={handleAddBrand}>
         {/* <input type="text" name="image" placeholder="" className="input input-bordered input-secondary w-full max-w-xs" />
         <input type="text" name="name" placeholder="" className="input input-bordered input-secondary w-full max-w-xs" />
         <div className="form-control w-full max-w-xs ">
        <label className="label">
                    <span className="label-text"></span>
              </label>

            <input type="submit" value='Add Product' className=" mt-4  btn btn-primary bg-rose-500 border-rose-500 text-white normal-case "/>
        </div> */}
        </form> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"> 
        {cards.map((cart) => (
        <div key={cart._id} className="card w-72 md:w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            {/* Use the image URL from the cart data */}
            <img src={cart.image} alt={cart.name} className="rounded-xl" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title">{cart.name}</h2>
            <Link to={`/productList/${cart.name}`}>
            <button className="btn btn-primary text-white normal-case bg-rose-500 border-rose-500">See Products</button></Link>
            </div> 
            </div>
         
      ))} 
       </div>
        </div>
    );
};

export default Card;