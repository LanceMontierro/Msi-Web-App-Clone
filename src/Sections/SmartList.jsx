import { smartlist } from "../Constants";
import Title from "../Components/Title";

const SmartList = () => {
  return (
    <section className="bg-colorGray100 pb-[85px] max-[500px]:mt-[65px] text-center">
      <Title Title={"The Future of Smart"} />
      <div className="py-0 px-[30px] my-0 mx-auto max-w-[1900px]">
        <div className="flex flex-wrap m-[-15px] justify-center ">
          {smartlist.map((item, index) => (
            <div
              className="flex-1 p-[15px] max-[1100px]:flex-2 max-[468px]:flex-3 max-[300px]:flex-4"
              key={index}
            >
              <div className="block group">
                <img
                  src={item.item}
                  alt={item.title}
                  className="w-[100px] h-[100px] align-middle transition-transform duration-300 ease-in-out group-hover:scale-105 inline-block "
                />
                <div className="bg-colorGray100 py-[15px] px-[10px] hover:bg-colorGray200 ">
                  <h3 className="text-colorGray800 font-bold text-textsm">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartList;
