"use client";
import { deleteTask, updateTaskStatus } from "@/lib/actions";
import { Task } from "@prisma/client";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import clsx from "clsx";
import EditTask from "./EditTask";

const TaskItem = ({ task, projectId }: { task: Task; projectId: string }) => {
  return (
    <li className="flex items-start gap-4">
      <Checkbox
        className={clsx("mt-2", task.completed && "opacity-50")}
        onClick={async () => await updateTaskStatus(task.id, projectId)}
        defaultChecked={task.completed}
        id={`${task.id}`}
      />
      <div className="h-fit w-full">{task.content}</div>
      <div className="ml-auto flex items-center gap-2">
        <EditTask task={task} />
        <Button
          aria-label="Delete task"
          onClick={async () => await deleteTask(task.id, projectId)}
          variant="link"
          size="icon"
        >
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    </li>
  );
};

export default TaskItem;
