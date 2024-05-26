import { socialMarketing } from "../Constants";

const SocialMarketing = () => {
  return (
    <section className="py-0 px-[30px] my-0 mx-auto max-w-[1900px]">
      <div className="mt-[45px]">
        <div className="flex m-[-15px] flex-wrap">
          {socialMarketing.map((item, index) => (
            <div key={index} className="flex-3 p-[15px] max-[995px]:flex-4">
              <div className="block overflow-hidden relative group">
                <img
                  src={item.item}
                  alt={item.title}
                  className="w-full h-auto align-middle transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[rgb(255,255,255,0.4)]  text-left py-[15px] px-[25px] text-colorGray800 hover:text-white hover:bg-[rgb(128,128,128,0.4)] max-[995px]:text-center">
                  <h3 className="text-titlesm font-bold">{item.title}</h3>
                  <p className="text-textsm">{item.context}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMarketing;
