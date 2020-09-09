import fetch from "node-fetch";
import { useState, useEffect } from "react";
import { Columns, Image, Container, Link } from "react-bulma-components";

const Cleanser = () => {
  const [cleansers, setCleansers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("/api/skincare");
      const data = await result.json();
      console.log(data);

      const filteredCleansers = data.filter((b) => {
        if (b.producttype.includes("Cleanser")) {
          return true;
        }
        return false;
      });
      setCleansers(filteredCleansers);
    }
    fetchData();
  }, []);

  return (
    <Container id="products">
      <Columns>
        {cleansers &&
          cleansers.map((cleanser, i) => (
            <Link as={`/cleansers/${cleanser.name}`} href="/cleansers/[id]">
              <Columns.Column size={4} key={i} cleanser={cleanser}>
                <Image src={cleanser.image}></Image>
                <h1>{cleanser.name}</h1>
                <p>{cleanser.price}</p>
              </Columns.Column>
            </Link>
          ))}
      </Columns>

      <style jsx global>{``}</style>
    </Container>
  );
};

export default Cleanser;
