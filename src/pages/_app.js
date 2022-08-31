import Theme from '../styles/theme';
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>TinkerHub CE Chengannur</title>
        <meta name="description" content="Permission Administration Validation and Recorder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 