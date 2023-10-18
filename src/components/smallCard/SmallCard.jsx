

const SmallCard = () => {
    return (
        <div>
            <h2 className="text-center text-rose-600 text-4xl font-bold mt-5 mb-5">Our Services</h2>
        <div className="grid grid-cols-1 gap-3 ml-20 md:ml-6  md:grid-cols-3 lg:grid-cols-6 lg:ml-6 my-6">
            <div className=" card card-body w-48 h-52 bg-green-200">
                <img className="w-28" src="https://i.ibb.co/5vdtnhJ/1.webp" alt="" />
                <p className="text-md text-center">Hair Care</p>
            </div>
            <div className="card card-body w-48 h-52 bg-amber-200">
                <img className="w-28" src="https://i.ibb.co/VDzTycg/2.webp" alt="" />
                <p className="text-md text-center">Skin Care</p>
            </div>
            <div className="card card-body w-48 h-52 bg-violet-200">
                <img className="w-28" src="https://i.ibb.co/30KsQTz/3.webp" alt="" />
                <p className="text-md text-center">Lip Sticks</p>
            </div>
            <div className="card card-body w-48 h-52 bg-yellow-100">
                <img className="w-28" src="https://i.ibb.co/GRYc27T/4.webp" alt="" />
                <p className="text-md text-center">Face Care</p>
            </div>
            <div className="card card-body w-48 h-52 bg-rose-200">
                <img className="w-28" src="https://i.ibb.co/gJQwjdM/5.webp" alt="" />
                <p className="text-md text-center">Blusher</p>
            </div>
            <div className="card card-body w-48 h-52 bg-amber-100">
                <img className="w-28" src="https://i.ibb.co/fGskhJX/6.webp" alt="" />
                <p className="text-md text-center">Natural</p>
            </div>
        </div>
        </div>
    );
};

export default SmallCard;