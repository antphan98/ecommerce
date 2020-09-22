import fetch from "node-fetch";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Grid, Container } from "@material-ui/core";

const Exfoliator = () => {
  const [exfoliators, setExfoliators] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("/api/skincare");
      const data = await result.json();

      const filteredExfoliators = data.filter((b) => {
        if (b.producttype.includes("Exfoliator")) {
          return true;
        }
        return false;
      });
      setExfoliators(filteredExfoliators);
    }
    fetchData();
  }, []);

  return (
    <Container id="products">
      <Grid container spacing={3}>
        {exfoliators &&
          exfoliators.map((exfoliator, i) => (
            <Link
              as={`/exfoliators/${exfoliator.name}`}
              href="/exfoliators/[id]"
            >
              <Grid item xs={4} key={i} cleanser={exfoliator}>
                <img className="cleanser-img" src={exfoliator.image}></img>
                <h1>{exfoliator.name}</h1>
                <p>{exfoliator.price}</p>
              </Grid>
            </Link>
          ))}
      </Grid>

      <style jsx global>{``}</style>
    </Container>
  );
};

export default Exfoliator;
