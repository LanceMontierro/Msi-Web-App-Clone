import { Nav, Footer, Banner, ImageSlider } from "./Components";
import {
  Spotlight,
  OdmSpotlight,
  SmartList,
  Service,
  SocialMarketing,
} from "./Sections";
import { slide4 } from "./assets";
import { slides } from "./Constants";
import React from "react";

function App() {
  return (
    <>
      <Nav />
      <main className="pb-[60px]">
        <section className="relative w-full z-10 overflow-hidden">
          <ImageSlider slides={slides} buttons={true} />
        </section>
        <Spotlight />
        <section className="py-0 px-[30px] my-0 mx-auto max-w-[1900px] ">
          <div className="mt-[60px]">
            <div className="block">
              <Banner
                src={
                  "https://storage-asset.msi.com/global/picture/banner/banner_1704452951be5855add8d7a9bfb34652c247a879c2.jpeg"
                }
                img={slide4}
                minWidth={"768"}
              />
            </div>
          </div>
        </section>
        <OdmSpotlight />
        <SmartList />
        <Service />
        <SocialMarketing />
      </main>
      <Footer />
    </>
  );
}

export default App;
