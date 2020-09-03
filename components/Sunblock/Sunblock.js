import fetch from "node-fetch";
import { useState, useEffect } from "react";
import { Columns, Image, Container } from "react-bulma-components";

const Sunblock = () => {
  const [sunblocks, setSunblocks] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("/api/skincare");
      const data = result.json();

      const filteredSunblocks = data.filter((b) => {
        if (b.producttype === "Sunblock") {
          return true;
        }
        return false;
      });
      setSunblocks(filteredSunblocks);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Columns>
        {sunblocks &&
          sunblocks.map((sunblock, i) => (
            <Columns.Column key={i} size={4} skincare={sunblock}>
              <Image src={serum.image}></Image>
              <h1>{serum.name}</h1>
              <p>{serum.price}</p>
            </Columns.Column>
          ))}
      </Columns>
    </Container>
  );
};

export default Sunblock;
