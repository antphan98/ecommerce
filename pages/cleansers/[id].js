import { useRouter } from "next/router";
import useSWR from "swr";
import { Columns, Container, Image, Button } from "react-bulma-components";
import Header from "../../components/Header/Header";

const fetcher = async (url) => {
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

export default function cleansers() {
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
        <Columns>
          <Columns.Column size="half">
            <Image style={{ width: "80%" }} src={data.image}></Image>
          </Columns.Column>
          <Columns.Column>
            <h1 class="title">{data.name}</h1>
            <h4 class="subtitle is-4">{data.vendor}</h4>
            <h4 class="subtitle is-4">${data.price}</h4>
            <p>{data.details}</p>
            <br />
            <p>pH Level: {data.phlevel}</p>
            <p>Size: {data.size}</p>

            <Button>Add To Cart</Button>
          </Columns.Column>
        </Columns>
      </Container>
    </>
  );
}
