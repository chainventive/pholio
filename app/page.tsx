"use client"

import { PinataClient } from "./libs/pinata/PinataClient";
import { ListFilesOptions } from "./libs/pinata/models/pinning/listFiles/query/ListFilesOptions";

import styles from "./page.module.css";

import { useEffect, useState } from 'react';

export default function Home() {

  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const list = async () => {

    setImageUrls([]);
    setLoading(true);

    const pinata  = new PinataClient();

    const options = new ListFilesOptions();
    options.includeCount = true;

    const listedFiles = await pinata.listFiles(options);
    const urls = listedFiles.map(file => `${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/${file.ipfs_pin_hash}`);

    setImageUrls(urls);
    setLoading(false);
  }

  useEffect(() => {

  }, []);

  return (
    <main className={styles.main}>

      <div>
        <button onClick={list} style={{ padding: '1rem', fontSize: '1rem', width: '15rem' }}>refresh</button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '3rem' }}>

        {
          imageUrls.length === 0 && loading ? (

            <div>
              <p>loading ...</p>
            </div>

          ) : (

            imageUrls.map(url => <div key={ self.crypto.randomUUID() } >
                                    <img src={ url } 
                                         style={{ 
                                          margin: '1rem', 
                                          height: '25rem', 
                                          width: '25rem', 
                                          objectFit: 'cover' 
                                        }}>
                                    </img>
                                  </div>
                          )

          )
        }

      </div>
    </main>
  );
}
