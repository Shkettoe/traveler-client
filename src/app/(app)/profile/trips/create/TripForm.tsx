"use client";
import {
  CreateTripDto,
  Destination,
  Expense,
  ExpenseCategoryEnum,
  Trip,
  UpdateTripDto,
} from "@/types/api";
import React from "react";
import ExpenseForm from "./ExpenseForm";
import { useForm } from "react-hook-form";
import { tripSchema, TripSchema } from "@/lib/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

const TripForm = ({
  destinations,
  trip,
  action,
}: {
  destinations: Destination[];
  trip?: Trip;
  action:
    | ((data: CreateTripDto) => Promise<{ error?: string }>)
    | ((
        data: UpdateTripDto & { expenses: Expense[] },
        trip: Trip
      ) => Promise<{ error?: string }>);
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
    setValue,
  } = useForm<TripSchema>({
    resolver: zodResolver(tripSchema),
    mode: "onBlur",
    defaultValues: {
      title: trip?.title,
      startDate: trip?.startDate
        ? new Date(trip.startDate).toISOString().split("T")[0]
        : new Date("01.01.2025").toISOString().split("T")[0],
      endDate: trip?.endDate
        ? new Date(trip.endDate).toISOString().split("T")[0]
        : new Date("02.01.2025").toISOString().split("T")[0],
      destinations: trip?.destinations?.map((dest) => dest.id.toString()),
      expenses: trip?.expenses || [],
    },
  });

  const expenses = watch("expenses");

  const addExpense = () => {
    setValue("expenses", [
      ...(expenses || []),
      {
        amount: 0,
        description: "",
        category: ExpenseCategoryEnum.Food,
      },
    ]);
  };

  const removeExpense = async (index: number) => {
    setValue(
      "expenses",
      expenses?.filter((_, i) => i !== index)
    );
  };

  const onSubmit = handleSubmit(async (data) => {
    const result = await action(
      {
        ...data,
        destinations: data.destinations?.map(Number),
        expenses: data.expenses as Expense[],
      },
      trip as Trip
    );
    if (result?.error) setError("root", { message: result.error });
  });

  return (
    <div className="w-full">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" {...register("title")} />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="startDate">Start Date</label>
          <input type="date" id="startDate" {...register("startDate")} />
          {errors.startDate && (
            <p className="text-red-500">{errors.startDate.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="endDate">End Date</label>
          <input type="date" id="endDate" {...register("endDate")} />
          {errors.endDate && (
            <p className="text-red-500">{errors.endDate.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="destinations">Destinations</label>
          <select
            id="destinations"
            multiple={true}
            className="border-1 border-gray-400 rounded-2xl p-3"
            {...register("destinations")}
          >
            {destinations.map((dest) => (
              <option key={dest.id} value={dest.id} className="p-2">
                {dest.name}, {dest.country}
              </option>
            ))}
          </select>
        </div>
        {errors.destinations && (
          <p className="text-red-500">{errors.destinations.message}</p>
        )}
        <ExpenseForm
          addExpense={addExpense}
          removeExpense={removeExpense}
          errors={errors}
          expenses={expenses || []}
          register={register}
        />
        {errors.root && <p className="text-red-500">{errors.root.message}</p>}
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            {trip ? "Update Trip" : "Create Trip"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TripForm;
