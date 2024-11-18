import React from "react";
import Image from "next/image";

const Steps = () => {
  return (
    <div className="mt-24 px-[15%]">
      <div className="box py-10 text-center rounded-md backdrop-blur-[2px]">
        <h1 className="text-[36px] tracking-[-1.55px] title-gradient">
          let’s Generate Your Icon
        </h1>
        <p className="w-[50%] mx-auto text-[#B5B5B5]">
          Your results may vary. We are working in fine tuning results for each
          style. Here are some tips to make better icons:
        </p>
        <div className="flex mt-12 w-[75%] mx-auto justify-between items-center relative">
          {/* <div className="trace-line w-full border-2 absolute z-5 border-dashed border-b-0"></div> */}
          <Image
              src={"/assets/trace-line.svg"}
               layout='fill'
    objectFit='contain'
              alt="trace-line"
              className="absolute"
            />
          <div className="flex flex-col items-center relative">
            <div className="border-2 p-5 rounded-full">
            <Image
              src={"/assets/step-1.svg"}
              width={50}
              height={50}
              alt="step-1"
            />
            </div>
            <p className="mt-3">Describe</p>
          </div>
          <div className="flex flex-col items-center relative">
            <div className="border-2 p-5 rounded-full">
            <Image
              src={"/assets/step-2.svg"}
              width={50}
              height={50}
              alt="step-2"
            />
            </div>
            <p className="mt-3">Choose icon color
            & Style</p>
          </div>
          <div className="flex flex-col items-center relative">
            <div className="border-2 p-5 rounded-full">
            <Image
              src={"/assets/step-3.svg"}
              width={50}
              height={50}
              alt="step-3"
            />
            </div>
            <p className="mt-3">Re-describe
            your icon</p>
          </div>
          <div className="flex flex-col items-center relative">
            <div className="border-2 p-5 rounded-full">
            <Image
              src={"/assets/step-4.svg"}
              width={50}
              height={50}
              alt="step-4"
            />
            </div>
            <p className="mt-3">Export & use</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
