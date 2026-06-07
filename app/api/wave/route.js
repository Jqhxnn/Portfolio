import { kv } from "@vercel/kv";

export async function POST() {
  const count = await kv.incr("wave_count");

  return Response.json({
    count,
  });
}