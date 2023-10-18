import {Link} from "react-router-dom"
const Banner = () => {

    return (
        <div>
            <div style={{backgroundImage:"url('https://i.ibb.co/84pPft4/banner.jpg')"}} className="hero min-h-screen   bg-opacity-10 rounded-2xl mt-4">
  <div className="hero-content flex-col-reverse lg:flex-row-reverse">

<div>
    <img src="https://i.ibb.co/9tn74f7/31458.jpg" className=" w-11/12 rounded-full" /></div>

<div>
<h1 className="text-5xl font-bold">Discover the Beauty of Lush</h1>
      <p className="py-6">Indulge in Luxurious Beauty Products for a Radiant You! Explore Our Lush Beauty Collection Today and Unveil Your Natural Glamour.</p>
      <button className="btn btn-primary text-white normal-case bg-rose-500 border-rose-500"> <Link to='/login'>Get Started</Link></button>
</div>
</div>   
    </div>
  </div>
    );
};

export default Banner;