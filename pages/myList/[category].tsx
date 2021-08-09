/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect, FC } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';
import { Button } from '@material-ui/core';
import NicoNicoThumbnail from '../../src/components/nicoNicoThumbnail';
import styles from '../../styles/Home.module.css';
import db from '../../src/utils/firebase-admin';

type Props = {
  movies: string[],
  category: string,
};

const MovieList: FC<Props> = (data) => {
  const [displayTitle, setTitle] = useState<string>('   ');
  const router = useRouter();
  const { movies, category } = data;

  useEffect(() => {
    if (category === 'vocaloid') {
      setTitle('ボカロ実況');
    } else if (category === 'commentary') {
      setTitle('実況');
    } else if (category === 'tas') {
      setTitle('TAS');
    } else if (category === 'rta') {
      setTitle('RTA');
    } else {
      router.push('/');
    }
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>マイリスト</title>
        </Head>

        <main className={styles.grid}>

          <div className={styles.centerContents}>
            <h1>
              {`保存した${displayTitle}動画リンク一覧`}
            </h1>
          </div>
          {movies.length === 0
            ? <h2>保存されたリンクはありません</h2>
            : movies.map((item: any) => (
              <NicoNicoThumbnail
                key={item.movieId}
                memo={item.memo}
                movieId={item.movieId}
              />
            ))}
        </main>
      </div>
      <div className={styles.backButtonArea}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.back()}
        >
          戻る
        </Button>
      </div>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { category } = context.query;

  const movies = [] as any;
  const list = await db.collection('movies')
    .where('category', '==', category)
    .get();

  list.docs.forEach((doc: any) => {
    movies.push(doc.data());
  });

  return { props: { movies, category } };
}

export default MovieList;
