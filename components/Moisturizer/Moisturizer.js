import fetch from "node-fetch";
import { useState, useEffect } from "react";
import { Columns, Image, Container } from "react-bulma-components";

const Moisturizer = () => {
  const [moisturizers, setMoisturizers] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("/api/skincare");
      const data = await result.json();

      const filteredMoisturizers = data.filter((b) => {
        if (b.producttype === "Moisturizer") {
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
      <Columns>
        {moisturizers &&
          moisturizers.map((moisturizer, i) => (
            <Columns.Column key={i} size={4} skincare={moisturizer}>
              <Image src={moisturizer.image}></Image>
              <h1>{moisturizer.name}</h1>
              <p>{moisturizer.price}</p>
            </Columns.Column>
          ))}
      </Columns>
      <style jsx global>{``}</style>
    </Container>
  );
};

export default Moisturizer;
