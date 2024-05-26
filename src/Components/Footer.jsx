import { useState } from "react";
import { shorcut } from "../Constants";
import { footerLogo } from "../assets";
import { footerService } from "../Constants";

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSubMenu = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <footer className="bg-white text-[#666] border-t border-colorGray200">
      <div className="max-w-[1330px] mxAuto ">
        <nav className="w-full flex">
          <ul className="w-full flex justify-between flex-col">
            {shorcut.map((item, index) => (
              <li key={index} className="border-b border-colorGray200">
                <div
                  className="shortcut-field text-linkmd text-colorGray600 cursor-pointer "
                  onClick={() => toggleSubMenu(index)}
                >
                  {item.title}
                </div>
                <ul
                  className={`${
                    activeIndex === index ? "max-h-[461px]" : "max-h-0"
                  } overflow-hidden duration-500 ease-in-out flex flex-col `}
                >
                  {item.items.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="inline-block py-[15px] px-0 text-colorGray600 text-linksm cursor-pointer"
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="border-t border-colorGray200 pt-[15px] pb-[30px] px-0 justify-between flex items-center flex-col w-full max-[765px]:items-start ">
          <div className="flex items-center text-notemd max-[1200px]:order-1  ">
            <img
              src={footerLogo}
              alt=""
              className="w-[50px] object-contain mr-[10px]"
            />
            <p className="text-colorGray600 text-notemd ">
              Copyright © 2024 Micro-Star INT'L CO., LTD. All rights reserved.
            </p>
          </div>
          <ul className="flex flex-wrap justify-between items-center mb-[10px] max-[765px]:justify-start ">
            {footerService.map((service, index) => (
              <li
                className="mr-[30px] py-[0.5em] px-0 max-[765px]:order-2 "
                key={index}
              >
                {service.title}
              </li>
            ))}
            <li className="mr-[30px] py-[0.5em] px-0 max-[765px]:order-1 max-[765px]:w-full  ">
              <img
                src="https://www.msi.com/images/front/global.png"
                alt=""
                className="max-w-[16px] align-text-bottom mr-[5px] inline-block "
              />
              Philippines / English
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
