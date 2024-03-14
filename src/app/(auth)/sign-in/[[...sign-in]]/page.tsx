import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return <SignIn afterSignInUrl="/projects" afterSignUpUrl="/new-user" />;
};

export default Page;
