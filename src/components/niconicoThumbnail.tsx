import React from 'react';

type Props = {
  movieId: string,
};

const NicoNicoThumbnail = (props :Props) => {
  const { movieId } = props;

  return (
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
  );
};

export default NicoNicoThumbnail;
