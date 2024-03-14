import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { use } from "react";

const createNewUser = async () => {
  const { userId } = auth();

  if (userId) {
    await prisma.user.create({
      data: {
        clerkId: userId,
      },
    });

    const created = await prisma.user.findFirst({
      where: {
        clerkId: userId,
      },
    });

    if (created) {
      return redirect("/projects");
    }
  } else {
    return redirect("/sign-in");
  }
};

const Page = async () => {
  await createNewUser();
  return <div>loading...</div>;
};

export default Page;
