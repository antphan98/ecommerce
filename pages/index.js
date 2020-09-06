import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Button, Image } from "react-bulma-components";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>All About Skin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Image id="background" src="images/skincarepage.jpg" />

      <Footer />

      <style jsx>{`
        #background {
          width: 10%;
        }
      `}</style>
    </div>
  );
}
