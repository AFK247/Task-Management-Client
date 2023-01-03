import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Comments = ({ handleSubmit, handleNotComplete, handleDelete, task }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/comment/${task?._id}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [task?._id]);


  return (
    <div className="flex flex-col md:flex-row bg-green-200 rounded-lg shadow-lg">

      <div class="lg:w-[20vw] md:w-[40vw] w-[80vw] p-6 bg-green-100 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <p class="italic  mb-3 font-normal text-gray-700 dark:text-gray-400">
          {task?.message}
        </p>

        <div className="flex justify-around">
          <button
            onClick={() => handleDelete(task?._id)}
            href="dsf"
            class="inline-flex items-center px-1 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Delete
          </button>

          <Link
            onClick={() => handleNotComplete(task?._id)}
            to={`/mytask`}
            class="inline-flex items-center ml-2 px-1 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Not Completed
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-4 rounded-lg p-2 bg-gray-400"
        >
          <textarea
            id="message"
            rows="2"
            name="message"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>

          <input
            name="comment_id"
            defaultValue={task?._id}
            className="hidden"
          ></input>

          <button
            type="submit"
            className="mt-1 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="lg:w-[20vw] p-6 md:w-[40vw] w-[80vw]">
        <h2 className="text-2xl">Comments</h2>
        {comments.map((comment) => (
          <li>{comment.userComment}</li>
        ))}
      </div>

    </div>
  );
};

export default Comments;
