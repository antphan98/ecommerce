import { useRouter } from "next/router";
import useSWR from "swr";
import { Image } from "react-bulma-components";

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
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.price}</td>
          <td>
            <Image src={`/${data.image}`}></Image>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
