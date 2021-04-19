import React, { useState } from "react";
import Sidebar from "../../Sidebar";
import Header from "../../Header";
import Profile from "../../Profile";
import MyAppointments from "../../MyAppointments";
import { Redirect } from "react-router-dom";
import "./styles.scss";

const MainPage = ({ isLogged, onSetIsLogged }) => {
  const [page, setPage] = useState(0);

  if (!isLogged) {
    return <Redirect to="join" />;
  }

  return (
    <>
      <Sidebar />
      <Header onSetIsLogged={onSetIsLogged} />
      <div className="main-page__content">
        {page === 0 ? (
          <Profile setPage={setPage} />
        ) : (
          <MyAppointments setPage={setPage} />
        )}
      </div>
    </>
  );
};

export default MainPage;
