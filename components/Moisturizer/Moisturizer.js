import fetch from "node-fetch";
import { useState, useEffect } from "react";
import { Grid, Container } from "react-bulma-components";

const Moisturizer = () => {
  const [moisturizers, setMoisturizers] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("/api/skincare");
      const data = await result.json();

      const filteredMoisturizers = data.filter((b) => {
        if (b.producttype.includes("Moisturizer")) {
          return true;
        }

        return false;
      });
      setMoisturizers(filteredMoisturizers);
    }

    fetchData();
  }, []);

  return (
    <Container id="products">
      <Grid container spacing={3}>
        {moisturizers &&
          moisturizers.map((moisturizer, i) => (
            <Link
              as={`/moisturizers/${moisturizer.name}`}
              href="/moisturizers/[id]"
            >
              <Grid item xs={4} key={i} cleanser={moisturizer}>
                <img className="cleanser-img" src={moisturizer.image}></img>
                <h1>{moisturizer.name}</h1>
                <p>{moisturizer.price}</p>
              </Grid>
            </Link>
          ))}
      </Grid>
      <style jsx global>{``}</style>
    </Container>
  );
};

export default Moisturizer;
