import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Hitchin Web - A friendly, informal meetup of Web folk in Hitchin.
        </title>
        <meta
          name="description"
          content="Meetup group for any Hitchin folk who create for the Web."
        />
        <meta property="og:title" content="Hitchin Web" />
        <meta property="og:site_name" content="Hitchin Web" />
        <meta property="og:url" content="https://hitchin-web.org/" />
        <meta
          property="og:description"
          content="A friendly, informal meetup of Web folk in Hitchin."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://hitchin-web.org/logo.png" />
        <meta property="og:locale" content="en_GB" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Hitchin</span> <span>Web</span>
        </h1>

        <section className={styles.detail}>
          <p className={styles.description}>
            A friendly, informal meetup for anyone with an interest in the being
            creative with the Web.
          </p>

          <p className={styles.interests}>
            Front-end, back-end, design, UX, accessibility & more.
          </p>

          <p className={styles.eventInfo}>
            <strong>7pm</strong> onwards @{" "}
            <strong>The&nbsp;Cooper&apos;s&nbsp;Arms</strong>,
            81&nbsp;Tilehouse&nbsp;Street.
            <br />
            <strong>21&nbsp;September</strong> &{" "}
            <strong>19&nbsp;October</strong> 2022.
          </p>

          <p className={styles.description}>
            For latest information and to get in touch, check out{" "}
            <a href="https://twitter.com/hitchin_web">
              @hitchin_web on Twitter
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
