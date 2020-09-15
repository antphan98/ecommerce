import Header from "../../components/Header/Header";
import AllSkincare from "../../components/AllSkincare/AllSkincare";
import Footer from "../../components/Footer/Footer";
import { Paper } from "@material-ui/core";

export default function allskincare() {
  return (
    <div className="container">
      <Header />

      <Paper>
        <h1 className="title">All Skincare</h1>
      </Paper>

      <AllSkincare />
      <Footer />
    </div>
  );
}
