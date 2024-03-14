import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectForm from "@/components/ProjectForm";
import ProjectList from "@/components/ProjectList";

const Page = () => {
  return (
    <MaxWidthWrapper>
      <ProjectForm />
      <ProjectList />
    </MaxWidthWrapper>
  );
};

export default Page;
