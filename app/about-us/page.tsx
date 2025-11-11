'use client'

import CTA from "@/components/common/sections/cta";
import BottomWaveShape from "@/components/common/shape/BottomWaveShape";
import MotionDiv from "@/components/custom-animation";
import ContainerBodyLayout from "@/components/layout/ContainerBodyLayout";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CountUp from "react-countup";
import { FaChevronDown, FaDatabase, FaMap, FaTable } from "react-icons/fa";

export default function AboutUs() {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return <>
    {/* hero */}
    <section className="pt-5 lg:pt-20">
      <ContainerBodyLayout>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <MotionDiv type="leftToRight" className="w-full md:w-6/12">
            <Image
              src="/about/1.png"
              alt="img"
              width={874}
              height={700}
              className="object-cover"
            />
          </MotionDiv>
          <MotionDiv type="rightToLeft" className="w-full md:w-6/12">
            <h4 className="uppercase text-blue-500 font-medium tracking-widest mb-3">About US</h4>
            <h2 className="font-bold text-4xl mb-5">Pioneering Intelligent <br /> Solutions for a Connected <br /> World</h2>
            <p>
              Brain system limited is an advanced technology company committed to transforming various sectors in Bangladesh through innovative solutions in Artificial Intelligence (AI), IoT, Big Data, and Cybersecurity.
            </p>
          </MotionDiv>
        </div>
      </ContainerBodyLayout>
      <BottomWaveShape />
    </section>

    {/* why choose us */}
    <section className="py-5 lg:py-12">
      <ContainerBodyLayout>
        <MotionDiv type="bottomToTop">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-5">
            <div className="w-full md:w-8/12">
              <h2 className="text-center md:text-left text-5xl font-medium">Why choose us</h2>
            </div>
            <div className="w-full md:w-4/12 text-center md:text-right">
              <Link href="/contact" className="bg-primary text-white text-2xl font-semibold py-3 px-8 rounded-3xl inline-block">
                Contact Us
              </Link>
            </div>
          </div>
          <p className="text-justify">
            Making AI technologies accessible and beneficial to a broader population, including individuals, businesses and communities that may not have had access before. The idea is to reduce barriers such as high costs, technical expertise, and exclusive access to advanced tools, enabling more people to leverage AI for innovation and problem-solving. As a sister concern of Data Transformers Inc., a Texas-based AI engine development company, Brain System Ltd. leverages global expertise and innovative technologies to address real-world challenges and drive impactful change. At Brain Systems, we harness the power of AI and IoT to deliver cutting-edge solutions tailored to the unique needs of our clients. Our team of experts combines deep industry knowledge with advanced technological expertise to create intelligent systems that improve decision-making, streamline processes, and unlock new opportunities.
          </p>
        </MotionDiv>
      </ContainerBodyLayout>
    </section>

    {/* cards */}
    <section className="pb-5 lg:pb-12">
      <ContainerBodyLayout maxWidth="xl">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <MotionDiv type="leftToRight" className="w-full md:w-4/12 mb-2">
            <div className="shadow-xl border border-gray-100 rounded-xl p-5 min-h-[440px]">
              <div className="inline-block bg-primary rounded-full p-4 w-18 h-18 mb-4">
                <FaMap className="text-white text-4xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Data-driven Decisions for Your Business</h3>
              <p className="text-xl">
                We take pride in our team of highly skilled and experienced IoT outsourcing teams 
                who are proficient in creating innovative and efficient solutions tailored to your unique
                 requirements. With deep expertise, you can rely on us to deliver cutting-edge IoT solutions.
              </p>
            </div>
          </MotionDiv>
          <MotionDiv type="bottomToTop" className="w-full md:w-4/12 mb-2">
            <div className="shadow-xl border border-gray-100 rounded-xl p-5 min-h-[440px]">
              <div className="inline-block bg-primary rounded-full p-4 w-18 h-18 mb-4">
                <FaDatabase className="text-white text-4xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Proven Track Record</h3>
              <p className="text-xl">
                Our IoT analytics company boasts a solid track record of successful
                 IoT projects. We have a reputation for delivering high-quality solutions on time
                  and within budget, making us the trusted and reliable choice for your IoT analytics needs
              </p>
            </div>
          </MotionDiv>
          <MotionDiv type="rightToLeft" className="w-full md:w-4/12 mb-2">
            <div className="shadow-xl border border-gray-100 rounded-xl p-5 min-h-[440px]">
              <div className="inline-block bg-primary rounded-full p-4 w-18 h-18 mb-4">
                <FaTable className="text-white text-4xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Comprehensive Expertise in Delivering IoT Solutions and Ready-made IoT Products</h3>
              <p className="text-xl">
                Over the years, we’ve developed two ready-made IoT products, specifically designed for IoT device data analysis – 2Smart
                 Cloud and 2Smart Standalone that come equipped with built-in tools for integrating diverse IoT sensors, devices, and gateways.
              </p>
            </div>
          </MotionDiv>
        </div>
      </ContainerBodyLayout>
    </section>

    {/* counter up */}
    <section className="py-10">
      <ContainerBodyLayout>
        <div className="flex flex-col md:flex-row items-center gap-4">
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

    {/* mission vision */}
    <section className="pt-6 lg:pt-10 pb-28 max-w-[100vw] overflow-hidden">
      <ContainerBodyLayout>
        <MotionDiv type="leftToRight" className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-6/12">
            <div className="mb-6 md:mb-10">
              <h4 className="text-xl font-semibold mb-5">Mission</h4>
              <p>Ensure that AI tools, knowledge and resources are available to individuals, 
                organizations, and governments worldwide, regardless of their technical expertise, financial resources, or geographic location.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-5">Vision</h4>
              <p>Making AI tools and platforms available to non-experts through user-friendly interfaces.</p>
            </div>
          </div>
        <MotionDiv type="rightToLeft" className="w-full md:w-6/12">
          <div className="relative">
            <Image
              src="/about/2.webp"
              alt="img"
              width={450}
              height={593}
              className="object-cover rounded-xl"
            />
            <div className="absolute top-24 left-[20%] -right-[20%]">
              <Image
                src="/about/3.webp"
                alt="img"
                width={450}
                height={593}
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </MotionDiv>
        </MotionDiv>
      </ContainerBodyLayout>
    </section>

    {/* team structure */}
    <section className="pt-6 lg:pt-16 pb-28 max-w-[100vw] overflow-hidden">
      <ContainerBodyLayout>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <MotionDiv type="leftToRight" className="w-full md:w-6/12">
            <div className="relative">
              <Image
                src="/about/2.webp"
                alt="img"
                width={450}
                height={593}
                className="object-cover rounded-xl"
              />
              <div className="absolute top-24 left-[20%] -right-[20%]">
                <Image
                  src="/about/3.webp"
                  alt="img"
                  width={450}
                  height={593}
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </MotionDiv>
          <MotionDiv type="rightToLeft" className="w-full md:w-6/12 md:pl-6">
            <div className="mb-6 md:mb-10">
              <h2 className="text-5xl font-semibold mb-6">Our Team Structure</h2>
              <p>A dedicated team in brain systems exemplifies the power of collaboration. By working together, 
                these professionals ensure that patients receive comprehensive, high-quality care, and contribute
                 to the ongoing advancement of new era.
              </p>
            </div>
            <div className="space-y-3">
              <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
                className="!shadow-none"
              >
                <AccordionSummary
                  expandIcon={<FaChevronDown className="" />}
                  aria-controls="ac-content"
                  id="ac-header"
                  className="!bg-gray-200 !text-lg !font-medium"
                >
                  <h4>Data Team</h4>
                </AccordionSummary>
                <AccordionDetails className="!border !border-gray-200">
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>
                      Data Scientists
                    </li>
                    <li>
                      Data Engineers
                    </li>
                    <li>
                      Machine Learning Engineers
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
                className="!shadow-none"
              >
                <AccordionSummary
                  expandIcon={<FaChevronDown className="" />}
                  aria-controls="ac-content"
                  id="ac-header"
                  className="!bg-gray-200 !text-lg !font-medium"
                >
                  <h4>Algorithm / Research Team</h4>
                </AccordionSummary>
                <AccordionDetails className="!border !border-gray-200">
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>
                      Deep Learning Engineers
                    </li>
                    <li>
                      Machine Learning Engineers/Researchers
                    </li>
                    <li>
                      Computer Vision Researchers
                    </li>
                     <li>
                      Natural Language Processing Researchers
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
                className="!shadow-none"
              >
                <AccordionSummary
                  expandIcon={<FaChevronDown className="" />}
                  aria-controls="ac-content"
                  id="ac-header"
                  className="!bg-gray-200 !text-lg !font-medium"
                >
                  <h4>Infrastructure / Platform Team</h4>
                </AccordionSummary>
                <AccordionDetails className="!border !border-gray-200">
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>
                      Backend Engineers
                    </li>
                    <li>
                      Infrastructure Engineers
                    </li>
                    <li>
                      Platform Engineers
                    </li>
                    <li>
                      MLOps/DevOps Engineers
                    </li>
                    <li>
                      Site Reliability Engineers
                    </li>
                    <li>
                      Security Engineers
                    </li>
                    <li>
                      System Engineers
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
                className="!shadow-none"
              >
                <AccordionSummary
                  expandIcon={<FaChevronDown className="" />}
                  aria-controls="ac-content"
                  id="ac-header"
                  className="!bg-gray-200 !text-lg !font-medium"
                >
                  <h4>Application Team</h4>
                </AccordionSummary>
                <AccordionDetails className="!border !border-gray-200">
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>
                      Frontend Engineers
                    </li>
                    <li>
                      Fullstack Engineers
                    </li>
                    <li>
                      UI/UX Designers
                    </li>
                    <li>
                      Product Managers
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>
          </MotionDiv>
        </div>
      </ContainerBodyLayout>
    </section>

    {/* cta area */}
    <CTA />
  </>
}
