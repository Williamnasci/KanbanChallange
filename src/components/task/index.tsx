import { useDrag } from "react-dnd";
import toast from "react-hot-toast";
import {TaskProps} from "@/components/task/types.ts";


const Task: React.FC<TaskProps> = ({ task, tasks, setTasks }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: task.id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const handleEdit = (field: keyof Task, value: string) => {
        const updatedTasks = tasks.map((t) =>
            t.id === task.id ? { ...t, [field]: value } : t
        );
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    const handleRemoveTask = () => {
        const updatedTasks = tasks.filter((t) => t.id !== task.id);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
        toast.success("Tarefa removida com sucesso");
    };

    return (
        <div
            ref={drag}
            className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab ${
                isDragging ? "opacity-25" : "opacity-100"
            } bg-white`}
        >
            <input
                type="text"
                value={task.title}
                onChange={(e) => handleEdit("title", e.target.value)}
                placeholder="Título"
                className="block text-lg font-bold w-full"
            />
            <textarea
                value={task.description}
                onChange={(e) => handleEdit("description", e.target.value)}
                placeholder="Descrição"
                className="block text-gray-600 w-full"
            />
            <button
                onClick={handleRemoveTask}
                className="absolute top-1 right-1 px-2 bg-red-500 text-white text-sm rounded"
            >
                x
            </button>
        </div>
    );
};

export default Task;
