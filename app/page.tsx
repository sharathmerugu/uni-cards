import Header from "./components/Header";
import NXWave from "./components/NXWave";
import Earn from "./components/Earn";
import AssuredCashback from "./components/AssuredCashback";
import FiveX from "./components/FiveX";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header />
      <NXWave />
      <Earn />
      <AssuredCashback />
      <FiveX />
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
      <div className="w-full bottom-0 z-40 fixed md:hidden py-8 css-1s4jw3r">
        <div className="w-[90vw] mx-auto md:mx-0 md:max-w-[280px] font-medium">
          <div className="flex flex-col transition-all ease-in">
            <button className="p-4 rounded-lg z-10 flex justify-between items-center bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]">
              <span>Apply now</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
