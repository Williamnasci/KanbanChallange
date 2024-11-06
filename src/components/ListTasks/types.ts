export interface Task {
    id: string;
    title: string;
    description: string;
    status: string;
    order: number;
}

export interface ListTasksProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
