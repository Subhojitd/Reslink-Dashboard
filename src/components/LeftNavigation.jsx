import React from "react";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const LeftNavigation = () => {
  return (
    <div className=" w-[280px] h-full bg-gradient-to-b from-[#23252d] via-[#263133] to-[#23252d] backdrop:blur-md flex flex-col items-center justify-between text-white border-r border-[#666b6e]  ">
      <div className="flex flex-col items-start w-full">
        <h1 className="text-xl tracking-moreWider p-4 px-[35px]">RESLINK</h1>
        <div className="w-full h-[228px] px-[30px] flex flex-col items-center justify-evenly gap-[12px] ">
          <div className="w-full  flex gap-[10px] bg-[#101215] rounded-md py-4 px-2">
            <span>
              <BarChartOutlinedIcon />
            </span>
            Dashboard
          </div>
          <div className="w-full flex gap-[10px] px-2">
            <span>
              <LayersOutlinedIcon />
            </span>
            Projects
          </div>
          <div className="w-full flex  gap-[10px] px-2">
            <span>
              <GroupOutlinedIcon />
            </span>
            Staffing
          </div>
          <div className="w-full  flex  gap-[10px] px-2">
            <span>
              <MessageOutlinedIcon />
            </span>
            Messages
          </div>
        </div>
      </div>
      {/* Bottom  Part*/}
      <div className="w-full h-[200px] px-5">
        <div className="w-full  flex  gap-[10px] py-4  px-2">
          <span>
            <BarChartOutlinedIcon />
          </span>
          Support
        </div>
        <div className="w-full  flex  gap-[10px] py-4  px-2 border-b border-[#666b6e]">
          <span>
            <SettingsOutlinedIcon />
          </span>
          Settings
        </div>
        <div className="flex items-center justify-center gap-4 mt-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWzvEt7oehVQtzuM1BGaxEZd0HpE2KCT_g02PH-mDpHIRLssr1ywpwlKSlcl4nvt1O2Bg&usqp=CAU" alt="" className="w-[40px] h-[40px] rounded-full " />
            <div className="flex flex-col items-start">
                <h1>JAWAAN SRK</h1>
                <h1>jawaaan@srk.com</h1>
            </div>
            <div><LogoutOutlinedIcon/></div>
        </div>
      </div>
    </div>
  );
};

export default LeftNavigation;
