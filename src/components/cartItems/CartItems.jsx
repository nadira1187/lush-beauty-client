/* eslint-disable react/prop-types */
import Swal from "sweetalert2";

const CartItems = ({ item, products, setCartProducts }) => {

    const { _id, image, name, brand, type, price } = item;
    console.log(_id);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                            const remaining = products.filter(product => product._id != id);
                             console.log(remaining);
                             console.log(id);
                            setCartProducts(remaining);
                        }
                    })
                    // .catch(error => {
                    //     console.error('Error deleting product:', error);
                    //     Swal.fire(
                    //         'Error!',
                    //         'An error occurred while deleting the product.',
                    //         'error'
                    //     );
                    // });
            }
        })
    }

    return (
        <div className="">
            <div className="flex justify-center">
                <div className="card w-72 md:w-96 bg-rose-200 shadow-xl">
                    <img className="w-full h-72 rounded-t-xl" src={image} alt="" />
                    <div className="text-center">
                        <h1 className="text-2xl  m-4 font-bold">{name}</h1>
                        <h1 className="text-xl  font-bold">Brand: {brand}</h1>
                        <h1 className=" text-lg font-bold">Type: {type}</h1>
                        <h1 className=" text-lg font-bold">Price: {price}</h1>
                    </div>
                    <button onClick={() => handleDelete(_id)} className="btn btn-secondary px-4 lg:px-10 mt-4 rounded-t-none normal-case text-base">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;