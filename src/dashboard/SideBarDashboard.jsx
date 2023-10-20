import React from "react";
import Chart from "../chart/Chart";

const SideBarDashboard = () => {
  return (
    <div className="flex flex-col py-12 px-10">
      <h2>Dashboard</h2>
      <div className="flex space-x-8">
        <div className="w-2/5 h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4 mt-5">
          <span>Employer 1</span>
          <li className="text-gray-500">Employer 1 Activity</li>
        </div>
        <div className="w-2/5 h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4 mt-5">
          <span>Employer 2</span>
          <li className="text-gray-500">Employer 2 Activity</li>
        </div>
      </div>

      <div className="flex space-x-8 p-10 w-4/5">
        <h2>Activity Tracker</h2>
        <Chart />
      </div>

      <div className="flex space-x-8">
        <div className="w-2/5 h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4 mt-5">
          <span>Employer 3</span>
          <li className="text-gray-500 mt-4">Employer 3 Activity</li>
        </div>
        <div className="w-2/5 h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4 mt-5">
          <span>Employer 4</span>
          <li className="text-gray-500 mt-4">Employer 4 Activity</li>
        </div>
      </div>
    </div>
  );
};

export default SideBarDashboard;
