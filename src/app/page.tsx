import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  if (userId) {
    redirect("/projects");
  }

  return (
    <div className="container">
      <MaxWidthWrapper>
        <div className="mx-auto flex max-w-3xl flex-col py-8 md:items-center md:py-12 md:pb-8  lg:py-24 lg:pb-20">
          <h1 className="max-w-md text-3xl font-bold leading-tight tracking-tighter text-gray-900 md:max-w-full md:text-center md:text-6xl lg:leading-[1.1]">
            Stop Planning, Start Doing.{" "}
          </h1>
          <p className="mt-2 max-w-2xl text-lg text-muted-foreground md:mt-6 md:text-center md:text-xl">
            {/* <span className="text-primary">Auto-task</span> turns goals into
            actionable steps. */}
            Tired of spending hours planning instead of getting things done?{" "}
            Simply enter your goal, and{" "}
            <span className="text-primary">Auto-task</span> will automatically
            generate a clear and actionable to-do list for you.
          </p>
          <Link
            href="/projects"
            className={cn(buttonVariants(), "mt-6 font-bold")}
          >
            Create Project
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
