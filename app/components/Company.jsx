import React from 'react'
import Image from "next/image";

function Company() {
  return (
    <section className="flex justify-between items-center mt-10">
        <Image
          src="/company-logo.svg"
          alt="Company Logos"
          width={200}
          height={200}
          priority
        />

        <Image
          src="/logo-1.svg"
          alt="Company Logos"
          width={200}
          height={200}
          priority
        />

        <Image
          src="/logo-2.svg"
          alt="Company Logos"
          width={200}
          height={200}
          priority
        />

        <Image
          src="/logo-3.svg"
          alt="Company Logos"
          width={200}
          height={200}
          priority
        />

        <Image
          src="/logo-4.svg"
          alt="Company Logos"
          width={200}
          height={200}
          priority
        />

        <Image
          src="/logo-5.svg"
          alt="Company Logos"
          width={200}
          height={200}
          priority
        />
      </section>
  )
}

export default Company