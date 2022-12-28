import React, { useContext } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "./AuthProvider";

//Registration
const Register = () => {

  const { register, userProfileUpdate, setLoading } = useContext(AuthContext);


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;

    const user = {
      email,
      name,
    };
    console.log(user);

    register(email, password)
      .then((temp) => {
        const userTemp = temp.user;
        console.log(userTemp);
        handleUserProfile(name);
        form.reset();

        // fetch(`https://buy-lap-server-afk247.vercel.app/user`, {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(user),
        // })
        //   .then((res) => res.json())
        //   .then((newData) => {
        //     if (newData.acknowledged){
        //         alert("Registration completed");
        //     } 

        //   })
        //   .catch((er) => console.error(er));
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  

  const handleUserProfile = (name) => {
    const profile = {
      displayName: name,
    };

    userProfileUpdate(profile)
      .then(() => {})
      .catch((e) => console.error(e));
  };

  return (
    <div className="flex text-center ">
      <form onSubmit={handleSubmit} className="mx-auto rounded-lg p-5 bg-gray-400 mt-16">
        <h2 className="text-3xl bold my-4 ">Register</h2>
        <p>Register with Name, Email and Password!</p>

        <div>
          <input className="rounded-lg mt-4" required placeholder="Name" type="text" name="name" />
        </div>

        <div>
          <input className="rounded-lg mt-4" required placeholder="Email" type="email" name="email" />
        </div>

        <div>
          <input
            required
            placeholder="Password"
            type="password"
            name="password"
            className="rounded-lg mt-3"
          />
        </div>
       
        <button type="submit" className="mt-5 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Register</button>
        
        <p className="small pb-lg-2">Didn't Registered? Go to <Link className="text-purple-900 bold underline" to="/Login">Login Page</Link></p>
      </form>
    </div>
  );
};

export default Register;
