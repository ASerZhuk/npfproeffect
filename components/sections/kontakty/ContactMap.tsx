import { ArrowUpRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { COMPANY } from '@/content/site';

const YANDEX_MAPS_QUERY = encodeURIComponent(`Пенза, ${COMPANY.address.replace('г. Пенза, ', '')}`);
const YANDEX_MAPS_URL = `https://yandex.ru/maps/?text=${YANDEX_MAPS_QUERY}`;
// Координаты Каракозова, 35 из карточки адреса в Яндекс Картах.
const YANDEX_MAPS_POINT = '45.017355,53.211865';
const YANDEX_MAPS_EMBED_URL = `https://yandex.ru/map-widget/v1/?ll=${YANDEX_MAPS_POINT}&pt=${YANDEX_MAPS_POINT},pm2blm&z=16&l=map&lang=ru_RU`;

/** Встроенная Яндекс Карта с обычной меткой без поисковой карточки адреса. */
export function ContactMap() {
  return (
    <div className="relative flex min-h-72 flex-col overflow-hidden rounded-md border border-line bg-surface">
      <iframe
        src={YANDEX_MAPS_EMBED_URL}
        title={`Яндекс Карта: ${COMPANY.address}`}
        width="100%"
        height="440"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-80 w-full border-0 md:h-[440px]"
      />
      <div className="relative border-t border-line bg-surface p-card">
        <p className="mb-4 flex items-center justify-center gap-2 text-center font-display text-label font-semibold text-ink">
          <MapPin aria-hidden="true" className="size-5 shrink-0 text-accent" />
          {COMPANY.address}
        </p>
        <Button href={YANDEX_MAPS_URL} target="_blank" rel="noopener noreferrer" variant="secondary" fullWidth trailingIcon={ArrowUpRight}>
          Открыть в Яндекс Картах
        </Button>
      </div>
    </div>
  );
}
