import { useDrop } from "react-dnd";

import ColumnHeader from "./ColumnHeader";

import {SectionProps} from "@/components/section/types.ts";
import Task from "@/components/task";

const Section: React.FC<SectionProps> = ({ status, tasks, setTasks, todos, inProgress, review, done, handleAddTask }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item: { id: string }) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    let text = "Todo";
    let bg = "bg-slate-500";
    let tasksToMap = todos;

    if (status === "inprogress") {
        text = "In Progress";
        bg = "bg-purple-500";
        tasksToMap = inProgress;
    } else if (status === "review") {
        text = "Review";
        bg = "bg-yellow-500";
        tasksToMap = review;
    } else if (status === "done") {
        text = "Done";
        bg = "bg-green-500";
        tasksToMap = done;
    }

    const addItemToSection = (id: string) => {
        setTasks((prev) => {
            const updatedTasks = prev
                .map((task) => {
                    if (task.id === id) {
                        return { ...task, status, order: tasksToMap.length + 1 };
                    } else if (task.status === status && task.order >= tasksToMap.length + 1) {
                        return { ...task, order: task.order + 1 };
                    }
                    return task;
                })
                .sort((a, b) => a.order - b.order);

            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            return updatedTasks;
        });
    };

    return (
        <div ref={drop} className={`w-64 ${isOver ? "bg-slate-200" : ""}`}>
            <ColumnHeader text={text} bg={bg} count={tasksToMap.length} />
            {tasksToMap.length > 0 &&
                tasksToMap.map((task) => (
                    <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
                ))}
            <button
                onClick={() => handleAddTask(status)}
                className="mt-4 bg-blue-500 text-white rounded px-4 py-2"
            >
                + Adicionar Tarefa
            </button>
        </div>
    );
};

export default Section;
