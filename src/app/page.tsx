"use client";

import NewNav from "@/components/Navbar";
import Slider from "@/components/Slider";
import Image from "next/image";
import Footer from "@/components/Footer"
import FAB from "@/components/FAB";
import Head from "next/head";
import ModifiedSlider from "@/components/ModifiedSlider";
export default function Home() {
  return (
    <>
      <Head>
        <title>Karvi Printing Press - Best Printing Press in Gorakhpur and Deoria</title>
      </Head>
      <NewNav />
      <ModifiedSlider />





      <Image src={'/img4.jpg'} alt="10" width={1000} height={400} className="w-full" layout="responsive" />
      <div className="h-50 w-full">

      </div>

      {/* Fab */}
      <FAB />




      {/* foooter */}
      <Footer />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Karvi Printing Press",
            url: "https://karviprinting.com",
            logo: "https://karviprinting.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91 9696745350",
              contactType: "Customer Service",
            },
          }),
        }}
      />
    </>
  );
}