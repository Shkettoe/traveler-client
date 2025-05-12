import React from "react";
import TripForm from "./TripForm";
import { getDestinations } from "@/app/(app)/destinations/actions";
import { createTrip } from "../actions";

const CreateTrip = async () => {
  const destinations = await getDestinations();
  return <TripForm destinations={destinations} action={createTrip} />;
};

export default CreateTrip;
