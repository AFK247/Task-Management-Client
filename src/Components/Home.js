import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import "./style.scss"

const Home = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      const form = event.target;
      const message = form.value;

      const task = {
        email: user.email,
        message,
      };

      fetch(`https://task-server-lemon.vercel.app/addtask`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(task),
      })
        .then((res) => res.json())
        .then((newData) => {
          if (newData.acknowledged) {
            alert("Task added successfully");
            form.value = "";
          }
        })
        .catch((er) => console.error(er));
    }
  };

  return (
    <div>
      <div className="lg:w-1/2 md:w-2/3 w-full mx-auto mt-6">
        <form className="mx-auto rounded-lg p-5 shadow-lg shadow-purple-500 mt-16">
          <label
            for="message"
            class=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Today's Task
          </label>

          {user?.email&&<textarea
            onKeyUp={handleSubmit}
            id="message"
            rows="2"
            name="message"
            class="block p-2.5 w-full text-sm text-gray-900 bg-red-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your task"
          ></textarea>}

{!user?.email && <h2 className="text-red-400 text-2xl m-4">LOGIN to Enter</h2>}

          <h2 className="text-2xl italic">Press Enter</h2>
        </form>
      </div>

      <div>
        <h1 className="text-3xl text-center mt-8">Top Task of the day</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-6 gap-y-12 p-6 bg-red-100 justify-items-center rounded-lg">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              I have to buy a car then I will go to market to buy a shirt.Dont
              forget to pack your backpack.
            </p>
            <div className="flex justify-around">
              <Link
                to="/mytask"
                class="button-design inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Details
              </Link>
            </div>
          </div>

          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              I have to buy a car then I will go to market to buy a shirt.Dont
              forget to pack your backpack.
            </p>
            <div className="flex justify-around">
              <Link
                to="/mytask"
                class="button-design inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Details
              </Link>
            </div>
          </div>

          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              I have to buy a car then I will go to market to buy a shirt.Dont
              forget to pack your backpack.
            </p>
            <div className="flex justify-around">
              <Link
                to="/mytask"
                class="button-design inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
