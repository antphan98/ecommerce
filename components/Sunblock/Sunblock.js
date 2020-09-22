import fetch from "node-fetch";
import { useState, useEffect } from "react";
import Link from "next/link";

import { Grid, Container } from "@material-ui/core";

const Sunblock = () => {
  const [sunblocks, setSunblocks] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("/api/skincare");
      const data = result.json();

      const filteredSunblocks = data.filter((b) => {
        if (b.producttype.includes("Sunblock")) {
          return true;
        }
        return false;
      });
      setSunblocks(filteredSunblocks);
    }

    fetchData();
  }, []);

  return (
    <Container id="products">
      <Grid container spacing={3}>
        {sunblocks &&
          sunblocks.map((sunblock, i) => (
            <Link as={`/sunblocks/${sunblock.name}`} href="/sunblocks/[id]">
              <Grid item xs={4} key={i} cleanser={sunblock}>
                <img className="cleanser-img" src={sunblock.image}></img>
                <h1>{sunblock.name}</h1>
                <p>{sunblock.price}</p>
              </Grid>
            </Link>
          ))}
      </Grid>
    </Container>
  );
};

export default Sunblock;
