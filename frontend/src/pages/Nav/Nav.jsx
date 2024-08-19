import { CgAbstract } from "react-icons/cg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className=" bg-black">
      <div className="flex justify-around items-center p-4 ">
        <Link to={'/'}>
          <div className=" p-2 text-white">
            <h1 className=" flex items-center gap-2">
              <CgAbstract className="text-black bg-white w-[24px] h-[24px] rounded-lg font-bold" />
              <p> Abstract | Help Center</p>
            </h1>  
          </div>
        </Link>

        <div>
          <button className="px-4 py-2 border border-white text-white bg-transparent hover:bg-white hover:text-black transition duration-300">
            Submit a Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
