export const metadata = { title: "Lumo Wall", description: "Serverless 基线" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body style={{margin:0,background:"#0a0a0a",color:"#e5e5e5",fontFamily:"-apple-system,Segoe UI,Roboto"}}>
        <div style={{maxWidth:880,margin:"0 auto",padding:16}}>
          <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0"}}>
            <b>Lumo Wall</b>
            <nav style={{opacity:.8}}>
              <a href="/" style={{marginRight:16,color:"inherit"}}>首页</a>
              <a href="/me" style={{color:"inherit"}}>我的</a>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
