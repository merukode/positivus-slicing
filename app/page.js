import Image from "next/image";
import Company from "./components/Company";
import Boxes from "./components/Boxes";

export default function Home() {
  return (
    <main className="w-[1600px] m-auto mt-5">
      {/* Navabar */}
      <section className="flex justify-between items-center">
        <Image
          src="/positivus.svg"
          alt="Logo Main"
          width={200}
          height={200}
          priority
        />

        <div className="flex gap-5 items-center">
          <p>About us</p>
          <p>Services</p>
          <p>Use Cases</p>
          <p>Pricing</p>
          <p>Blog</p>

          <button className="border-2 border-black p-3 rounded-md">
            Request a quote
          </button>
        </div>
      </section>
      {/* Hero Section */}
      <section className="flex items-center mt-10">
        <div className="w-full">
          <h1 className="text-[5em] mb-10 font-bold">
            Navigating the digital landscape for success
          </h1>
          <p className="text-xl mb-10">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="p-3 text-white bg-black rounded-md">
            Book a consultation
          </button>
        </div>


        <div className="w-full">
          <Image
            src="/hero.svg"
            alt="Hero"
            width={5000}
            height={500}
            priority
          />
        </div>
      </section>
      {/* Company Logos */}
      <Company/>
      {/* Services */}
      <section className="mt-28 px-52">
        <div className="flex gap-5 items-center">
        <h2 className="text-4xl mt-5 bg-[#B9FF66] font-bold mb-5">Services</h2>
        <p>At our digital marketing agency, we offer a range of services to <br/> help businesses grow and succeed online. These services include:</p>
        </div>
        {/* Boxes */}
        <Boxes/>
      </section>
      {/* Divider */}
      <section>

      </section>
    </main>
  );
}
