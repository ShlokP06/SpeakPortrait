import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: 'No prompt provided' }, { status: 400 });
    }

    const HF_API_KEY = process.env.HF_API_KEY;

    const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content: "Reply in only atmost two sentence. Use 20 words or fewer. Do not elaborate. Do not repeat. Do not add any extra information."
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        model: "Qwen/Qwen3-Coder-480B-A35B-Instruct:novita",
      }),
    });

    const result = await response.json();

    const output =
      result?.choices?.[0]?.message?.content || "No output received";

    return NextResponse.json({ output });
  } catch (err) {
    console.error("Shortgen API error:", err);
    return NextResponse.json(
      { error: "Failed to generate text" },
      { status: 500 }
    );
  }
}
