import Image from "next/image";

const Footer = (props) => {
  const { siteTitle } = props;
  return (
    <footer className="h-15 py-16 bg-black-dark dark:bg-black text-center">
      <a
        href="https://twitter.com/ujimattya_MT"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/twitter.svg" width="50" height="50" />
      </a>
      <div className="text-white mt-1">&copy; MTea</div>
    </footer>
  );
};

export default Footer;
