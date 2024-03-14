import { getProjectsByUser } from "@/lib/actions";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavLink from "./NavLink";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { MoreHorizontal } from "lucide-react";
import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";

const ProjectList = async () => {
  const projects = await getProjectsByUser();
  return (
    <MaxWidthWrapper>
      <div>
        {projects && projects.length > 0 ? (
          <ul className="flex flex-wrap gap-4">
            {projects.map((project) => (
              <li
                className="flex items-center gap-2 rounded-md border border-slate-300"
                key={project.id}
              >
                <NavLink
                  className="block px-8 py-4 hover:text-primary"
                  href={`/projects/${project.id}`}
                >
                  {project.title}
                </NavLink>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      aria-label="Edit task"
                      variant="link"
                      size="icon"
                      className="mr-4"
                    >
                      <MoreHorizontal />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="max-w-fit">
                    <div className="ml-auto flex items-center gap-2">
                      {/* Edit */}
                      <EditDialog project={project} />
                      {/* Delete */}
                      <DeleteDialog
                        project={project}
                        href={`/projects/${project.id}`}
                      />
                    </div>
                  </PopoverContent>
                </Popover>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-slate-500">No projects yet</p>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default ProjectList;
