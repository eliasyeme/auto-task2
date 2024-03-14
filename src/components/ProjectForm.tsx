"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createProject } from "@/lib/actions";
import { useRef } from "react";

const ProjectForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await createProject(formData);
    formRef.current?.reset();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      ref={formRef}
      className="flex flex-col gap-4 p-6"
    >
      <Input name="title" type="text" placeholder="Add project" />
      <Button
        variant="secondary"
        type="submit"
        className="font-bold text-secondary-foreground"
      >
        Add
      </Button>
    </form>
  );
};

export default ProjectForm;
