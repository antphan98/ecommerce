import fetch from "node-fetch";
import { Columns, Image, Container } from "react-bulma-components";
import { useState, useEffect } from "react";
import Link from "next/link";

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

  return (
    <>
      <Columns>
        {allSkincare &&
          allSkincare.map((skincare, i) => (
            <Link
              as={`/all-skincare/${skincare.name}`}
              href="/all-skincare/[id]"
            >
              <Columns.Column size={4} key={i} skincare={skincare}>
                <Image src={skincare.image}></Image>
                <h1>{skincare.name}</h1>
                <p>{skincare.price}</p>
              </Columns.Column>
            </Link>
          ))}
      </Columns>

      <style jsx global>{``}</style>
    </>
  );
};
export default AllSkincare;
