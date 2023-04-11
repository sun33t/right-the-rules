import { ImageResponse } from 'next/server';

const size = {
  height: 32,
  width: 32,
};

export default function icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        ✍️
      </div>
    ),
    size
  );
}
