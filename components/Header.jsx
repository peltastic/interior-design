import Image from "next/image";
import HomeImg from "../assests/home.svg";
const Header = () => {
  return (
    <header className=" relative bg-[url('../assests/header.svg')] bg-cover w-full h-screen">
      <div className="absolute top-[50%] -translate-y-[50%]">
        <Image src={HomeImg} />
      </div>
      <div className="w-full h-full flex items-center">
        <div className="w-[100%] sm:w-[50%] ml-[5rem] sm:ml-[10rem] lg:ml-[25rem]">

            <h1 className="text-grey text-[4rem] sm:text-[5rem]">INTERIOR IN </h1>
            <h1 className="text-grey text-[4rem] sm:text-[5rem]">YOUR HOUSE</h1>
            <p className="text-black opacity-80 text-[1.5rem] sm:text-[1.2rem] font-bold mb-[4rem] sm:mb-auto">
              CHOOSE FOR YOURSELF SOMETHING NEW
            </p>
            <button className="bg-primary px-[5rem] cursor-pointer z-[1] relative py-4 mt-7 text-white text-4xl">
              MORE
            </button>
          </div>
      </div>
    </header>
  );
};

export default Header;
