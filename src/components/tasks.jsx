import { useState } from "react";
import { HiMinusSm } from "react-icons/hi";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";


function Tasklist({ tasks, deleteTask, completedTasks, setCompletedTasks }) {

  const toggleTask = (index) => {
    setCompletedTasks((prev) => ({ ...prev, [index]: !prev[index] }));
  };


  return (
    <div className="w-[280px] text-[#c2b280] font-mono mx-auto p-1">
      <ul className="w-full">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="cursor-pointer flex justify-between h-fit w-full px-2 py-1 hover:bg-[#d1f2eb] transition duration-200"
            onClick={() => toggleTask(index)}
          >
            <span>
              {completedTasks[index] ? <MdOutlineCheckBox className=" inline " /> : <MdOutlineCheckBoxOutlineBlank className="inline" />} <span className={completedTasks[index]? " line-through decoration-amber-50" : ""}>{task}</span>
            </span>{" "}
            <button
              onClick={(e) => {e.stopPropagation(); deleteTask(index);}}
              className="text-yellow-500 text-lg"
            >
              {" "}
              -{" "}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasklist;
