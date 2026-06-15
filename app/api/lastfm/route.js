export async function GET() {
  const apiKey = process.env.LASTFM_API_KEY;
  const username = process.env.LASTFM_USERNAME;

  if (!apiKey || !username) {
    return Response.json(null);
  }

  try {
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`;
    const res = await fetch(url, { next: { revalidate: 60 } });

    if (!res.ok) {
      return Response.json(null);
    }

    const data = await res.json();
    const tracks = data.recenttracks?.track || [];

    if (!Array.isArray(tracks) || tracks.length === 0) {
      return Response.json(null);
    }

    return Response.json(tracks[0]);
  } catch {
    return Response.json(null);
  }
}
