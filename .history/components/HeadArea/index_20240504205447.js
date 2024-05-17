import Head from "next/head";

function Head({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content="Clotho" />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Head;