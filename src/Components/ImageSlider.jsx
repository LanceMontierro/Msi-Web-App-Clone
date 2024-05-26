import { useState, useEffect } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
const ImageSlider = ({ slides, buttons }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goPrevSlide = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <>
      <div>
        {slides.map((slide, index) => (
          <div
            className={`${
              index === slideIndex ? "slide" : "removeSlide"
            } h-full  `}
            key={index}
          >
            <picture>
              <source media="(min-width: 992px)" srcSet={slide.src} />
              <img
                src={slide.slide}
                className={`${
                  slide.odm
                    ? "h-auto max-w-[700px] w-full"
                    : "h-full w-full align-middle"
                } `}
              />
            </picture>
            {slide.title && (
              <div className="card_body max-w-[700px]">
                <h3 className="text-colorGray800 text-titlesm font-bold">
                  {slide.title}
                </h3>
                <p className="text-colorGray800 text-textsm mt-[5px] context">
                  {slide.context}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <ul
        className={`${
          slides.some((slide) => slide.odm)
            ? "max-[500px]:bottom-[-50px] dots"
            : "dot-ul max-[992px]:bottom-[30px]"
        }`}
      >
        {slides.map((slide, index) => (
          <li
            className={`${index === slideIndex ? "dot-laptop-active" : ""} ${
              slide.odm
                ? "max-[400px]:h-[8px] max-[400px]:mx-[15px] dots-li"
                : "dot-laptop"
            }  `}
            key={index}
            onClick={() => setSlideIndex(index)}
          ></li>
        ))}
      </ul>
      {buttons && (
        <>
          <GrFormPrevious
            className="button-slider prev z-20"
            onClick={goPrevSlide}
          />
          <MdNavigateNext
            className="button-slider next z-20"
            onClick={goNextSlide}
          />
        </>
      )}
    </>
  );
};

export default ImageSlider;
