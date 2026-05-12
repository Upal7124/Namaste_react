import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsLayoutSidebar } from 'react-icons/bs';
import { IoAddCircle, IoFolderOutline } from 'react-icons/io5';
import { IoMdHome, IoMdContact } from 'react-icons/io';
import { TbTemplate } from 'react-icons/tb';
import { RiFolderImageLine } from 'react-icons/ri';
import { PiSparkleFill } from 'react-icons/pi';
import { HiMiniEllipsisHorizontal } from 'react-icons/hi2';
import { IoNotificationsOutline } from 'react-icons/io5';
const UserHeader = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const HandleLogin = () => {
    setIsLoggedIn(false);
    navigate('/body');
  };
  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-slate-900 text-white shadow-lg">
      <div className="flex flex-col items-center gap-6 p-4">
        <BsLayoutSidebar className="text-2xl cursor-pointer hover:text-gray-300 " />
        <IoAddCircle className="text-4xl cursor-pointer hover:text-gray-300" />
      </div>
      <div className="h-80 overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-[#140424]">
        <div className="flex flex-col items-center py-4 hover:cursor-pointer">
          <IoMdHome className="text-2xl" />
          <span className="text-sm">Home</span>
        </div>
        <div className="flex flex-col items-center py-4 hover:cursor-pointer">
          <IoFolderOutline className="text-2xl" />
          <span className="text-sm">Projects</span>
        </div>
        <div className="flex flex-col items-center py-4 hover:cursor-pointer">
          <TbTemplate className="text-2xl" />
          <span className="text-sm">Templates</span>
        </div>
        <div className="flex flex-col items-center py-4 hover:cursor-pointer">
          <RiFolderImageLine className="text-2xl" />
          <span className="text-sm">Brand</span>
        </div>
        <div className="flex flex-col items-center py-4 hover:cursor-pointer">
          <PiSparkleFill className="text-2xl" />
          <span className="text-sm">Canva AI</span>
        </div>
        <div className="flex flex-col items-center py-4 hover:cursor-pointer">
          <HiMiniEllipsisHorizontal className="text-2xl" />
          <span className="text-sm">More</span>
        </div>
      </div>
      <div className="py-6 gap-6">
        <div className="flex flex-col items-center py-2">
          <IoNotificationsOutline className="text-2xl hover:cursor-pointer" />
        </div>
        <div className="flex flex-col items-center py-2 ">
          <button onClick={HandleLogin}>
            <IoMdContact className="text-3xl hover:cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserHeader;
