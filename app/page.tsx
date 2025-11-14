'use client'

import ContainerBodyLayout from "@/components/layout/ContainerBodyLayout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CountUp from "react-countup";
import { FaArrowCircleRight, FaCheckCircle } from "react-icons/fa";
import React from 'react'
import CTA from "@/components/common/sections/cta";
import Marquee from "react-fast-marquee";
import MotionDiv from "@/components/custom-animation";

const logos1 = [
  '/home/tech-stack/0.svg',
  '/home/tech-stack/1.svg',
  '/home/tech-stack/2.svg',
  '/home/tech-stack/3.svg',
  '/home/tech-stack/4.svg',
  '/home/tech-stack/5.svg',
  '/home/tech-stack/6.svg',
  '/home/tech-stack/7.svg',
  '/home/tech-stack/8.svg',
]

const logos2 = [
  '/home/tech-stack/9.svg',
  '/home/tech-stack/10.svg',
  '/home/tech-stack/11.svg',
  '/home/tech-stack/12.svg',
  '/home/tech-stack/13.svg',
  '/home/tech-stack/14.svg',
  '/home/tech-stack/15.svg',
  '/home/tech-stack/16.svg',
  '/home/tech-stack/17.svg',
]

const logos3 = [
  '/home/tech-stack/18.svg',
  '/home/tech-stack/19.svg',
  '/home/tech-stack/20.svg',
  '/home/tech-stack/21.svg',
  '/home/tech-stack/22.svg',
  '/home/tech-stack/23.svg',
  '/home/tech-stack/24.svg',
  '/home/tech-stack/25.svg',
  '/home/tech-stack/26.svg',
]

