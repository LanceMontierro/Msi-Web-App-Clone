import {
  Nav,
  Footer,
  ImageSlider,
  Carousel,
  TabFilters,
  CardsFilter,
} from "../Components";
import {
  motherboardImageSlider,
  awards,
  AllTabItemMb,
  tabFilterMb,
  filterItemMb,
  cards,
} from "../Constants";
import { awardsStar } from "../assets";

const Motherboard = () => {
  return (
    <>
      <Nav />
      <section className="relative z-10 overflow-hidden ">
        <ImageSlider slides={motherboardImageSlider} />
      </section>
      <section className="pt-[30px] pb-[60px] bg-white text-colorBlack text-center px-[25px] mx-auto">
        <div className="w-full mxAuto flexCenter flex-col ">
          <img src={awardsStar} />
          <h2 className="text-titlexl text-colorGray800 font-bold max-[765px]:text-titlelg">
            AWARDS
          </h2>
          <p className="mt-[15px] mb-[50px]">
            We would like to share the honor with you.
          </p>
        </div>

        <Carousel
          Icons={awards}
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

      <main className="bg-[#101010] text-white">
        <section className="w-full relative mx-auto px-[25px] mb-[50px]">
          <div className="mt-[40px]">
            <CardsFilter Allcards={cards} cards={cards} />
          </div>
        </section>

        <section className="pb-[60px] pt-[40px] w-full relative px-[25px] mx-auto border-t border-[#222] ">
          <p className="text-center text-textmd uppercase text-[#808080]">
            Filter Articles
          </p>
          {/* <TabFilter /> */}
          <TabFilters
            filterTabs={tabFilterMb}
            allTabItems={AllTabItemMb}
            filterItems={filterItemMb}
            defaultActiveTab={"Blog"}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Motherboard;
