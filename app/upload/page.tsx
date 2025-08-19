export const runtime = "edge"
export default function Upload() {
  async function onChange(e: any) {
    const f = e.target.files?.[0]; if (!f) return
    const buf = await f.arrayBuffer()
    const res = await fetch("/api/admin/upload", { method:"POST", body:buf, headers:{ "content-type": f.type || "application/octet-stream" } })
    const data = await res.json()
    alert("上传成功 key=" + data.key + "\n点击确定后开始下载测试")
    location.href = "/api/download?key=" + encodeURIComponent(data.key)
  }
  return (
    <main style={{border:"1px solid #262626",borderRadius:8,padding:16}}>
      <h2>上传测试</h2>
      <p style={{opacity:.8}}>选一张小图先试（后续会上大文件直传/签名）。</p>
      <input type="file" accept="image/*" onChange={onChange}/>
    </main>
  )
}
