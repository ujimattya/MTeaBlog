import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="w-screen h-2 bg-green"></div>
      <div className=" ">
        <div>
          <div className="flex items-center justify-center pt-10 ">
            <Link href="/">
              <div className="cursor-pointer flex">
                <Image src="/logo.svg" width="70" height="70" />
                <h1 className="text-center text-green font-sans text-5xl font-bold pl-4 mt-4 sm:text-5xl ">
                  MTea Blog
                </h1>
              </div>
            </Link>
          </div>
          <p className="text-center text-black dark:text-white text-lg  py-10 sm:text-2xl">
            - プログラミングとかデザインとか -
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
