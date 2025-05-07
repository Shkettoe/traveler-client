"use client";
import Link from "next/link";
import React, { useActionState } from "react";
import { login } from "./actions";

const Login = () => {
  const [state, action, pending] = useActionState(login, null);

  return (
    <div className="w-full max-w-md mx-auto">
      <form action={action} className="flex flex-col gap-2">
        <input type="email" name="email" placeholder="Email" />
        {state?.errors?.email && (
          <p className="text-red-500">{state.errors.email[0]}</p>
        )}
        <input type="password" name="password" placeholder="********" />
        {state?.errors?.password && (
          <p className="text-red-500">{state.errors.password[0]}</p>
        )}
        <button
          disabled={pending}
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md disabled:opacity-35 disabled:cursor-not-allowed"
        >
          Log in
        </button>
        {typeof state?.error === "string" && (
          <p className="text-red-500">{state.error}</p>
        )}
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
