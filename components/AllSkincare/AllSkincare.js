import fetch from "node-fetch";
import { useState, useEffect } from "react";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";

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
      <Grid container spacing={3}>
        {allSkincare &&
          allSkincare.map((skincare, i) => (
            <Link
              as={`/all-skincare/${skincare.name}`}
              href="/all-skincare/[id]"
            >
              <Grid item xs={4} key={i} skincare={skincare}>
                <img src={skincare.image}></img>
                <h1>{skincare.name}</h1>
                <p>${skincare.price.toFixed(2)}</p>
              </Grid>
            </Link>
          ))}
      </Grid>
      <style jsx global>{``}</style>
    </>
  );
};
export default AllSkincare;
