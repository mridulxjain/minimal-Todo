import { GoX } from "react-icons/go";

function ClearAll ({ setTasks , setCompletedTasks }) {

    const handleClearall = () => {
        setCompletedTasks({});
        setTasks([]);

    }

    return(
        <div className="w-fit mx-auto">
            <button onClick={handleClearall} className="text-red-500 text-sm gap-1 px-2 py-1">< GoX className="inline text-md pb-0.5" /> Clear All</button>
        </div>
    )
}

export default ClearAll;