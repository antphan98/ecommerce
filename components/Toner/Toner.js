import fetch from "node-fetch";
import { useState, useEffect } from "react";
import { Columns, Image, Container } from "react-bulma-components";

const Toner = () => {
  const [toners, setToners] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("/api/skincare");
      const data = await result.json();

      const filteredToners = data.filter((b) => {
        if (b.producttype.includes("Toner")) {
          return true;
        }
        return false;
      });
      setToners(filteredToners);
    }
    fetchData();
  }, []);

  return (
    <Container id="products">
      <Columns>
        {toners &&
          toners.map((toner, i) => (
            <Columns.Column size={4} key={i} skincare={toner}>
              <Image src={toner.image}></Image>
              <h1>{toner.name}</h1>
              <p>{toner.price}</p>
            </Columns.Column>
          ))}
      </Columns>

      <style jsx global>{``}</style>
    </Container>
  );
};

export default Toner;
