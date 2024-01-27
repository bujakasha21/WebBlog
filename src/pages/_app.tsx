import BackToTopButton from "@/components/BackToTopBtn";
import Footer from "@/components/Footer";
import NavigationMenu from "@/components/navigationMenu";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NavigationMenu />
      <main>
        <Component {...pageProps} />
      </main>
      <BackToTopButton />
    </>
  );
};

export default App;
