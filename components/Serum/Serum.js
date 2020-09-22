import fetch from "node-fetch";
import { useState, useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import Link from "next/link";

const Serum = () => {
  const [serums, setSerums] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("/api/skincare");
      const data = await result.json();

      const filteredSerums = data.filter((b) => {
        if (b.producttype.includes("Serum")) {
          return true;
        }

        return false;
      });
      setSerums(filteredSerums);
    }
    fetchData();
  }, []);

  return (
    <Container id="products">
      <Grid container spacing={3}>
        {serums &&
          serums.map((serum, i) => (
            <Link as={`/serums/${serum.name}`} href="/serums/[id]">
              <Grid item xs={4} key={i} cleanser={serum}>
                <img className="cleanser-img" src={serum.image}></img>
                <h1>{serum.name}</h1>
                <p>{serum.price}</p>
              </Grid>
            </Link>
          ))}
      </Grid>
    </Container>
  );
};

export default Serum;
