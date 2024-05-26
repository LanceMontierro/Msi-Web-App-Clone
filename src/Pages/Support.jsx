import { Nav, Footer } from "../Components";
import { GoSearch } from "react-icons/go";
import {
  supportArticles,
  selectProduct,
  serviceSupport,
  contactSupport,
} from "../Constants";

const Support = () => {
  return (
    <>
      <Nav />
      {/* Top Section  */}
      <section className="serviceBg">
        <div className="w-full max-w-[1280px] mx-auto align-middle absolute top-2/4 left-2/4 alignMiddle max-[768px]:top-[30%] max-[768px]:w-[90%]">
          <h1 className="text-titlexl text-[#222] mb-3 text-center font-bold capitalize max-[960px]:text-[24px]">
            Welcome to MSI Service and Support
          </h1>
          <p className="mb-[1rem] max-[960px]:text-[1.45rem] text-textmd leading-[1.45] text-center text-[#444] max-[736px]:text-[20px] ">
            Customized services especially for you.
          </p>
          <div className="my-[15px] mx-auto max-w-[600px] w-full relative max-[736px]:w-full max-[736px]:pl-[5px] ">
            <div className="border border-colorGray300 rounded bg-white relative w-[95%] p-[15px]">
              <div>
                <input
                  type="text"
                  className="bg-white text-[#888] border-none w-full outline-none max-[738px]:text-[14px]  "
                  placeholder="Search"
                />
                <button className="absolute top-[12px] right-[10px] cursor-pointer opacity-50 text-[#888]">
                  <GoSearch className=" text-[25px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article section */}
      <section className="w-full mx-auto py-[3rem] max-[1920px]:max-w-[1920px] max-[992px]:py-[5rem] max-[768px]:py-[20px] ">
        <div className="w-full max-w-[1280px] mx-auto">
          <ul className="flex flex-wrap justify-center px-[15px]">
            {supportArticles.map((article, i) => (
              <li
                key={i}
                className="max-w-[25%] py-[20px] px-[10px] flex-2 max-[992px]:max-w-[50%] max-[992px]:flex-3 max-[992px]:px-[15px] max-[500px]:max-w-full max-[500px]:flex-4 "
              >
                <button>
                  <img src={article.item} />
                  <h3 className="mt-[10px] text-left text-[#444] text-[1.2rem] font-medium">
                    {article.text}
                  </h3>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Select Product Section */}
      <section className="w-full bg-colorGray100 mx-auto py-[3rem] max-[1920px]:max-w-[1920px] max-[992px]:py-[5rem] max-[768px]:py-[20px]">
        <div className="text-center">
          <h2 className="text-titlexl text-[#222] capitalize font-bold max-[400px]:text-titlelg">
            Select your Product
          </h2>
          <p className="text-textmd text-[#444] mb-[1rem] px-[15px]">
            Find the exclusive webpage and services for your product.
          </p>
        </div>
        <div className="w-full max-w-[1280px] mx-auto bg-transparent">
          <ul className="flex flex-wrap justify-center px-[15px]">
            {selectProduct.map((prod, i) => (
              <li
                key={i}
                className="w-full flex-4 max-w-[18.6666%] max-[992px]:flex-card2 max-[992px]:max-w-[33.333333333%] max-[500px]:max-w-[50%] max-[500px]:flex-3 "
              >
                <button className="opacity-85 hover:opacity-100 ease-in-out duration-300 text-center max-[500px]:text-center ">
                  <img src={prod.item} className="max-w-full inline-block" />
                  <span className="mt-[10px] text-[#444] text-[1.2rem] font-medium">
                    {prod.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service and Support Section */}
      <section className="w-full mx-auto py-[3rem] max-[1920px]:max-w-[1920px] max-[992px]:py-[5rem] max-[768px]:py-[20px]">
        <div className="text-center">
          <h2 className="text-titlexl text-[#222] capitalize font-bold max-[400px]:text-titlelg">
            Service and Support
          </h2>
          <p className="text-textmd text-[#444] mb-[1rem] px-[15px]">
            Common service items.
          </p>
        </div>
        <div className="w-full max-w-[1280px] mx-auto bg-transparent">
          <ul className="flex flex-wrap justify-start px-[15px]">
            {serviceSupport.map((items, i) => {
              const Icon = items.item;
              return (
                <li
                  key={i}
                  className="w-full flex-card2 max-w-[33.333333333%] max-[576px]:max-w-[50%] max-[576px]:flex-3 max-[430px]:max-w-full max-[430px]:flex-4 "
                >
                  <button className="text-left max-[1024px]:text-center w-full ">
                    <div className="flexCenter py-[20px] px-[15px] min-h-[170px] max-[1024px]:max-h-full max-[1024px]:block ">
                      <Icon className="text-[60px] inline-block max-[430px]:text-[45px]" />
                      <div className="px-[10px] w-[80%] text-center align-middle max-[1024px]:w-full">
                        <span className="text-titlesm block text-left leading-[1.45] text-[#444] font-semibold  max-[1024px]:text-center">
                          {items.title}
                        </span>
                        <span className="block text-textsm text-[#444] text-left py-[5px] max-[1024px]:text-center">
                          {items.text}
                        </span>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Contact Support */}
      <section className="w-full mx-auto py-[3rem] max-[1920px]:max-w-[1920px] max-[992px]:py-[5rem] max-[768px]:py-[20px] bg-colorGray100">
        <div className="text-center">
          <h2 className="text-titlexl text-[#222] capitalize font-bold max-[400px]:text-titlelg">
            Contact Support
          </h2>
          <p className="text-textmd text-[#444] px-[15px]">
            Thank you for Choosing MSI.
          </p>
          <p className="text-textmd text-[#444] mb-[1rem] px-[15px]">
            Please feel free to contact us with channel below, we are happy to
            help.
          </p>
        </div>
        <div className="w-full max-w-[1280px] mx-auto bg-transparent">
          <ul className="flex flex-wrap justify-start px-[15px]">
            {contactSupport.map((items, i) => {
              const Icon = items.item;
              return (
                <li
                  key={i}
                  className="w-full flex-card2 max-w-[33.333333333%] max-[576px]:max-w-[50%] max-[576px]:flex-3  "
                >
                  <button className="text-left max-[1024px]:text-center w-full hover:opacity-85 ">
                    <div className="flexCenter py-[20px] px-[15px] min-h-[170px] max-[1024px]:max-h-full max-[1024px]:block ">
                      <Icon className="text-[60px] inline-block max-[430px]:text-[45px]" />
                      <div className="px-[10px] w-[80%] text-center align-middle max-[1024px]:w-full">
                        <span className="text-titlesm block text-left leading-[1.45] text-[#444] font-semibold  max-[1024px]:text-center">
                          {items.title}
                        </span>
                        <span className="block text-textsm text-[#444] text-left py-[5px] max-[1024px]:text-center">
                          {items.text}
                        </span>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Support;
