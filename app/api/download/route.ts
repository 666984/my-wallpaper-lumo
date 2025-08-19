export const runtime = "edge"
import { getRequestContext } from "@cloudflare/next-on-pages"
export async function GET(req: Request) {
  const key = new URL(req.url).searchParams.get("key")
  if (!key) return new Response("missing key", { status: 400 })
  const { env } = getRequestContext()
  const bucket = (env as any).WALLPAPERS as R2Bucket
  const obj = await bucket.get(key)
  if (!obj) return new Response("not found", { status: 404 })
  return new Response(obj.body, { headers: { "content-type": obj.httpMetadata?.contentType ?? "application/octet-stream" } })
}
