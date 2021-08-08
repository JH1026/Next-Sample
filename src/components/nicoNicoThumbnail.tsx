/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useRouter } from 'next/router';

type Props = {
  title: string,
  movieId: string,
};

const NicoNicoThumbnail = (prop :Props) => {
  const router = useRouter();

  const clickAction = (url: string) => {
    router.push({
      pathname: url,
    });
  };

  return (
    <div
      style={{
        width: '312px',
        height: '260px',
        margin: '4px',
        float: 'left',
      }}
    >
      <iframe
        title="test"
        src={`https://ext.nicovideo.jp/thumb/${prop.movieId}`}
        scrolling="no"
        style={{
          width: '100%',
          height: '100%',
          border: 'solid 2px #44f',
        }}
        frameBorder="0"
      />
      <div
        style={{
          width: '100%',
          border: 'solid 2px #00f',
          background: '#bbf',
          color: '#fff',
          marginTop: '2px',
          padding: '4px',
          display: 'block',
          flex: 'wrap',
        }}
      >
        コメントなしコメントなしコメントなしコメントなしコメントなしコメントなし
      </div>
    </div>
  );
};

export default NicoNicoThumbnail;
