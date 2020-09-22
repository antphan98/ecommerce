import fetch from "node-fetch";
import { useState, useEffect } from "react";
import { Columns, Image, Container } from "react-bulma-components";
import Link from "next/link";

const Essence = () => {
  const [essences, setEssences] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("/api/skincare");
      const data = await result.json();

      const filteredEssences = data.filter((b) => {
        if (b.producttype.includes("Essence")) {
          return true;
        }
        return false;
      });
      setEssences(filteredEssences);
    }
    fetchData();
  }, []);

  return (
    <Container id="products">
      <Grid container spacing={3}>
        {essences &&
          essences.map((essence, i) => (
            <Link as={`/essences/${essence.name}`} href="/essences/[id]">
              <Grid item xs={4} key={i} essence={essence}>
                <img className="essence-img" src={essence.image}></img>
                <h1>{essence.name}</h1>
                <p>{essence.price}</p>
              </Grid>
            </Link>
          ))}
      </Grid>
    </Container>
  );
};

export default Essence;
