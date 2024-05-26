import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const Specs = ({ laptop, onClose, Top }) => {
  const { title, specs, tabProd, product } = laptop;
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (tabProd && tabProd.length > 0) {
      const interval = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % tabProd.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [tabProd]);

  const tabItem = tabProd ? tabProd[slideIndex] : product;

  const handleTabClicked = (prod) => {
    if (tabProd) {
      setSlideIndex(tabProd.indexOf(prod));
    }
  };

  return (
    <div>
      <article
        className={`bg-[#1a1a1a] text-white  ${
          Top ? "top-0 absolute left-0 right-0" : ""
        } text-center py-[40px] min-[996px]:pt-[60px] min-[996px]:pb-[100px] min-[996px]:text-left z-[999]`}
      >
        {Top && (
          <IoCloseOutline
            className="absolute top-[25px] right-[50px] text-[25px] cursor-pointer text-colorRed300 hover:text-red-800 duration-300 ease-in-out max-[570px]:right-[20px]"
            onClick={onClose}
          />
        )}
        <div className="w-full mxAuto min-[996px]:flex justify-between ">
          <figure className="min-[996px]:w-[50%]">
            <img src={tabItem} className="w-full" />
            <ul className="flex relative text-center justify-center w-full mt-[25px] left-auto  ">
              {tabProd &&
                tabProd.map((item, index) => (
                  <li
                    className={`${
                      tabItem === item ? "border border-[#1976d2]" : ""
                    } w-[50px] flex items-center h-[50px] bg-[#222222] rounded-sm mr-[12px] hover:bg-colorGray600 duration-300 ease-in-out`}
                    key={index}
                    onClick={() => handleTabClicked(item)}
                  >
                    <img src={item} />
                  </li>
                ))}
            </ul>
          </figure>
          <div className="flex flex-textbox flex-col">
            <div className="mt-[10px] pb-[10px]"></div>
            <div className="text-textsm pb-[15px]">
              <h2 className="text-titlelg font-bold pb-[10px] ">{title}</h2>
              <ul>
                {specs.map((item, index) => (
                  <li className="list-style text-left ml-[20px]" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex min-[996px]:justify-start min-[768px]:justify-center mt-[20px] max-[768px]:flex-col max-[768px]:w-full uppercase gap-3 ">
              <Button variant="outlined">Specifications</Button>
              <Button variant="outlined">Shop Now</Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Specs;
