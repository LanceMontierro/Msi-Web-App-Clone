import { Nav, Title, Footer } from "../Components";
import { loginBg } from "../assets";
import { Link } from "react-router-dom";
import { CiUser, CiGift, CiMobile3 } from "react-icons/ci";
import { memberShip, appItem, socialLogin } from "../Constants";
import { useState, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();

  const [messageBox, setMessageBox] = useState(false);
  const submissionHistoryRef = useRef([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentSubmission = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    submissionHistoryRef.current = [
      ...submissionHistoryRef.current,
      currentSubmission,
    ];

    emailRef.current.value = "";
    passRef.current.value = "";

    console.log("Submission history:", submissionHistoryRef.current);
  };

  const handleMessage = (e) => {
    e.preventDefault();
    setMessageBox(!messageBox);
    document.body.style.overflow = messageBox ? "" : "hidden";
  };

  const closeMessage = (e) => {
    e.preventDefault();
    setMessageBox(false);
    document.body.style.overflow = messageBox ? "" : "hidden";
  };

  return (
    <>
      <Nav />
      <main>
        <div className="bg-[#f1f1f1] relative text-center py-[7vh] px-0 ">
          <div className="absolute top-[-20%] left-0 w-full">
            <img
              src={loginBg}
              alt="login-Bg"
              className="max-w-full overflow-hidden"
            />
          </div>
          <div className="w-full max-w-[1330px] mxAuto z-[2]">
            <header className="text-center py-[45px] px-0">
              <Title Title={"Welcome to Msi Member Center "} />
            </header>
            <div className="relative justify-between min-[996px]:flex ">
              <section className="min-[996px]:order-2 min-[996px]:text-left min-[996px]:flex-5 ">
                <h3 className="text-colorGray800 text-titlemd font-bold">
                  Sign in Msi Account
                </h3>
                <p className="text-textmd pt-[10px] px-0 pb-[15px]">
                  Please enter your registered account to sign in MSI member
                  center!
                </p>
                {/* Form */}
                <form>
                  <div>
                    <input
                      type="email"
                      className="w-full p-[15px] border border-colorGray300 text-textxs text-colorGray800 rounded-md"
                      placeholder="Email"
                      ref={emailRef}
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      type="password"
                      ref={passRef}
                      className="w-full p-[15px] border border-colorGray300 text-textxs text-colorGray800 rounded-md"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mt-2 pt-3">
                    <button
                      type="submit"
                      className="text-textxs text-white text-left w-full py-[10px] px-[25px] bg-colorRed400 cursor-pointer flex justify-between items-center hover:bg-red-800 duration-300 ease-in-out "
                      onClick={handleSubmit}
                    >
                      <span>Sign in</span>
                    </button>
                  </div>
                  <div className="flex justify-center mt-[15px]">
                    <Link>
                      <div className="text-[#666666] hover:text-colorRed300 ">
                        Forgot Your Password?
                      </div>
                    </Link>
                    <Link className="text-[#666666] ml-[5px] pl-[5px] inline-block border-l border-colorGray300 hover:text-colorRed300">
                      <div> Resend Verification Email </div>
                    </Link>
                  </div>
                  <div className="py-[15px] px-0 text-center min-[996px]:hidden block">
                    <h3 className="text-textsm py-[15px]">
                      Not a Msi Member Yet?
                    </h3>
                    <button
                      onClick={handleMessage}
                      className="bg-colorGray400 p-[15px] rounded-md text-white hover:bg-colorGray600 duration-300 ease-in-out "
                    >
                      Create An Account
                    </button>
                  </div>
                </form>
                {/* Social Login */}
                <div className="flex justify-between my-[15px] mx-auto uppercase text-[14px] border border-t-colorGray300 pt-[15px] mt-[25px] max-[996px]:flex-col  ">
                  <span>Or Sign in with</span>
                  <div className="flexCenter max-[996px]:mt-4 ">
                    {socialLogin.map((social, index) => {
                      const Icon = social.icon;
                      const bgStyle = { backgroundColor: social.bg };

                      return (
                        <Link
                          key={index}
                          className="ml-[5px] w-[50px] h-[50px] border-0 text-center rounded-md relative cursor-pointer flexCenter "
                          style={bgStyle}
                        >
                          <Icon className=" text-white text-[24px] inline-block  " />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </section>
              <section className="text-center text-textxs min-[996px]:flex-5 min-[996px]:text-left">
                <div className="min-[996px]:block hidden  ">
                  <h3 className="text-colorGray800 text-titlemd font-bold">
                    Not A Msi Member Yet?
                  </h3>
                  <p className="pt-[10px] pb-[25px] px-0 text-textmd">
                    Become MSI member to follow latest promotions and support
                    updates.
                  </p>
                  <button
                    className="bg-colorGray400 rounded-md text-white min-[996px]:max-w-[270px] w-full text-left px-[25px] py-[10px] text-textsm hover:bg-colorGray600 duration-300 ease-in-out "
                    onClick={handleMessage}
                  >
                    Create an Account
                  </button>
                </div>
                <div>
                  {/* Welfare item */}
                  <div className="flex w-full text-left py-[25px] px-0 border-b border-colorGray300">
                    <div className="min-[996px]:mr-[8px] min-[996px]:pt-[5px] min-[996px]:flex-6 flex-7   ">
                      <CiUser className="min-[996px]:text-[22px] text-[40px] mr-2" />
                    </div>
                    <div>
                      <h4 className="text-colorGray800 font-bold text-textmd">
                        Membership Benefits
                      </h4>
                      <div>
                        <ul>
                          {memberShip.map((item, index) => (
                            <li className="login-li" key={index}>
                              {item.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Welfare item 2 */}
                  <div className="flex w-full text-left py-[25px] px-0 border-b border-colorGray300">
                    <div className="min-[996px]:mr-[8px] min-[996px]:pt-[5px] min-[996px]:flex-6 flex-7 ">
                      <CiGift className="min-[996px]:text-[22px] text-[40px] mr-2" />
                    </div>
                    <div>
                      <h4 className="text-colorGray800 font-bold text-textmd">
                        Upgrade your member benefits by opt-in MSI Reward
                        Program and enjoy more exclusive rewards!
                      </h4>
                      <Link href="#" className="text-colorGray600 login-link  ">
                        Join Now
                      </Link>
                    </div>
                  </div>
                  {/* Welfare item 3 */}
                  <div className="flex w-full text-left py-[25px] px-0 min-[996px]:border-b min-[996px]:border-colorGray300 ">
                    <div className="min-[996px]:mr-[8px] min-[996px]:pt-[5px] min-[996px]:flex-6 flex-7 ">
                      <CiMobile3 className="min-[996px]:text-[22px] text-[40px] mr-2" />
                    </div>
                    <div>
                      <h4 className="text-colorGray800 font-bold text-textmd">
                        MyMSI
                      </h4>
                      <p className="pb-[10px]">
                        MyMSI gives you front-row access to all things MSI. From
                        App-Only content, quests, and rewards to requesting
                        product support – you can do it all from here!
                      </p>
                    </div>
                  </div>
                  {/* Msi App Box */}
                  <div className="flex justify-center items-center min-[996px]:justify-center min-[996px]:ml-[30px] ">
                    {appItem.map((item, index) => (
                      <div
                        className="mx-[10px] flex-8 min-[996px]:flex-9 min-[996px]:mt-[10px] min-[996px]:mr-[35px]"
                        key={index}
                      >
                        <img
                          src={item.item}
                          className="w-full overflow-hidden"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
          {messageBox && (
            <div className="fixed z-[999] top-0 left-0 w-full h-full py-[2%] overflow-y-auto flexCenter bg-[#ffffff66]">
              <div className="bg-white border border-colorGray300 pt-[30px] px-[30px] pb-[40px] w-[90%] max-w-[600px] text-center">
                <div className="text-right pb-2">
                  <button
                    className="text-right cursor-pointer w-[24px] border-0 hover:text-colorRed300 duration-300 ease-out text-[24px] "
                    onClick={closeMessage}
                  >
                    <IoCloseOutline />
                  </button>
                </div>
                <div>
                  <h3 className="text-colorGray800 min-[450px]:text-titlexl text-[24px] font-bold pb-[20px]">
                    Sign up Now
                  </h3>
                  <p className="pb-[25px]">
                    Please use the following methods to register as an MSI
                    member
                  </p>
                  <div>
                    {socialLogin.map((social, index) => {
                      const Icon = social.icon;
                      const bgStyle = { backgroundColor: social.bg };
                      return (
                        <Link
                          className="flexCenter text-white w-full py-[10px] px-[25px] mt-[10px] cursor-pointer rounded-md "
                          key={index}
                          style={bgStyle}
                        >
                          <Icon className="text-[24px] mr-[10px]" />
                          {social.text}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
