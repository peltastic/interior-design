import Image from "next/image";
import LaptopImg from "../assests/laptop.svg";
const About = () => {
  return (
    <section className="w-full lg:h-[90vh] py-[4rem]">
      <h1 className="text-center text-4xl font-bold">ABOUT COMPANY</h1>
      <p className="text-center text-2xl mt-5 opacity-50">SOME HISTORY</p>
      <div className="flex flex-wrap w-full items-center h-full px-[5rem] lg:px-[15rem] my-[5rem] lg:mt-0">
        <div className="w-[100%] sm:w-[50%]">
          <div className="">
            <h2 className="text-4xl mb-4">- 1920</h2>
            <p className="text-[1.3rem] mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              ultrices massa tempus mauris, nisi aenean scelerisque id. Tellus
              consectetur iaculis nulla sem eget arcu sed placerat. Urna tellus
              magna eget morbi blandit.
            </p>
          </div>
          <div className="">
            <h2 className="text-4xl mb-4">- 1920</h2>
            <p className="text-[1.3rem] mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              ultrices massa tempus mauris, nisi aenean scelerisque id. Tellus
              consectetur iaculis nulla sem eget arcu sed placerat. Urna tellus
              magna eget morbi blandit.
            </p>
          </div>
          <button className="bg-primary px-[5rem] py-4 text-white">More</button>
        </div>
        <div className="w-[100%] sm:w-[50%] order-[-1] sm:order-1 mb-[5rem] sm:mb-0">
          <Image src={LaptopImg} />
        </div>
      </div>
    </section>
  );
};

export default About;
