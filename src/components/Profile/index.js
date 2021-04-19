import React from "react";
import Appointment from "../Appointment";
import ECard from "../ECard";

const Profile = ({ setPage }) => {
  return (
    <>
      <Appointment setPage={setPage} />
      <ECard />
    </>
  );
};

export default Profile;
