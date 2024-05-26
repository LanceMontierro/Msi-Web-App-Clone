import { Title } from "../Components";
import { spotLights } from "../Constants";

const Spotlight = () => {
  return (
    <section className="py-0 px-[30px] my-0 mx-auto max-w-[1900px]">
      <div className="mt-[60px]">
        <Title Title={"Discover the Latest Msi Innovations"} />
        <div className="grid my-0 mx-[-15px] grid-cols-3 py-0 px-[15px] max-[1024px]:grid-cols-2 max-[765px]:grid-cols-1 max-[765px]:p-0">
          {spotLights.map((spotlight, index) => (
            <div className="p-[15px]" key={index}>
              <div className="">
                <div className="overflow-hidden group">
                  <img
                    src={spotlight.spotlight}
                    alt={spotlight.title}
                    className="w-full h-auto align-middle transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="card_body">
                    <h3 className="text-colorGray800 text-titlesm font-bold">
                      {spotlight.title}
                    </h3>
                    <p className="mt-2 text-colorGray800 text-textsm">
                      {spotlight.context}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
