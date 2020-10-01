import { useRouter } from "next/router";
import useSWR from "swr";
import { Columns, Container, Image, Button } from "react-bulma-components";
import Header from "../../components/Header/Header";

const fetcher = async (url) => {
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

export default function allskincare() {
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
            <h1 className="title">{data.name}</h1>
            <h4 className="subtitle is-4">{data.vendor}</h4>
            <h4 className="subtitle is-4">${data.price}</h4>
            <p>{data.details}</p>
            <br />
            <p>pH Level: {data.phlevel}</p>
            <p>Size: {data.size}</p>

            <Button
              onClick={async () => {
                fetch("/api/cart", {
                  method: "POST",
                  body: JSON.stringify(requestBody),
                })
                  .then((res) => res.json())
                  .then(
                    (response) => {
                      console.log(response);
                    },
                    (error) => {
                      console.log(error);
                    }
                  );
                handleSelect(requestBody);
              }}
            >
              Add To Cart
            </Button>
          </Columns.Column>
        </Columns>
      </Container>
    </>
  );
}
