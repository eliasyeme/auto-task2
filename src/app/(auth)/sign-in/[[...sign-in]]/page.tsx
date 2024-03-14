import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return <SignIn afterSignInUrl="/new-user" afterSignUpUrl="/new-user" />;
};

export default Page;
