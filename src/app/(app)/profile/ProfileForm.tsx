"use client";
import { User } from "@/types/api";
import React, { useActionState } from "react";
import { updateProfile } from "./actions";

const ProfileForm = ({ data }: { data: User }) => {
  const [state, action, pending] = useActionState(updateProfile, null);

  return (
    <form action={action} className="flex flex-col gap-2">
      <input type="hidden" name="id" defaultValue={data.id} />
      <p>Email</p> <input type="email" name="email" defaultValue={data.email} />
      {state?.errors?.email && (
        <p className="text-red-500">{state.errors.email[0]}</p>
      )}
      <p>First Name</p>{" "}
      <input type="text" name="firstName" defaultValue={data.firstName} />
      {state?.errors?.firstName && (
        <p className="text-red-500">{state.errors.firstName[0]}</p>
      )}
      <p>Last Name</p>{" "}
      <input type="text" name="lastName" defaultValue={data.lastName} />
      {state?.errors?.lastName && (
        <p className="text-red-500">{state.errors.lastName[0]}</p>
      )}
      <button
        disabled={pending}
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md my-8 disabled:opacity-30"
      >
        {pending ? "Saving..." : "Save"}
      </button>
      {state?.errors?.id && (
        <p className="text-red-500">{state.errors.id[0]}</p>
      )}
      {state?.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
};

export default ProfileForm;
