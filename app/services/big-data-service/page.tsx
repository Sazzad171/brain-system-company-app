'use client';

import CTA from '@/components/common/sections/cta';
import MotionDiv from '@/components/custom-animation';
import ContainerBodyLayout from '@/components/layout/ContainerBodyLayout';
import Image from 'next/image';
import CountUp from 'react-countup';
import { FaDatabase, FaMap, FaTable } from 'react-icons/fa';
import { IoBarChartOutline } from 'react-icons/io5';
import { TbReload } from 'react-icons/tb';

const BigDataService = () => {
  return (
    <>
      {/* banner */}
      <section className="py-6 lg:py-14 bg-[url('/services/big-data/bg-1.png')] bg-no-repeat bg-right-top">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-7/12">
              <p className="uppercase text-blue-500 tracking-widest mb-1">
                Revolutionize Technology BIG DATA
              </p>
              <h2 className="font-semibold text-5xl mb-5">
                Empower Your Business with Big Data Analytics
              </h2>
              <p className="text-gray-600 text-lg mb-6 md:mb-20">
                Drive Innovation and Growth with Big Data Solutions
              </p>
            </div>
            <div className="w-full md:w-5/12">
              <Image
                src={'/services/big-data/1.png'}
                alt="img"
                width={600}
                height={600}
                className="object-cover ml-auto"
              />
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* count down */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center flex-shrink gap-4">
            <div className="w-full md:w-4/12">
              <div className="rounded-xl text-center shadow-lg border border-gray-100 p-4 md:px-5 md:py-6 hover:-translate-y-1 transition-all duration-500">
                <p className="text-5xl font-bold text-tertiary mb-3">
                  <CountUp start={0} end={6} duration={3} />+
                </p>
                <p className="text-gray-500 leading-7">
                  Gone one the what walk then she. Demesne mention promise you
                  justice arrived way.
                </p>
              </div>
            </div>
            <div className="w-full md:w-4/12">
              <div className="rounded-xl text-center shadow-lg border border-gray-100 p-4 md:px-5 md:py-6 hover:-translate-y-1 transition-all duration-500">
                <p className="text-5xl font-bold text-tertiary mb-3">
                  <CountUp start={0} end={43} duration={3} />
                </p>
                <p className="text-gray-500 leading-7">
                  Increasing to in especially inquietude companions acceptance
                  admiration.
                </p>
              </div>
            </div>
            <div className="w-full md:w-4/12">
              <div className="rounded-xl text-center shadow-lg border border-gray-100 p-4 md:px-5 md:py-6 hover:-translate-y-1 transition-all duration-500">
                <p className="text-5xl font-bold text-tertiary mb-3">
                  <CountUp start={0} end={30} duration={3} />+
                </p>
                <p className="text-gray-500 leading-7">
                  Outweigh it families distance wandered ye an. Mr unsatiable at
                  literature connection favourable.
                </p>
              </div>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* big data */}
      <section className="pt-6 lg:pt-10 pb-40 max-w-[100vw] overflow-hidden">
        <ContainerBodyLayout>
          <MotionDiv
            type="leftToRight"
            className="flex flex-col md:flex-row items-center gap-4"
          >
            <div className="w-full md:w-6/12">
              <p className="mb-4">Big Data Services</p>
              <h4 className="text-4xl font-semibold mb-7">
                Scalable Big Data Solutions for Insights and Growth.
              </h4>
              <p className="mb-4 md:mb-10">
                Big data refers to the vast volumes of structured and
                unstructured data generated at high velocity from various
                sources. Leveraging advanced analytics and technologies, big
                data solutions enable businesses to uncover patterns, trends,
                and insights.
              </p>
              <hr />
              <ul className="mt-4 md:mt-8 space-y-2">
                <li className="flex gap-3 items-center">
                  <span className="w-4 h-4 rounded-full bg-black"></span>
                  Predictive analytics for enhanced decision-making.
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-4 h-4 rounded-full bg-black"></span>
                  Data visualization platforms for actionable insights.
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-4 h-4 rounded-full bg-black"></span>
                  Big Data infrastructure design and management.
                </li>
              </ul>
            </div>
            <MotionDiv type="rightToLeft" className="w-full md:w-6/12">
              <div className="relative">
                <Image
                  src="/services/big-data/2.webp"
                  alt="img"
                  width={450}
                  height={450}
                  className="object-cover rounded-xl"
                />
                <div className="absolute top-24 left-[20%] -right-[20%]">
                  <Image
                    src="/services/big-data/3.webp"
                    alt="img"
                    width={450}
                    height={450}
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>
        </ContainerBodyLayout>
      </section>

      {/* achive more */}
      <section className="py-6 lg:py-16 bg-[#F8FCFC]">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-4/12">
              <h5 className="uppercase text-lg font-medium mb-4">
                ACHIEVE MORE
              </h5>
              <h2 className="text-4xl font-medium">
                The Importance of Big Data for Business Success
              </h2>
            </div>
            <div className="w-full md:w-4/12">
              <div className="flex gap-4">
                <div>
                  <div className="inline-block bg-primary rounded-full shadow-lg p-4 w-14 h-14 mb-4">
                    <IoBarChartOutline className="text-white text-2xl" />
                  </div>
                </div>
                <div>
                  <h5 className="text-xl font-semibold mb-3">
                    Optimized Decision-Making
                  </h5>
                  <p>
                    Big data analytics provides businesses with deep insights
                    into market trends, customer behavior, and operational
                    efficiencies.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12">
              <div className="flex gap-4">
                <div>
                  <div className="inline-block bg-[#D1345B] rounded-full shadow-lg p-4 w-14 h-14 mb-4">
                    <TbReload className="text-white text-2xl" />
                  </div>
                </div>
                <div>
                  <h5 className="text-xl font-semibold mb-3">
                    Enhanced Customer Experience
                  </h5>
                  <p>
                    Leveraging big data allows businesses to understand their
                    customers’ needs and preferences more accurately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* our approach */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <h3 className="text-center font-semibold text-5xl mb-4 md:mb-10">
            Our Approach
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <MotionDiv type="leftToRight" className="w-full md:w-4/12 mb-2">
              <div
                className="hover:shadow-xl border border-gray-100 rounded-xl p-6 transition-all bg-[url('/services/big-data/bg-2.svg')] bg-no-repeat bg-[top_20px_right_30px] bg-[length:120px_auto]
"
              >
                <div className="inline-block bg-primary rounded-full p-4 w-18 h-18 mb-4">
                  <FaMap className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Predictive analytics
                </h3>
                <p>Predictive analytics for enhanced decision-making.</p>
              </div>
            </MotionDiv>
            <MotionDiv type="bottomToTop" className="w-full md:w-4/12 mb-2">
              <div
                className="hover:shadow-xl border border-gray-100 rounded-xl p-6 transition-all bg-[url('/services/big-data/bg-2.svg')] bg-no-repeat bg-[top_20px_right_30px] bg-[length:120px_auto]
"
              >
                <div className="inline-block bg-primary rounded-full p-4 w-18 h-18 mb-4">
                  <FaDatabase className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Data visualization
                </h3>
                <p>Data visualization platforms for actionable insights.</p>
              </div>
            </MotionDiv>
            <MotionDiv type="rightToLeft" className="w-full md:w-4/12 mb-2">
              <div className="hover:shadow-xl border border-gray-100 rounded-xl p-6 transition-all">
                <div className="inline-block bg-primary rounded-full p-4 w-18 h-18 mb-4">
                  <FaTable className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Big Data</h3>
                <p>Big Data infrastructure design and management.</p>
              </div>
            </MotionDiv>
          </div>
        </ContainerBodyLayout>
      </section>
      <section>
        <Image
          src="/services/big-data/shape.svg"
          alt="img"
          width={2100}
          height={150}
          className="object-cover"
        />
      </section>

      {/* decision */}
      <section className="py-6 lg:py-14 max-w-[100vw] overflow-hidden bg-[linear-gradient(180deg,#F8FCFC_0%,#FFFFFF00_100%)]">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <h4 className="text-4xl font-medium mb-6">
                Decision Intelligence and Analytics
              </h4>
              <p>
                Help to get daily updated reports for the VPs and any
                decision-makers. All the professional dashboards are full of
                analytical KPIs. Implemented analytics company dashboards are
                highly secure and available to you 24×7 online around the world.
                <br />
                <br />
                Reduce Decision-Making Time: Streamline the decision process by
                having all necessary insights available at their fingertips.
                <br />
                <br />
                Increase Efficiency and Productivity: Minimize the time spent on
                data processing and focus more on strategic tasks.
                <br />
                <br />
                Drive Innovation: Foster an environment where data-driven
                insights lead to innovative solutions and competitive advantage.
              </p>
            </div>
            <div className="w-full md:w-6/12">
              <div className="relative">
                <Image
                  src="/services/big-data/4.webp"
                  alt="img"
                  width={450}
                  height={450}
                  className="object-cover rounded-xl"
                />
                <div className="absolute top-32 left-[20%] -right-[20%]">
                  <Image
                    src="/services/big-data/5.webp"
                    alt="img"
                    width={450}
                    height={593}
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* data engineer */}
      <section className="py-6 lg:py-14 max-w-[100vw] overflow-hidden">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <div className="relative">
                <Image
                  src="/services/big-data/6.webp"
                  alt="img"
                  width={400}
                  height={500}
                  className="object-cover rounded-xl"
                />
                <div className="absolute -bottom-8 left-[20%] -right-[20%]">
                  <Image
                    src="/services/big-data/7.webp"
                    alt="img"
                    width={450}
                    height={593}
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 pl-0 md:pl-4">
              <h3 className="text-4xl font-medium mb-6">Data Engineering</h3>
              <p>
                From siloed to streamlined — our data engineering services and
                ETL pipelines provide you with the insights you need for
                data-driven success.
                <br />
                <br />
                Data engineering creates the foundation for handling and
                processing data efficiently. It helps businesses build systems
                that process large amounts of data quickly and reliably, allow
                to make better decisions.
                <br />
                <br />
                ETL streamlines the data pipeline, saving businesses time and
                resources by automating data integration. It consolidates data
                from multiple sources into a single, standardized format,
                providing a unified view for accurate analysis and reporting.
                Data engineering and ETL solutions are essential for ensuring
                data quality, speeding up data processing, and empowering
                businesses to make informed, data-driven decisions efficiently.
                <br />
                <br />
                We are a team of experienced data engineers and consultants who
                help build efficient data systems that bring together
                information from different sources into one central database. We
                help organizations turn large amounts of data into valuable
                insights by improving how they manage their data. Our services
                cover everything from understanding your needs, designing
                effective data solutions, setting up ETL processes, ensuring
                data quality, and providing analytical solutions.
              </p>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* data science */}
      <section className="py-6 lg:py-14 max-w-[100vw] overflow-hidden">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <h3 className="text-4xl font-medium mb-6">Data Science</h3>
              <p>
                Data science is a “concept to unify statistics, data analysis,
                machine learning, AI and their related methods” in order to
                understand and analyse actual phenomena with data.
                <br />
                <br />
                <span className="font-medium">
                  Elevate the way you do business — our AI and machine learning
                  services empower you with the power to transform operations,
                  improve productivity, and make predictions.
                </span>
                <br />
                <br />
                AI & ML are essential for businesses to stay ahead in today’s
                data-driven world. It analyzes enormous amounts of data in
                real-time, identify trends and patterns, and provide actionable
                insights to fuel your business growth.
                <br />
                <br />
                We create machine-learning models that drive business value by
                analyzing data, identifying key features, and optimizing model
                performance. we analyze sentiment from text to help businesses
                understand customer preferences and reactions.
                <br />
                <br />
                Our machine-learning consulting services help you build, deploy,
                and manage ML models. We enhance automation, improve production
                quality, and align ML operations with business goals.
              </p>
            </div>
            <div className="w-full md:w-6/12">
              <div className="relative">
                <Image
                  src="/services/big-data/8.webp"
                  alt="img"
                  width={450}
                  height={450}
                  className="object-cover rounded-xl"
                />
                <div className="absolute -bottom-8 left-[20%] -right-[20%]">
                  <Image
                    src="/services/big-data/9.webp"
                    alt="img"
                    width={450}
                    height={300}
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* data strategy */}
      <section className="py-6 lg:py-14 max-w-[100vw] overflow-hidden">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <div className="relative">
                <Image
                  src="/services/big-data/10.webp"
                  alt="img"
                  width={400}
                  height={600}
                  className="object-cover rounded-xl"
                />
                <div className="absolute -bottom-10 left-[20%] -right-[20%]">
                  <Image
                    src="/services/big-data/11.webp"
                    alt="img"
                    width={450}
                    height={450}
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <h3 className="text-4xl font-medium mb-6">
                Data Strategy and Architecture Consulting
              </h3>
              <p>
                Utilize our data strategy and architecture consulting services
                to streamline data management and access, with a strategic plan
                and infrastructure designed to provide faster, data-driven
                insights.
                <br />
                <br />
                In today’s highly competitive business world, data has become a
                crucial asset for success.
                <br />
                <br />
                Without an effective data strategy and architecture, unlocking
                the full value of your data can be challenging. Data strategy
                consulting services can help optimize your data operations and
                establish the technical foundation needed to achieve your
                data-driven objectives.
                <br />
                <br />
                Without a clear understanding of your data, you risk limiting
                scalability, making costly investments in misaligned tools, and
                missing key opportunities. Poor data and strategy can lead to
                bad decisions and weak business outcomes. Our data strategy
                consulting services help you gain insights into your data,
                identify growth opportunities, and create a data-driven plan to
                boost productivity and drive success.
                <br />
                <br />
                An effective data strategy aligns with your business goals,
                focusing on acquiring the right information to support better
                decision-making. A well-designed data architecture fuels growth
                and drives value. Our team of data strategy consultants ensures
                you have accurate, reliable, and accessible data for smarter
                decisions.
              </p>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* big data analytics */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12 pr-0 md:pr-6">
              <h3 className="text-4xl font-medium mb-6">Big Data Analytics</h3>
              <p>
                Unlock actionable insights and drive profitability with our big
                data analytics services. From terabytes to zettabytes and
                beyond, we help you make informed decisions that lead to
                success.
                <br />
                <br />
                Businesses today generate and gather enormous amounts of data
                from a variety of sources, including social media, e-commerce
                platforms, and the Internet of Things (IoT devices).
                <br />
                <br />
                Big data is defined by key characteristics: volume, velocity,
                variety, and veracity. Both structured and unstructured data
                play a vital role in big data analytics, yet many businesses
                struggle to organise and interpret their complex, massive
                datasets. Big data analytics helps companies of all sizes unlock
                the value of their data, driving better decision-making and
                insights. This is achieved through a ‘data lake,’ a centralised
                repository that allows businesses to store and manage data at
                any scale.
                <br />
                <br />
                We collaborate closely with clients to turn their data into
                actionable insights. As a big data analytics company, our expert
                team works with you to align data strategies with your business
                goals. We help you gain deeper insights into your customers,
                operations, and market trends, enabling informed
                decision-making.
                <br />
                <br />
                Our services automate and streamline processes, reducing costs
                and boosting productivity. You’ll uncover consumer preferences
                and behaviours to enhance products, increase satisfaction, and
                identify new opportunities. Additionally, our big data solutions
                help mitigate risk by detecting anomalies in large datasets.
                <br />
                <br />
                We have empowered businesses to understand their data and make
                informed, data-driven decisions.
              </p>
            </div>
            <div className="w-full md:w-6/12">
              <Image
                src="/services/big-data/12.jpeg"
                alt="img"
                width={600}
                height={900}
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* data security */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <div className="bg-primary p-4">
            <h5 className="text-white text-xl font-medium mb-2">
              Data Security and Compliance
            </h5>
            <p className="text-white">
              Needless to say, data should be well protected in the digital
              world of cyber threats and increased risks. Our company complies
              with international regulations (ISO 9001, ISO 27001, HIPAA, FDA,
              CGMP, PSD2, etc.), providing cybersecurity, and eliminating the
              slightest risk of hacker attacks.
            </p>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* cta */}
      <CTA maxWidth="lg" isDetails />
    </>
  );
};

export default BigDataService;
