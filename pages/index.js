import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Button, Grid, Container, Paper } from "@material-ui/core";
import AOS from "aos";
import { useEffect } from "react";

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
        <div data-aos="zoom-in" className="model">
          <Grid container>
            <Grid item xs={12} sm={6}>
              <img src="images/skincaremodel.jpg" />
            </Grid>
            <Grid className="Grid" item xs={12} sm={6}>
              <h1 className="title">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
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
            <Grid className="Grid" item xs={12} sm={6}>
              <h1 className="title">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h1>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src="images/beautybook.jpg" />
            </Grid>
          </Grid>
        </div>

        <div data-aos="zoom-in" className="concierge">
          <Grid container>
            <Grid item xs={12} sm={6}>
              <img src="images/concierge.jpg" />
            </Grid>
            <Grid className="Grid" item xs={12} sm={6}>
              <h1 className="title">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
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
        <h1 className="title">Our Products</h1>
        <Grid container className="products">
          <Grid item xs={12} sm={6}>
            <Paper className="cleanser">
              <h1 className="title">Cleansers</h1>
            </Paper>
            <Paper className="cleanser title">Toners</Paper>
            <Paper className="cleanser title">Moisturizers</Paper>
            <Paper className="cleanser title">Essences</Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className="cleanser title">Exfoliators</Paper>
            <Paper className="cleanser title">Serums</Paper>
            <Paper className="cleanser title">Masks</Paper>
            <Paper className="cleanser title">Sunblocks</Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />

      <style jsx global>{`
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
          top: 0;
          transform: translate(-50%, -50%);
        }

        .Grid.MuiGrid-item {
          padding: 50px;
        }

        .cleanser {
          padding: 20px;
          margin: 20px;
        }
      `}</style>
    </div>
  );
}
