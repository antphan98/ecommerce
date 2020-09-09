import fetch from "node-fetch";
import { useState, useEffect } from "react";
import { Columns, Image, Container } from "react-bulma-components";

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
    <Container>
      <Columns>
        {exfoliators &&
          exfoliators.map((exfoliator, i) => (
            <Columns.Column size={4} key={i} skincare={exfoliator}>
              <Image src={exfoliator.image}></Image>
              <h1>{exfoliator.name}</h1>
              <p>${exfoliator.price}</p>
            </Columns.Column>
          ))}
      </Columns>
      <style jsx global>{``}</style>
    </Container>
  );
};

export default Exfoliator;
