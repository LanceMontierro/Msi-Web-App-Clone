import { Title, ImageSlider } from "../Components";
import { odmSlides, odmSlideShow } from "../Constants";
import { odm1 } from "../assets";

const OdmSpotlight = () => {
  return (
    <>
      <section className="bg-colorGray100 pt-[60px] pb-[45px] mt-[65px]">
        <Title Title={"Empower your Business with AIoT Solutions "} />
        <div className="py-0 px-[30px] my-0 mx-auto max-w-[1900px]">
          <section className="hidden max-[1100px]:block overflow-hidden max-[500px]:overflow-visible">
            <div className="odmWrapper ">
              <section className="relative z-10 overflow-hidden ">
                <ImageSlider slides={odmSlideShow} />
              </section>
            </div>
          </section>

          {/* Hidden when it reached 1100px */}
          <div className="grid grid-cols-4 my-0 mx-[-15px] py-0 px-[15px] max-[1100px]:hidden">
            <div className="p-[15px] row-span-2">
              <div>
                <div className="overflow-hidden group">
                  <img
                    src={odm1}
                    className="w-full h-auto align-middle transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="card_body">
                    <h3 className="text-colorGray800 text-titlesm font-bold">
                      EV Charging Solutions
                    </h3>
                    <p className="context">
                      Smart Charging for Business and Home
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Your Map starts here */}
            {odmSlides.map((slides, index) => (
              <div className="p-[15px]" key={index}>
                <div>
                  <div className="overflow-hidden group">
                    <img
                      src={slides.odm}
                      alt={slides.title}
                      className="w-full h-auto align-middle transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                    <div className="card_body ">
                      <h3 className="text-colorGray800 text-titlesm font-bold">
                        {slides.title}
                      </h3>
                      <p className="context">{slides.context}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OdmSpotlight;
