import fetch from "node-fetch";
import { useState, useEffect } from "react";
import { Columns, Image, Container } from "react-bulma-components";

const Essence = () => {
  const [essences, setEssences] = useState();

  useState(() => {
    async function fetchData() {
      const result = await fetch("/api/skincare");
      const data = await result.json();

      const filteredEssences = data.filter((b) => {
        if (b.producttype === "Essence") {
          return true;
        }
        return false;
      });
      setEssences(filteredEssences);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Columns>
        {essences &&
          essences.map((essence, i) => (
            <Columns.Column size={4} key={i} skincare={essence}>
              <Image src={essence.image}></Image>
              <h1>{essence.name}</h1>
              <p>{essence.price}</p>
            </Columns.Column>
          ))}
      </Columns>
    </Container>
  );
};

export default Essence;
