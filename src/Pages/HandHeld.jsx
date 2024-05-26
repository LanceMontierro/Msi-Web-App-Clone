import { Nav, Footer, Textbox, TopTextbox, ClawIo, Specs } from "../Components";
import {
  ClawA1M,
  kvBg,
  kvName,
  kvProcessor,
  VideoFontBase,
  ErgonomicBg,
  ErgonomicPd1,
  ErgonomicPd2,
  ErgonomicPd3,
  HandheldBgXs,
  MsiCenterM,
  CpuImgxs,
  IntelCore,
  Dan,
  RgbMysticLight,
  RgbPdLight,
  RgbCircle,
  HZIcon,
  RgbBg,
  TriggerXs,
  WifiBg,
  Wifi7,
  MsiThunderBgXs,
  ThunderBolt,
  topClaw,
  bottomClaw,
  lightBlueCircle,
  pinkCircle,
} from "../assets";
import {
  kvImages,
  Featureables,
  swiperCenterBox,
  CpuTextBox,
  TriggerImg,
  triggerData,
  ClawIoList,
  bottomIoList,
  ClawA1MSpecs,
} from "../Constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

const Handheld = () => {
  useGSAP(() => {
    gsap.to("#Claw", {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  useGSAP(() => {
    gsap.to("#deco", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#ErgonomicAnimate",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#ErgonomicAnimate",
          start: "-50% center",
          end: "center bottom",
          scrub: true,
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#rightErgonomicsAnim",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#rightErgonomicsAnim",
          start: "-150% center",
          end: "center bottom",
          scrub: true,
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#ergonomics-text-anim",
      {
        opacity: 0,
      },
      {
        z: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",

        scrollTrigger: {
          trigger: "#ergonomics-text-anim",
          start: "-90% center",
          end: "center bottom",
          scrub: true,
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#txtbox",
      {
        opacity: 0,
        x: -100,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#txtbox",
          start: "top center",
          end: "center bottom",
          scrub: true,
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#cpu-txtbox",
      {
        opacity: 0,
        x: -100,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#cpu-txtbox",
          start: "-30% center",
          end: "center bottom",
          scrub: true,
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#banner-pd",
      {
        opacity: 0,
        y: 100,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#banner-pd",
          start: "-30% center",
          end: "center bottom",
          scrub: true,
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#triggerAnim",
      {
        opacity: 0,
        x: -100,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#triggerAnim",
          start: "-30% center",
          end: "center bottom",
          scrub: true,
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#fadeUp",
      {
        opacity: 0,
        y: 100,
      },
      {
        y: -200,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#fadeUp",
          start: "-250% 100%",
          end: "center bottom",
          scrub: true,
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#thunderBlock",
      {
        opacity: 0,
        y: 100,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#thuderbg",
          start: "top 5%",
          end: "center bottom",
          scrub: true,
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#ClawIoAnim",
      {
        opacity: 0,
        y: -100,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
        scrollTrigger: " #ClawIoAnim",
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".clawIoItem",
      {
        opacity: 0,
        y: -100,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
        scrollTrigger: "#ClawIoAnim",
        stagger: {
          amount: 1,
          ease: "circ.inOut",
          from: "edges",
          each: 0.5,
          axis: "y",
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".right-Circle",
      {
        opacity: 0,
        x: 100,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: " #ClawIoAnim",
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".left-Circle",
      {
        opacity: 0,
        x: -100,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: " #ClawIoAnim",
      }
    );
  }, []);

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "dotsSlick",

    prevArrow: (
      <img
        src="https://storage-asset.msi.com/global/picture/image/feature/Handhelds/Claw-A1M/center-pre.png"
        className="slick-prev"
        alt="Previous"
      />
    ),
    nextArrow: (
      <img
        src="https://storage-asset.msi.com/global/picture/image/feature/Handhelds/Claw-A1M/center-next.png"
        className="slick-next"
        alt="Next"
      />
    ),
  };

  return (
    <>
      <Nav />
      <main>
        <section
          className=" min-[996px]:bg-cover bg-no-repeat relative overflow-hidden pb-[50px] bg-handheldBgSize bg-white"
          style={{
            backgroundImage: `url(${kvBg})`,
            backgroundPosition: "top center",
          }}
        >
          <div className="min-[996px]:w-[60%] m-auto relative w-full max-w-[2560px]">
            {/* Animation */}
            <div className="relative w-full" id="Claw">
              <picture>
                <img src={ClawA1M} alt="Claw-A1M" />
              </picture>
            </div>
            {/* Animation */}
            {kvImages.map((image, i) => (
              <figure
                className="min-[996px]:left-0 absolute z-[100] top-0 left-[5%] w-full "
                key={i}
                id="deco"
              >
                <img src={image.img} className="max-w-full" />
              </figure>
            ))}
          </div>

          {/* KV NAME */}
          <figure className="w-[90%] max-w-[1920px] mt-[30px] min-[996px]:w-[35%] min-[996px]:mb-[20px] mx-auto">
            <picture>
              <img src={kvName} alt="Claw-A1M" className="max-w-full" />
            </picture>
          </figure>

          {/* KV LOGO */}
          <figure className="flexCenter text-black text-textxs text-left px-[25px]">
            <picture>
              <img
                src={kvProcessor}
                alt="Intel Core Ultra 7"
                className="max-h-[75px] my-8 mr-8 border border-colorWhite"
              />
            </picture>
            <figcaption>
              Powered by <br />
              Intel <sup>®</sup> Core™ Ultra 7 processors
            </figcaption>
          </figure>

          {/* KV TEXTBOX */}
          <div className="text-center mb-12 w-full relative px-[25px] min-[996px]:mt-[30px] min-[996px]:mb-[50px] min-[996px]:w-[40%] mx-auto">
            <p className="leading-[1.5] ">
              MSI Claw A1M, a groundbreaking handheld gaming device that marks a
              new era in portable gaming experiences. Powered by Intel
              <sup>®</sup>
              Core™ Ultra processors and featuring Intel <sup>®</sup> XeSS
              technology, ensuring a smooth and immersive gameplay experience
              even on AAA titles.
            </p>
            <button className="kv-btn hover:scale-105">
              <span className="z-20 relative">SHOP NOW</span>
            </button>
          </div>

          {/* FEATURES */}
          <div>
            <div className="w-full relative px-[25px] mx-auto min-[576px]:flex min-[576px]:flex-wrap min-[576px]:justify-around mb-[50px] ">
              {Featureables.map((item, i) => (
                <div className="featurable-flex-item text-textmd" key={i}>
                  {item.topText}
                  <div className="flexCenter flex-col min-[996px]:flex-row text-center ">
                    {item.img ? (
                      <img
                        src={item.img}
                        alt={item.text}
                        className="max-h-[55px] mx-auto min-[996px]:my-[20px] min-[996px]:mr-[25px]"
                      />
                    ) : (
                      <img
                        src={item.imgIcon}
                        className="max-h-[35px] mx-auto mb-[10px]"
                      />
                    )}
                    <h3 className="py-[10px] font-bold text-[130%] text-center">
                      {item.text}
                    </h3>
                  </div>
                  {item.bottomText}
                </div>
              ))}
            </div>
          </div>

          {/* VIDEO BLOCK */}
          <div className="relative w-full mt-[8px] min-[996px]:mt-[80px] px-[25px]">
            <div className="videoBlock min-[996px]:w-[80%] min-[996px]:h-[80%]">
              <img src={VideoFontBase} alt="GRIP AND GAME" />
            </div>
            <div className="w-full inline-block text-center mx-auto ">
              <button className="btnstyle text-black hover:text-white hover:border-white ">
                <span className="uppercase z-[2] relative">
                  Watch the Video
                </span>
              </button>
            </div>
          </div>
        </section>
        {/* ERGONOMICS */}
        <section
          className="bg-cover py-[50px] overflow-hidden min-[996px]:pt-[8%] min-[996px]:pb-[3%] bg-no-repeat bg-bothCenter  "
          style={{ backgroundImage: `url(${ErgonomicBg})` }}
        >
          <div className="mb-[50px] w-full relative px-[25px] mx-auto min-[996px]:flex min-[996px]:flex-wrap min-[996px]:justify-between  ">
            {/* Animation */}
            <div
              id="ErgonomicAnimate"
              className="text-center min-[996px]:w-[50%] min-[996px]:text-left mx-auto transformY"
            >
              <figure>
                <img src={ErgonomicPd1} alt="Claw-Ergonomic" />
              </figure>
              <div className="text-[53px] font-bold text-[#eaeaea] ergonomicText min-[996px]:text-right min-[996px]:text-[5.5vw] ">
                Ergonomics
              </div>
              <figure className="w-[80%] my-[10px] mx-auto min-[996px]:w-[60%]  ">
                <img src={ErgonomicPd2} alt="" />
              </figure>
              <h2 className="min-[996px]:text-[32px] text-[24px] font-bold mb-[10px] text-black">
                Ergo-Gaming Science of Comfort
              </h2>
              <p className="leading-[1.5]">
                With thousands of sample data collected from around the world,
                the Claw is ergonomically tailored for comfort and precision.
                Designed to fit the natural contours of your grip, it provides
                an intuitive gaming experience for hands of all sizes.
              </p>
            </div>
            {/* Animation */}
            <div
              id="rightErgonomicsAnim"
              className="min-[996px]:w-[40%] min-[996px]:text-left min-[996px]:mt-[30%] text-center my-[30px] transformX  w-full "
            >
              <figure className="w-[55%] mt-[50px] mb-[20px] min-[996px]:ml-[35%] min-[996px]:mb-[-20%] mx-auto ">
                <img src={ErgonomicPd3} />
              </figure>
              <div className="min-[996px]:w-[60%] min-[996px]:ml-[7%] ">
                <h2 className="min-[996px]:text-[32px] text-[24px] font-bold mb-[10px] text-black">
                  Perfection Through Anthropometry
                </h2>
                <p className="leading-[1.5]">
                  As a handheld device, Claw has achieved the optimal balance
                  between its grip and weight. We have meticulously polished
                  various design details, from the curvature that fits the palm,
                  to the finger grip positions and trigger force.
                </p>
              </div>
            </div>
            {/* Animation */}
            <div
              id="ergonomics-text-anim"
              className="w-full font-bold text-transparent text-center text-[53px] min-[996px]:text-[100px] textStroke transformX"
            >
              Science of Comfort
            </div>
          </div>
        </section>
        {/* Center pd Block */}
        <section className="pd_block">
          <div className="w-full">
            <picture>
              <source
                media="(min-width: 996px)"
                type="image/jpeg"
                srcSet="https://storage-asset.msi.com/global/picture/image/feature/Handhelds/Claw-A1M/msi-center-bg.jpg"
              />
              <img src={HandheldBgXs} />
            </picture>
          </div>

          <div className="pd_container min-[996px]:top-2/4 min-[996px]:transY  ">
            {/* Animation */}
            <div className="textbox-anim" id="txtbox">
              <TopTextbox
                img={MsiCenterM}
                imgTitle={"Msi Center M"}
                text={"Tailored Software for Ease of Use"}
                context={
                  "MSI Center M provides dedicated interface designed for handheld devices with easy-to-use settings."
                }
                maxWidth="80px"
              />

              {/* Slider */}
              <div className="relative w-full mt-[20px] min-[996px]:w-[40%]">
                <Slider {...settings}>
                  {swiperCenterBox.map((slide, i) => (
                    <div className="min-[996px]:w-[417px]" key={i}>
                      <div>
                        <div className="w-full mx-auto text-center min-[996px]:max-w-[95%] ">
                          <figure className="w-full mx-auto ">
                            <img
                              src={slide.img}
                              alt={slide.text}
                              className="object-cover "
                            />
                          </figure>
                          <p className="centerBoxText">{slide.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* CPU pd Block */}
        <section className="pd_block">
          <div className="w-full">
            <picture>
              <source
                media="(min-width: 996px)"
                type="image/webp"
                srcSet="https://storage-asset.msi.com/global/picture/image/feature/Handhelds/Claw-A1M/cpu-img-v1.webp"
              />
              <img src={CpuImgxs} alt="Cpu Image" />
            </picture>
          </div>
          <div className="pd_container">
            <div className="textbox-anim" id="cpu-txtbox">
              <figure className="max-w-[100px] my-[20px] min-[996px]:text-left min-[996px]:my-[20px] min-[996px]:mx-0 mx-auto">
                <img src={IntelCore} />
              </figure>
              <h2 className="min-[996px]:text-[32px] text-[24px] text-white mb-[10px] font-bold">
                NEXT-GEN HYBRID PERFORMANCE <br /> Up to Intel <sup>®</sup>
                Core™ Ultra 7 processor 155H
              </h2>
              <p className="min-[996px]:w-2/4 w-full text-white">
                With its lightning-fast processing speeds featuring Intel’s
                first integrated NPU for power-efficient AI acceleration and
                local inference for the handheld. The latest Intel <sup>®</sup>
                Core™ Ultra 7 processor 155H is a game-changer. Whether you're
                into gaming, content creation, or heavy multitasking, this is
                your ticket to a seamless and high-performance computing
                experience.
              </p>
              <ul className="flex flex-wrap font-bold min-[996px]:my-[20px] min-[996px]:m-0 mx-auto my-[40px] min-[996px]:w-[50%] min-[996px]:text-left">
                {CpuTextBox.map((text, i) => (
                  <li
                    key={i}
                    className="text-center mx-auto my-[10px] cpu-data text-white "
                  >
                    <span
                      className={`text-[320%] block ${
                        text.color === "blue"
                          ? "cpu-data-blue "
                          : "cpu-data-pink "
                      }`}
                    >
                      {text.num}
                    </span>
                    {text.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* Banner pd-block */}
        <section className="pd_block w-full py-[5%] ">
          <figure
            className="mxAuto w-[1280px] max-w-full transformY"
            id="banner-pd"
          >
            <img src={Dan} />
          </figure>
        </section>
        {/* RGB Display */}
        <section
          className="pd_block rgbBg pt-[50px] pb-[80px] overflow-hidden flexCenter bg-center bg-no-repeat bg-black  "
          style={{ backgroundImage: `url(${RgbBg})`, backgroundSize: "140%" }}
        >
          <div className="mxAuto w-full text-center overflow-hidden">
            <Textbox
              img={RgbMysticLight}
              imgTitle={"RgbMysticLight"}
              text={"Game Fancier & Easier"}
              context={
                "Featuring RGB lighting adorning the analog sticks and ABXY buttons on both sides, the Claw effortlessly exudes the perfect gaming style. Tailor it to your preferences and enjoy watching the lights dance to your favorite tunes!"
              }
            />

            <div className="w-[90%] my-[100px] mx-auto min-[996px]:w-[80%] min-[996px]:my-[80px] relative">
              <div className="absolute top-[50%] left-[50%] w-[60%] transform50 z-[1]  ">
                <video
                  autoPlay
                  loop
                  poster="https://storage-asset.msi.com/global/picture/image/feature/Handhelds/Claw-A1M//rgb-video-img.jpg"
                  muted
                  playsInline
                  className="w-full max-h-full"
                >
                  <source
                    src="https://storage-asset.msi.com/global/picture/image/feature/Handhelds/Claw-A1M/video/claw_120Hz.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <picture>
                <img
                  className="absolute top-0 left-0 z-[3] rgb-light-pd-anim  "
                  src={RgbPdLight}
                  alt="claw - RGB"
                />
              </picture>
              <picture>
                <img
                  className="w-full relative z-[2]"
                  src="https://storage-asset.msi.com/global/picture/image/feature/Handhelds/Claw-A1M/rgb-pd-v1.png"
                  alt="claw - RGB"
                />
              </picture>
            </div>
            <Textbox
              img={HZIcon}
              imgTitle={"120Hz"}
              text={"7-inch Smoothness Ready"}
              context={
                "Dive into the ultimate gaming experience with our 7-inch premium120Hz gaming display, with exceptional color reproduction andsmooth action."
              }
            />
          </div>
          <div className="absolute w-full flexCenter">
            <figure className="min-[996px]:w-[55%] w-[75%] absolute left-[-15%] rgb-light-pd-anim">
              <img src={RgbCircle} alt="rgbCircleLeft" />
            </figure>
            <figure className="min-[996px]:w-[55%] w-[75%] absolute right-[-15%] rgb-light-pd-anim">
              <img src={RgbCircle} alt="rgbCircleRight" />
            </figure>
          </div>
        </section>
        {/* Trigger pd-block */}
        <section className="pd_block overflow-hidden">
          <div className="relative w-full">
            <picture>
              <source
                media="(min-width: 996px)"
                type="image/webp"
                srcSet="https://storage-asset.msi.com/global/picture/image/feature/Handhelds/Claw-A1M/trigger.webp"
              />
              <img src={TriggerXs} />
            </picture>
          </div>
          <div className="pd_container top-0 ">
            <div className="textbox-anim min-[996px]:mt-[8%]" id="triggerAnim">
              <div className="flex justify-center min-[996px]:justify-start">
                {TriggerImg.map((item, i) => (
                  <figure key={i} className="w-[50%] max-w-[200px] block">
                    <img src={item.img} />
                  </figure>
                ))}
              </div>
              <h2 className="min-[996px]:text-[32px] text-[24px] text-white mb-[10px] font-bold">
                Intuitive Control
              </h2>
              <p className="leading-[1.5] text-white">
                Outfitted with Hall Effect Analog Sticks & Triggers, <br />
                built to last with microscopic precision.
              </p>
              {triggerData.map((data, i) => (
                <div key={i} className="mt-[25px] font-semibold text-white ">
                  <span
                    className={`text-[36px] font-bold block ${
                      data.color === "blue"
                        ? "cpu-data-blue "
                        : "cpu-data-pink "
                    }`}
                  >
                    {data.text}
                  </span>
                  {data.subText}
                </div>
              ))}
            </div>
            <div className="flex justify-center  min-[996px]:hidden">
              <button className="btnstyle text-white border-white ">
                <span className="z-[2] relative">Learn More</span>
              </button>
            </div>
          </div>
        </section>
        {/* Wifi pd-block */}
        <section className="w-full bg-[#050815] overflow-hidden  ">
          <div className="w-full relative">
            <picture>
              <source
                media="(min-width: 996px)"
                type="image/jpeg"
                srcSet="https://storage-asset.msi.com/global/picture/image/feature/Handhelds/Claw-A1M/wifi7-v1.jpg"
              />
              <img src={WifiBg} />
            </picture>
          </div>
          <div
            className="mxAuto w-full text-center min-[996px]:w-[40%] transformY"
            id="fadeUp"
          >
            <figure className="max-w-[80px] my-[30px] mx-auto">
              <img src={Wifi7} alt="Wifi7" />
            </figure>
            <h2 className="min-[996px]:text-[32px] text-[24px] text-white mb-[10px] font-bold">
              WI-FI 7 READY
            </h2>
            <p className="leading-[1.5] text-white">
              Wi-Fi 7 offers multi-gigabit performance, reaching peak speeds of
              5.8 Gbps on 5 and 6GHz connections. With 320MHz channel
              bandwidths, it delivers substantial throughput gains. Enjoy
              ultra-low 2ms latency and jitter-free experiences across multiple
              links. The 6GHz spectrum provides additional capacity for enhanced
              performance.
            </p>
            <p className="leading-[1.5] text-white opacity-70 mt-[25px]">
              *Based on theoretical maximum performance. May vary by wireless
              configuration.
            </p>
          </div>
        </section>
        {/* Thunder pd-block */}
        <section className="bg-white relative overflow-hidden mx-auto w-full block">
          <div className="block w-full">
            <picture id="thuderbg">
              <source
                media="(min-width: 996px)"
                srcSet="https://storage-asset.msi.com/global/picture/image/feature/Handhelds/Claw-A1M/msi-claw-thunderbolt-4-img.png"
              />
              <img src={MsiThunderBgXs} alt="MSI Thunderbolt 4"></img>
            </picture>
          </div>
          <div
            className="block text-center w-full my-[-20px] mx-auto pb-[6%] min-[996px]:my-[-40px] px-[25px] relative transformY"
            id="thunderBlock"
          >
            <div className="block max-w-[120px] w-2/4 my-[20px] mx-auto ">
              <img src={ThunderBolt} alt="MSI Thunderbolt 4 icon" />
            </div>
            <h2 className="min-[996px]:text-[32px] text-[24px] text-black mb-[10px] font-bold">
              Endless Expandability
            </h2>
            <p className="leading-[1.5] text-black">
              Swift Transfers and Extensive Connectivity with Thunderbolt™ 4
            </p>
            <p className="leading-[1.5] text-black opacity-70 mt-[20px] max-w-[900px] mx-auto ">
              *Support PD charging from 45W (20V@2.25A) and up to 65W(20V@3.25A)
              at System running (S0 Power State) and Sleep mode (Modern Standby
              Low-Power Idle State), from 15W(5V@3A) and up to 65W(20V@3.25A) at
              Hibernate (S4 Power State), Off (S5 Power State). The overall
              system performance may be affected in order to adapt the charging
              current. The charging rate will vary depending on the system and
              battery status. MSI PD Charger is recommended.
            </p>
          </div>
        </section>
        {/* Claw Io block */}
        <ClawIo
          srcSet={
            "https://storage-asset.msi.com/global/picture/image/feature/Handhelds/Claw-A1M/IO/msi-claw-top-io-new01.png"
          }
          img={topClaw}
          IoList={ClawIoList}
          leftCircle={pinkCircle}
          rightCirle={lightBlueCircle}
          Circles={true}
        />

        <ClawIo
          srcSet={
            "https://storage-asset.msi.com/global/picture/image/feature/Handhelds/Claw-A1M/IO/msi-claw-bottom-io-new.png"
          }
          img={bottomClaw}
          IoList={bottomIoList}
        />

        <Specs laptop={ClawA1MSpecs} />
      </main>
      <Footer />
    </>
  );
};

export default Handheld;
