import {Task} from "@/components/ListTasks/types.ts";


export interface SectionProps {
    status: string;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    todos: Task[];
    inProgress: Task[];
    review: Task[];
    done: Task[];
    handleAddTask: (status: string) => void;
}

export interface ColumnHeaderProps {
    text: string;
    bg: string;
    count: number;
}
