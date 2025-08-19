export const runtime = "edge"
export default function Home() {
  return (
    <main style={{border:"1px solid #262626",borderRadius:8,padding:16}}>
      <h2>欢迎来到 Lumo Wall</h2>
      <p style={{opacity:.8}}>这是手机/平板直建的骨架。下一步会接登录、R2、微店。</p>
      <ul>
        <li><a href="/api/healthz" style={{textDecoration:"underline"}}>健康检查</a></li>
        <li><a href="/upload" style={{textDecoration:"underline"}}>本地上传测试页（演示）</a></li>
      </ul>
    </main>
  )
}
