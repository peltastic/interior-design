import Image from "next/image";
import SubscribeImg from "../assests/subscribe.svg";
const Subscribe = () => {
  return (
    <section className=" w-full bg-bgGrey pt-[5rem]">
      <h1 className="text-center text-4xl font-bold">
        SIGN UP FOR COMPANY NEWS
      </h1>
      <p className="text-center text-2xl mt-5 opacity-50">
        YOU WILL RECIEVE NOTIFICATION ABOUT NEW COMPANY NEWS
      </p>
      <div className="flex w-[70%] mx-auto justify-center  my-[4rem]">
        <input
          type="email"
          placeholder="E-mail"
          className="px-8 text-2xl py-4 w-[50%] outline-none"
        />
        <button className="bg-primary py-8 text-white w-[20%] text-lg cursor-pointer">
          SUBSCRIBE
        </button>
      </div>
      <div className=" flex w-full px-4 ">
        <div className="mx-8">
          <Image src={SubscribeImg} />
        </div>
        <div className="mx-8">
          <Image src={SubscribeImg} />
        </div>
        <div className="mx-8">
          <Image src={SubscribeImg} />
        </div>
        <div className="mx-8">
          <Image src={SubscribeImg} />
        </div>
        <div className="mx-8">
          <Image src={SubscribeImg} />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
