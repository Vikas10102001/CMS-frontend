import { ConfigProvider, theme } from "antd";
import NavBar from "../components/NavBar";

export default function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
      }}
    >
      <NavBar />
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
