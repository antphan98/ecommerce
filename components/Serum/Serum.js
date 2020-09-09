import fetch from "node-fetch";
import { useState, useEffect } from "react";
import { Columns, Image, Container } from "react-bulma-components";

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
    <Container>
      <Columns>
        {serums &&
          serums.map((serum, i) => (
            <Columns.Column key={i} size={4} skincare={serum}>
              <Image src={serum.image}></Image>
              <h1>{serum.name}</h1>
              <p>{serum.price}</p>
            </Columns.Column>
          ))}
        ;
      </Columns>
    </Container>
  );
};

export default Serum;
