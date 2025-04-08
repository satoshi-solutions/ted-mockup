import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'TED-like Talks';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0c87ee',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: 48,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            marginBottom: 24,
          }}
        >
          TED-like Talks
        </div>
        <div
          style={{
            fontSize: 32,
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          Watch inspiring talks from thought leaders around the world
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 