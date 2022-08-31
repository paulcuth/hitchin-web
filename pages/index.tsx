import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hitchin Web - A monthly meetup of Web folk in Hitchin.</title>
        <meta
          name="description"
          content="Meetup group for any Hitchin folk who create for the Web."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Hitchin</span> <span>Web</span>
        </h1>

        <section className={styles.detail}>
          <p className={styles.interests}>
            Front-end, back-end, UX, design, accessibility, and more.
          </p>

          <p className={styles.description}>
            A friendly, informal monthly meetup for anyone with an interest in
            the being creative with the Web.
          </p>

          <p className={styles.eventInfo}>
            <strong>7pm</strong> onwards @{" "}
            <strong>The Cooper&apos;s Arms</strong>, 81 Tilehouse Street.
            <br />
            <strong>21 September</strong> & <strong>19 October 2022</strong>.
          </p>

          <p className={styles.description}>
            See{" "}
            <a href="https://twitter.com/hitchin_web">
              @hitchin_web on Twitter
            </a>{" "}
            for latest information.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
