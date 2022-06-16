import Image from "next/image";
import NewImg from "../assests/news.png";
const News = () => {
  return (
    <section className=" px-[15rem] py-[5rem]">
      <h1 className="text-center text-4xl font-bold">NEWS</h1>
      <p className="text-center text-2xl mt-5 opacity-50 mb-12">
        LATEST EVENTS
      </p>
      <div className="flex w-full items-center justify-center">
        <div className="w-[50%]">
          <div className="w-[40rem]">
            <Image src={NewImg} />
            <button className="-mt-[1rem] w-full text-white py-8 bg-primary">SEPTEMBER 14</button>
          </div>
        </div>
        <div className="w-[40%]">
            <div className="mb-14">
              <h2 className="text-xl font-bold mb-4">IN A NUMBER OF RECENT JUDICIAL</h2>
              <h3 className="text-lg font-bold text-primary mb-4">12.09.2021</h3>
              <p className="opacity-70 text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante et mollis tincidunt sed vulputate. Vel congue nec sit id fames sollicitudin vestibulum, habitasse. Vitae massa scelerisque quam lacus. Semper erat vestibulum sagittis amet lacus, sit pretium. Massa auctor amet, quis elementum aliquam ultricie</p>
              <a className="font-bold text-lg">More</a>
            </div>
            <div className="">
              <h2 className="text-xl font-bold mb-4">IN A NUMBER OF RECENT JUDICIAL</h2>
              <h3 className="text-lg font-bold text-primary mb-4">12.09.2021</h3>
              <p className="opacity-70 text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante et mollis tincidunt sed vulputate. Vel congue nec sit id fames sollicitudin vestibulum, habitasse. Vitae massa scelerisque quam lacus. Semper erat vestibulum sagittis amet lacus, sit pretium. Massa auctor amet, quis elementum aliquam ultricie</p>
              <a className="font-bold text-lg">More</a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default News;
