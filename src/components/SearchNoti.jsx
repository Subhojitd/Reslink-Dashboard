import React from "react";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
const SearchNoti = () => {
  return (
    <div className="w-full h-full">
      <div className="md:w-full h-[100px]  flex items-center justify-center md:justify-between">
        <div className="relative w-[50%] md:w-full pl-[70px] md:px-[50px]">
          <span className=" text-white absolute left-16 top-3 ">
            <SearchRoundedIcon />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-[150px] md:w-[340px] text-xs md:text-md h-[46px] bg-[#101215] text-white rounded-3xl pl-[50px] "
          />
        </div>
        <div className="mx-[20px] md:mx-[50px] flex justify-center items-center gap-[30px]">
          <Box sx={{ color: "action.active" }}>
            <Badge color="secondary" variant="dot">
              <NotificationsNoneRoundedIcon className="text-white" />
            </Badge>
          </Box>
          <button className="bg-[#3fa268] text-white rounded-3xl  h-[46px] w-[200px] px-2   ">
            <AddRoundedIcon /> Create New Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchNoti;
