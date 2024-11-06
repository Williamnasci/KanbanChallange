import {Task} from "@/components/ListTasks/types.ts";


export interface TaskProps {
    task: Task;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
