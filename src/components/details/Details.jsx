import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Details = () => {
    const product = useLoaderData();
    console.log(product);


    return (
        <div>
            <Navbar></Navbar>
           
                <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto py-10" key={product._id}> {/* Don't forget to add a "key" prop */}
                    <div className="w-full rounded-md bg-cover bg-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="rounded-md w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-neutral-content">
                        <h1 className="pt-10 text-3xl font-bold text-orange-600">
                            {product.name}
                        </h1>
                        <p className="pt-4 text-base font-normal text-orange-500">
                            {product.description}
                        </p>
                        <div className="flex justify-between">
                            <button className="my-6 btn normal-case btn-primary bg-orange-700 text-white border-none">
                                Price: {product.price}
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Details;
