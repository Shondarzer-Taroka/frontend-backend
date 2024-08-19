const Nav = () => {
    return (
      <div>
        <div className="flex justify-between items-center bg-black p-4">
          <div className="bg-red-400 p-2 text-white font-bold">
            Abstract | Help Center
          </div>
  
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
  