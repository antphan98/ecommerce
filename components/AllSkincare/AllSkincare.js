import fetch from "node-fetch";
import { Columns, Image, Container } from "react-bulma-components";
import { useState, useEffect } from "react";
import currency from "currency.js";

const AllSkincare = () => {
  const [allSkincare, setAllSkincare] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("/api/skincare");
      const data = await result.json();
      setAllSkincare(data);
      console.log(data);
    }
    fetchData();
  }, []);

  //   if (!allSkincare) {
  //     return null;
  //   }

  return (
    <Container id="products">
      <Columns>
        {allSkincare &&
          allSkincare.map((skincare, i) => (
            <Columns.Column size={4} key={i} skincare={skincare}>
              <Image src={skincare.image}></Image>
              <h1>{skincare.name}</h1>
              <p>{skincare.price}</p>
            </Columns.Column>
          ))}
      </Columns>

      <style jsx global>{``}</style>
    </Container>
  );
};
export default AllSkincare;
