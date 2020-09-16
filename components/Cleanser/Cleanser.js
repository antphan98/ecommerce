import fetch from "node-fetch";
import { useState, useEffect } from "react";
import { Columns, Image, Container } from "react-bulma-components";
import Link from "next/link";

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
  // console.log(cleansers);
  return (
    <Container id="products">
      <Columns>
        {cleansers.length &&
          cleansers.map((cleanser, i) => (
            <Link as={`/cleansers/${cleanser}`} href="/cleansers/[id]">
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
