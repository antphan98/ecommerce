import fetch from "node-fetch";
import { useState, useEffect } from "react";
import { Columns, Image, Container } from "react-bulma-components";

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
    <Container>
      <Columns>
        {masks &&
          masks.map((mask, i) => (
            <Columns.Column key={i} size={4} skincare={mask}>
              <Image src={mask.image}></Image>
              <h1>{mask.name}</h1>
              <p>{mask.price}</p>
            </Columns.Column>
          ))}
      </Columns>
    </Container>
  );
};

export default Mask;
