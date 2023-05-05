import { ConfigProvider, theme } from "antd";
import NavBar from "../components/NavBar";
import store from "../store/store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const [darkTheme, setDarkTheme] = useState(store.getState().theme.dark);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setDarkTheme(store.getState().theme.dark);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: darkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <NavBar />
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  );
}
