import { searchMd } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={searchMd} alt="Loading" />
      <input type="search" placeholder="Search something..." class="w-full outline-none bg-transparent text-black-600 text-sm" />
    </div>
  );
};

export default Generating;
