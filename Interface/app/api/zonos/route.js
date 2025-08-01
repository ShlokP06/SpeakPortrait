import { NextResponse } from "next/server";
import { Client, handle_file } from "@gradio/client";

export async function POST(req) {
  try {
    let e1,e2,e3,e4,e5,e6,e7,e8;
    let unconditional_keys = [];
    const formData = await req.formData();
    const text = formData.get("text");
    const speakerAudio = formData.get("speaker_audio");
    const rawKeys = formData.get("unconditional_keys");
    unconditional_keys = rawKeys ? JSON.parse(rawKeys) : [];
    console.log(unconditional_keys);
    const emotional_keys = formData.get("emotionalKeys") || JSON.stringify({});
    if(emotional_keys){
      ({e1,e2,e3,e4,e5,e6,e7,e8} = JSON.parse(emotional_keys));
    }
    console.log(e1,e2,e3,e4,e5,e6,e7,e8);
    const client = await Client.connect("http://127.0.0.1:7860/");

    let speakerFile = null;
    if (speakerAudio && typeof speakerAudio.arrayBuffer === "function") {
      speakerFile = await handle_file(speakerAudio, speakerAudio.name);
    }
    
    const result = await client.predict("/generate_audio", {
      model_choice: "Zyphra/Zonos-v0.1-transformer",
      text: text,
      language: "en-us",
      speaker_audio: speakerFile,
      prefix_audio: null,
      e1: e1 ?? 0.0,
      e2: e2 ?? 0.0,
      e3: e3 ?? 0.0,
      e4: e4 ?? 0.0,
      e5: e5 ?? 0.0,
      e6: e6 ?? 0.0,
      e7: e7 ?? 0.0,
      e8: e8 ?? 0.0,
      vq_single: 0.78,
      fmax: 24000,
      pitch_std: 45,
      speaking_rate: 15,
      dnsmos_ovrl: 4,
      speaker_noised: false,
      cfg_scale: 2,  
      top_p: 0,
      top_k: 0,
      min_p: 0,
      linear: 0.5,
      confidence: 0.4,
      quadratic: 0,
      seed: 420,
      randomize_seed: true,
      unconditional_keys: unconditional_keys,
    });

    const audioUrl = result.data?.[0]?.url;
    // const audio = result.data;
    if (!audioUrl) throw new Error("No audio URL returned from Gradio model.");

    return NextResponse.json({ audioUrl });
    // return NextResponse({ audio });

  } catch (error) {
    console.error("TTS generation error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
