import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <header className="flex flex-col justify-center absolute w-[100%] min-h-[80px] z-[15]">
        <div style={{ background: "transparent" }}>
          <div className="flex items-center justify-between w-[100%] max-w-[1330px] mx-auto">
            <div
              style={{ cursor: "pointer" }}
              data-testid="logo"
              className="w-[110px] ml-[40px]"
            >
              <svg
                className="w-[120px] h-[90px]"
                viewBox="0 0 85 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M54.894 39.5039H48.6641V19.77H54.894V39.5039ZM30.4021 25.9999V39.504H24.1723V22.3647C24.1723 21.6765 24.4457 21.0165 24.9322 20.5301C25.4188 20.0435 26.0787 19.77 26.7669 19.77H42.3312C43.0195 19.77 43.6793 20.0435 44.1657 20.5301C44.6523 21.0165 44.9257 21.6765 44.9257 22.3647V39.504H38.696V25.9999H30.4021ZM14.2345 33.2742V19.7702H20.4644V36.9095C20.4644 37.5977 20.1909 38.2576 19.7044 38.744C19.2179 39.2307 18.5579 39.5041 17.87 39.5041H2.30544C1.61752 39.5041 0.957379 39.2307 0.470894 38.744C-0.0157201 38.2576 -0.289062 37.5977 -0.289062 36.9095V19.7702H5.9407V33.2742H14.2345Z"
                  fill="black"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M65.289 19.7708C65.289 21.8685 63.5858 23.5717 61.4882 23.5717C59.3905 23.5717 57.6875 21.8685 57.6875 19.7708C57.6875 17.6732 59.3905 15.9702 61.4882 15.9702C63.5858 15.9702 65.289 17.6732 65.289 19.7708Z"
                  fill="black"
                ></path>
              </svg>
            </div>
            <div className="flex">
              <div className="menu-container hidden md:flex">
                <div className="pl-20">
                  <a
                    href="https://paychek.uni.club/"
                    className="apply_btn no-underline visited:text-white text-white font-medium hover:text-[#7DEDDD] bg-black bg-opacity-60 hover:bg-black rounded-xl py-[11px] px-[30px]"
                  >
                    Uni Paychek
                  </a>
                  <div className="w-full mt-1 h-[2px] undefined"></div>
                </div>
              </div>
              <div className="md:hidden flex pl-20">
                <button
                  className="w-12 h-12 flex justify-center items-center"
                  aria-label="menu"
                >
                  <svg
                    width="31"
                    height="20"
                    viewBox="0 0 31 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="31" height="2" fill="white"></rect>
                    <rect width="31" height="2" fill="white"></rect>
                    <rect width="31" height="2" fill="white"></rect>
                    <rect y="9" width="31" height="2" fill="white"></rect>
                    <rect y="9" width="31" height="2" fill="white"></rect>
                    <rect y="9" width="31" height="2" fill="white"></rect>
                    <rect y="18" width="31" height="2" fill="white"></rect>
                    <rect y="18" width="31" height="2" fill="white"></rect>
                    <rect y="18" width="31" height="2" fill="white"></rect>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden"></div>
      </header>
      <div>
        <div className="relative h-[100vh] w-full flex items-center justify-center">
          <div className="flex flex-col md:flex-row-reverse mx-auto max-w-[1280px] w-full justify-center z-1 bg-transparent">
            <Image
              src="/images/nx_wave_hero.png"
              alt="card_asset"
              width={225}
              height={420}
              className="h-auto w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1] mx-6"
            />
            <div className="z-10 w-full mt-7 md:mt-0 md:my-auto flex flex-col self-end md:self-center px-6">
              <h1 className="font-normal max-w-[300px] md:max-w-[700px] text-3xl md:text-[3.4rem] md:leading-[54px] text-black md:mb-6 ">
                <span>
                  <strong>NX Wave.</strong> The next-gen credit card for those
                  who love rewards.
                </span>
              </h1>
              <div className="mt-4 md:mt-0">
                <p className="font-medium text-sm md:text-base md:mb-9">
                  1% Cashback
                  <svg
                    className="mx-[8px] mb-[2px] inline leading-5"
                    width="12"
                    height="12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z"
                      fill="#000"
                      style={{ mixBlendMode: "darken" }}
                    ></path>
                  </svg>
                  5x Rewards
                  <svg
                    className="mx-[8px] mb-[2px] inline leading-5"
                    width="12"
                    height="12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z"
                      fill="#000"
                      style={{ mixBlendMode: "darken" }}
                    ></path>
                  </svg>
                  Zero Forex Markup
                </p>
              </div>
              <div className="hidden md:block">
                <div className="flex justify-between items-center block max-w-[94vw]">
                  <div className="flex flex-col">
                    <form>
                      <div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
                        <div className="flex items-center">
                          <input
                            className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
                            placeholder="Enter Phone Number"
                            value=""
                          />
                          <span className="w-6 flex items-center justify-end h-full"></span>
                        </div>
                        <button
                          type="submit"
                          className="text-center text-sm leading-7 justify-between pt-2 ml-2 bg-[rgba(253,239,120,var(--tw-bg-opacity))] rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed"
                        >
                          <span>Apply Now</span>
                        </button>
                      </div>
                    </form>
                    <div className="consent flex items-center py-4 px-2 max-w-xs">
                      <input type="checkbox" id="consent-msg" />
                      <label
                        htmlFor="consent-msg"
                        className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer"
                      >
                        You agree to be contacted by Uni Cards over Call, SMS,
                        Email or WhatsApp to guide you through your application.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex hidden max-w-xs flex-col justify-start">
                  <div className="w-full max-w-[300px]">
                    <a
                      href="https://uni-growth.onelink.me/v6cm/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block google-btn-2 font-medium p-4 rounded-lg z-10 bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]"
                    >
                      <div className="w-full flex justify-center items-center">
                        <span>Download</span>
                      </div>
                    </a>
                  </div>
                  <div className="my-2">
                    <p className="text-white md:text-black text-[10px] leading-3">
                      Thank you for your interest in the Uni Card.
                      <br /> Download the Uni Cards app now and get your Uni
                      Card in minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`w-[100vw] h-[100vh] object-cover absolute top-0 left-0 right-0 bottom-0 z-0`}
          >
            <source src="/videos/nxt_wave_bg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="py-12 md:py-[150px]">
        <section>
          <div className="w-full max-w-7xl mx-auto px-6 md:px-4 undefined">
            <div className="flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium">
              <p style={{ opacity: 1, transform: "none" }}>
                Earn 1% assured cashback
                <span className="css-1ggwlzr">on your spends. Get</span> 5X
              </p>
              <p style={{ opacity: 1, transform: "none" }}>
                more value than cashback
                <span className="css-1ggwlzr"> at the Uni Store. Enjoy</span>
              </p>
              <p style={{ opacity: 1, transform: "none" }}>
                <span className="text-[#9EA7AE] css-1ggwlzr">
                  round the clock{" "}
                </span>
                Whatsapp support.{" "}
                <span className="text-[#9EA7AE] css-1ggwlzr">
                  And it&apos;s
                </span>
              </p>
              <p style={{ opacity: 1, transform: "none" }}>
                lifetime free
                <span className="css-1ggwlzr">
                  ; no joining fee, no annual charges.
                </span>
              </p>
            </div>
            <div
              className="flex md:justify-center py-12"
              style={{
                opacity: 0,
                transform: "translateY(-100px) translateZ(0px)",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)",
                }}
                className="flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] justify-center"
              ></div>
            </div>
          </div>
        </section>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-4 px-8">
          <div className="flex justify-center flex-col">
            <div className="flex md:items-center flex-col-reverse md:flex-row w-full font-medium justify-center md:pt-[70px] py-0 md:py-[60px] md:px-8">
              <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
                <div className="w-full md:w-[300px] lg:w-[510px]">
                  <div>
                    <span style={{ fontWeight: 700 }}>
                      1% assured cashback on your spends.
                    </span>
                    <span style={{ fontWeight: 400, color: "#9EA7AE" }}>
                      The more you spend, the more you earn.
                    </span>
                  </div>
                </div>
                <div className="info-caption">
                  <div className="leading-5 mt-10 font-normal text-[13px] md:text-lg text-[#9EA7AE]">
                    Not applicable on fuel purchase, rent & wallet transfers,
                    ATM withdrawals & international transactions.
                  </div>
                </div>
              </div>
              <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
                <div className="flex justify-center overflow-hidden">
                  <div className="relative w-[280px] lg:w-[448px]">
                    <Image
                      alt="cashback"
                      src="/images/one_percent_cashback.png"
                      width={400}
                      height={400}
                      className="max-w-[100%] h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:items-center flex-col-reverse md:flex-row-reverse w-full font-medium justify-center md:pt-[70px] py-0 md:py-[60px] md:px-8">
              <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
                <div className="w-full md:w-[300px] lg:w-[510px]">
                  <div>
                    <span style={{ fontWeight: 700 }}>
                      5x more value than your cashback,
                    </span>
                    <span style={{ fontWeight: 400, color: "#9EA7AE" }}>
                      only at the Uni Store.
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
                <div className="flex justify-center overflow-hidden">
                  <div className="relative w-[280px] lg:w-[448px]">
                    <Image
                      alt="five_x_rewards"
                      src="/images/five_x_rewards.png"
                      width={400}
                      height={400}
                      className="max-w-[100%] h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:items-center flex-col-reverse md:flex-row-reverse w-full font-medium justify-center md:pt-[70px] py-0 md:py-[60px] md:px-8">
              <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
                <div className="w-full md:w-[300px] lg:w-[510px]">
                  <div>
                    <span style={{ fontWeight: 700 }}>Zero Forex Markup.</span>
                    <br />
                    <span style={{ fontWeight: 400, color: "#9EA7AE" }}>
                      Go international, without any fees.
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
                <div className="flex justify-center overflow-hidden">
                  <div className="relative w-[280px] lg:w-[448px]">
                    <Image
                      alt="forex_globe"
                      src="/images/forex_globe.png"
                      width={400}
                      height={400}
                      className="max-w-[100%] h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-40 font-medium justify-start md:justify-center text-[28px] leading-[34px] md:text-[40px] md:leading-[1.2] md:text-center">
              <p>
                Lifetime <span className="text-uni-green">free. </span>
                <span className="block sm:inline-block md:text-center">
                  No joining fee.
                </span>
                <span className="block md:text-center">
                  {" "}
                  No annual charges.{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="py-12 lg:py-[100px] bg-black py-8 relative">
        <Image
          alt="circles"
          src="/images/circles.png"
          width={400}
          height={400}
          className="absolute top-0 h-auto w-[70%]"
        />
        <div className="w-full max-w-7xl mx-auto px-6 md:px-4 md:flex relative py-6">
          <div className="mx-auto w-full flex-[50%] flex-grow-0 my-auto">
            <p className="text-[22px] font-medium text-white mb-4 md:text-[40px] leading-[1.2]">
              We’ve all heard of instant groceries, now say hello to
              <span className="uni-gradient-primary">
                <br /> instant credit.
              </span>
            </p>
            <p className="text-[#BFC9CC] text-[14px] md:text-2xl">
              0% hassle, 100% paperless. Get your <br /> Uni Card instantly.
            </p>
          </div>
          <div className="m-auto w-full md:w-[450px] h-auto md:flex-[50%]">
            <Image
              alt=""
              src="/images/app_screen_1.webp"
              width={400}
              height={400}
              className="m-auto w-[80%] h-auto"
              loading="lazy"
            />
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-4 md:flex relative py-6">
          <div className="mx-auto w-full flex-[50%] flex-grow-0 my-auto">
            <p className="text-[22px] font-medium text-white mb-4 md:text-[40px] leading-[1.2]">
              With Uni,{" "}
              <span className="uni-gradient-primary">
                <br /> you’re always in control.
              </span>
            </p>
            <p className="text-[#BFC9CC] text-[14px] md:text-2xl">
              Set your own payment limits. Choose how and where you spend. Lock
              and unlock your card. All right from the app.
            </p>
          </div>
          <div className="m-auto w-full md:w-[450px] h-auto md:flex-[50%]">
            <Image
              alt=""
              src="/images/app_screen_2.webp"
              width={400}
              height={400}
              className="m-auto w-[80%] h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-[100px] bg-black">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-4 md:flex md:justify-between">
          <div className="flex false w-full items-center md:flex-col md:max-w-xs my-12 md:my-0">
            <div className="flex-[50%] flex-shrink-0 flex w-full">
              <div className="w-full h-36 relative">
                <Image
                  alt=""
                  src="/images/whatsapp_bubble.webp"
                  width={100}
                  height={100}
                  className="absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0"
                />
              </div>
            </div>
            <div className="flex-[50%] flex flex-col">
              <p className="font-medium text-base text-white leading-[18px] md:text-2xl">
                Help, just a WhatsApp away. Anytime, Anyday.
              </p>
              <p className="text-sm text-gray-4 mt-2 md:text-lg">
                <span>
                  During hectic work hours. On lazy Sunday mornings. In the
                  thick of night. Anytime.
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse w-full items-center md:flex-col md:max-w-xs my-12 md:my-0">
            <div className="flex-[50%] flex-shrink-0 flex w-full">
              <div className="w-full h-36 relative">
                <Image
                  alt=""
                  src="/images/rupee_bubble.webp"
                  width={100}
                  height={100}
                  className="absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0"
                />
              </div>
            </div>
            <div className="flex-[50%] flex flex-col">
              <p className="font-medium text-base text-white leading-[18px] md:text-2xl">
                {" "}
                No hidden charges, no last minute surprises.
              </p>
              <p className="text-sm text-gray-4 mt-2 md:text-lg">
                <span>
                  100% money back guarantee if a charge is applied without your
                  knowledge.
                </span>
              </p>
            </div>
          </div>
          <div className="flex false w-full items-center md:flex-col md:max-w-xs my-12 md:my-0">
            <div className="flex-[50%] flex-shrink-0 flex w-full">
              <div className="w-full h-36 relative">
                <Image
                  alt=""
                  src="/images/antivirus_bubble.webp"
                  width={100}
                  height={100}
                  className="absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0"
                />
              </div>
            </div>
            <div className="flex-[50%] flex flex-col">
              <p className="font-medium text-base text-white leading-[18px] md:text-2xl">
                {" "}
                Super secure. Because we care about your money.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-[100px] bg-[#222627] lg:py-[120px]">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-4 md:flex md:flex-col text-left md:text-center">
          <p className="mx-auto text-[28px] font-medium md:text-[40px] md:max-w-6xl text-white leading-[1.2]">
            <span>
              At Uni, we’re committed to{" "}
              <span className="uni-gradient-primary">
                {" "}
                delivering an unmatched credit experience{" "}
              </span>{" "}
              for millions of Indians.
            </span>
          </p>
          <p className="mt-6 max-w-[500px] mx-auto text-[#BFC9CC] text-2xl">
            On this mission, we’ve partnered with some of the best in the
            business.
          </p>
          <div className="md:mt-24 flex flex-row justify-center flex-wrap">
            <div className="flex justify-center w-[100px] md:w-44 mt-10 md:mt-0 md:mx-8 mx-4"></div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center text-center text-[#BFC9CC] text-base sm:text-xl md:text-2xl bg-black py-16 px-5 sm:px-8 md:px-12">
        <p className="max-w-3xl">
          Please note that to stay compliant with RBI guidelines, we have
          discontinued Pay 1/3rd and Pay 1/2 cards for the time being.
        </p>
      </div>
      <div className="w-full bottom-0 z-40 fixed md:hidden py-8 css-1s4jw3r">
        <div className="w-[90vw] mx-auto md:mx-0 md:max-w-[280px] font-medium">
          <div className="flex flex-col transition-all ease-in">
            <button className="p-4 rounded-lg z-10 flex justify-between items-center bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]">
              <span>Apply now</span>
            </button>
          </div>
        </div>
      </div>
      <div style={{ opacity: 1 }}>
        <section className="hidden sm:block fixed bottom-0 w-screen bg-white py-5 z-10">
          <div className="mx-auto max-w-7xl px-12 w-full flex justify-between">
            <div className="flex justify-between items-center block w-full">
              <div className="flex w-full flex-row justify-between items-center">
                <form>
                  <div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
                    <div className="flex items-center">
                      <input
                        className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
                        placeholder="Enter Phone Number"
                        value=""
                      />
                      <span className="w-6 flex items-center justify-end h-full"></span>
                    </div>
                    <button
                      type="submit"
                      className="text-center text-sm leading-7 justify-between pt-2 ml-2 bg-[rgba(253,239,120,var(--tw-bg-opacity))] rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed"
                    >
                      <span>Apply Now</span>
                    </button>
                  </div>
                </form>
                <div className="consent flex items-center py-4 px-2 max-w-xs">
                  <input type="checkbox" id="consent-msg" checked />
                  <label
                    htmlFor="consent-msg"
                    className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer"
                  >
                    You agree to be contacted by Uni Cards over Call, SMS, Email
                    or WhatsApp to guide you through your application.
                  </label>
                </div>
              </div>
            </div>
            <div className="flex hidden w-full flex-row items-center justify-between">
              <div className="w-full max-w-[300px]">
                <a
                  href="https://uni-growth.onelink.me/v6cm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block google-btn-2 font-medium p-4 rounded-lg z-10 bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]"
                >
                  <div className="w-full flex justify-center items-center">
                    <span>Download</span>
                  </div>
                </a>
              </div>
              <div className="my-2">
                <p className="text-white md:text-black text-[10px] leading-3">
                  Thank you for your interest in the Uni Card.
                  <br /> Download the Uni Cards app now and get your Uni Card in
                  minutes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
