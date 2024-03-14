import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex w-full flex-col items-center border-b border-b-slate-100 p-4  md:flex-row">
      <Link href="/">
        <h1 className="text-2xl font-bold text-blue-500">Auto-task</h1>
      </Link>
      <div className="ml-auto flex items-center">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Button variant="ghost" className="text-blue-900">
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedOut>
          <span className="h-6 w-px bg-slate-200" />
          <Link
            href="/sign-up"
            className={buttonVariants({
              variant: "ghost",
              className: "text-blue-900",
            })}
          >
            Create account
          </Link>
        </SignedOut>
      </div>
    </div>
  );
};

export default NavBar;
