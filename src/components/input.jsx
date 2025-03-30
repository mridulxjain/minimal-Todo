import { useState } from "react";
import { IoIosAdd } from "react-icons/io";

function InputBox({ addTasks }) {

    const [task, setTask] = useState("")

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        addTasks(task);
        setTask("") ;
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter"){
            handleAddTask();
        };
    }

  return (
    <div className="w-fit mx-auto m-5 flex items-center gap-3">
      <input
        className="pl-2 font-mono text-[#c2b280] bg-transparent border-2 border-[#fffff0] px-3 py-2 outline-none placeholder-[#f7e7ce]"
        placeholder="Enter task"
        type="text"
        value={task}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <button 
        className=" text-[#fffff0]"
        onClick={handleAddTask}
      >
        <IoIosAdd className=" ml-2 bg-black text-xl" />
      </button>
    </div>
  );
}

export default InputBox;