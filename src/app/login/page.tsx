"use client";
import Link from "next/link";
import React from "react";

const Login = () => {
  const submittedAction = async (data) => {
    console.log("submitted", data);
  };
  return (
    <div className="w-full max-w-md mx-auto">
      <form action={submittedAction} className="flex flex-col gap-2">
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="********" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Log in
        </button>
        <p>
          Don&apos;t have an account?{" "}
          <Link href={"register"} className="text-blue-500">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
