import TaskItem from "./Task";
import { getAllTaskByProjectId } from "@/lib/actions";
import { ScrollArea } from "./ui/scroll-area";

const TodoList = async ({ id }: { id: string }) => {
  const tasks = await getAllTaskByProjectId(id);
  return (
    <ScrollArea className="h-full">
      <ul className="flex flex-col gap-y-2">
        {tasks?.map((task) => (
          <TaskItem projectId={id} task={task} key={task.id} />
        ))}
      </ul>
    </ScrollArea>
  );
};

export default TodoList;
