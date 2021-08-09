/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Button,
} from '@material-ui/core';
import router from 'next/router';
import NicoNicoThumbnail from './niconicoThumbnail';

type Props = {
  memo: string,
  movieId: string,
};

const NicoNicoLink = (props :Props) => {
  const { movieId, memo } = props;

  return (
    <div
      style={{
        width: '312px',
        height: '250px',
        margin: '4px',
        float: 'left',
      }}
    >
      <NicoNicoThumbnail
        movieId={movieId}
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
      <Button
        variant="contained"
        color="primary"
        style={{
          width: '100%',
          marginTop: '2px',
          padding: '4px',
          display: 'block',
          flex: 'wrap',
        }}
        onClick={() => router.push(`/edit/${movieId}`)}
      >
        編集
      </Button>
    </div>
  );
};

export default NicoNicoLink;
