import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const AddTask = () => {
    const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
    const image = form.image.value;

    console.log(message, image);

    const task = {
        email: user.email,
        message,
        image
      };

      fetch(`http://localhost:5000/addtask`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(task),
        })
          .then((res) => res.json())
          .then((newData) => {
            if (newData.acknowledged){
                alert("Task added successfully");
               
            } 

          })
          .catch((er) => console.error(er));


  };

  return (
    <div className="w-1/2 mx-auto mt-6">
      <form
        onSubmit={handleSubmit}
        className="mx-auto rounded-lg p-5 bg-gray-400 mt-16"
      >
        <label
          for="message"
          class=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Enter your task
        </label>
        <textarea
          id="message"
          rows="2"
          name="message"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>

        <div>
          <input
            className="rounded-lg mt-4"
            required
            placeholder="Name"
            type="file"
            name="image"
          />
        </div>
        <button type="submit" className="mt-5 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
      </form>
    </div>
  );
};

export default AddTask;
