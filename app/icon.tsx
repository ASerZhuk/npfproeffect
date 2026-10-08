import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default async function Icon() {
  const mark = await readFile(
    join(process.cwd(), 'public/images/brand/sap-avtomatika-mark-v2.png'),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={`data:image/png;base64,${mark.toString('base64')}`} width={62} height={63} alt="" />
      </div>
    ),
    size,
  );
}
