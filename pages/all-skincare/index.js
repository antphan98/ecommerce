import Header from "../../components/Header/Header";
import { skincare } from "../../data/skincare";
import fetch from "node-fetch";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function allskincare() {
  return (
    <div className="container">
      <Header />
      <div className="skin-search">
        <input type="text" className="search" />
      </div>

      <style jsx global>{``}</style>
    </div>
  );
}
