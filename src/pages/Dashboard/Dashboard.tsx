import React, { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../models";
import { RoutesWithNotFound } from "../../utilities";


export interface DashboardInterface {}

const Home = lazy(()=> import('./Home/Home'));

const Dashboard: React.FC<DashboardInterface> = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD}/>} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>} />
      <Route path={PrivateRoutes.HOME} element={<Home/>} />
   </RoutesWithNotFound>
  );
};

export default Dashboard;