const logos4 = [
  '/home/tech-stack/27.svg',
  '/home/tech-stack/28.svg',
  '/home/tech-stack/29.svg',
  '/home/tech-stack/30.svg',
  '/home/tech-stack/31.svg',
  '/home/tech-stack/32.svg',
  '/home/tech-stack/33.svg',
  '/home/tech-stack/34.svg',
  '/home/tech-stack/35.svg',
]

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* hero */}
      <section className="relative min-h-screen overflow-hidden xl:-mt-[86px]">
        {/* bg video */}
        <iframe
          className="absolute -top-20 -left-[50vw] min-w-[200vw] min-h-[200vh] object-cover pointer-events-none -z-0"
          src="https://www.youtube.com/embed/Hgg7M3kSqyE?autoplay=1&mute=1&loop=1&playlist=Hgg7M3kSqyE&controls=0&showinfo=0&modestbranding=1&rel=0"
          title="YouTube background"
          frameBorder="0"
          allow="autoplay; fullscreen"
        ></iframe>

        {/* overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        <MotionDiv type="bottomToTop" className="relative flex justify-center items-center py-6 md:py-8 xl:py-20 xl:pt-36 min-h-screen z-10">
          <div className="w-full md:w-8/12">
            <h2 className="font-bold text-6xl text-center text-white mb-8">Empowering Businesses <br /> through scalable AI solutions</h2>
            <p className="text-center text-white">Optimize  business operations by 40%,improve accuracy, reduce <br /> costs while maintaining robust security standards.</p>
            <div className="flex justify-center items-center gap-4 mt-12">
              <div>
                <MotionDiv isButton>
                  <Link href="/contact" className="bg-primary text-white font-semibold py-3 px-6 rounded-3xl">
                    Request for PoC
                  </Link>
                </MotionDiv>
              </div>
              <div>
                <MotionDiv isButton>
                  <Link href="/contact" className="bg-transparent border-2 border-primary text-white font-semibold py-3 px-6 rounded-3xl">
                    Get Quote
                  </Link>
                </MotionDiv>
              </div>
            </div>
          </div>
        </MotionDiv>
      </section>

      {/* counter up */}
      <section className="py-10 bg-gray-50">
        <ContainerBodyLayout>
          <div className="flex justify-center items-center">
            <div className="w-full md:w-3/12 text-center">
              <h2 className="text-primary font-semibold text-6xl mb-3">
                <CountUp start={0} end={6} duration={3} />+
              </h2>
              <h5 className="text-xl font-medium">Own AI products</h5>
            </div>
            <div className="w-full md:w-3/12 text-center">
              <h2 className="text-primary font-semibold text-6xl mb-3">
                <CountUp start={0} end={10} duration={3} />+
              </h2>
              <h5 className="text-xl font-medium">Clients</h5>
            </div>
            <div className="w-full md:w-3/12 text-center">
              <h2 className="text-primary font-semibold text-6xl mb-3">
                <CountUp start={0} end={12} duration={3} />+
              </h2>
              <h5 className="text-xl font-medium">Crew</h5>
            </div>
            <div className="w-full md:w-3/12 text-center">
              <h2 className="text-primary font-semibold text-6xl mb-3">
                <CountUp start={0} end={2} duration={3} />+
              </h2>
              <h5 className="text-xl font-medium">Years of experiences</h5>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* qlens */}
      <section className="py-12">
        <ContainerBodyLayout maxWidth="xl">
          <div className="flex gap-2">
            <MotionDiv type="leftToRight" className="w-full md:w-4/12">
              <Image
                src="/home/blens/1.png"
                alt="Logo"
                width={108}
                height={34}
                className="object-cover"
              />
              <h3 className="text-3xl font-medium mt-5 mb-5">Your Business Assistant</h3>
              <p className="mb-5">Key decision maker depends on the teams to get daily or regular update of the business operations and reports.</p>
              <h3 className="text-xl font-semibold mb-4">Traditional ways​</h3>
              <Image
                src="/home/blens/2.png"
                alt="Logo"
                width={598}
                height={336}
                className="object-cover"
              />
            </MotionDiv>
            <MotionDiv type="bottomToTop" className="w-full md:w-4/12">
              <h3 className="text-xl font-semibold mb-4">Blens ways</h3>
              <div className="mx-auto">
                <Image
                  src="/home/blens/3.png"
                  alt="Logo"
                  width={350}
                  height={350}
                  className="object-cover"
                />
              </div>
            </MotionDiv>
            <MotionDiv type="rightToLeft" className="w-full md:w-4/12">
              <h3 className="text-xl font-medium">How Blens works</h3>
              <Image
                src="/home/blens/4.jpg"
                alt="Logo"
                width={450}
                height={450}
                className="object-cover"
              />
              <p>Blens bridges the gap between scattered data and business clarity by unifying ERP, CRM, and file systems, processing all types of documents, and answering queries in plain English.</p>
            </MotionDiv>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* IR tool */}
      <section className="py-12">
        <ContainerBodyLayout maxWidth="xl">
          <MotionDiv type="bottomToTop" className="flex gap-2">
            <div className="w-full md:w-4/12">
              <div className="flex gap-3 items-center mb-4">
                <div className="max-w-[90px]">
                  <Image
                    src="/home/irt/1.png"
                    alt="Logo"
                    width={305}
                    height={210}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-semibold">Intelligent Reporting Tool</h5>
                </div>
              </div>
              <Image
                src="/home/irt/2.png"
                alt="Logo"
                width={657}
                height={430}
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-4/12">
              <Image
                src="/home/irt/3.png"
                alt="Logo"
                width={752}
                height={429}
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-4/12">
              <div className="mx-7 mb-4">
                <Image
                  src="/home/irt/4.png"
                  alt="Logo"
                  width={360}
                  height={77}
                  className="object-cover"
                />
              </div>
              <Image
                src="/home/irt/5.png"
                alt="Logo"
                width={610}
                height={458}
                className="object-cover"
              />
            </div>
          </MotionDiv>
        </ContainerBodyLayout>
      </section>

      {/* brain clerk */}
      <section className="pt-14 pb-10">
        <ContainerBodyLayout>
          <div className="flex gap-4">
            <MotionDiv type="leftToRight" className="w-full md:w-6/12">
              <Image
                src="/home/brain-clerk/1.png"
                alt="Logo"
                width={504}
                height={533}
                className="object-cover"
              />
            </MotionDiv>
            <MotionDiv type="rightToLeft" className="w-full md:w-6/12">
              <Image
                src="/home/brain-clerk/2.png"
                alt="Logo"
                width={121}
                height={117}
                className="object-cover"
              />
              <h1 className="text-[42px] font-medium my-5">
                Your Smart AI Assistant for Document Management
              </h1>
              <p className="mb-6">
                BrainClerk turns messy, unstructured data into clean, structured formats fast. Whether it’s PDFs, scanned files, images, or forms, BrainClerk extracts key information and organizes it into Excel or database-ready formats with ease.
              </p>
              <ul className="mb-4">
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Converts unstructured data into structured, usable formats
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Auto sorts files by content, type, or date
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Searches inside documents, even scanned ones
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Adds smart tags like dates, names, and authors
                </li>
              </ul>
              <MotionDiv isButton className="mt-6">
                <Link href="/contact" className="bg-primary text-white font-semibold py-3 px-6 rounded-3xl inline-block">
                  Contact Us
                </Link>
              </MotionDiv>
            </MotionDiv>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* nlp */}
      <section className="py-16">
        <ContainerBodyLayout maxWidth="xl">
          <div className="flex gap-4">
            <div className="w-full md:w-7/12">
              <div className="relative bg-[#104A33] bg-cover bg-center bg-no-repeat rounded-2xl py-14 px-6" style={{ backgroundImage: "url('/home/nlp/1.webp')" }}>
                <h2 className="text-4xl font-semibold text-white mb-6">
                  NPL Driven <br />
                  <span className="text-[#88C273]">AI Solutions</span>
                </h2>
                <p className="text-white">leverage natural language processing to help machines, <br />
                  understand,interpret, and respond to human language</p>
              </div>
            </div>
            <div className="w-full md:w-5/12">
              <div className="relative">
                {/* Thumbnail with play button */}
                <div
                  className="relative cursor-pointer group inline-block"
                  onClick={openModal}
                >
                  <Image
                    src="/home/nlp/2.png"
                    alt="img"
                    width={553}
                    height={320}
                    className="object-cover"
                  />
                  {/* Overlay Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gray-100 rounded-full p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="black"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.25v13.5l13.5-6.75L5.25 5.25z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Modal */}
                {isOpen && (
                  <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={closeModal} // Close when clicking outside
                  >
                    <div
                      className="bg-black rounded-lg overflow-hidden relative w-[90%] md:w-[800px] aspect-video"
                      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/W_kUAbItGng?autoplay=1"
                        title="YouTube video player"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* project sections */}
      <section className="py-10">
        <ContainerBodyLayout maxWidth="xl">
          <h2 className="text-[38px] text-center font-medium mb-8"><span className="text-primary">Our AI Services</span> accelerating innovation & <br /> guaranteeing ROI</h2>
          <div className="flex flex-col md:flex-row gap-4 relative">
            <div className="w-full md:w-6/12 md:sticky md:top-0 self-start">
              <div className="bg-primary min-h-screen flex items-center p-4 md:p-8 rounded-3xl">
                <div>
                  <h2 className="text-6xl font-medium text-white mb-2">
                  Revolutionize Engineering with AI-First Transformation Services
                  </h2>
                  <p className="text-white">
                    From design to deployment, harness artificial intelligence to automate, innovate, and scale with precision. Integrating advanced analytics, automation, and machine learning to drive smarter decisions and sustainable growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <div className="md:sticky md:top-0 bg-[#E8F0FE] rounded-3xl p-2">
                <Image
                  src="/home/projects/1.webp"
                  alt="Logo"
                  width={1024}
                  height={683}
                  className="object-cover rounded-3xl mb-4"
                />
                <h2 className="text-3xl font-semibold mb-3">Agro Rx</h2>
                <h6 className="text-xl mb-4">Agro Rx is a comprehensive solution designed to support farmers in every aspect of farming.</h6>
                <ul className="mb-4 space-y-2">
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-primary" /> 
                    Accepts input in both Bangla and English.
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-primary" /> 
                    Farmers can speak or type their queries.
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-primary" /> 
                    Provides instant help on crop diseases, pesticides, and farming techniques.
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-primary" /> 
                    Farmers can send photos of affected plants for accurate diagnosis
                  </li>
                </ul>
              </div>
              <div className="md:sticky md:top-0 bg-[#E8F0FE] rounded-3xl p-2">
                <Image
                  src="/home/projects/2.jpg"
                  alt="Logo"
                  width={1024}
                  height={683}
                  className="object-cover rounded-3xl mb-4"
                />
                <h2 className="text-3xl font-semibold mb-3">Agro Rx</h2>
                <h6 className="text-xl mb-4">Agro Rx is a comprehensive solution designed to support farmers in every aspect of farming.</h6>
                <ul className="mb-4 space-y-2">
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-primary" /> 
                    Accepts input in both Bangla and English.
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-primary" /> 
                    Farmers can speak or type their queries.
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-primary" /> 
                    Provides instant help on crop diseases, pesticides, and farming techniques.
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-primary" /> 
                    Farmers can send photos of affected plants for accurate diagnosis
                  </li>
                </ul>
              </div>
              <div className="md:sticky md:top-0 bg-[#E8F0FE] rounded-3xl p-2">
                <Image
                  src="/home/projects/3.webp"
                  alt="Logo"
                  width={1024}
                  height={683}
                  className="object-cover rounded-3xl mb-4"
                />
                <h2 className="text-3xl font-semibold mb-3">Agro Rx</h2>
                <h6 className="text-xl mb-4">Agro Rx is a comprehensive solution designed to support farmers in every aspect of farming.</h6>
                <ul className="mb-4 space-y-2">
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-primary" /> 
                    Accepts input in both Bangla and English.
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-primary" /> 
                    Farmers can speak or type their queries.
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-primary" /> 
                    Provides instant help on crop diseases, pesticides, and farming techniques.
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-primary" /> 
                    Farmers can send photos of affected plants for accurate diagnosis
                  </li>
                </ul>
              </div>
              <div className="md:sticky md:top-0 bg-[#E8F0FE] rounded-3xl p-2">
                <Image
                  src="/home/projects/4.webp"
                  alt="Logo"
                  width={1024}
                  height={683}
                  className="object-cover rounded-3xl mb-4"
                />
                <h2 className="text-3xl font-semibold mb-3">Agro Rx</h2>
                <h6 className="text-xl mb-4">Agro Rx is a comprehensive solution designed to support farmers in every aspect of farming.</h6>
                <ul className="mb-4 space-y-2">
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-primary" /> 
                    Accepts input in both Bangla and English.
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-primary" /> 
                    Farmers can speak or type their queries.
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-primary" /> 
                    Provides instant help on crop diseases, pesticides, and farming techniques.
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-primary" /> 
                    Farmers can send photos of affected plants for accurate diagnosis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* tech stack */}
      <section className="py-16 overflow-hidden">
        <h2 className="text-[38px] text-center mb-6 lg:mb-10">Our Robust AI Tech Stack</h2>
        <div style={{ width: '100%' }}>
          <Marquee>
            {logos1.map((slide, i) => (
              <div key={i} className="px-2 mb-4">
                <div className="grid place-items-center bg-gray-100 px-6 py-4 min-w-40 min-h-[70px] rounded-[40px]">
                  <Image
                    src={slide}
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-cover mx-auto"
                  />
                </div>
              </div>
            ))}
          </Marquee>
          <Marquee direction="right">
            {logos2.map((slide, i) => (
              <div key={i} className="px-2 mb-4">
                <div className="grid place-items-center bg-gray-100 px-6 py-4 min-w-40 min-h-[70px] rounded-[40px]">
                  <Image
                    src={slide}
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-cover mx-auto"
                  />
                </div>
              </div>
            ))}
          </Marquee>
          <Marquee>
            {logos3.map((slide, i) => (
              <div key={i} className="px-2 mb-4">
                <div className="grid place-items-center bg-gray-100 px-6 py-4 min-w-40 min-h-[70px] rounded-[40px]">
                  <Image
                    src={slide}
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-cover mx-auto"
                  />
                </div>
              </div>
            ))}
          </Marquee>
          <Marquee direction="right">
            {logos4.map((slide, i) => (
              <div key={i} className="px-2 mb-4">
                <div className="grid place-items-center bg-gray-100 px-6 py-4 min-w-40 min-h-[70px] rounded-[40px]">
                  <Image
                    src={slide}
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-cover mx-auto"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* cta */}
      <CTA />
    </>
  );
}
