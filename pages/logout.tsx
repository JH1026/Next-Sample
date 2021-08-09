import React, { useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../src/utils/firebase';
import styles from '../styles/Home.module.css';

const Logout: FC = () => {
  const router = useRouter();

  useEffect(() => {
    auth.signOut()
      .then(() => {
        router.push('/');
      })
      .catch(() => {
        alert('予期せぬエラーが発生しました。');
      });
  }, []);

  return (
    <div className={styles.container}>
      <h2>ログアウトしました</h2>
    </div>
  );
};

export default Logout;
