import { FaYoutube } from "react-icons/fa";
import { useState } from "react";

const TabFilters = ({
  filterTabs,
  filterItems,
  allTabItems,
  defaultActiveTab,
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const [mobileTab, setMobileTab] = useState(false);
  const [filteredItems, setFilteredItems] = useState(filterItems);

  const handleMobileTab = () => {
    setMobileTab(!mobileTab);
  };

  const handleFilter = (type) => {
    setActiveTab(type);
    const filtered =
      type === "All"
        ? filterItems
        : allTabItems.filter((item) => item.type === type);
    setFilteredItems(filtered);
    setMobileTab(false);
  };

  return (
    <>
      {/* TABS */}
      <div className="hidden min-[768px]:flex w-[80%] mt-[40px] mx-auto">
        {filterTabs.map((tab, index) => (
          <div className="flex-1 text-center " key={index}>
            <button
              className={`text-white w-full py-[20px] ${
                tab.title === activeTab ? "bg-red-500" : ""
              }`}
              onClick={() => handleFilter(tab.filtered)}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>
      {/* TAB Mobile */}
      <div className="min-[576px]:w-[50%] w-[80%] mt-[40px] mx-auto min-[768px]:hidden block bg-[#212121] border border-colorRed300 relative ">
        <button
          className="w-full text-white  py-[10px] text-textmd uppercase "
          onClick={handleMobileTab}
        >
          <span>All</span>
        </button>
        {mobileTab && (
          <div className="absolute top-full right-0 left-0 z-[100] bg-[#131210] text-center border border-colorRed300 ">
            {filterTabs.map((item, i) => (
              <div key={i}>
                <button
                  className={`text-white w-full py-[20px] ${
                    item.title === activeTab ? "bg-red-500" : ""
                  }`}
                  onClick={() => handleFilter(item.filtered)}
                >
                  {item.title}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Cards */}
      <article className="flex flex-wrap mt-[44px]">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="px-[5px] mt-[20px] relative flex flex-4 min-[768px]:flex-3 min-[992px]:flex-card2  "
          >
            <div className="w-full hover:text-colorRed300 duration-300 ease-in-out">
              <figure className="relative">
                <img src={item.item} className="w-full" />
                {/* Conditionally render FaYoutube for Videos */}
                {item.type === "Videos" && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "#FF0000",
                    }}
                  >
                    <FaYoutube size={50} />
                  </div>
                )}
              </figure>
              <div
                className="py-[10px] px-[15px] absolute right-0 left-0 bottom-0 cursor-pointer"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
              >
                <span className="text-[12px] opacity-[.5]">{item.date}</span>
                {item.title && (
                  <p className="font-bold text-titlesm line-clamp-2 max-[650px]:line-clamp-1">
                    {item.title}
                  </p>
                )}
                <p className="break-words line-clamp-1 text-titlexs">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </article>
    </>
  );
};

export default TabFilters;
