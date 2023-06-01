import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between mx-8 pt-2 m-1 mb-4 ">
      <Link href="/" className="flex flex-center">
        <Image
          className="mx-2"
          src="/images/book.png"
          width={25}
          height={25}
          alt="book_logo"
        ></Image>
        <div className="m-auto text-gray-700 font-inter font-semibold text-xl">
          Book Oasis
        </div>
      </Link>

      <div className="flex rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm mr-3 font-inter  items-center justify-center;">
        <Link href="/login">Log In</Link>
      </div>
    </nav>
  );
};

export default Nav;
