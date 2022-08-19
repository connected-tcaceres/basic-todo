import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { LoggedInUserProvider } from "../admin/context/LoggedInUserContext";

const App = dynamic(() => import("../admin/App"), { ssr: false });

const Home: NextPage = () => {
  return (
    <LoggedInUserProvider>
      <App />
    </LoggedInUserProvider>
  );
};

export default Home;
