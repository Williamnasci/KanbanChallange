import {ColumnHeaderProps} from "@/components/section/types.ts";


const ColumnHeader: React.FC<ColumnHeaderProps> = ({ text, bg, count }) => (
    <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
        {text}
        <div className="bg-slate-400 h-12 flex items-center justify-center text-white text-sm ml-auto px-4">
            {count}
        </div>
    </div>
);

export default ColumnHeader;
