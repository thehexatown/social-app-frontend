import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome to social-app!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}
export default CustomApp;
