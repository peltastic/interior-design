const Footer = () => {
  return (
    <footer className="bg-grey h-[30vh] -mt-[15rem] w-full z-50 relative text-white">
      <div className="w-full h-full flex justify-around items-center">
        <div className="w-[40%]">
          <h1 className=" text-2xl mb-10">HABEEB_BLVCK</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam diam
            tortor etiam adipiscing convallis purus fermentum, tincidunt quam.
            Id adipiscing eu arcu neque gravida tellus ut. Fermentum aenean erat
            id eu vestibulum at diam vel. Suspendisse nec elit ac sapien.
          </p>
        </div>
        <div className="w-[25]">
          <h1 className=" text-2xl mb-10">USEFUL LINKS</h1>
          <ul>
            <li>
              <a>Vacancy</a>
            </li>
            <li>
              <a>Vacancy</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
          </ul>
        </div>
        <div className="w-[25%]">
          <h1 className=" text-2xl mb-10">CONTACT</h1>
          <p>Address: Ija Road Egan Igando Lagos State</p>
          <p>Number: 09039439201</p>
          <p>E-mail: Onasanyahabeeb1@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
