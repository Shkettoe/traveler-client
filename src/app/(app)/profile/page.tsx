import React from "react";
import ProfileForm from "./ProfileForm";
import { getProfile } from "./actions";
import Link from "next/link";
import { Plus } from "lucide-react";
import TripCard from "./trips/TripCard";

const Profile = async () => {
  const data = await getProfile();
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-col gap-2 m-4">
        <div className="flex flex-row gap-2">
          <ProfileForm data={data} />
        </div>
      </div>
      <div className="flex flex-col gap-2 m-4">
        <div className="flex flex-row gap-2 justify-end">
          <Link
            href={"/profile/trips/create"}
            className="bg-blue-500 text-white px-4 py-2 rounded-md flex my-8"
          >
            <Plus className="mr-2" />
            Add New Trip
          </Link>
        </div>
        <div className="flex md:flex-col justify-between">
          <h2 className="text-2xl font-bold">Trips</h2>
          <Link
            href="/profile/trips"
            className="hover:underline text-sm text-gray-500"
          >
            see all
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          {data.trips.slice(0, 4).map((trip) => (
            <TripCard key={trip.id} trip={trip} width="small" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
