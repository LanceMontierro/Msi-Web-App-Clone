import { useState, useEffect } from "react";
import { dropDownItem, dropDownContents } from "../Constants";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { MdKeyboardArrowRight } from "react-icons/md";
const Dropdown = ({ setDropdown, activeNav }) => {
  const [active, setActive] = useState(
    activeNav === "Products" ? "Laptop" : ""
  );
  const [filteredProductsContent, setFilteredProductsContent] = useState([]);
  const [filteredProductsType, setFilteredProductsType] = useState([]);
  const [filterServices, setFilterServices] = useState([]);
  const [defaultActive, setDefaultActive] = useState(getInitialDefaultActive);

  // useEffect to handle side effects
  useEffect(() => {
    handleNavClick(activeNav);
    handleItemClick(active);
    filterItems(defaultActive);
  }, []);

  // Default active for Other navTitle
  function getInitialDefaultActive() {
    const content = dropDownContents.find(
      (item) => item.navTitle === activeNav
    );

    return content?.serviceItems?.[0] || "";
  }

  // So this function will only be visible in Products when clicked
  const handleNavClick = (title) => {
    const filtered = dropDownItem.filter((item) => item.type === title);
    setFilteredProductsType(filtered);
  };

  const handleItemClick = (title) => {
    setActive(title);
    const filtered = title
      ? dropDownContents.filter((category) => category.type === title)
      : dropDownContents.filter((category) => category.navTitle === activeNav);
    setFilteredProductsContent(filtered);
  };

  const filterItems = (title) => {
    setDefaultActive(title);
    const filtered = dropDownContents.filter((item) => item.type === title);
    setFilterServices(filtered);
  };

  const closedDropdown = () => {
    setDropdown(false);
  };

  return (
    <div className="absolute top-full right-0 left-0 z-[999] text-colorGray800 bg-colorWhite min-[995px]:block hidden">
      <div className="bg-colorGray300">
        <div className="w-full mxAuto">
          <section>
            <div className="flex justify-between">
              {filteredProductsType.map((item, index) => {
                const Icon = item.item;
                return (
                  <div key={index} className="my-0 mx-[20px]">
                    <button
                      className="py-[15px] px-0 flex items-center flex-col relative text-colorGray600 hover:text-colorGray800 duration-300 ease-in-out"
                      onClick={() => handleItemClick(item.title)}
                    >
                      <Icon
                        className={`font-bold text-[14px] ${
                          item.title === active ? "text-colorGray800" : ""
                        } text-[48px]`}
                      />
                      <span
                        className={`font-bold text-[14px] ${
                          item.title === active ? "text-colorGray800" : ""
                        }`}
                      >
                        {item.title}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
      {/* Products Contents */}
      <div className="w-full relative py-0 my-0 mx-auto">
        <section className="flex shadow-product-Shadow">
          {filteredProductsContent.map((category, index) => (
            <div
              className={`${
                category.serviceItems ? "flex-titleGrow" : "flex-1"
              } pb-[30px] product-col`}
              key={index}
            >
              <div className="mt-[25px]">
                <span className="text-[12px] uppercase text-colorGray400">
                  {category.title}
                </span>
              </div>
              <div className="mt-5">
                {/* Checks if the item is an array if it is Render */}
                {category.items &&
                  category.items.map((item, idx) => (
                    <Link
                      key={idx}
                      className="block py-[10px] pr-[10px] text-colorGray500 font-bold hover:text-colorGray800 duration-300 ease-in-out "
                    >
                      {item}
                    </Link>
                  ))}
              </div>

              <section className="flex px-[25px]">
                <article className="flex-1">
                  {/* Rendering category service items */}
                  {category.serviceItems &&
                    category.serviceItems.map((items, i) => (
                      <Link
                        key={i}
                        className={`${
                          items.includes(defaultActive)
                            ? "text-colorBlack"
                            : "text-colorGray500"
                        } block py-[10px] pr-[10px]  font-bold hover:text-colorGray800 duration-300 ease-in-out`}
                        onClick={() => filterItems(items)}
                      >
                        {items}
                      </Link>
                    ))}
                </article>
                <article className="flex-titleGrow">
                  <div className="flex ml-[58px] ">
                    {filterServices.map((item, i) => (
                      <div
                        key={i}
                        className={`${
                          item.flexCol ? "px-[25px]" : "px-0"
                        } flex mr-[25px]`}
                      >
                        {/* if flexCol is true */}
                        {item.flexCol ? (
                          <>
                            <div className="mr-[90px]">
                              <Link className="max-w-[450px]">
                                <img src={item.serviceImg} />
                              </Link>
                              <h2 className="text-colorGray800 mt-[15px] font-bold text-[16px] max-w-[525px] ">
                                {item.context}
                              </h2>
                              <p className="mt-[5px] text-colorGray500 text-[14px] max-w-[525px] ">
                                {item.text}
                              </p>
                              <div className="inline-flex items-center mt-[15px] py-[5px] text-colorGray500 hover:border-b-0  border-b border-b-colorGray600  ">
                                <span className="text-[14px]">Learn more</span>
                                <MdKeyboardArrowRight className="text-[20px]" />
                              </div>
                            </div>
                            <div className="block">
                              {item.images &&
                                item.captions &&
                                item.images.map((img, j) => (
                                  <Link key={j} className="serviceImg">
                                    <figure className="w-[150px] text-center my-0 mx-auto">
                                      <img src={img} />

                                      <figcaption className="text-[14px]">
                                        {item.captions[j]}
                                      </figcaption>
                                    </figure>
                                  </Link>
                                ))}
                            </div>
                          </>
                        ) : (
                          // if the FlexCol is false render this
                          <>
                            <div className="mr-[45px]">
                              {/* IF THERE IS ITEM.TEXT RENDER THIS */}
                              {item.text ? (
                                <>
                                  <h2 className="text-colorGray800 mt-[15px] font-bold text-[16px] max-w-[525px] ">
                                    {item.context}
                                  </h2>
                                  <p className="mt-[5px] text-colorGray500 text-[14px] max-w-[525px] ">
                                    {item.text}
                                  </p>
                                </>
                              ) : (
                                <ul>
                                  <h2 className="text-colorGray500 mb-[15px] uppercase text-[12px]  ">
                                    {item.context}
                                  </h2>
                                  {item.tags.map((tag, i) => (
                                    <li key={i} className="tags">
                                      <p className="text-[14px] text-colorGray500 py-[5px] inline-block ">
                                        {tag}
                                      </p>
                                    </li>
                                  ))}
                                </ul>
                              )}
                              <div className="inline-flex items-center mt-[15px] py-[5px] text-colorGray500 hover:border-b-0 border-b border-b-colorGray600  ">
                                <span className="text-[14px]">Learn more</span>
                                <MdKeyboardArrowRight className="text-[20px]" />
                              </div>
                            </div>
                            <Link className="max-w-[450px]">
                              <img src={item.serviceImg} />
                            </Link>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </article>
              </section>

              {/* this is only visible to Products NavTitle */}
              {category.img && (
                <div className="mt-5 ">
                  <div className="w-[80%] my-0 mx-auto ">
                    <Tooltip
                      title={`Go to ${category.imgtitle}`}
                      slotProps={{
                        popper: {
                          modifiers: [
                            {
                              name: "offset",
                              options: {
                                offset: [0, -45],
                              },
                            },
                          ],
                        },
                      }}
                    >
                      <Link to={category.link} onClick={closedDropdown}>
                        <img
                          src={category.img}
                          className="w-full align-middle"
                          alt={category.imgtitle}
                        />
                      </Link>
                    </Tooltip>
                  </div>
                  <div className="text-center">
                    <p className="text-colorGray800 mt-[15px] font-bold text-[16px] ">
                      {category.imgtitle}
                    </p>
                    <p className="mt-[5px] text-colorGray500 text-[14px] ">
                      {category.imgtext}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Dropdown;
