

const JoinUs = () => {
    return (
        <div>
              <div className="mt-3 mb-5 mx-5 rounded-md h-full relative">
          <div
            className="h-[300px] rounded-xl bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://i.ibb.co/FsLKL2Z/9771.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-20 rounded-xl"></div>
            <div className="flex flex-col justify-center items-center relative z-10">
              <h2 className="text-5xl font-bold pt-11 text-white text-center">
              Connect and Collaborate with Us
              </h2>
              <p className="text-white text-lg text-center pt-5">
              Connect and Collaborate with Us to embark on a journey of innovation, growth, and shared success <br /> We welcome passionate individuals and partners who are ready to join forces,  <br /> share ideas, and contribute to our shared vision.
              </p>
              <div><button className="bg-rose-500 text-white px-4 py-2 mt-4 invisible lg:visible rounded">
                Discover More
              </button></div>
              
            </div>
          </div>
        </div>
        </div>
    );
};

export default JoinUs;