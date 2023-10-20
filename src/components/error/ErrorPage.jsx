import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
       < div className=" mt-4 flex flex-col justify-center items-center ">
        <div className=" p-5 flex flex-col justify-center items-center gap-5 bg-slate-300 rounded-xl w-3/5">
            <h1 className=" text-5xl text-purple-700 text-center">404 Error</h1>
              <h1 className=" text-5xl text-purple-700 text-center">Nothing to show here !!</h1>
            <Link className="btn bg-pink-700 normal-case text-white " to="/">Go back to home</Link>
        </div>
        </div>
    );
};

export default ErrorPage;