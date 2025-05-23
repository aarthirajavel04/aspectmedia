import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ASPECTMEDIA</title>
        <meta name="description" content="ASPECTMEDIA Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>ASPECTMEDIA</h1>
      </main>
    </>
  );
}
