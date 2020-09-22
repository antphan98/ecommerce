import fetch from "node-fetch";
import { useState, useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import Link from "next/link";

const Toner = () => {
  const [toners, setToners] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("/api/skincare");
      const data = await result.json();

      const filteredToners = data.filter((b) => {
        if (b.producttype.includes("Toner")) {
          return true;
        }
        return false;
      });
      setToners(filteredToners);
    }
    fetchData();
  }, []);

  return (
    <Container id="products">
      <Grid container spacing={3}>
        {toners &&
          toners.map((toner, i) => (
            <Link as={`/toners/${toner.name}`} href="/toners/[id]">
              <Grid item xs={4} key={i} cleanser={toner}>
                <img className="cleanser-img" src={toner.image}></img>
                <h1>{toner.name}</h1>
                <p>{toner.price}</p>
              </Grid>
            </Link>
          ))}
      </Grid>

      <style jsx global>{``}</style>
    </Container>
  );
};

export default Toner;
