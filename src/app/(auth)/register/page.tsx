"use client";
import Link from "next/link";
import React, { useActionState } from "react";
import { register } from "./actions";

const Register = () => {
  const [state, action, pending] = useActionState(register, null);

  return (
    <div className="w-full max-w-md mx-auto">
      <form action={action} className="flex flex-col gap-2">
        <input
          type="text"
          name="firstName"
          placeholder="John"
          defaultValue={!state?.errors?.firstName ? state?.data.firstName : ""}
        />
        {state?.errors?.firstName && (
          <p className="text-red-500">{state?.errors.firstName}</p>
        )}
        <input
          type="text"
          name="lastName"
          placeholder="Doe"
          defaultValue={!state?.errors?.lastName ? state?.data.lastName : ""}
        />
        {state?.errors?.lastName && (
          <p className="text-red-500">{state?.errors.lastName}</p>
        )}
        <input
          type="email"
          name="email"
          placeholder="john@doe.com"
          defaultValue={!state?.errors?.email ? state?.data.email : ""}
        />
        {state?.errors?.email && (
          <p className="text-red-500">{state?.errors.email}</p>
        )}
        <input type="password" name="password" placeholder="********" />
        {state?.errors?.password && (
          <p className="text-red-500">{state?.errors.password}</p>
        )}
        <input type="password" name="confirmPassword" placeholder="********" />
        {state?.errors?.confirmPassword && (
          <p className="text-red-500">{state?.errors.confirmPassword}</p>
        )}
        <button
          disabled={pending}
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Register
        </button>
        {typeof state?.error === "string" && (
          <p className="text-red-500">{state.error}</p>
        )}
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
