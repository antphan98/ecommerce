import Header from "../../components/Header/Header";
import { skincare } from "../../data/skincare";
import fetch from "node-fetch";
import { useState, useEffect } from "react";
import AllSkincare from "../../components/AllSkincare/AllSkincare";

export default function allskincare() {
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

  if (!allSkincare) {
    return null;
  }

  return (
    <div className="container">
      <Header />
      <div className="skin-search">
        <input type="text" className="search" />
      </div>

      <h1>
        {allSkincare &&
          allSkincare.map((skincare, i) => (
            <AllSkincare key={i} skincare={skincare}>
              {allSkincare.name}
            </AllSkincare>
          ))}
      </h1>

      <style jsx global>{``}</style>
    </div>
  );
}
