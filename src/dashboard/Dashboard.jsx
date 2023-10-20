import React from "react";
import NavigationBar from "../navigation/NavigationBar";
import SideBarDashboard from "./SideBarDashboard";

const Dashboard = () => {
  return (
    <>
      <div className="w-full flex">
        {/* Navigation Bar */}
        <NavigationBar />
        {/* Main Components */}
        <main className="grow">
          <SideBarDashboard />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
