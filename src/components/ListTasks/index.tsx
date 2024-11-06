import { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";
import { ListTasksProps, Task } from "./types";


import Header from "@/components/header";
import Section from "@/components/section";

const ListTasks: React.FC<ListTasksProps> = ({ tasks, setTasks }) => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || '[]') as Task[];
    const { control, reset } = useForm({
        defaultValues: { tasks: savedTasks },
    });

    const { append } = useFieldArray({
        control,
        name: "tasks",
    });

    const [todos, setTodos] = useState<Task[]>([]);
    const [inProgress, setInProgress] = useState<Task[]>([]);
    const [review, setReview] = useState<Task[]>([]);
    const [done, setDone] = useState<Task[]>([]);

    useEffect(() => {
        setTasks(savedTasks);
    }, [savedTasks, setTasks]);

    useEffect(() => {
        const fTodos = tasks.filter(task => task.status === "todo").sort((a, b) => a.order - b.order);
        const fInProgress = tasks.filter(task => task.status === "inprogress").sort((a, b) => a.order - b.order);
        const fReview = tasks.filter(task => task.status === "review").sort((a, b) => a.order - b.order);
        const fDone = tasks.filter(task => task.status === "done").sort((a, b) => a.order - b.order);

        setTodos(fTodos);
        setInProgress(fInProgress);
        setReview(fReview);
        setDone(fDone);
    }, [tasks]);

    const handleAddTask = (status: string) => {
        const newTask: Task = {
            id: Date.now().toString(),
            title: "",
            description: "",
            status,
            order: tasks.filter(task => task.status === status).length + 1,
        };

        append(newTask);
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        reset();
        toast.success("Nova tarefa adicionada");
    };

    const handleSaveChanges = () => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        toast.success("Alterações salvas com sucesso!");
    };

    return (
        <div className="w-full">
            <Header handleSaveChanges={handleSaveChanges} />
            <div className="flex gap-16 mt-4">
                {["todo", "inprogress", "review", "done"].map((status, index) => (
                    <Section
                        key={index}
                        status={status}
                        tasks={tasks}
                        setTasks={setTasks}
                        todos={todos}
                        inProgress={inProgress}
                        review={review}
                        done={done}
                        handleAddTask={handleAddTask}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListTasks;
