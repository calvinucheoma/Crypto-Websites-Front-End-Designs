import { getServerSession } from "next-auth";
import { authOptions } from "../libs/auth";

const getCurrentUser = async () => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return null;
    }

    // Fetch Current user from backend database
    // Example: const currentUser = await prisma.user.findUnique({
    //     where: {
    //         email: session.user.email
    //     }
    // });

    // if (!currentUser) {
    //     return null;
    // };

    // return currentUser;

    const currentUser = session?.user?.email;

    // console.log(currentUser);

    return currentUser;
  } catch (error) {
    return null;
  }
};

export default getCurrentUser;
