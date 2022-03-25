import Head from "next/head";

import Nav from "../components/nav";
import Feature from "../components/feature";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Lia</title>
      </Head>

      <Nav />

      <main>
        <Feature />
        <h1 className="title">In-Progress</h1>
        <h3 className="center">Auth functions active</h3>
      </main>
    </div>
  );
}
