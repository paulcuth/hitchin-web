import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

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

        <section className={styles.detail}>
          <p className={styles.description}>
            Bringing together folk that build things for the Web, including (but
            not limited to) front-end, back-end, design, UX, accessibility.
            Whether you work with the Web professionally, you&apos;re a
            hobbyist, or just starting out, this is for everyone.
          </p>

          <p className={styles.eventInfo}>
            We hold <strong>code nights on the 2nd Wednesday</strong>, and <strong>social nights on the 4th Wednesday</strong> of every month. We go to various venues in Hitchin, so follow us on{" "}
            <a href="https://www.meetup.com/hitchin-web">Meetup</a> to find out
            where we&apos;ll be next!
          </p>

          <p className={styles.description}>
            <a rel="me" href="https://www.meetup.com/hitchin-web">Meetup</a> /{" "}
            <a rel="me" href="https://toot.community/@hitchinweb">Mastodon</a> /{" "}
            <a rel="me" href="https://twitter.com/hitchin_web">Xwitter</a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
