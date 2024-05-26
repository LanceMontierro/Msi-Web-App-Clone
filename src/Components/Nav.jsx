import { Logo } from "../assets";
import { CiMenuFries, CiUser } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { mobileDropdownItems, SearchFilter, NavItems } from "../Constants";
import { MdKeyboardArrowRight } from "react-icons/md";
import Dropdown from "./Dropdown";
import Tooltip from "@mui/material/Tooltip";

const Nav = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [mobileMenuFilteredItems, setMobileMenuFilteredItems] = useState([]);

  useEffect(() => {
    const filteredResults = SearchFilter.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [search]);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    document.body.style.overflow = openMenu ? "" : "hidden";
  };

  const toggleSearch = () => {
    setOpenSearch(!openSearch);
    setDropdown(false);
  };

  const searchTerm = (e) => {
    setSearch(e.target.value);
  };

  // When searched item was click go to the link of the product
  const goToTheProductPage = () => {
    setOpenSearch(false);
    setSearch("");
  };

  const clearSearch = (e) => {
    e.preventDefault();
    setSearch("");
  };

  // Toggle Dropdown
  const toggleDropdown = (title) => {
    setDropdown(!dropdown);
    setActiveNav(title);
    let filter = mobileDropdownItems.filter((item) => item.type === title);
    setMobileMenuFilteredItems(filter);
  };

  // When Link was Clicked mobile
  const itemClicked = () => {
    setOpenMenu(false);
    document.body.style.overflow = "";
  };

  // deselect the activeNav to select another activeNav
  const deselectActiveNav = () => {
    setDropdown(false);
  };

  return (
    <>
      <header className="relative z-[1000]">
        <nav className=" shadow-inset-soft bg-colorWhite w-full ">
          <div className=" mxAuto flex items-center justify-between">
            <div className="hidden text-[25px] max-[995px]:block cursor-pointer ">
              {openMenu ? (
                <IoCloseOutline onClick={toggleMenu} />
              ) : (
                <CiMenuFries onClick={toggleMenu} />
              )}
            </div>
            {/* Left Container */}
            <div className="flex items-center">
              {/* Logo */}
              <Link to="/">
                <div className="block">
                  <img src={Logo} alt="" className="max-h-[65px] w-auto" />
                </div>
              </Link>
              {/* NavItems */}
              <div
                className={`links-space max-[995px]:responsive-menu ${
                  openMenu ? "left-0 bg-colorWhite" : "left-[-100%]  "
                } `}
              >
                <ul
                  className={`min-[995px]:flex min-[995px]:items-center min-[995px]:flex-row `}
                >
                  {NavItems.map((NavItem, index) => (
                    <li key={index}>
                      <Link
                        className="links text-colorGray600"
                        onClick={() => toggleDropdown(NavItem.NavTitle)}
                      >
                        {NavItem.NavTitle}
                      </Link>
                    </li>
                  ))}

                  {/* Mobile Menu Dropdown Contents */}
                  {dropdown && (
                    <section className="mobilesub py-2 bg-[#eee] w-full max-[995px]:block hidden">
                      <div className="w-full relative px-[25px] mx-auto">
                        <button
                          className="text-colorGray800 py-[10px] text-[19px] font-bold"
                          onClick={deselectActiveNav}
                        >
                          {activeNav}
                        </button>
                      </div>
                      <ul className="w-full mxAuto">
                        {mobileMenuFilteredItems.map((item, index) => {
                          const Icon = item.item;
                          return (
                            <Link
                              to={item.link}
                              key={index}
                              className="my-0 mx-auto py-0 w-full relative "
                              onClick={itemClicked}
                            >
                              <button className=" px-4 flex w-full items-center justify-between  relative text-colorGray600 hover:text-colorGray800 duration-300 ease-in-out max-[370px]:px-2">
                                <div className="flex items-center">
                                  {item.item && (
                                    <Icon className="text-[30px] align-middle mr-[4px]" />
                                  )}
                                  <span className=" w-full inline-block py-[25px] text-[18px] max-[400px]:text-[15px]  ">
                                    {item.title}
                                  </span>
                                </div>
                                {item.item && (
                                  <span>
                                    <MdKeyboardArrowRight className="text-[20px]" />
                                  </span>
                                )}
                              </button>
                            </Link>
                          );
                        })}
                      </ul>
                    </section>
                  )}
                  {/* Support link */}
                  <li>
                    <Link
                      to="/Support"
                      onClick={itemClicked}
                      className="links text-colorGray600"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Right Container */}
            <div className="relative flex items-center text-[20px] py-[25px] px-0 leading-none">
              <div>
                <Tooltip title="Login" arrow>
                  <Link to="/Login">
                    <button className="border-0 py-0 px-2 bg-none text-colorGray600 cursor-pointer ease-in-out duration-300 hover:text-colorGray400 ">
                      <CiUser className="text-[20px]" />
                    </button>
                  </Link>
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Search" arrow>
                  <button
                    className="border-0 py-0 px-2 bg-none text-colorGray600 cursor-pointer ease-in-out duration-300 hover:text-colorGray400 "
                    onClick={toggleSearch}
                  >
                    <GoSearch className="text-[20px]" />
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
        </nav>

        {/* Active Dropdown large screens */}
        {dropdown && (
          <Dropdown setDropdown={setDropdown} activeNav={activeNav} />
        )}

        {/* If The Open Search is Active */}
        {openSearch !== null && (
          <div
            className={`absolute right-0 left-0 z-[500] text-colorGray800 bg-colorWhite transition-top duration-300 ease-out  ${
              openSearch ? "top-[100%]" : "top-[-100%]"
            }`}
          >
            <form className={`${openSearch ? "p-[36px]" : "p-0"}`}>
              <div className="w-full mxAuto">
                <div className="w-[85%] my-0 mx-auto relative ">
                  <button className="absolute top-0 bottom-0 left-[10px] ">
                    <GoSearch />
                  </button>
                  <input
                    type="text"
                    value={search}
                    onChange={searchTerm}
                    className="w-full py-[10px] px-[30px] text-textmd border border-colorGray300 "
                    placeholder="Search Items..."
                  />
                  <button
                    className="absolute top-0 bottom-0 right-[10px]"
                    onClick={clearSearch}
                  >
                    <IoCloseOutline />
                  </button>
                  {search && (
                    <div className="absolute top-full right-0 left-0 max-h-[300px] overflow-auto bg-white border-x-colorGray300 border-b-colorGray300 py-[10px] px-[15px]">
                      <p className="font-bold text-textlg text-colorGray800">
                        {searchResults.length} results
                      </p>
                      {searchResults.map((item, i) => (
                        <Link
                          key={i}
                          to={item.link}
                          className="flex justify-between items-center px-[15px] py-[10px] duration-500 ease-in-out hover:bg-colorGray700 hover:text-white"
                          onClick={goToTheProductPage}
                        >
                          <h3 className="text-textmd">{item.title}</h3>
                          <img
                            src={item.product}
                            className="max-w-[120px] min-[520px]:block hidden"
                          />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        )}
      </header>
    </>
  );
};

export default Nav;
