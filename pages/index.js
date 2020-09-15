import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Button, Grid, Container, Paper } from "@material-ui/core";
import AOS from "aos";
import { useEffect } from "react";
import Link from "next/link";

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

      <div className="landing-img">
        <img className="background" src="images/skincarepage.jpg" />
        <div className="home-btn">
          <Button variant="contained" color="secondary" className="Button">
            Discover Skincare
          </Button>
        </div>
      </div>

      <Container>
        <h1 className="title">Our Products</h1>
        <Grid container className="products">
          <Grid item xs={12} md={6}>
            <Paper
              style={{
                backgroundImage: "url(images/cleanser.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="cleanser title"
            >
              Cleansers
            </Paper>
            <Paper
              style={{
                backgroundImage: "url(images/toner.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="cleanser title"
            >
              Toners
            </Paper>
            <Paper
              style={{
                backgroundImage: "url(images/moisturizer.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="cleanser title"
            >
              Moisturizers
            </Paper>
            <Paper
              style={{
                backgroundImage: "url(images/essence.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="cleanser title"
            >
              Essences
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              style={{
                backgroundImage: "url(images/exfoliator.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="cleanser title"
            >
              Exfoliators
            </Paper>
            <Paper
              style={{
                backgroundImage: "url(images/serum.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="cleanser title"
            >
              Serums
            </Paper>
            <Link href="/masks">
              <Paper
                style={{
                  backgroundImage: "url(images/mask.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="cleanser title"
              >
                Masks
              </Paper>
            </Link>
            <Paper
              style={{
                backgroundImage: "url(images/sunblock.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="cleanser title"
            >
              Sunblocks
            </Paper>
          </Grid>
        </Grid>
        <div className="info-section">
          <div data-aos="zoom-in" className="model">
            <Grid container>
              <Grid item sm={12} md={6}>
                <img src="images/skincaremodel.jpg" />
              </Grid>
              <Grid className="Grid" item sm={12} md={6}>
                <h1 className="title">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h1>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </p>
              </Grid>
            </Grid>
          </div>

          <div data-aos="zoom-in" className="products">
            <Grid container>
              <Grid className="Grid" item sm={12} md={6}>
                <h1 className="title">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h1>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </p>
              </Grid>
              <Grid item sm={12} md={6}>
                <img src="images/beautybook.jpg" />
              </Grid>
            </Grid>
          </div>

          <div data-aos="zoom-in" className="concierge">
            <Grid container>
              <Grid item sm={12} md={6}>
                <img src="images/concierge.jpg" />
              </Grid>
              <Grid className="Grid" item sm={12} md={6}>
                <h1 className="title">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h1>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </p>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>

      <Footer />

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");

        * {
          font-family: "Varela Round", sans-serif;
        }
        .background {
          height: 100vh;
          width: 100vw;
          object-fit: cover;
          vertical-align: bottom;
        }
        .home-btn {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .subtitle:not(:last-child),
        .title:not(:last-child) {
          margin-bottom: 0;
        }

        .Grid.MuiGrid-item {
          padding: 50px;
        }

        .cleanser {
          padding: 30px;
          margin: 20px;
          color: white !important;
        }

        .cleanser:hover {
          background: white !important;
          color: black !important;
          transition: 1s ease;
        }

        .info-section {
          margin: 20px;
        }
      `}</style>
    </div>
  );
}
