import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'НПФ ПроЭффект — автоматизация производств и модернизация оборудования под ключ';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Общая OG-картинка сайта: бренд-синий фон, логотип-текст, оффер. Шрифт Manrope из public/fonts. */
export default async function OgImage() {
  const [bold, regular] = await Promise.all([
    readFile(join(process.cwd(), 'public/fonts/manrope-bold.ttf')),
    readFile(join(process.cwd(), 'public/fonts/manrope-regular.ttf')),
  ]);
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72, background: '#102339', color: '#ffffff', fontFamily: 'Manrope' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 72, height: 72, borderRadius: 14, background: '#295AA6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, fontWeight: 700 }}>√</div>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: 1 }}>НПФ ПроЭффект</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 1000 }}>Автоматизация производств и модернизация оборудования под ключ</div>
          <div style={{ fontSize: 30, color: '#BFE2F8' }}>АСУ ТП · энергоучёт · техзрение · станки и прессы · стенды · РЭА и РТК</div>
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#c7d0dc' }}>Пенза · работаем по всей России · 30+ внедрённых объектов</div>
      </div>
    ),
    { ...size, fonts: [{ name: 'Manrope', data: bold, weight: 700 }, { name: 'Manrope', data: regular, weight: 400 }] },
  );
}
