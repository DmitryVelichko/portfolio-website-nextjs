import Head from 'next/head';
import styles from '../styles/Home.module.css';
import type {NextPage} from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dmitry's Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>awesome</h1>
    </div>
  );
}

export default Home;