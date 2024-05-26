import { Footer, Nav, Specs } from "../Components";
import { Link } from "react-router-dom";
import { windowsLogo } from "../assets";
import { useState, useMemo, useEffect } from "react";
import { GrSearchAdvanced, GrPowerReset } from "react-icons/gr";
import { Pagination } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { scrollTotop } from "../utils";

const Products = ({ allProducts, list, sideFilterList, title, Filter }) => {
  const [activeFilter, setActiveFilter] = useState(Filter);
  const [sortOption, setSortOption] = useState("Popularity");
  const [mobileFilter, setMobileFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Filter the Products by the ActiveFilter and Sortoptions
  const filteredProducts = useMemo(() => {
    let productToShow = [...allProducts];

    productToShow = activeFilter
      ? productToShow.filter(
          (laptop) =>
            laptop.type.includes(activeFilter) ||
            (laptop.graphics && laptop.graphics.includes(activeFilter)) ||
            laptop.processor === activeFilter
        )
      : productToShow;

    // Apply sorting based on sort option
    productToShow =
      sortOption === "Popularity"
        ? productToShow
        : productToShow.sort((a, b) => a.title.localeCompare(b.title));

    return productToShow;
  }, [allProducts, activeFilter, sortOption]);

  useEffect(() => {
    setActiveFilter(Filter);
    setCurrentPage(1);
    setSelectedProduct(null);
  }, [Filter, title]);

  // Change page
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // handle the sortoption change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Select FilterItems
  const handleFilterChange = (title) => {
    setActiveFilter(title);
    setMobileFilter(false);
  };

  // reset FilteredItems
  const resetFiltered = () => {
    setActiveFilter("");
    setSortOption("Popularity");
    setCurrentPage(1);
    setMobileFilter(false);
  };

  const handleMobileFilter = () => {
    setMobileFilter(!mobileFilter);
  };

  const handleProductClicked = (product) => {
    setSelectedProduct(product);
    scrollTotop();
  };

  const handleCloseSpecs = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Nav />
      <main className="relative">
        <div className="bg-black text-white">
          <div className="relative max-w-[1330px] mx-auto pt-[70px] px-[25px]">
            <Link className="absolute top-[20px] right-[25px] leading-0 ">
              <figure>
                <img
                  src={windowsLogo}
                  className="max-h-[32px] max-w-full"
                  alt="Windows Logo"
                />
              </figure>
            </Link>
            <section>
              <div className="flex flex-wrap justify-between items-end ">
                {/* Left */}
                <div>
                  <h2 className="text-titlelg uppercase">
                    {title} ( {filteredProducts.length} )
                  </h2>
                  <nav className="text-textsm py-[10px] ">
                    <ol>
                      {list &&
                        list.map((item, index) => (
                          <li key={index} className="inline-block breadcrumbs">
                            <Link to={item.link}>{item.title}</Link>
                          </li>
                        ))}
                    </ol>
                  </nav>
                </div>
                {/* Right */}
                <div>
                  <div className="flex py-[5px] items-center ">
                    <label className="text-paragraphsColor font-semibold text-[19px] mr-[12px]">
                      Filter By
                    </label>
                    <select
                      className="sorter"
                      value={sortOption}
                      onChange={handleSortChange}
                    >
                      <option value="Popularity">Popularity</option>
                      <option value="Name">Name</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>
            {/* Products */}
            <section className="products">
              <aside>
                {/* Small Screen Filter Products */}
                <button
                  className="hidden w-full p-[25px] bg-[#1a1a1a] max-[943px]:flex justify-center items-end relative "
                  onClick={handleMobileFilter}
                >
                  <GrSearchAdvanced className="text-[22px] mr-3" />
                  ADVANCED SEARCH
                </button>
                <div
                  className={`${
                    mobileFilter
                      ? "max-h-[1390px] pt-[25px] px-[25px] pb-[30px]"
                      : "max-h-0 px-[25px] "
                  } bg-[#1a1a1a] absolute right-[25px] left-[25px] z-[100] duration-500 ease-in-out overflow-hidden`}
                >
                  {sideFilterList.map((prod, index) => (
                    <fieldset
                      className=" overflow-hidden border-b border-colorGray700"
                      key={index}
                    >
                      <div className="py-[20px]">
                        <span>{prod.title}</span>
                      </div>
                      {prod.item.map((item, index) => (
                        <ul
                          className="overflow-hidden pl-[30px] max-h-[288px]"
                          key={index}
                        >
                          <li className="pb-[10px]">
                            <button
                              className={`text-[.8em] opacity-[.25] ${
                                item === activeFilter
                                  ? "opacity-[1] text-colorRed400"
                                  : ""
                              }  `}
                              onClick={() => handleFilterChange(item)}
                            >
                              {item}
                            </button>
                          </li>
                        </ul>
                      ))}
                    </fieldset>
                  ))}

                  <button
                    className="bg-[#404040] p-[10px] px-[15px] text-textxs  mt-[20px] flex items-center rounded-md border-0 duration-300 ease-in-out hover:bg-[#4f4a4a]"
                    onClick={resetFiltered}
                  >
                    <GrPowerReset className="mr-[3px]" />
                    Reset
                  </button>
                </div>

                {/* Large Screen Filter Products */}
                <div className=" overflow-hidden max-[943px]:hidden block">
                  <div className="bg-[#1a1a1a] pt-[25px] px-[25px] pb-[30px]">
                    {sideFilterList.map((prod, index) => (
                      <fieldset
                        className=" overflow-hidden border-b border-colorGray700"
                        key={index}
                      >
                        <div className="py-[20px]">
                          <span>{prod.title}</span>
                        </div>
                        {prod.item.map((item, index) => (
                          <ul
                            className="overflow-hidden pl-[30px] max-h-[288px]"
                            key={index}
                          >
                            <li className="pb-[10px]">
                              <button
                                className={`text-[.8em] opacity-[.25] ${
                                  item === activeFilter
                                    ? "opacity-[1] text-colorRed400"
                                    : ""
                                }  `}
                                onClick={() => handleFilterChange(item)}
                              >
                                {item}
                              </button>
                            </li>
                          </ul>
                        ))}
                      </fieldset>
                    ))}

                    <button
                      className="bg-[#404040] p-[10px] px-[15px] text-textxs  mt-[20px] flex items-center rounded-md border-0 duration-300 ease-in-out hover:bg-[#4f4a4a]"
                      onClick={resetFiltered}
                    >
                      <GrPowerReset className="mr-[3px]" />
                      Reset
                    </button>
                  </div>
                </div>
              </aside>
              <section className="flex mb-[20px] flex-col max-[943px]:mt-4 ">
                <div className="grid grid-cols-3 gap-y-[20px] gap-x-[3%] max-[1370px]:grid-cols-2 max-[639px]:grid-cols-1">
                  {filteredProducts.length === 0 ? (
                    <div className="text-center text-titlelg">
                      No Products Available
                    </div>
                  ) : (
                    filteredProducts
                      .slice(indexOfFirstProduct, indexOfLastProduct)
                      .map((prod, index) => (
                        <div
                          key={index}
                          className="pt-[15px] px-[25px] pb-[35px] border border-[#222] flex flex-col items-center relative"
                        >
                          <div className="tag">
                            <span className="absolute top-[7px] right-[5px]">
                              NEW
                            </span>
                          </div>

                          <Link
                            className="overflow-hidden group"
                            onClick={() => handleProductClicked(prod)}
                          >
                            <div>
                              <img
                                src={prod.product}
                                alt={prod.title}
                                className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                              />
                            </div>
                            <div className="text-center py-[25px] group-hover:text-colorRed400">
                              <h2 className="text-titlesm ">{prod.title}</h2>
                              <p className="text-textxs">{prod.details}</p>
                            </div>
                            {/* IF THE COLOR IS TRUE IN MY INDEX.JS IT HAVE MULTIPLE COLORS */}
                            {prod.color && (
                              <div className="flex justify-center">
                                <Tooltip title={prod.color1}>
                                  <span className="w-[20px] h-[20px] mt-[20px] rounded-[50%] bg-[#193960] mr-[10px]"></span>
                                </Tooltip>
                                <Tooltip title={prod.color2}>
                                  <span className="w-[20px] h-[20px] mt-[20px] rounded-[50%] bg-white mr-[10px]"></span>
                                </Tooltip>
                              </div>
                            )}
                          </Link>
                        </div>
                      ))
                  )}
                </div>
                {/* Pagination */}
                <div
                  className={`${
                    filteredProducts.length === 0 ? "hidden" : ""
                  } mt-[24px] flexCenter`}
                >
                  <Pagination
                    count={Math.ceil(filteredProducts.length / productsPerPage)}
                    shape="rounded"
                    page={currentPage}
                    onChange={handlePageChange}
                    sx={{
                      "& .MuiPaginationItem-root": {
                        backgroundColor: "#1a1a1a",
                        color: "white",
                      },
                      "& .MuiPaginationItem-page.Mui-selected": {
                        backgroundColor: "red",
                      },
                    }}
                  />
                </div>
              </section>
            </section>
          </div>
        </div>
        {selectedProduct && (
          <Specs
            laptop={selectedProduct}
            onClose={handleCloseSpecs}
            Top={true}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Products;
