import { useRouter } from "next/router";
import useSWR from "swr";
import { Grid, Container, Button } from "@material-ui/core";
import Header from "../../components/Header/Header";

const fetcher = async (url) => {
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

export default function masks() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/skincare/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return null;

  console.log(data);

  return (
    <>
      <Header />
      <Container>
        <Grid container>
          <Grid item sm={6}>
            <img style={{ width: "80%" }} src={data.image}></img>
          </Grid>
          <Grid item sm={6}>
            <h1 className="title">{data.name}</h1>
            <h4 className="subtitle is-4">{data.vendor}</h4>
            <h4 className="subtitle is-4">${data.price}</h4>
            <p>{data.details}</p>
            <br />
            <p>pH Level: {data.phlevel}</p>
            <p>Size: {data.size}</p>

            <Button>Add To Cart</Button>
            <Button>Wishlist</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
