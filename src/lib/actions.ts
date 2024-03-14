"use server";

import { auth } from "@clerk/nextjs";
import prisma from "./db";
import { revalidatePath } from "next/cache";

export const createProject = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const { userId: clerkId } = auth();

  if (clerkId) {
    const user = await prisma.user.findFirst({
      where: {
        clerkId,
      },
    });
    console.log(user);
    if (user) {
      await prisma.project.create({
        data: {
          title: title,
          user: {
            connect: { id: user.id },
          },
        },
      });
      revalidatePath("/projects");
    }
  }
};

export const getProjectsByUser = async () => {
  const { userId: clerkId } = auth();
  if (clerkId) {
    const user = await prisma.user.findFirst({
      where: {
        clerkId,
      },
      include: {
        projects: true,
      },
    });
    const projects = user?.projects;
    return projects;
  }

  return [];
};

export const updateProject = async (id: string, formData: FormData) => {
  const { userId: clerkId } = auth();

  const title = formData.get("title") as string;
  if (clerkId) {
    const user = await prisma.user.findFirst({ where: { clerkId } });
    await prisma.user.update({
      where: { id: user?.id },
      data: {
        projects: {
          update: {
            where: { id },
            data: { title },
          },
        },
      },
    });
    revalidatePath("/projects");
  }
};

export const deleteProject = async (id: string) => {
  const { userId: clerkId } = auth();
  if (clerkId) {
    const user = await prisma.user.findFirst({ where: { clerkId } });
    await prisma.user.update({
      where: { id: user?.id },
      data: {
        projects: {
          delete: { id },
        },
      },
    });
  }
  revalidatePath("/projects");
};

export const deleteProjectAndRevalidate = async (id: string, path: string) => {
  const { userId: clerkId } = auth();
  if (clerkId) {
    const user = await prisma.user.findFirst({ where: { clerkId } });
    await prisma.user.update({
      where: { id: user?.id },
      data: {
        projects: {
          delete: { id },
        },
      },
    });
  }
  revalidatePath(path);
};

export const createTask = async (projectId: string, formData: FormData) => {
  const content = formData.get("content") as string;
  await prisma.task.create({
    data: {
      content,
      project: { connect: { id: projectId } },
    },
  });
  revalidatePath(`/projects/${projectId}`);
};

export const createManyTask = async (id: string, tasks: string[]) => {
  await prisma.$transaction(
    tasks.map((content) =>
      prisma.task.create({
        data: { content, project: { connect: { id } } },
      }),
    ),
  );
  revalidatePath(`/projects/${id}`);
};

export const updateTask = async (id: string, formData: FormData) => {
  const content = formData.get("content") as string;
  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
    },
  });
};

export const updateTaskStatus = async (id: string) => {
  const currentStatus = await prisma.task.findUnique({ where: { id } });
  const completed = !currentStatus?.completed;

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      completed,
    },
  });
};

export const deleteTask = async (id: string) => {
  await prisma.task.delete({
    where: {
      id,
    },
  });
};

export const getAllTaskByProjectId = async (projectId: string) => {
  const tasks = await prisma.task.findMany({
    where: { projectId },
  });
  return tasks;
};
