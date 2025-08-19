export const runtime = "edge"
import { getRequestContext } from "@cloudflare/next-on-pages"
export async function POST(req: Request) {
  const { env } = getRequestContext()
  const bucket = (env as any).WALLPAPERS as R2Bucket
  const ct = req.headers.get("content-type") ?? "application/octet-stream"
  const key = `raw/${crypto.randomUUID()}`
  const body = await req.arrayBuffer()
  await bucket.put(key, body, { httpMetadata: { contentType: ct } })
  return Response.json({ key })
}
