import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <form action="" className="flex flex-col gap-2">
        <input type="text" name="firstName" placeholder="John" />
        <input type="text" name="lastName" placeholder="Doe" />
        <input type="email" name="email" placeholder="john@doe.com" />
        <input type="password" name="password" placeholder="********" />
        <input type="password" name="confirmPassword" placeholder="********" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Register
        </button>
        <p>
          Already have an account?{" "}
          <Link href={"login"} className="text-blue-500">
            Log in here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
