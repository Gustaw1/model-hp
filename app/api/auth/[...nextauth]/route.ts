
import { authOptions } from "@/app/lib/auth";
import NextAuth from "next-auth";

// < next13
// export default NextAuth(authOptions);
// next13
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
