const Textbox = ({ img, text, context, imgTitle }) => {
  return (
    <>
      <figure className="my-[30px] mx-auto text-center">
        <img src={img} alt={imgTitle} className="max-h-[55px] mx-auto" />
      </figure>
      <h2 className="min-[996px]:text-[32px] text-[24px] text-white mb-[10px] font-bold">
        {text}
      </h2>
      <p className="min-[996px]:w-2/4 w-full text-white mx-auto">{context}</p>
    </>
  );
};

const TopTextbox = ({ img, text, context, imgTitle, maxWidth }) => {
  return (
    <>
      <figure
        style={{ maxWidth }}
        className="my-[20px] min-[996px]:text-left min-[996px]:my-[10px] min-[996px]:mx-0 mx-auto"
      >
        <img src={img} alt={imgTitle} />
      </figure>
      <h2 className="min-[996px]:text-[32px] text-[24px] text-white mb-[10px] font-bold">
        {text}
      </h2>
      <p className="min-[996px]:w-2/4 w-full text-white">{context}</p>
    </>
  );
};

const ClawIo = ({ srcSet, img, IoList, leftCircle, rightCirle, Circles }) => {
  const isLargeScreen = window.innerWidth >= 996;
  return (
    <section className="bg-white relative w-full py-[5%] mx-auto block overflow-hidden">
      <div className="block w-full mt-[3%] mx-auto relative z-[5] px-[25px]">
        <div className="w-[90%] mx-auto transformY" id="ClawIoAnim">
          <picture>
            <source media="(min-width: 996px)" srcSet={srcSet} />
            <img src={img} />
          </picture>
        </div>
        <ul className="w-[90%] my-[20px] mx-auto min-[768px]:w-[60%] min-[996px]:w-full min-[996px]:my-0 ">
          {IoList.map((list, i) => (
            <li
              key={i}
              className="min-[996px]:absolute min-[996px]:top-0 min-[996px]:text-center min-[996px]:block clawIo left-0 transformY clawIoItem"
              style={{
                left: `${isLargeScreen && list.left}%`,
                top: `${isLargeScreen && list.top}%`,
              }}
            >
              <p className="leading-[1.5] font-semibold">
                {list.text}
                {list.span && (
                  <span className="inline-block min-[996px]:block">
                    {list.span}
                  </span>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
      {/* Cirlces */}
      {Circles && (
        <>
          <div className="block w-[30%] absolute right-[2%] bottom-[2%] right-Circle transformX">
            <img src={rightCirle} alt="Circle Light Blue" />
          </div>
          <div className="block w-[30%] absolute left-[-5%] bottom-0 left-Circle transformX">
            <img src={leftCircle} alt="circle orange" />
          </div>
        </>
      )}
    </section>
  );
};

export { Textbox, TopTextbox, ClawIo };
