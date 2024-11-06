import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Task } from "@/components/ListTasks/types";
import ListTasks from "@/components/ListTasks";

export default function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || '[]') as Task[];
        if (storedTasks) setTasks(storedTasks);
    }, []);

    return (
        <DndProvider backend={HTML5Backend}>
            <Toaster />
            <div className="bg-slate-100 w-screen h-screen flex flex-col items-center pt-3 gap-16 pt-32">
                <ListTasks tasks={tasks} setTasks={setTasks} />
            </div>
        </DndProvider>
    );
}
