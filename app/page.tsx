import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";


export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (

      <div>No Session</div>
    );
  }

  return (
    // <div>Logged in {session.user?.email}</div>
    <div>Logged in xxx</div>
  )
}
