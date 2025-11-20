import CTA from '@/components/common/sections/cta';
import ContainerBodyLayout from '@/components/layout/ContainerBodyLayout';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';

const IotSolutions = () => {
  return (
    <>
      {/* banner */}
      <section className="py-6 lg:py-14 bg-[url('/services/iot-solution/bg-1.png')] bg-no-repeat bg-right-top">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <p className="uppercase text-blue-500 tracking-widest mb-2">
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
      <section className="py-6 lg:py-10">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <Image
                src={'/services/iot-solution/2.png'}
                alt="img"
                width={886}
                height={792}
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-6/12">
              <p>IOT Solutions for Business</p>
              <h2>How do you get benefit using IoT</h2>
              <p>
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
      <section className="py-6 lg:py-10">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12"></div>
            <div className="w-full md:w-6/12"></div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* challenge banner */}
      <section className="py-6 lg:py-10">
        <ContainerBodyLayout>
          <div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-full md:w-8/12">
                <h5>Change Your Life</h5>
                <h1>We help you stay ahead of future challenges</h1>
              </div>
              <div className="w-full md:w-4/12">
                <div>
                  <Link href={'/'}>Book Consultation</Link>
                </div>
              </div>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* tech stack */}
      <section className="py-6 lg:py-10">
        <ContainerBodyLayout>
          <h2>Our IoT Software Development Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="bg-gray-200 p-4 rounded">
              <Image
                src={'/services/iot-solution/ts-1.svg'}
                alt="img"
                width={577}
                height={500}
                className="object-cover"
              />
              <p>Aurdino IDE</p>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* special approach */}
      <section className="py-6 lg:py-10">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center flex-wrap">
            <div className="w-full md:w-6/12">
              <h3>Special Approach to Enterprise IoT Solutions</h3>
            </div>
            <div className="w-full md:w-6/12">
              <p>
                <Link href="/">Contact Us</Link>
              </p>
            </div>
            <div className="w-full md:w-4/12">
              <p>
                With our enterprise internet of things software we reduce
                downtime and increase efficiency, implement intelligent
                automation of operations in real-time.
              </p>
            </div>
            <div className="w-full md:w-8/12">
              <Image
                src={'/services/iot-solution/ts-1.svg'}
                alt="img"
                width={577}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* we work with */}
      <section className="py-6 lg:py-10">
        <ContainerBodyLayout>
          <h2>We work with</h2>
          <div className="flex flex-col md:flex-row items-center flex-wrap">
            <div className="w-full md:w-2/12">
              <Image
                src={'/services/iot-solution/ts-1.svg'}
                alt="img"
                width={577}
                height={500}
                className="object-cover"
              />
              <h6>Poultry</h6>
            </div>
            <div className="w-full md:w-2/12"></div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* device layer */}
      <section className="py-6 lg:py-10">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <p>Device layer</p>
              <h3>IoT-related services we offer</h3>
              <p>
                Achieve your business objectives with tailored solutions using
                modern technology and artificial intelligence.
              </p>
              <ul className="mb-4">
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  Create a fast Proof of Concept to validate your idea
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  Prototype and manufacture hardware for your IoT project
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  Develop software/firmware for your devices
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  Develop a Test Automation Framework to ensure your devices
                  operate properly
                </li>
              </ul>
            </div>
            <div className="w-full md:w-6/12"></div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* why choose */}
      <section className="py-6 lg:py-10">
        <ContainerBodyLayout>
          <h3>Why Choose Us as IoT Analytics Company</h3>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-4/12">
              <h5>Data-driven Decisions for Your Business</h5>
              <p>
                We take pride in our team of highly skilled and experienced IoT
                outsourcing teams who are proficient in creating innovative and
                efficient solutions tailored to your unique requirements. With
                deep expertise, you can rely on us to deliver cutting-edge IoT
                solutions.
              </p>
            </div>
            <div className="w-full md:w-4/12"></div>
            <div className="w-full md:w-4/12"></div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* iot solution business */}
      <section className="py-6 lg:py-10">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <Image
                src={'/services/iot-solution/ts-1.svg'}
                alt="img"
                width={577}
                height={500}
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-6/12">
              <p>IOT Solutions for Business</p>
              <h4>
                IoT-based Solutions: Driving Business Efficiency and Innovation
              </h4>
              <p>
                The Internet of Things (IoT) is revolutionizing the way
                businesses operate, offering a plethora of benefits that enhance
                efficiency, productivity, and innovation.
              </p>
              <ul className="mb-4">
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  Poultry: IoT-enabled control systems for optimized operations.
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  Petrol Pumps: IoT-based automation for seamless fuel
                  management.
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  Greenhouse Farming: IoT-powered systems for climate control.
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  Dairy & Fishing: IoT solutions for monitoring and management.
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  Cold Storage: IoT-based systems for temperature and inventory
                  control.
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-primary" />
                  Building Management Systems (BMS): IoT for managing lighting,
                  HVAC, fire safety, and other critical infrastructure.
                </li>
              </ul>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* cta */}
      <CTA />
    </>
  );
};

export default IotSolutions;
