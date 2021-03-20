import Image from "next/image";

const Footer = (props) => {
  const { siteTitle } = props;
  return (
    <footer className="h-15 py-16 bg-black-dark dark:bg-black text-center">
      <Image src="/twitter.svg" width="50" height="50" />
      <div className="text-white mt-1">&copy; MTea</div>
    </footer>
  );
};

export default Footer;
