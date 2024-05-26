import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({
  Icons,
  slidesToShow,
  slidesToScroll,
  show1200,
  scroll1200,
  resShow992,
  resScroll992,
  resShow680,
  resScroll680,
  resShow480,
  resScroll480,
  dots,
  width,
  height,
  infinite,
  autoplay,
  infinite992,
  infinite680,
  infinite480,
}) => {
  const settings = {
    speed: 400,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoplay,
    autoplaySpeed: 1000,
    infinite: infinite,
    dots: dots,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: show1200,
          slidesToScroll: scroll1200,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: resShow992,
          slidesToScroll: resScroll992,
          dots: dots,
          infinite: infinite992,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: resShow680,
          slidesToScroll: resScroll680,
          dots: dots,
          infinite: infinite680,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: resShow480,
          slidesToScroll: resScroll480,
          dots: dots,
          infinite: infinite480,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {Icons.map((item, index) => (
        <div key={index} className="mb-[27px]">
          <div className="relative">
            <div className="flex justify-center">
              {item.type && (
                <div className="tag">
                  <span className="absolute top-[7px] right-[5px]">NEW</span>
                </div>
              )}
              <img
                src={item.icon}
                className={`align-middle ${width} ${height} mb-3 inline-block `}
              />
            </div>
            <div
              className={`${
                item.type ? "text-center px-[20px]" : "flex flex-col"
              }`}
            >
              <span
                className={`${
                  item.type
                    ? "context text-titlemd font-bold"
                    : "text-colorGray600  text-notexl"
                }`}
              >
                {item.info}
              </span>
              <span
                className={`${
                  item.type
                    ? "context text-textxs px-[30px] min-[768px]:p-0 mt-[10px]"
                    : "text-linksm mt-[6px] relative text-colorGray800 font-bold"
                }`}
              >
                {item.text}
              </span>
              <span className="text-colorGray600 text-notexl">{item.date}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
