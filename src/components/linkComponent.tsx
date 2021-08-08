/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

type Props = {
  title: string,
  url: string,
};

const LinkComponent = (prop :Props) => {
  const router = useRouter();

  const clickAction = (url: string) => {
    router.push({
      pathname: url,
    });
  };

  return (
    <button
      type="button"
      className={styles.mylistLink}
      onClick={() => clickAction(prop.url)}
    >
      <h2>{prop.title}</h2>
    </button>
  );
};

export default LinkComponent;
