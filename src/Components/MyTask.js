import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import TaskCard from "./TaskCard";

const MyTask = () => {
  const { user } = useContext(AuthContext);
  
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
        const res = await fetch(`https://task-server-lemon.vercel.app/mytask/${user?.email}`)
        const data = await res.json();
        return data;
    }
});

  const handleDelete = (id) => {
    fetch(`https://task-server-lemon.vercel.app/deleteTask/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((newData) => {
        if (newData.deletedCount > 0) {
          // window.location.href = window.location.href;
          refetch();
          // alert("suceessfully Deleted");
        }
      });
  };

  const handleComplete = (id) => {
   console.log("Inside handle complete");

      fetch(`https://task-server-lemon.vercel.app/addCompleted/${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({}),
      })
        .then((res) => res.json())
        .then((newData) => {
          if (newData.acknowledged){
              // window.location.href = window.location.href;
          } 
          
        })
        .catch((er) => console.error(er));


  };

  

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
