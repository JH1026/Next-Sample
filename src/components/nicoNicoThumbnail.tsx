/* eslint-disable react/destructuring-assignment */
import React from 'react';

type Props = {
  memo: string,
  movieId: string,
};

const NicoNicoThumbnail = (props :Props) => {
  const { movieId, memo } = props;
  console.log(memo, memo === '');
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
        src={`https://ext.nicovideo.jp/thumb/${movieId}`}
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
        {memo === '' || memo === undefined ? 'メモなし' : memo}
      </div>
    </div>
  );
};

export default NicoNicoThumbnail;
