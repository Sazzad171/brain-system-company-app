'use client';

import CTA from '@/components/common/sections/cta';
import MotionDiv from '@/components/custom-animation';
import ContainerBodyLayout from '@/components/layout/ContainerBodyLayout';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { FaCheck, FaDirections } from 'react-icons/fa';
import { FaArrowsLeftRight } from 'react-icons/fa6';
import { FiBookmark, FiMessageSquare, FiSearch } from 'react-icons/fi';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { MdLayers } from 'react-icons/md';
import { PiAsteriskSimpleBold, PiChartPieSliceFill } from 'react-icons/pi';
import { RiArrowGoBackLine } from 'react-icons/ri';

const BigDataService = () => {
  const services = [
    '/services/cyber-security/cs-1.png',
    '/services/cyber-security/cs-2.jpg',
    '/services/cyber-security/cs-3.jpg',
    '/services/cyber-security/cs-4.png',
    '/services/cyber-security/cs-5.jpg',
    '/services/cyber-security/cs-6.png',
  ];

  const tools = [
    '/services/cyber-security/tools-1.png',
    '/services/cyber-security/tools-2.png',
    '/services/cyber-security/tools-3.jpg',
    '/services/cyber-security/tools-4.jpeg',
    '/services/cyber-security/tools-5.jpg',
    '/services/cyber-security/tools-6.png',
    '/services/cyber-security/tools-7.png',
    '/services/cyber-security/tools-8.png',
  ];
  return (
    <>
      {/* banner */}
      <section className="py-6 lg:py-14 bg-[url('/services/big-data/bg-1.png')] bg-no-repeat bg-right-top">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-7/12">
              <p className="uppercase text-blue-500 tracking-widest mb-1">
                Cyber Security
              </p>
              <h2 className="font-semibold text-5xl mb-5">
                Stay Ahead with Cybersecurity Solutions
              </h2>
              <p className="text-gray-600 text-lg mb-6 md:mb-20">
                Shield Your Business from Cyber Threats
              </p>
            </div>
            <div className="w-full md:w-5/12">
              <Image
                src={'/services/cyber-security/1.png'}
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
          <div className="mb-6 md:mb-12">
            <h6 className="text-center font-medium uppercase mb-1">
              <span className="bg-primary w-3 h-3 inline-block mr-2 rounded-sm"></span>
              Services
            </h6>
            <h3 className="text-center text-4xl font-semibold">
              Cybersecurity services we provide
            </h3>
          </div>
          <Marquee>
            {services.map((slide, i) => (
              <div key={i} className="px-4">
                <Image
                  src={slide}
                  alt="Logo"
                  width={160}
                  height={160}
                  className="object-cover mx-auto"
                />
              </div>
            ))}
          </Marquee>
        </ContainerBodyLayout>
      </section>

      {/* benefits */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-4/12">
              <h6 className="font-medium uppercase mb-3">
                <span className="bg-primary w-3 h-3 inline-block mr-2 rounded-sm"></span>
                Benefits
              </h6>
              <h3 className="text-4xl font-semibold mb-4 md:mb-8">
                Protecting Sensitive Data
              </h3>
              <p>
                Cyber security tools are designed to shield this information
                from unauthorized access, theft, or manipulation. This includes
                personal data, financial records, intellectual property, and
                sensitive government data.
              </p>
            </div>
            <div className="w-full md:w-4/12">
              <div
                className="group rounded-2xl border border-gray-100 shadow-lg bg-white hover:bg-[#7C55AF] p-5 md:p-8 transition-all duration-300 
  [*]:transition-all [*]:duration-300 mb-4 md:mb-8"
              >
                <span className="inline-flex bg-[#8251BC26] group-hover:bg-[#ffffff61] rounded-[75%_25%_43%_57%_/_46%_29%_71%_54%] p-[18px] shadow-[0_0_0_0_rgba(0,0,0,0.5)] rotate-0 mb-3">
                  <PiChartPieSliceFill className="text-3xl text-[#7C55AF] group-hover:text-white" />
                </span>
                <h5 className="text-xl font-medium group-hover:text-white mb-2">
                  Safeguarding Privacy
                </h5>
                <p className="group-hover:text-white">
                  Protecting our privacy is paramount with increasing personal
                  information online. Cybersecurity measures ensure that our
                  data, online activities, and communication remain confidential
                  and inaccessible to cybercriminals.
                </p>
              </div>
              <div
                className="group rounded-2xl border border-gray-100 shadow-lg bg-white hover:bg-[#D9AA19] p-5 md:p-8 transition-all duration-300 
  [*]:transition-all [*]:duration-300 mb-4 md:mb-8"
              >
                <span className="inline-flex bg-[#8251BC26] group-hover:bg-[#ffffff61] rounded-[75%_25%_43%_57%_/_46%_29%_71%_54%] p-[18px] shadow-[0_0_0_0_rgba(0,0,0,0.5)] rotate-0 mb-3">
                  <FiMessageSquare className="text-3xl text-[#D9AA19] group-hover:text-white" />
                </span>
                <h5 className="text-xl font-medium group-hover:text-white mb-2">
                  Maintaining Trust
                </h5>
                <p className="group-hover:text-white">
                  Trust is fundamental to online interactions in the digital
                  age. When individuals and businesses trust that their
                  information is secure, they are more likely to engage in
                  online activities like e-commerce, online banking, and social
                  networking. Cybersecurity tools help build and maintain this
                  trust.
                </p>
              </div>
            </div>
            <div className="w-full md:w-4/12">
              <div
                className="group rounded-2xl border border-gray-100 shadow-lg bg-white hover:bg-[#16B0AB] p-5 md:p-8 transition-all duration-300 
  [*]:transition-all [*]:duration-300 mb-4 md:mb-8"
              >
                <span className="inline-flex bg-[#8251BC26] group-hover:bg-[#ffffff61] rounded-[75%_25%_43%_57%_/_46%_29%_71%_54%] p-[18px] shadow-[0_0_0_0_rgba(0,0,0,0.5)] rotate-0 mb-3">
                  <FiBookmark className="text-3xl text-[#16B0AB] group-hover:text-white" />
                </span>
                <h5 className="text-xl font-medium group-hover:text-white mb-2">
                  Preventing Financial Loss
                </h5>
                <p className="group-hover:text-white">
                  Cyberattacks can result in significant financial losses for
                  individuals, organizations, and governments. Cybersecurity
                  tools help prevent financial theft, fraud, and ransom demands
                  that can cripple businesses and disrupt financial stability.
                </p>
              </div>
              <div
                className="group rounded-2xl border border-gray-100 shadow-lg bg-white hover:bg-[#DE6F4D] p-5 md:p-8 transition-all duration-300 
  [*]:transition-all [*]:duration-300 mb-4 md:mb-8"
              >
                <span className="inline-flex bg-[#8251BC26] group-hover:bg-[#ffffff61] rounded-[75%_25%_43%_57%_/_46%_29%_71%_54%] p-[18px] shadow-[0_0_0_0_rgba(0,0,0,0.5)] rotate-0 mb-3">
                  <RiArrowGoBackLine className="text-3xl text-[#DE6F4D] group-hover:text-white" />
                </span>
                <h5 className="text-xl font-medium group-hover:text-white mb-2">
                  Reducing Reputation Damage
                </h5>
                <p className="group-hover:text-white">
                  Data breaches and cyberattacks can tarnish an individual’s or
                  organization’s reputation. The fallout from such incidents can
                  be long-lasting and costly. Cybersecurity measures aim to
                  mitigate these risks by preventing breaches or minimizing
                  their impact.
                </p>
              </div>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* our services */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-8">
            <div className="w-full md:w-4/12">
              <h3 className="text-4xl font-semibold mb-4 md:mb-8">
                Our services
              </h3>
              <p>
                Cybersecurity services address various aspects of data, systems,
                or network security.
              </p>
            </div>
            <div className="w-full md:w-4/12">
              <PiAsteriskSimpleBold className="text-3xl text-primary mb-2" />
              <h5 className="text-lg font-semibold">Risk Assessments</h5>
              <p>
                These assessments evaluate threats, vulnerabilities, and their
                potential consequences to organizational assets. Risk
                assessments help organizations assess their security posture,
                identify problem areas, prioritize risks based on likelihood and
                severity, and devise a plan for remediation.
              </p>
            </div>
            <div className="w-full md:w-4/12">
              <FaArrowsLeftRight className="text-3xl text-primary mb-2" />
              <h5 className="text-lg font-semibold">Incident Response (IR)</h5>
              <p>
                IR is a structured process for detection, analysis, containment,
                eradication, and recovery from a security breach. Precise
                execution of IR plans minimizes the potential for damage caused
                by an incident. In lieu of an existent plan, use of third-party
                IR services can be arranged to mitigate a cyber incident in
                progress.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-4/12">
              <FiSearch className="text-3xl text-primary mb-2" />
              <h5 className="text-lg font-semibold">Vulnerability Scanning</h5>
              <p>
                Vulnerability scans help organizations identify security gaps in
                defenses and prioritize remediation plans. Regular assessment of
                system weaknesses and potential targets of attack, using both
                automated and manual scanning techniques, ensures comprehensive
                vulnerability identification.
              </p>
            </div>
            <div className="w-full md:w-4/12">
              <MdLayers className="text-3xl text-primary mb-2" />
              <h5 className="text-lg font-semibold">Penetration Testing</h5>
              <p>
                Also known as pentesting, this is the simulation of real-world
                cyberattacks to uncover vulnerabilities in the organization’s
                security posture. Penetration testing takes many forms, from
                black-box testers with no prior knowledge of the target, to a
                planned offensive by “red team” adversaries with predefined
                objectives and goals.
              </p>
            </div>
            <div className="w-full md:w-4/12">
              <HiOutlineShieldCheck className="text-3xl text-primary mb-2" />
              <h5 className="text-lg font-semibold">
                Identity Theft Protection
              </h5>
              <p>
                These services protect individual information and identities by
                detecting potentially fraudulent activity through credit report
                morning and dark web surveillance. They commonly include
                identity restoration services to remediate any issues uncovered.
              </p>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* tools we use */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <h3 className="text-4xl font-semibold mb-4 md:mb-8">Tools We Use</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tools?.map((item, index) => (
              <div
                className="group rounded-2xl text-center shadow-lg border border-gray-100 p-5 transition-transform duration-300"
                key={index}
              >
                <Image
                  src={item}
                  alt="img"
                  width={150}
                  height={150}
                  className="object-cover mx-auto mb-2 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </ContainerBodyLayout>
      </section>

      {/* our approach */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <div className="text-center mb-4 md:mb-8">
            <h6 className="font-medium mb-2">Cybersecurity Implementation</h6>
            <h3 className="text-5xl font-semibold mb-4 md:mb-6">
              Our Approach
            </h3>
            <p className="text-gray-600">
              To implement a complete cybersecurity strategy, follow these best
              practices that reduce security threats and enhance the
              organization’s security posture:. These best practices, in tandem
              with the appropriate cybersecurity services to address probable
              risks to data and network security, ensure organizations are
              well-prepared to defend against modern security challenges
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center flex-wrap">
            <MotionDiv
              type="leftToRight"
              className="w-full md:w-6/12 lg:w-3/12 mb-2"
            >
              <div className="text-center shadow-xl border border-gray-100 rounded-xl p-5 min-h-[495px] md:mx-1">
                <div className="inline-block bg-gray-50 shadow-lg rounded-full p-4 w-18 h-18 mb-4">
                  <FaDirections className="text-black text-4xl" />
                </div>
                <h3 className="text-xl font-medium mb-4">
                  Implement Advanced Security Systems
                </h3>
                <p>
                  Modern threats necessitate advanced security tools that rely
                  upon up-to-date threat intelligence feeds and AI-enhanced
                  technology to defend organizational assets.
                </p>
              </div>
            </MotionDiv>
            <MotionDiv
              type="leftToRight"
              className="w-full md:w-6/12 lg:w-3/12 mb-2"
            >
              <div className="text-center shadow-xl border border-gray-100 rounded-xl p-5 min-h-[495px] md:mx-1">
                <div className="inline-block bg-gray-50 shadow-lg rounded-full p-4 w-18 h-18 mb-4">
                  <FaDirections className="text-black text-4xl" />
                </div>
                <h3 className="text-xl font-medium mb-4">
                  Layered Security Strategy
                </h3>
                <p>
                  Layered Security Strategy Implementation of multiple
                  interconnected security systems, each intended to address
                  specific weaknesses, helps to create redundancies that can
                  intercept threats if one layer fails.
                </p>
              </div>
            </MotionDiv>
            <MotionDiv
              type="leftToRight"
              className="w-full md:w-6/12 lg:w-3/12 mb-2"
            >
              <div className="text-center shadow-xl border border-gray-100 rounded-xl p-5 min-h-[495px] md:mx-1">
                <div className="inline-block bg-gray-50 shadow-lg rounded-full p-4 w-18 h-18 mb-4">
                  <FaDirections className="text-black text-4xl" />
                </div>
                <h3 className="text-xl font-medium mb-4">
                  Principle of Least Privilege (PoLP)
                </h3>
                <p>
                  By advocating that only the minimum level of access is granted
                  for users to perform their tasks, the PoLP helps organizations
                  minimize the potential damage caused by unauthorized access.
                </p>
              </div>
            </MotionDiv>
            <MotionDiv
              type="leftToRight"
              className="w-full md:w-6/12 lg:w-3/12 mb-2"
            >
              <div className="text-center shadow-xl border border-gray-100 rounded-xl p-5 min-h-[495px] md:mx-1">
                <div className="inline-block bg-gray-50 shadow-lg rounded-full p-4 w-18 h-18 mb-4">
                  <FaDirections className="text-black text-4xl" />
                </div>
                <h3 className="text-xl font-medium mb-4">
                  Strong Passwords and MFA
                </h3>
                <p>
                  Implement password requirements that enforce a minimum length,
                  and that mix uppercase and lowercase letters, numbers, and
                  special characters. Combine strong password complexity with
                  MFA methods such as hardware tokens or biometrics for an added
                  layer of authentication security.
                </p>
              </div>
            </MotionDiv>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* our offers */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <Image
                src={'/services/iot-solution/2.png'}
                alt="img"
                width={819}
                height={789}
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-6/12">
              <h2 className="font-semibold text-2xl mb-4">Our offers</h2>
              <p className="mb-6 md:mb-10">
                Cybersecurity services protect organizations from a wide range
                of threats, from hazards like infrastructure vulnerabilities and
                unauthorized account access, to active security breaches in
                progress.
                <br />
                <br />
                Protect your organization with Check Point Quantum Titan, a
                unified cybersecurity platform offering AI-enhanced network
                security and advanced threat prevention, with applications for:
              </p>
              <ul className="mb-4 md:mb-8 space-y-1">
                <li className="flex gap-3 items-center">
                  <div className="w-5">
                    <FaCheck className="text-tertiary" />
                  </div>
                  On-premises
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-5">
                    <FaCheck className="text-tertiary" />
                  </div>
                  Cloud
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-5">
                    <FaCheck className="text-tertiary" />
                  </div>
                  Internet of Things (IoT)
                </li>
              </ul>
              <p>
                Check Point Infinity Global Services offers end-to-end
                cybersecurity solutions that are tailored to your needs, help
                you fortify your defenses, optimize threat response and elevate
                your cyber security maturity. Simplify your approach to
                cybersecurity with flexible, agile and Just-in-time services
                consumed exactly when you need them.
              </p>
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
