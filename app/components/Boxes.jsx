import React from "react";
import Image from "next/image";
function Boxes() {
  return (
    <main className="grid grid-cols-2 gap-4 mt-10">
      <div className="w-full shadow-5xl p-8 flex  justify-between rounded-3xl border-2">
        <section>
        <p className="text-3xl inline bg-[#B9FF66] bg-">Search Engine Optimization</p>
        <span className="flex gap-3 mt-16 items-center">
            <Image
              src="/green-arrow.svg"
              alt="Search"
              width={30}
              height={30}
              priority
            />
            <p>Learn More</p>
        </span>
        </section>
        <Image
          src="/ilus-1.svg"
          alt="Search"
          width={200}
          height={200}
          priority
        />
      </div>

      <div className="w-full bg-[#B9FF66] p-8 shadow-5xl flex justify-between rounded-3xl border-2">
        <section>
        <p className="text-3xl inline bg-[#ffffff] bg-">Pay-per-click advertising</p>
        <span className="flex gap-3 mt-16 items-center">
            <Image
              src="/green-arrow.svg"
              alt="Search"
              width={30}
              height={30}
              priority
            />
            <p>Learn More</p>
        </span>
        </section>
        <Image
          src="/ilus-1.svg"
          alt="Search"
          width={200}
          height={200}
          priority
        />
      </div>

      <div className="w-full bg-[#191A23] p-8 shadow-5xl flex justify-between rounded-3xl border-2">
        <section>
        <p className="text-3xl inline bg-[#ffffff] bg-">Social Media Marketing</p>
        <span className="flex gap-3 mt-16 items-center">
            <Image
              src="/white-arrow.svg"
              alt="Search"
              width={30}
              height={30}
              priority
            />
            <p className="text-white">Learn More</p>
        </span>
        </section>
        <Image
          src="/ilus-1.svg"
          alt="Search"
          width={200}
          height={200}
          priority
        />
      </div>

      <div className="w-full p-8 shadow-5xl flex justify-between rounded-3xl border-2">
        <section>
        <p className="text-3xl inline bg-[#B9FF66] bg-">Email <br/> Marketing</p>
        <span className="flex gap-3 mt-16 items-center">
            <Image
              src="/green-arrow.svg"
              alt="Search"
              width={30}
              height={30}
              priority
            />
            <p>Learn More</p>
        </span>
        </section>
        <Image
          src="/ilus-1.svg"
          alt="Search"
          width={200}
          height={200}
          priority
        />
      </div>

      <div className="w-full bg-[#b9ff66] p-8 shadow-5xl flex justify-between rounded-3xl border-2">
        <section>
        <p className="text-3xl inline bg-[#fff] bg-">Content <br/> Creation</p>
        <span className="flex gap-3 mt-16 items-center">
            <Image
              src="/green-arrow.svg"
              alt="Search"
              width={30}
              height={30}
              priority
            />
            <p>Learn More</p>
        </span>
        </section>
        <Image
          src="/ilus-1.svg"
          alt="Search"
          width={200}
          height={200}
          priority
        />
      </div>

      <div className="w-full p-8 shadow-5xl flex justify-between rounded-3xl border-2">
        <section>
        <p className="text-3xl inline bg-[#B9FF66] bg-">Search Engine Optimization</p>
        <span className="flex gap-3 mt-16 items-center">
            <Image
              src="/green-arrow.svg"
              alt="Search"
              width={30}
              height={30}
              priority
            />
            <p>Learn More</p>
        </span>
        </section>
        <Image
          src="/ilus-1.svg"
          alt="Search"
          width={200}
          height={200}
          priority
        />
      </div>
    </main>
  );
}

export default Boxes;
