import swal from "sweetalert";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";


const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const form =event.target;
        const image =form.image.value;
        const name =form.name.value;
        const brand =form.brand.value;
        const type =form.type.value;
        const price =form.price.value;
        const description =form.description.value;
        const rating =form.rating.value;
        const productData= {image,name,brand,type,price,description,rating}
        console.log(productData);
        fetch('https://lush-beauty-server-m0luoj990-nadira1187.vercel.app/product',{
            method: 'POST',
            headers: {
                'content-type' :'application/json'
            },
            body:JSON.stringify(productData)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                swal("Success", "Your product added successfully", "success");
            }
        })
    }
    return (
        <div className="">
            <Navbar></Navbar>
            <h2 className="text-center text-rose-600 text-4xl font-bold mt-5 mb-5">Add your product here</h2>
            <form onSubmit={handleAddProduct}>
         <div className="flex flex-col lg:flex-row gap-4 justify-center items-center" >
        <div className="form-control w-full max-w-xs">
             <label className="label">
                    <span className="label-text">Image of product</span>
              </label>
         <input type="text" name="image" placeholder="" className="input input-bordered input-secondary w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs">
             <label className="label">
                    <span className="label-text">Name of product</span>
              </label>
         <input type="text" name="name" placeholder="" className="input input-bordered input-secondary w-full max-w-xs" />
        </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center" >
        <div className="form-control w-full max-w-xs">
             <label className="label">
                    <span className="label-text">Brand Name</span>
              </label>
         <input type="text" name="brand" placeholder="" className="input input-bordered input-secondary w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs">
             <label className="label">
                    <span className="label-text">Product Type</span>
              </label>
         <input type="text" name="type" placeholder="" className="input input-bordered input-secondary w-full max-w-xs" />
        </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center" >
        <div className="form-control w-full max-w-xs">
             <label className="label">
                    <span className="label-text">Price</span>
              </label>
         <input type="text" name="price" placeholder="" className="input input-bordered input-secondary w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs">
             <label className="label">
                    <span className="label-text">Short description</span>
              </label>
         <input type="text" name="description" placeholder="" className="input input-bordered input-secondary w-full max-w-xs" />
        </div>
        </div>
        <div className=" mb-6 flex flex-col lg:flex-row gap-4 justify-center items-center" >
        <div className="form-control w-full max-w-xs">
             <label className="label">
                    <span className="label-text">Rating
</span>
              </label>
         <input type="text" name="rating" placeholder="" className="input input-bordered input-secondary w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs ">
        <label className="label">
                    <span className="label-text"></span>
              </label>

            <input type="submit" value='Add Product' className=" mt-4  btn btn-primary bg-rose-500 border-rose-500 text-white normal-case "/>
        </div>
        </div>
        </form>
        <Footer></Footer>

        </div>
    );
};

export default AddProduct;