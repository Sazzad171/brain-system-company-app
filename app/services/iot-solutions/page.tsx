import CTA from '@/components/common/sections/cta';
import MotionDiv from '@/components/custom-animation';
import ContainerBodyLayout from '@/components/layout/ContainerBodyLayout';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaDatabase, FaMap, FaTable } from 'react-icons/fa';

const IotSolutions = () => {
  const techStacks = [
    {
      logo: '/services/iot-solution/ts-1.svg',
      name: 'Aurdino IDE',
    },
    {
      logo: '/services/iot-solution/ts-2.svg',
      name: 'Orange PI',
    },
    {
      logo: '/services/iot-solution/ts-3.svg',
      name: 'Raspberry PI',
    },
    {
      logo: '/services/iot-solution/ts-4.svg',
      name: 'ESP8286',
    },
    {
      logo: '/services/iot-solution/ts-5.svg',
      name: 'STM',
    },
    {
      logo: '/services/iot-solution/ts-6.png',
      name: 'React js',
    },
    {
      logo: '/services/iot-solution/ts-7.png',
      name: 'Node js',
    },
    {
      logo: '/services/iot-solution/ts-8.png',
      name: 'React Native',
    },
    {
      logo: '/services/iot-solution/ts-9.svg',
      name: 'C/C++',
    },
    {
      logo: '/services/iot-solution/ts-10.png',
      name: 'Webview',
    },
  ];

  const workWith = [
    {
      logo: '/services/iot-solution/ww-12.png',
      name: 'Aurdino IDE',
    },
    {
      logo: '/services/iot-solution/ww-13.svg',
      name: 'EV Charging',
    },
    {
      logo: '/services/iot-solution/ww-14.svg',
      name: 'Greenhouse Farming',
    },
    {
      logo: '/services/iot-solution/ww-15.png',
      name: 'Dairy & Fishing',
    },
    {
      logo: '/services/iot-solution/ww-17.svg',
      name: 'Cold Storage',
    },
    {
      logo: '/services/iot-solution/ww-18.svg',
      name: 'Building Management Systems (BMS)',
    },
  ];

  return (
    <>
      {/* banner */}
      <section className="py-6 lg:py-14 bg-[url('/services/iot-solution/bg-1.png')] bg-no-repeat bg-right-top">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <p className="uppercase text-blue-500 tracking-widest mb-1">
                Digital Platform
              </p>
              <h2 className="font-semibold text-5xl mb-5">
                Your one-stop shop for IoT development
              </h2>
              <p className="text-gray-600 text-lg mb-6 md:mb-20">
                We will help you with every aspect of your IoT project, from
                validating your idea and building a prototype of your hardware
                to designing scalable cloud architecture and unlocking the value
                of predictive analytics. We will support you at each step of the
                way, identifying your business needs and offering the best
                solutions to meet them.
              </p>
              <p>
                <Link
                  href="/contact"
                  className="bg-primary text-white text-lg font-semibold py-3 px-8 rounded-full inline-block"
                >
                  Learn More
                </Link>
              </p>
            </div>
            <div className="w-full md:w-6/12">
              <Image
                src={'/services/iot-solution/2.png'}
                alt="img"
                width={460}
                height={411}
                className="object-cover ml-auto"
              />
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* benefit */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <Image
                src={'/services/iot-solution/3.png'}
                alt="img"
                width={450}
                height={450}
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-6/12">
              <p className="uppercase text-blue-500 tracking-widest">
                IOT Solutions for Business
              </p>
              <h2 className="font-semibold text-2xl mb-4">
                How do you get benefit using IoT
              </h2>
              <p className="mb-6 md:mb-10">
                The benefits of using IoT for businesses are substantial. IoT
                solutions can help companies monitor operations in real-time,
                optimize resource use, and reduce operational costs. They
                improve productivity by automating routine tasks and enhance
                decision-making through data analytics.
              </p>
              <ul className="mb-4">
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  Real-time Monitoring
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  User Friendly Configuration and Management
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  Customizable & Scalable
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  Automated Peripheral Control
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  Multi-layer Security
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  Real-time Alerts
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  Saves Energy & Cost
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  Al and Predictive Analytics and Reports
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  Track activities
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  Productivity Monitoring
                </li>
              </ul>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* life cycle */}
      <section className="py-6 lg:py-14 hidden">
        <ContainerBodyLayout>
          <div className="text-center">
            <h2 className="text-5xl font-medium mb-4">
              IoT development life cycle
            </h2>
            <p>
              Adopt best practices in development, testing and security at each
              stage, from product <br />
              discovery to installation and support
            </p>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* challenge banner */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <div className="bg-[#314629] p-4 md:p-16 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-full md:w-8/12">
                <h5 className="text-white text-2xl mb-6">Change Your Life</h5>
                <h1 className="text-white text-5xl font-semibold">
                  We help you stay ahead of future challenges
                </h1>
              </div>
              <div className="w-full md:w-4/12">
                <div className="text-right">
                  <Link
                    href={'/'}
                    className="bg-white text-[#314629] hover:bg-primary hover:text-white text-lg py-4 px-8 rounded-xl inline-block transition"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* tech stack */}
      <section className="py-6 lg:py-10">
        <ContainerBodyLayout>
          <h2 className="text-5xl font-medium mb-10">
            Our IoT Software Development Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {techStacks?.map((item, index) => (
              <div
                className="group rounded-2xl text-center shadow-lg border border-gray-100 p-5 transition-transform duration-300"
                key={index}
              >
                <Image
                  src={item?.logo}
                  alt="img"
                  width={60}
                  height={60}
                  className="object-cover mx-auto mb-2 transition-transform duration-300 group-hover:scale-110"
                />
                <p>{item?.name}</p>
              </div>
            ))}
          </div>
        </ContainerBodyLayout>
      </section>

      {/* special approach */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
            <div className="w-full md:w-8/12">
              <h3 className="text-4xl font-medium">
                Special Approach to Enterprise IoT Solutions
              </h3>
            </div>
            <div className="w-full md:w-4/12">
              <p className="text-right">
                <Link
                  href="/"
                  className="bg-tertiary hover:bg-primary text-white text-lg py-3 px-8 rounded-lg inline-block transition"
                >
                  Contact Us
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-4/12">
              <div className="w-28 h-[1px] bg-primary mb-4"></div>
              <p className="mb-9">
                With our enterprise internet of things software we reduce
                downtime and increase efficiency, implement intelligent
                automation of operations in real-time.
              </p>
              <div className="w-28 h-[1px] bg-primary mb-4"></div>
              <p className="mb-9">
                Each business is unique, and so are our solutions. We work
                closely with you to understand your specific requirements and
                tailor our services accordingly.
              </p>
              <div className="w-28 h-[1px] bg-primary mb-4"></div>
              <p>
                Partner with a full circle augmented IoT software development
                company — we help to accelerate, tune the processes and create
                teams. We can reduced time to market and costs
              </p>
            </div>
            <div className="w-full md:w-8/12">
              <Image
                src={'/services/iot-solution/11.webp'}
                alt="img"
                width={1024}
                height={642}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* we work with */}
      <section className="py-6 lg:py-10">
        <ContainerBodyLayout>
          <h2 className="text-5xl font-medium mb-8">We work with</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {workWith?.map((item, index) => (
              <div
                className="group rounded-2xl text-center p-2 transition-transform duration-300"
                key={index}
              >
                <Image
                  src={item?.logo}
                  alt="img"
                  width={70}
                  height={70}
                  className="object-cover mx-auto mb-2 transition-transform duration-300 group-hover:scale-110"
                />
                <p className="text-lg font-medium">{item?.name}</p>
              </div>
            ))}
          </div>
        </ContainerBodyLayout>
      </section>

      {/* device layer */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <p className="uppercase text-blue-500 tracking-widest">
                Device layer
              </p>
              <h2 className="font-semibold text-4xl mb-4">
                IoT-related services we offer
              </h2>
              <p className="mb-6 md:mb-10">
                Achieve your business objectives with tailored solutions using
                modern technology and artificial intelligence.
              </p>
              <ul className="mb-4">
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-tertiary" />
                  Create a fast Proof of Concept to validate your idea
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-tertiary" />
                  Prototype and manufacture hardware for your IoT project
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-tertiary" />
                  Develop software/firmware for your devices
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-tertiary" />
                  Develop a Test Automation Framework to ensure your devices
                  operate properly
                </li>
              </ul>
            </div>
            <div className="w-full md:w-6/12">
              <Image
                src={'/services/iot-solution/18.webp'}
                alt="img"
                width={1280}
                height={717}
                className="object-cover"
              />
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* why choose */}
      <section className="pb-5 lg:pb-10">
        <ContainerBodyLayout>
          <h3 className="text-4xl font-medium mb-6 md:mb-12 text-center">
            Why Choose Us as IoT Analytics Company
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <MotionDiv type="leftToRight" className="w-full md:w-4/12 mb-2">
              <div className="shadow-xl border border-gray-100 rounded-xl p-5 min-h-[440px]">
                <div className="inline-block bg-primary rounded-full p-4 w-18 h-18 mb-4">
                  <FaMap className="text-white text-4xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Data-driven Decisions for Your Business
                </h3>
                <p className="text-xl">
                  We take pride in our team of highly skilled and experienced
                  IoT outsourcing teams who are proficient in creating
                  innovative and efficient solutions tailored to your unique
                  requirements. With deep expertise, you can rely on us to
                  deliver cutting-edge IoT solutions.
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
                  Our IoT analytics company boasts a solid track record of
                  successful IoT projects. We have a reputation for delivering
                  high-quality solutions on time and within budget, making us
                  the trusted and reliable choice for your IoT analytics needs
                </p>
              </div>
            </MotionDiv>
            <MotionDiv type="rightToLeft" className="w-full md:w-4/12 mb-2">
              <div className="shadow-xl border border-gray-100 rounded-xl p-5 min-h-[440px]">
                <div className="inline-block bg-primary rounded-full p-4 w-18 h-18 mb-4">
                  <FaTable className="text-white text-4xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Comprehensive Expertise in Delivering IoT Solutions and
                  Ready-made IoT Products
                </h3>
                <p className="text-xl">
                  Over the years, we’ve developed two ready-made IoT products,
                  specifically designed for IoT device data analysis – 2Smart
                  Cloud and 2Smart Standalone that come equipped with built-in
                  tools for integrating diverse IoT sensors, devices, and
                  gateways.
                </p>
              </div>
            </MotionDiv>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* iot solution business */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <Image
                src={'/services/iot-solution/19.png'}
                alt="img"
                width={499}
                height={499}
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-6/12">
              <p className="uppercase text-blue-500 tracking-widest">
                IOT Solutions for Business
              </p>
              <h2 className="font-semibold text-2xl mb-4">
                IoT-based Solutions: Driving Business Efficiency and Innovation
              </h2>
              <p className="mb-6 md:mb-10">
                The Internet of Things (IoT) is revolutionizing the way
                businesses operate, offering a plethora of benefits that enhance
                efficiency, productivity, and innovation.
              </p>
              <ul className="mb-4 space-y-1">
                <li className="flex gap-3 items-center">
                  <div className="w-5">
                    <FaCheck className="text-tertiary" />
                  </div>
                  Poultry: IoT-enabled control systems for optimized operations.
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-5">
                    <FaCheck className="text-tertiary" />
                  </div>
                  Petrol Pumps: IoT-based automation for seamless fuel
                  management.
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-5">
                    <FaCheck className="text-tertiary" />
                  </div>
                  Greenhouse Farming: IoT-powered systems for climate control.
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-5">
                    <FaCheck className="text-tertiary" />
                  </div>
                  Dairy & Fishing: IoT solutions for monitoring and management.
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-5">
                    <FaCheck className="text-tertiary" />
                  </div>
                  Cold Storage: IoT-based systems for temperature and inventory
                  control.
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-5">
                    <FaCheck className="text-tertiary" />
                  </div>
                  Building Management Systems (BMS): IoT for managing lighting,
                  HVAC, fire safety, and other critical infrastructure.
                </li>
              </ul>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* cta */}
      <CTA maxWidth="lg" isDetails />
    </>
  );
};

export default IotSolutions;
