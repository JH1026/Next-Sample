import React, { FC } from 'react';

import Head from 'next/head';
import LinkComponent from '../src/components/linkComponent';
import styles from '../styles/Home.module.css';
import db from '../src/utils/firebase-admin';

const List: FC = () => {
  const movieList = [
    {
      title: '料理動画',
      category: 'cook',
    },
    {
      title: '実況動画',
      category: 'commentary',
    },
    {
      title: 'RTA動画',
      category: 'rta',
    },
    {
      title: 'TAS動画',
      category: 'tas',
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>NicoNico Link Sample</title>
        </Head>

        <main className={styles.main}>
          <div className={styles.grid}>
            {movieList.map((item) => (
              <LinkComponent
                key={item.category}
                url={`/myList/${item.category}`}
                title={item.title}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const movies = [] as any;
  const ref = await db.collection('movies').get();

  ref.docs.forEach((doc: any) => {
    const data = { id: doc.id };
    movies.push(data);
  });

  return { props: { movies } };
}

export default List;
