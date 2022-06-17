import Logo from "../../assests/logo.svg";
import Image from "next/image";
import { useState } from "react";
const Nav = () => {
  const [active, setActive] = useState("MAIN");
  const navLinks = ["MAIN", "GALLERY", "ABOUT", "CONTACT"];
  return (
    <nav className="z-[3] px-[2.5rem] md:px-[10rem] hidden sm:flex items-center w-full h-[7rem] absolute top-0 left-0">
      <Image src={Logo} />
      <ul className="flex h-full ml-auto">
        {navLinks.map((item, index) => (
          <li
            onClick={() => setActive(item)}
            key={index}
            className=" relative flex items-center mx-2 md:mx-6 px-6 cursor-pointer"
          >
            <a
              className={`${
                active === item ? "text-white" : "text-grey"
              } z-[2] text-lg`}
            >
              {item}
            </a>
            <div
              className={`${
                active === item ? "h-full" : "h-0"
                
              } z-[1] w-full transition-all bg-primary h-full absolute top-0 right-0`}
            ></div>
          </li>
        ))}
      </ul>
      <p className="ml-auto font-bold text-2xl">090-394-392-01</p>
    </nav>
  );
};

export default Nav;
