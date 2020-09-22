import Head from "next/head";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import Footer from "../components/Footer/Footer";
import { Button, Grid, Container, Paper } from "@material-ui/core";
import AOS from "aos";
import { useEffect } from "react";
import Link from "next/link";
import HomePage from "../components/HomePage/HomePage";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div>
      <Head>
        <title>All About Skin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHeader />
      <HomePage />

      <Footer />
    </div>
  );
}
