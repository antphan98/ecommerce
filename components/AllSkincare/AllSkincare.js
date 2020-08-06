// import { Columns } from "react-bulma-components";

// const AllSkincare = (props) => {
//   const { skincare } = props;
//   return (
//     <Columns size={12}>
//       <Columns.Column>
//         <p className="bd-notification is-success">{skincare.name}</p>
//       </Columns.Column>
//       <Columns.Column>
//         <p className="bd-notification is-info">
//           <img src={skincare.image}></img>
//         </p>
//       </Columns.Column>
//       <Columns.Column>
//         <p className="bd-notification is-warning">Third Column</p>
//       </Columns.Column>
//       <Columns.Column>
//         <p className="bd-notification is-warning">Fourth Column</p>
//       </Columns.Column>
//     </Columns>
//   );
// };

// export default AllSkincare;
import fetch from "node-fetch";
import { Columns, Image, Container } from "react-bulma-components";
import { useState, useEffect } from "react";

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

  if (!allSkincare) {
    return null;
  }

  return (
    <Container id="products">
      <Columns>
        {allSkincare &&
          allSkincare.map((skincare, i) => (
            <Columns.Column size={4} key={i} skincare={skincare}>
              <Image src={skincare.image}></Image>
              <h1>{skincare.name}</h1>
            </Columns.Column>
          ))}
      </Columns>

      <style jsx global>{``}</style>
    </Container>
  );
};
export default AllSkincare;
