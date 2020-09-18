import "react-bulma-components/dist/react-bulma-components.min.css";
import "aos/dist/aos.css";
import { Provider } from "next-auth/client";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}
