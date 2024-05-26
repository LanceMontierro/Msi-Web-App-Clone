import {
  Nav,
  Title,
  ImageSlider,
  Footer,
  Carousel,
  TabFilters,
} from "../Components";
import {
  imageSlider,
  records,
  msiIconsCenter,
  clips,
  filterTabs,
  tabItems,
  msiServices,
  Filters,
  allTabItems,
  newLaptops,
} from "../Constants";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { scrollTotop } from "../utils";
import { FaList } from "react-icons/fa";
import { useState, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Laptop = () => {
  const searchRef = useRef();

  const [activeFiltered, setActiveFiltered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ search: searchRef.current.value });
    searchRef.current.value = "";
  };

  const handleActiveFiltered = () => {
    setActiveFiltered(!activeFiltered);
  };

  const exitFiltered = (e) => {
    e.preventDefault();
    setActiveFiltered(false);
  };

  return (
    <>
      <Nav />
      <main className="relative">
        <section className="relative w-full z-10 overflow-hidden">
          <ImageSlider slides={imageSlider} />
        </section>
        <section className="text-colorWhite bg-[#080808]">
          <div className="max-w-[1600px] my-0 mx-auto flex flex-wrap justfiy-center py-[50px] px-[20px] relative gap-[50px] max-[825px]:flex-col">
            {records.map((record, index) => (
              <figure
                key={index}
                className="min-[660px]:justify-center flex flex-1 flex-shrink items-center max-[440px]:flex-col max-[440px]:gap-[20px] w-full "
              >
                <img
                  src={record.img}
                  className="mr-[40px] min-[660px]:mr-[0] max-[440px]:mr-0 "
                />
                <div className="w-[1px] h-full bg-[#222] mx-[20px] hidden min-[660px]:block"></div>
                <figcaption className="text-left text-titlelg max-[440px]:w-full max-[440px]:text-center">
                  {record.title}
                  <div className="text-[#999] text-textsm ">
                    {record.context}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
        {/* Filter Product Section */}
        <section className="w-full relative py-0 px-[15px] my-0 mx-auto pb-[225px] min-[768px]:max-w-[750px] min-[992px]:max-w-[990px]">
          <div className="w-[85%] min-[576px]:w-[50%] text-center mt-[70px] mx-auto ">
            <Title Title={"LET'S MAKE IT QUICK"} />
            <p className="mt-[40px] leading-[1.4] text-textlg text-colorGray700 ">
              Filter by below sections and see what’s your perfect Gaming
              laptop!
            </p>
            <div className="text-center mt-[40px]">
              <button
                className="flexCenter w-full py-[10px] bg-[#1b1b1b] text-colorWhite "
                onClick={handleActiveFiltered}
              >
                <span className="align-middle uppercase">Filters</span>
              </button>
            </div>
          </div>
          {/* Carousel of Laptops */}
          <section className="mt-[40px]">
            <div className="mx-auto relative">
              <div className="relative w-full h-full">
                <Carousel
                  dots={true}
                  slidesToShow={5}
                  slidesToScroll={1}
                  scroll1200={2}
                  show1200={4}
                  Icons={newLaptops}
                  resShow992={3}
                  resScroll992={3}
                  infinite992={true}
                  resScroll680={2}
                  resShow680={2}
                  resScroll480={1}
                  resShow480={1}
                  infinite={false}
                  infinite680={true}
                  infinite480={true}
                />
              </div>
            </div>
          </section>
          <div className="mt-[60px] text-center">
            <Link to="/Products" className="flexCenter" onClick={scrollTotop}>
              <span className="text-[25px] text-[#6f6f6f]  align-middle">
                <FaList />
              </span>
              <span className="text-[#6f6f6f] ml-[10px] align-middle text-textmd">
                All Products
              </span>
            </Link>
          </div>
          {/* Carousel Msi Center Icons */}
          <section className="min-h-[130px] mt-[60px] min-[768px]:mt-[130px]">
            <div className="relative">
              <div>
                <div className=" w-full h-full z-10 text-center">
                  <Carousel
                    Icons={msiIconsCenter}
                    show1200={5}
                    scroll1200={0}
                    slidesToShow={5}
                    slidesToScroll={0}
                    resShow992={4}
                    reScroll992={1}
                    resShow680={3}
                    resScroll680={2}
                    resShow480={2}
                    resScroll480={2}
                    dots={true}
                    width={`w-[80px]`}
                    height={`h-[80px]`}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* Clips */}
        <section className="min-[768px]:pb-[135px] bg-black text-colorWhite pb-[100px] ">
          <div className="w-full relative px-[15px] py-0 mx-auto my-0 min-[768px]:max-w-[750px] min-[992px]:max-w-[990px] min-[1300px]:max-w-[1280px] ">
            <article className="min-[992px]:flex min-[992px]:translate-y-[-50%] translate-y-[-15%]">
              {clips.map((clip, index) => (
                <div
                  key={index}
                  className="text-center relative border-b border-colorRed400 cursor-pointer min-[992px]:clip mt-[40px]"
                >
                  <figure>
                    <img src={clip.clip} className="w-full align-middle" />
                  </figure>
                  <section className="bg-[#1b1b1b] absolute left-0 right-0 bottom-0 ">
                    <div className="relative">
                      <p className="py-[28px]">{clip.text}</p>
                    </div>
                  </section>
                </div>
              ))}
            </article>
            {/* Describe */}
            <article className="text-center min-[576px]:w-[50%] w-[70%] mx-auto my-0">
              <h2 className="font-bold text-titlexl uppercase">What's New</h2>
              <p className="mt-[20px] min-[992px]:leading-[1.6] leading-[1.4] text-textlg">
                Learn more about our latest Information
              </p>
            </article>
            {/* TAB Filters */}
            <TabFilters
              filterTabs={filterTabs}
              filterItems={tabItems}
              allTabItems={allTabItems}
              defaultActiveTab={"All"}
            />
          </div>
        </section>
        {/* Services */}
        <section className="bg-[#101010] text-center pt-[80px] pb-[125px]  ">
          <div className="max-w-[1600px] mx-auto my-0 ">
            <h2 className="text-white text-titlexl mb-[18px] uppercase">
              Service
            </h2>
            <p className="text-white text-titlemd mb-[32px] ">
              Enter your product's name to find downloads, manuals or other
              support
            </p>
            <form className="relative w-[70%] mb-[40px] min-[770px]:w-[360px] mx-auto">
              <input
                type="text"
                className="w-full p-[10px] border border-colorGray300 text-textxs text-colorGray800 rounded-md  "
                placeholder="Search"
                ref={searchRef}
              />
              <button
                className="absolute top-0 bottom-0 right-[10px] "
                onClick={handleSubmit}
              >
                <GoSearch />
              </button>
            </form>
            <div className="flex items-baseline max-[768px]:msiServices ">
              {msiServices.map((item, index) => (
                <Link
                  key={index}
                  className="support-link max-[768px]:support-link-responsive min-[770px]:inline-block "
                >
                  <figure className="min-[770px]:w-[20%] flex-1 inline-block max-[768px]:w-[20%] ">
                    <img src={item.icon} className="w-full" />
                  </figure>
                  <h3 className="min-[770px]:text-center text-left min-[770px]:mt-[20px] text-white flex-titleGrow  text-titlemd ">
                    {item.title}
                  </h3>
                  <p className="text-[#959593] hidden min-[770px]:block ">
                    {item.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* Filter Button */}
      {activeFiltered && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-white overflow-auto scrollbar ">
          <div className="text-center p-[20px] text-colorGray200 sticky bg-[#101010] right-0 left-0 top-0 z-[100] max-[400px]:text-left ">
            <span className="text-titlelg uppercase">Filters</span>
            <button className="text-white absolute top-0 bottom-0 right-[10px] flex items-center ">
              <span className="align-middle text-titlexs">Clear All</span>
              <IoCloseOutline className="text-white ml-[5px] align-middle" />
            </button>
          </div>
          {Filters.map((item, filterIndex) => (
            <div className="relative mt-[20px]" key={filterIndex}>
              <span className="text-titlelg font-bold px-[20px]">
                {item.title}
              </span>
              <form className="mt-[20px]">
                <div>
                  {item.items.map((subItem, itemIndex) => (
                    <label
                      key={itemIndex}
                      className="flex items-center py-[15px] px-[20px] cursor-pointer"
                    >
                      <input type="checkbox" className="point" />
                      <div className="ml-[10px]">{subItem}</div>
                    </label>
                  ))}
                </div>
              </form>
            </div>
          ))}
          <div className="flex border-t-[5px] border-coloRed300 sticky right-0 left-0 bottom-0 z-[100]">
            <button
              className="flex-1 p-[20px] text-titlemd bg-[#0d0d0d] font-bold "
              onClick={exitFiltered}
            >
              <span className="text-white opacity-[.5] hover:opacity-[2]">
                Cancel
              </span>
            </button>
            <button className="flex-1 p-[20px] text-titlemd bg-[#0d0d0d] font-bold ">
              <span className="text-white opacity-[.5] hover:opacity-[2]">
                Apply
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Laptop;
