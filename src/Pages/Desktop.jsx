import {
  Nav,
  Carousel,
  TabFilters,
  Footer,
  CardsFilter,
  ImageSlider,
  Banner,
} from "../Components";
import { awardsStar, Games } from "../assets";

import {
  awards2,
  filterTabs2,
  ActiveCards,
  AllTabItemDesktop,
  filterItemDesktop,
  tabFilterDesktop,
  allCard,
  desktopImageSlider,
} from "../Constants";

const Desktop = () => {
  return (
    <>
      <Nav />
      <section className="relative z-10 overflow-hidden ">
        <ImageSlider slides={desktopImageSlider} />
      </section>
      <section className="pt-[30px] pb-[60px] bg-white text-colorBlack text-center px-[25px] mx-auto">
        <div className="w-full mxAuto flex-col flexCenter">
          <img src={awardsStar} />
          <h2 className="text-titlexl text-colorGray800 font-bold max-[765px]:text-titlelg">
            AWARDS
          </h2>
          <p className="mt-[15px] mb-[50px]">
            We would like to share the honor with you.
          </p>
        </div>
        <Carousel
          Icons={awards2}
          slidesToScroll={1}
          slidesToShow={6}
          show1200={4}
          scroll1200={1}
          resShow992={3}
          resScroll992={2}
          resShow680={2}
          resScroll680={3}
          resShow480={1}
          resScroll480={1}
          width={`w-[160px]`}
          height={`h-[160px]`}
          infinite={true}
          autoplay={true}
        />
      </section>

      <main className="bg-colorGray900 text-white">
        <section className="w-full px-[25px] mx-auto relative text-white mb-[90px]">
          <CardsFilter
            cards={ActiveCards}
            filterTabs={filterTabs2}
            Allcards={allCard}
          />
        </section>

        <section className="w-full px-[25px] mx-auto relative text-white text-center mb-[50px]">
          <h3 className="font-bold text-white text-titlelg mb-[20px] ">
            WHICH GAME DO YOU LIKE
          </h3>
          <Banner
            src={
              "https://storage-asset.msi.com/frontend/imgs/products/desktop/Which_game_do_you_like-1.jpg"
            }
            img={Games}
            minWidth={"996"}
          />
        </section>

        <section className="pb-[60px] pt-[40px] w-full relative px-[25px] mx-auto border-t border-[#222]  ">
          <p className="text-center text-textmd uppercase text-[#808080]">
            Filter Articles
          </p>
          <TabFilters
            filterTabs={tabFilterDesktop}
            allTabItems={AllTabItemDesktop}
            filterItems={filterItemDesktop}
            defaultActiveTab={"Blog"}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Desktop;
