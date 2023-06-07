import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Challenge.module.css";

/*******************************************************************************
  Server-side
 ******************************************************************************/

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

/*******************************************************************************
  Page
 ******************************************************************************/

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Hitchin Web :: A friendly, informal meetup of Web folk in Hitchin.
        </title>
        <meta
          name="description"
          content="A friendly, informal meetup of Web folk in Hitchin."
        />
        <meta property="og:site_name" content="Hitchin Web" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://hitchin-web.org/logo.png" />
        <meta property="og:locale" content="en_GB" />

        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Hitchin</span> <span>Web</span>
        </h1>

        <h2>Create a tip calculator</h2>

        <h3>Features</h3>
        <ul>
          <li>Type in the bill amount</li>
          <li>Select a percentage to tip (5%, 10%, 12%)</li>
          <li>See the tip amount, amount+tip, or both</li>
        </ul>

        <h3>Flashy extra ideas</h3>
        <ul>
          <li>Works nicely on mobile</li>
          <li>Styled to look pretty</li>
          <li>Split the total amount feature</li>
          <li>Custom tip percentage</li>
          <li>Anything you can think of...</li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
