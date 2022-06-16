import Image from "next/image";
import Image1 from "../assests/image1.png";
import Image2 from "../assests/image2.png";
import Image3 from "../assests/image3.png";
const Services = () => {
  return (
    <section className="h-[60vh] bg-bgGrey w-full py-[4rem]">
      <h1 className="text-center text-4xl">SERVICES</h1>
      <p className="opacity-50 text-center text-[1.3rem] mb-12">WE DO IT</p>
      <div className="flex w-full px-[15rem]">
        <div className="mx-4">
          <Image src={Image1} />
        </div>
        <div className="mx-4">
          <Image src={Image2} />
        </div>
        <div className="mx-4">
          <Image src={Image3} />
        </div>
      </div>
    </section>
  );
};

export default Services;
