import {React, useEffect, useState} from "react";
import logo from "../assets/logosuitmedia.png";
import {Link} from "react-router-dom";

const Header = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
    
          if (scrollPosition > 100) {
            setIsHeaderVisible(false);
          } else {
            setIsHeaderVisible(true);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <nav className={`fixed w-full z-50 bg-[#ff7300] transition-all ${isHeaderVisible ? 'bg-opacity-100' : 'bg-opacity-90'}`}>
      <div className="flex flex-wrap item-center justify-between py-6 px-[60px]">
        <div className="">
          <img src={logo} alt="" className="w-24" />
        </div>
        <div className="">
          <ul className="flex gap-6  ">
            <li className="hover:text-white">
              <Link to="">Work</Link>
            </li>
            <li className="hover:text-white">
              <Link to="" >About</Link>
            </li>
            <li className="hover:text-white">
              <Link to="">Services</Link>
            </li>
            <li className="hover:text-white">
              <Link to="">Ideas</Link>
            </li>
            <li className="hover:text-white">
              <Link to="">Careers</Link>
            </li>
            <li className="hover:text-white">
              <Link to="">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
