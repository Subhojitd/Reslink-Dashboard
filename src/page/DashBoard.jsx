import React, { useState } from "react";
import LeftNavigation from "../components/LeftNavigation";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SearchNoti from "../components/SearchNoti";
import { activityData, recentActivities } from "../data/activitydata";

const DashBoard = () => {
  const [data] = useState(activityData);
  const [data2] = useState(recentActivities);

  return (
    <>
      <div className="w-full h-full bg-gradient-to-b from-[#23252d] via-[#263133] to-[#23252d] backdrop:blur-md flex text-white">
        {/* Left Navigation part */}
        <div className="hidden md:inline-flex md:w-[250px]">
          <LeftNavigation />
        </div>
        {/* Search and Notification part */}
        <div className="w-full flex flex-col">
          <div>
            <SearchNoti />
          </div>
          {/* Main section */}
          <div className="w-full p-[20px] flex flex-col md:p-[40px]">
            {/* Heading */}
            <div className="w-full h-[66px] text-white">
              <h1 className="text-3xl">Welcome Back, Jawwan</h1>
              <p className="mt-[6px] opacity-70">
                Track & Manage researchers and submissions.
              </p>
            </div>
            {/* cards */}
            <div className="w-full mt-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
              <div className="flex items-center justify-between p-[20px] h-[122px] border border-[#666b6e] rounded-lg">
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-3xl font-medium">07</h1>
                  <p>Active Projects</p>
                </div>
                <span className="pr-[10px] bg-[#3fa268] rounded-full p-2.5">
                  <PersonOutlinedIcon />
                </span>
              </div>
              <div className="flex items-center justify-between p-[20px] h-[122px] border border-[#666b6e] rounded-lg">
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-3xl font-medium">04</h1>
                  <p>Proposals</p>
                </div>
                <span className="pr-[10px] bg-[#3fa268] rounded-full p-2.5">
                  <HandshakeOutlinedIcon />
                </span>
              </div>
              <div className="flex items-center justify-between p-[20px] h-[122px] border border-[#666b6e] rounded-lg">
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-3xl font-medium">03</h1>
                  <p>Active Jobs</p>
                </div>
                <span className="pr-[10px] bg-[#3fa268] rounded-full p-2.5">
                  <WorkOutlineOutlinedIcon />
                </span>
              </div>
              <div className="flex items-center justify-between p-[20px] h-[122px] border border-[#666b6e] rounded-lg">
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-3xl font-medium">240</h1>
                  <p>Applications</p>
                </div>
                <span className="pr-[10px] bg-[#3fa268] rounded-full p-2.5">
                  <VisibilityOutlinedIcon />
                </span>
              </div>
            </div>
            {/* Activities DashBoard */}
            <div className="w-full mt-[20px] grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              <div className="w-full border border-[#666b6e] rounded-md">
                <div className="w-full h-[66px] text-white border-b border-[#666b6e] flex items-center justify-between px-[25px]">
                  <h1 className="text-2xl font-medium">Posted Projects</h1>
                  <p className="underline">See All</p>
                </div>
                <div className="w-full h-full px-4">
                  {data.map((ele) => {
                    const { id, pName, pstate, style } = ele;
                    return (
                      <div
                        key={id}
                        className="w-full h-[44px] bg-[#252c31] rounded-md my-2 flex items-center justify-between px-4 text-sm"
                      >
                        {pName}
                        <p className="w-[150px] flex items-center gap-[10px] px-[5px]">
                          <div className={style}>
                            <FiberManualRecordIcon />
                          </div>{" "}
                          <div className="">{pstate}</div>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* part two */}
              <div className="w-full border border-[#666b6e] rounded-md">
                <div className="w-full h-[66px] text-white border-b border-[#666b6e] flex items-center justify-between px-[25px]">
                  <h1 className="text-2xl font-medium">Recent Activities</h1>
                </div>
                <div className="w-full h-full px-4">
                  {data2.map((ele) => {
                    const { id, pName, pTime, style } = ele;
                    return (
                      <div
                        key={id}
                        className="w-full h-[44px] bg-[#252c31] rounded-md my-2 flex items-center justify-between px-4 text-sm"
                      >
                        <div className="flex items-center justify-center gap-3">
                          <div className={style}>
                            <FiberManualRecordIcon />
                          </div>{" "}
                          {pName}
                        </div>
                        <p className="w-[150px] flex items-center justify-end gap-[10px] px-[5px]">
                          {" "}
                          <div className="">{pTime}</div>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
