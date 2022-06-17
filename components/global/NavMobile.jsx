import Image from "next/image";
import NavIcon from "../../assests/nav.svg";
import { useState } from "react";
const NavMobile = () => {
  const [showNav, setShowNav] = useState(false);
  const navLinks = ["MAIN", "GALLERY", "ABOUT", "CONTACT"];
  return (
    <>
      <nav className={`fixed top-0 z-[40]  shadow-lg bg-white w-full ${showNav ? "translate-y-[0]" : "-translate-y-[100%]"} `}>
        <ul>
          {navLinks.map((item, index) => (
            <li className="text-center text-4xl my-12" key={index}>
              <a>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
        <div
          onClick={() => setShowNav(!showNav)}
          className={`${
            showNav ? "rotate-180 mt-[25rem]" : ""
          }  transition-all block sm:hidden fixed z-[50]  top-[2rem] left-[50%] -translate-x-[50%]`}
        >
          <Image src={NavIcon} />
        </div>
    </>
  );
};

export default NavMobile;
