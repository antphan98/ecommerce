import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { Button } from "react-bulma-components";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Button color="primary">My Bulma button</Button>

        <h1>hello</h1>
      </main>

      <Footer />

      <style jsx>{``}</style>
    </div>
  );
}
