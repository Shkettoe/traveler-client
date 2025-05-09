import React from "react";
import ProfileForm from "./ProfileForm";
import { getProfile } from "./actions";

const Profile = async () => {
  const data = await getProfile();
  return (
    <div className="flex flex-col gap-2 w-full">
      <ProfileForm data={data} />
    </div>
  );
};

export default Profile;
