import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return <SignUp afterSignUpUrl="/new-user" />;
};

export default Page;
