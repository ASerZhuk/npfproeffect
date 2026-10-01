import { NextResponse } from 'next/server';

// Заглушка приёма заявок: логирует и возвращает ok. Заменить на интеграцию (CRM / почта / Telegram).
export async function POST(request: Request) {
  let payload: Record<string, string> = {};
  try {
    const data = await request.formData();
    for (const [key, value] of data.entries()) {
      if (value instanceof File) {
        if (value.size > 0) payload[key] = `[file] ${value.name} (${value.size} B)`;
      } else {
        payload[key] = value;
      }
    }
  } catch {
    try {
      payload = await request.json();
    } catch {
      return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
    }
  }
  if (!payload.phone) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 });
  }
  console.log('[lead]', JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }));
  return NextResponse.json({ ok: true });
}
