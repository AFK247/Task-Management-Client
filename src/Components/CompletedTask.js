import { useQuery } from "@tanstack/react-query";
import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Comments from "./Comments";

const CompletedTask = () => {
  const { user } = useContext(AuthContext);

  const { data: tasks = [], refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
        const res = await fetch(`http://localhost:5000/completed/${user?.email}`)
        const data = await res.json();
        return data;
    }
});

  

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteCompleted/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((newData) => {
        if (newData.deletedCount > 0) {
          refetch();
        }
      });
  };

  const handleNotComplete = (id) => {
    console.log("Inside handle Not complete");

    fetch(`http://localhost:5000/addtasktoCompleted/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((newData) => {
        if (newData.acknowledged) {
          //    alert("Task added to my task");
          // window.location.href = window.location.href;
        }
      })
      .catch((er) => console.error(er));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userComment = form.message.value;
    const comment_id = form.comment_id.value;

    const comment = {
      email: user.email,
      userComment,
      comment_id,
    };
    console.log(comment);

    fetch(`http://localhost:5000/comment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((newData) => {
        if (newData.acknowledged) {
          window.location.reload(false);
          alert("Comment added successfully");
        
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      <h1 className="text-3xl text-center mt-4">Completed Task</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2  m-6 gap-y-12 p-6 bg-red-100 justify-items-center rounded-lg">
        {tasks.map((task) => (
          <Comments
            key={task._id}
            task={task}
            handleSubmit={handleSubmit}
            handleNotComplete={handleNotComplete}
            handleDelete={handleDelete}
          ></Comments>
        ))}
      </div>
    </div>
  );
};

export default CompletedTask;
