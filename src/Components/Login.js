import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import gpic from "./pic/google.png";

//Login Page

const Login = () => {
  const [error, setError] = useState("");

  const { login, setLoading, } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { googleLogin } = useContext(AuthContext);

  const google = new GoogleAuthProvider();

  const handleGoogle = () => {
    googleLogin(google)
      .then((result) => {
        const user = result.user;
        console.log(user);

        navigate(from, { replace: true });

        // const googleUser = {
        //   email: user.email,
        //   name: user.displayName,
        //   photoURL: user.photoURL,
        //   role: "seller",
        // };
        // console.log(user);
        // fetch(`https://buy-lap-server-afk247.vercel.app/user`, {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(googleUser),
        // })
        //   .then((res) => res.json())
        //   .then((newData) => {
        //     if (newData.acknowledged) alert("Google Login Succesful");
        //   })
        //   .catch((er) => console.error(er));
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
      .then((temp) => {
        const user = temp.user;
        console.log(user);
        navigate(from, { replace: true });
        form.reset();
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex text-center ">
      <form onSubmit={handleSubmit} className="mx-auto rounded-lg p-5 bg-gray-400 mt-16">
        <h2 className="text-3xl bold my-4 ">Login</h2>
        <p>Log In with Email and Password!</p>

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
       
        <button type="submit" className="mt-5 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">LOGIN</button>
        <p>{error}</p>
        <h4>OR</h4>
        <p>Log In with Google</p>
        <div>
          <Link onClick={handleGoogle}>
            <img className="h-[40px] m-auto hover:bg-white rounded-full hover:scale-125" src={gpic} alt="google_pic" />
          </Link>
        </div>
        <p className="small pb-lg-2">Didn't Registered? Go to <Link className="text-purple-900 bold underline" to="/register">Register Page</Link></p>
      </form>
    </div>
  );
};

export default Login;
