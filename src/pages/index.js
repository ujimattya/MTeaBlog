import Image from "next/image";

export default function Home() {
  return (
    <div className="dark:bg-black-dark h-screen ">
      <div className="w-screen h-3 bg-green"></div>
      <div className="container mx-auto ">
        <div>
          <div className="flex items-center justify-center pt-10">
            <Image src="/logo.svg" width="100" height="100" />
            <h1 className="text-center text-green font-sans text-4xl font-bold sm:text-5xl pl-4 mt-4">
              MTea Blog
            </h1>
          </div>
          <p className="text-center text-black dark:text-white text-xl  py-10 sm:text-2xl">
            - プログラミングとかデザインとか -
          </p>
        </div>
      </div>
    </div>
  );
}
