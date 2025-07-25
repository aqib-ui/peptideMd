// src/app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // console.log("🔁 request ===>", req);
  const { message } = await req.json();
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4.1",
      messages: [{ role: "user", content: message }],
      max_tokens: 100,
    }),
  });

  // console.log("🔁 response ===>", response);

  const data = await response.json();
  // console.log("🔁 data ===>", data?.choices);
  const responseData = data?.choices;
  if (!responseData) {
    return NextResponse.json({
      result: "NOTHING FOUND",
    });
  }
  return NextResponse.json({
    result: data.choices[0].message.content ?? "NOTHING FOUND",
  });
}
