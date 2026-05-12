import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BodyAfterLogin from './BodyAfterLogin';
import SignUp from './SignUp';
import Body from './Body';
import Design from './Design';
import BodyAfterLogin from './BodyAfterLogin';

const GuestHeader = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const HandleLogin = () => {
    setIsLoggedIn(true);
    navigate('/bodyafterlogin');
  };
  const [showDesign, setShowDesign] = useState(false);
  return (
    <div className="flex bg-slate-900 h-24 shadow-2xl">
      <div className="w-64 pl-8 flex items-center ">
        <Link to="/Body">
          <img
            className="w-full h-auto"
            src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg"
          />
        </Link>
      </div>
      <div className="flex justify-between items-center pl-56">
        <div className="">
          <ul className="flex px-4 text-gray-100 ">
            <div
              className="relative"
              onMouseEnter={() => setShowDesign(true)}
              onMouseLeave={() => setShowDesign(false)}
            >
              <li className="px-4 hover:drop-shadow-[0_0_12px_white] cursor-pointer font-medium text-[18px]">
                Design
              </li>
              <div className="absolute ">{showDesign && <Design />}</div>
            </div>
            <li className="px-4 hover:drop-shadow-[0_0_12px_white] cursor-pointer font-medium text-[18px]">
              Product
            </li>
            <li className="px-4 hover:drop-shadow-[0_0_12px_white] cursor-pointer font-medium text-[18px]">
              Plan
            </li>
            <li className="px-4 hover:drop-shadow-[0_0_12px_white] cursor-pointer font-medium text-[18px]">
              Business
            </li>
            <li className="px-4 hover:drop-shadow-[0_0_12px_white] cursor-pointer font-medium text-[18px]">
              Education
            </li>
            <li className="px-4 hover:drop-shadow-[0_0_12px_white] cursor-pointer font-medium text-[18px]">
              Help
            </li>
          </ul>
        </div>
      </div>
      <div className="pl-36 flex items-center pr-5">
        <div
          className="flex justify-between items-center border-2 border-slate-700 w-44 rounded-3xl h-12
      "
        >
          <div className="pl-0.5">
            <button className="px-4 text-amber-50 bg-[#7f7d9c] h-10 rounded-3xl border-amber-50 hover:bg-gray-100 hover:text-black hover:cursor-pointer">
              <Link to="/SignUp">Sign Up</Link>
            </button>
          </div>
          <div className="">
            <button
              onClick={HandleLogin}
              className=" text-amber-50 pr-5 cursor-pointer"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GuestHeader;
