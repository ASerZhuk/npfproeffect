// Мягкая маска телефона: российский формат форматируется, международный (+380…, +49… и т.д.) не блокируется.
export function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (!digits) return '';
  const startsRu = raw.trim().startsWith('+7') || /^[78]/.test(digits);
  if (!startsRu && raw.trim().startsWith('+')) return raw;
  if (!startsRu) return raw;
  const d = (digits[0] === '8' || digits[0] === '7' ? digits.slice(1) : digits).slice(0, 10);
  let out = '+7';
  if (d.length > 0) out += ` (${d.slice(0, 3)}`;
  if (d.length >= 3) out += ')';
  if (d.length > 3) out += ` ${d.slice(3, 6)}`;
  if (d.length > 6) out += `-${d.slice(6, 8)}`;
  if (d.length > 8) out += `-${d.slice(8, 10)}`;
  return out;
}

export function isValidPhone(value: string): boolean {
  return value.replace(/\D/g, '').length >= 10;
}
