"use client"

import { PinataClient } from "./libs/pinata/PinataClient";
import { ListFilesOptions } from "./libs/pinata/models/pinning/listFiles/query/ListFilesOptions";

import styles from "./page.module.css";

import { useEffect } from 'react';

export default function Home() {

  const test = async () => {
    const pinata = new PinataClient();
    const success = await pinata.testAuthentication();
    console.log(success);
  }

  const list = async () => {
    const pinata  = new PinataClient();
    const options = new ListFilesOptions();
    options.includeCount = true;
    const listedFiles = await pinata.listFiles(options);
    console.log(listedFiles);
  }

  useEffect(() => {

  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>

        <button onClick={test}>test</button>
        <button onClick={list}>list</button>

      </div>
    </main>
  );
}
