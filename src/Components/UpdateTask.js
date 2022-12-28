import React from "react";
import { useParams } from "react-router-dom";

const UpdateTask = () => {
  const params = useParams();
  console.log(params.id);
  const id=params.id;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
    const image = form.image.value;

    // console.log(message, image);

    const task = {
      message,
      image,
    };
    console.log(task);

    fetch(`http://localhost:5000/updateTask/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((newData) => {
        if (newData.acknowledged) 
        alert("Product Updated Added");
        window.location.href = "/mytask";
      })
      .catch((er) => console.error(er));
  };


  return (
    <div className="w-1/2 mx-auto mt-6">
      <form
        onSubmit={handleUpdate}
        className="mx-auto rounded-lg p-5 bg-gray-400 mt-16"
      >
        <label
          for="message"
          class=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ></label>
        <textarea
          id="message"
          required
          rows="2"
          name="message"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type your updated task description"
        ></textarea>

        <div>
          <input
            className="rounded-lg mt-4"
            placeholder="Name"
            type="file"
            name="image"
          />
        </div>
        <button
          type="submit"
          className="mt-5 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
