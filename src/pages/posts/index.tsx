import Head from "next/head";
import React from "react";

import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>20:00</time>
            <strong>React title</strong>
            <p>dasdjsakjdskaljdklasjdkljsdklasjlk</p>
          </a>
          <a href="#">
            <time>20:00</time>
            <strong>React title</strong>
            <p>dasdjsakjdskaljdklasjdkljsdklasjlk</p>
          </a>
        </div>
      </main>
    </>
  );
}
