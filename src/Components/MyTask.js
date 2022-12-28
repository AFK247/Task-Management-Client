import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import TaskCard from "./TaskCard";

const MyTask = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteTask/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((newData) => {
        if (newData.deletedCount > 0) {
          alert("suceessfully Deleted");
          window.location.href = window.location.href;
        }
      });
  };

  const handleComplete = (id) => {
   console.log("Inside handle complete");

      fetch(`http://localhost:5000/addCompleted/${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({}),
      })
        .then((res) => res.json())
        .then((newData) => {
          if (newData.acknowledged){
              
              window.location.href = window.location.href;
          } 

        })
        .catch((er) => console.error(er));


  };

  useEffect(() => {
    fetch(`http://localhost:5000/mytask/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [user?.email]);

  return (
    <div>
      <h1 className="text-3xl text-center mt-4">My Task</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-6 gap-y-12 p-6 bg-red-100 justify-items-center rounded-lg">
        {tasks.map((task) => (
          <TaskCard
            task={task}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
            key={task._id}
          ></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default MyTask;
