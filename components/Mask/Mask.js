import fetch from "node-fetch";
import { useState, useEffect } from "react";
import { Grid, Container } from "@material-ui/core";

const Mask = () => {
  const [masks, setMasks] = useState();
  useEffect(() => {
    async function fetchData() {
      const result = await fetch("/api/skincare");
      const data = await result.json();

      const filteredMasks = data.filter((b) => {
        if (b.producttype.includes("Face Mask")) {
          return true;
        }
        return false;
      });
      setMasks(filteredMasks);
    }

    fetchData();
  });

  return (
    <Container id="products">
      <Grid container spacing={3}>
        {masks &&
          masks.map((mask, i) => (
            <Link as={`/masks/${mask.name}`} href="/masks/[id]">
              <Grid item xs={4} key={i} cleanser={mask}>
                <img className="cleanser-img" src={mask.image}></img>
                <h1>{mask.name}</h1>
                <p>{mask.price}</p>
              </Grid>
            </Link>
          ))}
      </Grid>
    </Container>
  );
};

export default Mask;
