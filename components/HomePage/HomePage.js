import { Button, Grid, Container, Paper } from "@material-ui/core";
import AOS from "aos";
import { useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <>
      <div className="landing-img">
        <img className="background" src="images/skincarepage.jpg" />
        <div className="home-btn">
          <Button
            variant="contained"
            color="secondary"
            className="Button discover"
          >
            Discover Skincare
          </Button>
        </div>
      </div>

      <Container>
        <h1 className="title product-title">Our Products</h1>
        <Grid container className="products">
          <Grid item xs={12} md={6}>
            <Link href="/cleansers">
              <Paper
                style={{
                  backgroundImage: "url(images/cleanser.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  position: "relative",
                }}
                className="cleanser title"
              >
                <div className="layer"></div>
                Cleansers
              </Paper>
            </Link>
            <Link href="/toners">
              <Paper
                style={{
                  backgroundImage: "url(images/toner.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  position: "relative",
                }}
                className="cleanser title"
              >
                <div className="layer"></div>
                Toners
              </Paper>
            </Link>
            <Link href="/moisturizers">
              <Paper
                style={{
                  backgroundImage: "url(images/moisturizer.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  position: "relative",
                }}
                className="cleanser title"
              >
                <div className="layer"></div>
                Moisturizers
              </Paper>
            </Link>
            <Link href="/essences">
              <Paper
                style={{
                  backgroundImage: "url(images/essence.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  position: "relative",
                }}
                className="cleanser title"
              >
                <div className="layer"></div>
                Essences
              </Paper>
            </Link>
          </Grid>

          <Grid item xs={12} md={6}>
            <Link href="/exfoliators">
              <Paper
                style={{
                  backgroundImage: "url(images/exfoliator.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  position: "relative",
                }}
                className="cleanser title"
              >
                <div className="layer"></div>
                Exfoliators
              </Paper>
            </Link>
            <Link href="/serums">
              <Paper
                style={{
                  backgroundImage: "url(images/serum.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  position: "relative",
                }}
                className="cleanser title"
              >
                <div className="layer"></div>
                Serums
              </Paper>
            </Link>
            <Link href="/masks">
              <Paper
                style={{
                  backgroundImage: "url(images/mask.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  position: "relative",
                }}
                className="cleanser title"
              >
                <div className="layer"></div>
                Masks
              </Paper>
            </Link>
            <Link href="/sunblocks">
              <Paper
                style={{
                  backgroundImage: "url(images/sunblock.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  position: "relative",
                }}
                className="cleanser title"
              >
                <div className="layer"></div>
                Sunblocks
              </Paper>
            </Link>
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
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Titan+One&display=swap");

        .MuiPaper-root {
          cursor: pointer;

        }
        body {
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

        span.MuiButton-label.discover {
          font-family: "Varela Round", sans-serif;
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
          transition: 1s ease;
          color: black !important;
        }

        .title.product-title {
          text-align: center;
          font-family: "Titan One", cursive;
          text-shadow: 2px 2px pink;

          font-size: 3rem;
        }
        .info-section {
          margin: 20px;
        }

        .layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .layer:hover {
          background-color: rgba(255, 255, 255, 0.5);
          transition: 0.7s ease;
        }

        li {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
