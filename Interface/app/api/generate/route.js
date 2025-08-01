import { NextRequest, NextResponse } from 'next/server';

export async function POST(req) {
  const formData = await req.formData();
  const ngrokUrl = process.env.NEXT_PUBLIC_API_URL + '/generate';

  const res = await fetch(ngrokUrl, {
    method: 'POST',
    body: formData,
    headers: {
      'ngrok-skip-browser-warning': 'false',
    },
  });


  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to generate video' }, { status: 500 });
  }

  const blob = await res.blob();
  const buffer = await blob.arrayBuffer();
  const base64 = Buffer.from(buffer).toString('base64');

  return NextResponse.json({
    video_url: `data:video/mp4;base64,${base64}`,
  });
}
