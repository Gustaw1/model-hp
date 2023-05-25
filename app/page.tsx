import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { AuthRequiredError } from "./lib/exceptions";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new AuthRequiredError();
  }

  return (
    <div>Logged in {session.user?.email}</div>
    // <div>Logged in </div>
  )
}
