import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  const { title, children } = props;
  const siteTitle = "MTea Blog";
  return (
    <div className="dark:bg-black-dark bg-gray-100 h-screen ">
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <main className="container mx-auto min-h-1/2 dark:bg-black-dark bg-gray-100 sm:min-h-3/4">
        {children}
      </main>
      <Footer siteTitle={siteTitle} />
    </div>
  );
};

export default Layout;
