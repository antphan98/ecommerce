import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function skincare() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/skincare/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.price}</td>
          <td>{data.details}</td>
          <td>
            <img src={data.image}></img>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
