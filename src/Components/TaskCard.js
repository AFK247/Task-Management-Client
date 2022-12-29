import React from "react";
import { Link } from "react-router-dom";

const TaskCard = ({ task,handleDelete,handleComplete }) => {
  const { _id,message, email } = task;
  return (
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <p href="sd">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {email}
        </h5>
      </p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{message}</p>
      <div className="flex justify-around">
      <Link
        to={`/update/${_id}`}
        class="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Update
      </Link>

      <button onClick={()=>handleDelete(_id)}
        href="dsf"
        class="inline-flex items-center ml-1 px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Delete
      </button>

      <Link onClick={()=>handleComplete(_id)}
        to={`/completed`}
        class="inline-flex items-center ml-1 px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
    Completed
      </Link>
      </div>
      

    </div>
  );
};

export default TaskCard;
