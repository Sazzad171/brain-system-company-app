'use client';

import CTA from '@/components/common/sections/cta';
import ContainerBodyLayout from '@/components/layout/ContainerBodyLayout';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

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

      {/* services */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <h6>Services</h6>
          <h3>Cybersecurity services we provide</h3>
        </ContainerBodyLayout>
      </section>

      {/* benefits */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-4/12">
              <h6>Benefits</h6>
              <h3>Protecting Sensitive Data</h3>
              <p>
                Cyber security tools are designed to shield this information
                from unauthorized access, theft, or manipulation. This includes
                personal data, financial records, intellectual property, and
                sensitive government data.
              </p>
            </div>
            <div className="w-full md:w-4/12">
              <h5>Safeguarding Privacy</h5>
              <p>
                Protecting our privacy is paramount with increasing personal
                information online. Cybersecurity measures ensure that our data,
                online activities, and communication remain confidential and
                inaccessible to cybercriminals.
              </p>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* our services */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-4/12">
              <h3>Our services</h3>
              <p>
                Cybersecurity services address various aspects of data, systems,
                or network security.
              </p>
            </div>
            <div className="w-full md:w-7/12">
              <h5>Risk Assessments</h5>
              <p>
                These assessments evaluate threats, vulnerabilities, and their
                potential consequences to organizational assets. Risk
                assessments help organizations assess their security posture,
                identify problem areas, prioritize risks based on likelihood and
                severity, and devise a plan for remediation.
              </p>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* tools we use */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <h3>Tools We Use</h3>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-7/12"></div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* our approach */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <h6>Cybersecurity Implementation</h6>
          <h3>Our Approach</h3>
          <p>
            To implement a complete cybersecurity strategy, follow these best
            practices that reduce security threats and enhance the
            organization’s security posture:. These best practices, in tandem
            with the appropriate cybersecurity services to address probable
            risks to data and network security, ensure organizations are
            well-prepared to defend against modern security challenges
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-7/12"></div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* our offers */}
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

export default BigDataService;
