import React from "react";
import { getMyTrips } from "./actions";
import TripCard from "./TripCard";
import LoadMore from "./LoadMore";

const Trips = async ({
  searchParams,
}: {
  searchParams: Promise<{
    page: string;
    limit: string;
  }>;
}) => {
  const { page, limit } = await searchParams;
  const pageInt = page ? parseInt(page) : 0;
  const limitInt = limit ? parseInt(limit) : 3;
  const trips = await getMyTrips(pageInt, limitInt);

  if ("error" in trips) return <div>Couldn&apos;t get trips</div>;

  return (
    <div className="w-full flex flex-col">
      <h1 className="text-2xl font-bold">My Trips</h1>
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} width="big" />
        ))}
      </div>
      {trips.length >= limitInt && <LoadMore limitInt={limitInt} />}
    </div>
  );
};

export default Trips;
