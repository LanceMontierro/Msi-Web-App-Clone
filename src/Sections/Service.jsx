import { services } from "../Constants";

const Service = () => {
  return (
    <section className="w-full mxAuto">
      <div className="text-center mt-[50px]">
        <div className="flex flex-wrap m-[-15px]">
          {services.map((service, index) => {
            const Icon = service.item;
            return (
              <div className="flex-2 p-[15px] max-[578px]:flex-3" key={index}>
                <div className="align-middle text-[45px]">
                  <Icon className="cursor-pointer inline-block" />
                </div>
                <span className="mt-3 relative text-linksm hover:border-b-2 hover:border-colorGray800 ">
                  {service.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
