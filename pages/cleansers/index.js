import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Cleanser from "../../components/Cleanser/Cleanser";

export default function cleansers() {
  return (
    <div className="container">
      <Header />

      {Cleanser}
      <Footer />
    </div>
  );
}
