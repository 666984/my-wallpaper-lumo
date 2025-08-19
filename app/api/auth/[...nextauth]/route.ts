export const runtime = "edge"
import NextAuth from "next-auth"
const handler = NextAuth({ providers: [], session: { strategy: "jwt" } })
export { handler as GET, handler as POST }
