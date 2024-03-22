import Image from "next/image";

export default function AssuredCashback() {
    return (
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
    )
}