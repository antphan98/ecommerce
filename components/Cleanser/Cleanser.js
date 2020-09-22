import fetch from "node-fetch";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Grid, Container } from "@material-ui/core";

const Cleanser = () => {
  const [cleansers, setCleansers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("/api/skincare");
      const data = await result.json();
      console.log(data);

      const filteredCleansers = data.filter((b) => {
        if (b.producttype.includes("Cleanser")) {
          return true;
        }
        return false;
      });
      setCleansers(filteredCleansers);
    }
    fetchData();
  }, []);
  return (
    <Container id="products">
      <Grid container spacing={3}>
        {cleansers &&
          cleansers.map((cleanser, i) => (
            <Link as={`/cleansers/${cleanser.name}`} href="/cleansers/[id]">
              <Grid item xs={4} key={i} cleanser={cleanser}>
                <img className="cleanser-img" src={cleanser.image}></img>
                <h1>{cleanser.name}</h1>
                <p>{cleanser.price}</p>
              </Grid>
            </Link>
          ))}
      </Grid>

      <style jsx global>{``}</style>
    </Container>
  );
};

export default Cleanser;
