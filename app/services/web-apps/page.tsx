import CTA from '@/components/common/sections/cta';
import MotionDiv, { AnimationType } from '@/components/custom-animation';
import ContainerBodyLayout from '@/components/layout/ContainerBodyLayout';
import Image from 'next/image';
import Link from 'next/link';
import { FaDirections, FaMap } from 'react-icons/fa';

interface FeatureItem {
  icon: React.ReactNode;
  heading: string;
  details: string;
  motion: AnimationType;
}

const WebApps = () => {
  const ourClients = [
    '/services/web-apps/clients-1.jpg',
    '/services/web-apps/clients-2.jpg',
    '/services/web-apps/clients-3.jpg',
    '/services/web-apps/clients-4.jpg',
    '/services/web-apps/clients-5.jpg',
    '/services/web-apps/clients-4.jpg',
    '/services/web-apps/clients-5.jpg',
    '/services/web-apps/clients-1.jpg',
    '/services/web-apps/clients-2.jpg',
    '/services/web-apps/clients-3.jpg',
  ];

  const features: FeatureItem[] = [
    {
      icon: <FaDirections className="text-black text-4xl" />,
      heading: 'Responsive Design',
      details:
        'Ensures the website functions seamlessly across all devices, enhancing accessibility and user experience.',
      motion: 'leftToRight',
    },
    {
      icon: <FaDirections className="text-black text-4xl" />,
      heading: 'SEO Optimization',
      details:
        'Improves visibility on search engines, driving organic traffic and increasing online presence.',
      motion: 'leftToRight',
    },
    {
      icon: <FaDirections className="text-black text-4xl" />,
      heading: 'Fast Loading Speed',
      details:
        'Enhances user experience and reduces bounce rates, contributing to higher search engine rankings.',
      motion: 'leftToRight',
    },
    {
      icon: <FaDirections className="text-black text-4xl" />,
      heading: 'Security Features',
      details:
        'Protects against cyber threats, ensuring data integrity and user trust.',
      motion: 'leftToRight',
    },
    {
      icon: <FaDirections className="text-black text-4xl" />,
      heading: 'Scalability',
      details:
        'Allows the website to adapt and grow alongside business needs, accommodating increased traffic and functionality.',
      motion: 'leftToRight',
    },
    {
      icon: <FaDirections className="text-black text-4xl" />,
      heading: 'User-Friendly Navigation',
      details:
        'Facilitates easy exploration and interaction, enhancing user satisfaction and engagement.',
      motion: 'leftToRight',
    },
    {
      icon: <FaDirections className="text-black text-4xl" />,
      heading: 'Engaging Content',
      details:
        'Captivates and retains audience attention, encouraging repeat visits and sharing.',
      motion: 'leftToRight',
    },
    {
      icon: <FaDirections className="text-black text-4xl" />,
      heading: 'Analytics and Tracking',
      details:
        'Provides insights into website performance, enabling informed decision-making and optimization efforts.',
      motion: 'leftToRight',
    },
  ];

  return (
    <>
      {/* banner */}
      <section className="py-6 lg:py-10">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <h1 className="text-5xl font-bold mb-4">
                Best Web Development Company in Bangladesh
              </h1>
              <p className="text-lg mb-4 md:mb-14">
                Business growth belongs to those who have an online presence. So
                take your products and services to every doorstep with our
                comprehensive and affordable website design services.
                <br />
                <br />
                We are a full-stack web development company in Bangladesh
                providing technically flawless custom website design and
                maintenance services tailored to your business needs. With 10
                years of experience serving clients globally, we are one of the
                best web design companies in Bangladesh. We welcome businesses
                from all industries to build their solid online footprint by
                getting an SEO-optimized website.
              </p>
              <MotionDiv isButton>
                <Link
                  href="https://techcloudltd.com/web-development-projects/"
                  className="bg-tertiary text-white font-semibold py-3 px-6"
                >
                  View Portfolio
                </Link>
              </MotionDiv>
              <p></p>
            </div>
            <div className="w-full md:w-6/12">
              <Image
                src={'/services/web-apps/1.webp'}
                alt="img"
                width={1000}
                height={1000}
                className="object-cover"
              />
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* clients */}
      <section className="py-6 lg:py-10 bg-[#F6F6F6]">
        <ContainerBodyLayout>
          <div className="mb-6">
            <h2 className="text-5xl font-semibold mb-3">
              Making waves with our clients
            </h2>
            <p>
              We are making waves with our clients through shared successes and
              noteworthy accomplishments.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {ourClients?.map((item, index) => (
              <div className="group" key={index}>
                <Image
                  src={item}
                  alt="img"
                  width={250}
                  height={80}
                  className="object-cover mx-auto transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </ContainerBodyLayout>
      </section>

      {/* experienced web design */}
      <section className="py-6 lg:py-10">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <h1 className="text-5xl font-semibold mb-5">
                Experienced web design company in Bangladesh
              </h1>
              <p className="text-lg mb-4 md:mb-10">
                Through implementing an effective website building process and
                optimized design, we develop solutions that streamline your
                business operations and deliver value to your customers. With
                our years of experience, we are confident in claiming that we
                are one of the best web design companies in Bangladesh.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-block bg-[#E7F9EF] rounded-lg p-4 w-18 h-18">
                  <FaMap className="text-primary text-3xl" />
                </div>
                <div>
                  <h5 className="text-2xl font-semibold mb-1">
                    Professional design
                  </h5>
                  <p>Creative and engaging web solutions</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 md:mb-8">
                <div className="inline-block bg-[#E7F9EF] rounded-lg p-4 w-18 h-18">
                  <FaMap className="text-primary text-3xl" />
                </div>
                <div>
                  <h5 className="text-2xl font-semibold mb-1">
                    Customized layout
                  </h5>
                  <p>Sleek and modern web design</p>
                </div>
              </div>
              <p>
                <Link
                  href="/contact-us"
                  className=" text-primary hover:text-black text-xl font-medium transition-all"
                >
                  Get A Quote
                </Link>
              </p>
            </div>
            <div className="w-full md:w-6/12">
              <Image
                src={'/services/web-apps/2.png'}
                alt="img"
                width={1000}
                height={1000}
                className="object-cover"
              />
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* building websites */}
      <section className="py-6 lg:py-10 bg-[#F6F6F6]">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <Image
                src={'/services/web-apps/3.png'}
                alt="img"
                width={1000}
                height={1000}
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-6/12">
              <h1 className="text-5xl font-semibold mb-5">
                Building websites to cater to your business needs
              </h1>
              <p className="text-lg mb-4 md:mb-10">
                No two businesses in the market are alike, owing to market
                competition. Given that, we, as a website design company in
                Bangladesh, combine market-standard design, effective strategy,
                and technology to craft a website that will facilitate our
                clients to achieve customer trust and growth and bring in the
                positive impact that matters.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-block bg-[#E7F9EF] rounded-lg p-4 w-18 h-18">
                  <FaMap className="text-primary text-3xl" />
                </div>
                <div>
                  <h5 className="text-2xl font-semibold mb-1">Unique design</h5>
                  <p>Innovative and responsive web design</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 md:mb-8">
                <div className="inline-block bg-[#E7F9EF] rounded-lg p-4 w-18 h-18">
                  <FaMap className="text-primary text-3xl" />
                </div>
                <div>
                  <h5 className="text-2xl font-semibold mb-1">Branded vibes</h5>
                  <p>Professional and intuitive web development</p>
                </div>
              </div>
              <p>
                <Link
                  href="/contact-us"
                  className=" text-primary hover:text-black text-xl font-medium transition-all"
                >
                  Get A Quote
                </Link>
              </p>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* our web dev */}
      <section className="py-6 lg:py-14">
        <ContainerBodyLayout>
          <div className="mb-4 md:mb-8">
            <h2 className="text-[40px] font-semibold mb-2">
              Our web development company in Bangladesh{' '}
              <span className="text-primary">
                encompasses the following features
              </span>
            </h2>
            <span className="inline-block w-48 h-1 bg-gray-800"></span>
          </div>
          <div className="flex flex-col md:flex-row items-center flex-wrap">
            {features?.map((featureItem, index) => (
              <MotionDiv
                type={featureItem?.motion ?? undefined}
                className="w-full md:w-6/12 lg:w-3/12 mb-4"
                key={index}
              >
                <div className="text-center shadow-md border border-gray-100 bg-white hover:bg-gray-50 transition-all rounded-md p-5 min-h-[350px] md:mx-2">
                  <div className="inline-block p-4 w-18 h-18 mb-2">
                    {featureItem?.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    {featureItem?.heading}
                  </h3>
                  <p className="text-gray-500 text-lg">
                    {featureItem?.details}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </ContainerBodyLayout>
      </section>

      {/* visitors banner */}
      <section className="py-6 lg:py-14 bg-primary">
        <ContainerBodyLayout>
          <div className="text-center p-4">
            <h4 className="text-white text-2xl mb-4">
              Visitors form opinions on websites in just 0.5 seconds. And 38%
              will exit if unappealing.
            </h4>
            <h3 className="text-white text-[42px] font-semibold mb-2 md:mb-10">
              Make your website captivating today!
            </h3>
            <div>
              <MotionDiv isButton>
                <Link
                  href="/contact-us"
                  className="bg-white text-primary font-semibold py-4 px-8"
                >
                  Get A Quote
                </Link>
              </MotionDiv>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* user friendly web */}
      <section className="py-6 lg:py-10">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <h1 className="text-5xl font-semibold mb-5">
                User-friendly website to create positive impact
              </h1>
              <p className="text-lg mb-4 md:mb-10">
                The browser flexibility and user-friendly experience are the
                most vital parts when it comes to increasing reach and driving
                traffic. Our strategies, as a website development company in
                Bangladesh, allow cross-browsing quite easily and, thereby, the
                best user-friendly experience for your end-users supporting all
                kinds of devices.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-block bg-[#E7F9EF] rounded-lg p-4 w-18 h-18">
                  <FaMap className="text-primary text-3xl" />
                </div>
                <div>
                  <h5 className="text-2xl font-semibold mb-1">
                    Cross-browser optimized
                  </h5>
                  <p>Browser-compatible websites for maximum reach</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 md:mb-8">
                <div className="inline-block bg-[#E7F9EF] rounded-lg p-4 w-18 h-18">
                  <FaMap className="text-primary text-3xl" />
                </div>
                <div>
                  <h5 className="text-2xl font-semibold mb-1">
                    Responsive for all devices
                  </h5>
                  <p>Seamless responsive design for all devices</p>
                </div>
              </div>
              <p>
                <Link
                  href="/contact-us"
                  className=" text-primary hover:text-black text-xl font-medium transition-all"
                >
                  Get A Quote
                </Link>
              </p>
            </div>
            <div className="w-full md:w-6/12">
              <Image
                src={'/services/web-apps/4.png'}
                alt="img"
                width={1000}
                height={1000}
                className="object-cover"
              />
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* technically flawless */}
      <section className="py-6 lg:py-10 bg-[#F6F6F6]">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <Image
                src={'/services/web-apps/2.png'}
                alt="img"
                width={1000}
                height={1000}
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-6/12">
              <h1 className="text-5xl font-semibold mb-5">
                Technically flawless inside, beautifully designed outside
              </h1>
              <p className="text-lg mb-4 md:mb-10">
                To create a positive impression in front of your audiences, you
                need a website that is reliable, secure, and sleek-looking at
                the same time. Our hands-on market experience, as a web
                development company in Bangladesh, in handling complex and large
                websites allows us to leverage the best practices from the
                beginning. As a result, your website will have not only an
                exquisite look but also extendable functionalities to adapt to
                forthcoming trends.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-block bg-[#E7F9EF] rounded-lg p-4 w-18 h-18">
                  <FaMap className="text-primary text-3xl" />
                </div>
                <div>
                  <h5 className="text-2xl font-semibold mb-1">
                    Reliable and secure
                  </h5>
                  <p>Reliable and resilient web development</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 md:mb-8">
                <div className="inline-block bg-[#E7F9EF] rounded-lg p-4 w-18 h-18">
                  <FaMap className="text-primary text-3xl" />
                </div>
                <div>
                  <h5 className="text-2xl font-semibold mb-1">
                    Trusted and sleek-looing
                  </h5>
                  <p>Reliable and Sophisticated Web Design</p>
                </div>
              </div>
              <p>
                <Link
                  href="/contact-us"
                  className=" text-primary hover:text-black text-xl font-medium transition-all"
                >
                  Get A Quote
                </Link>
              </p>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* structural choices */}
      <section className="py-6 lg:py-10">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <h1 className="text-5xl font-semibold mb-5">
                Structural choices & maintenance
              </h1>
              <p className="text-lg mb-4 md:mb-10">
                Website design should be suited to the needs of your business. A
                broad area of website design gives more flexibility in choosing
                the strategies. Maintaining a website’s content and updating it
                regularly are very important. These practices are vital for
                keeping your website engaging. As a web design company in
                Bangladesh, we understand the significance of these principles
                in creating impactful online presences.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-block bg-[#E7F9EF] rounded-lg p-4 w-18 h-18">
                  <FaMap className="text-primary text-3xl" />
                </div>
                <div>
                  <h5 className="text-2xl font-semibold mb-1">
                    Management that is hassle-free for clients
                  </h5>
                  <p>Hassle-free client-centric management solutions</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 md:mb-8">
                <div className="inline-block bg-[#E7F9EF] rounded-lg p-4 w-18 h-18">
                  <FaMap className="text-primary text-3xl" />
                </div>
                <div>
                  <h5 className="text-2xl font-semibold mb-1">
                    Support is always available
                  </h5>
                  <p>Reliable support at your fingertips</p>
                </div>
              </div>
              <p>
                <Link
                  href="/contact-us"
                  className=" text-primary hover:text-black text-xl font-medium transition-all"
                >
                  Get A Quote
                </Link>
              </p>
            </div>
            <div className="w-full md:w-6/12">
              <Image
                src={'/services/web-apps/6.png'}
                alt="img"
                width={1000}
                height={1000}
                className="object-cover"
              />
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* optiized search */}
      <section className="py-6 lg:py-10 bg-[#F6F6F6]">
        <ContainerBodyLayout>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-6/12">
              <Image
                src={'/services/web-apps/7.png'}
                alt="img"
                width={1000}
                height={1000}
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-6/12">
              <h1 className="text-5xl font-semibold mb-5">
                Optimized for search engines
              </h1>
              <p className="text-lg mb-4 md:mb-10">
                The ultimate goal of a commercial website is to build awareness,
                share information, and sell. The best way to achieve these
                purposes is by performing search engine optimization (SEO) on
                the website. As the best web development company in Bangladesh
                and SEO service provider, our website design and development
                come with a focus on SEO optimization.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-block bg-[#E7F9EF] rounded-lg p-4 w-18 h-18">
                  <FaMap className="text-primary text-3xl" />
                </div>
                <div>
                  <h5 className="text-2xl font-semibold mb-1">
                    SEO friendly website
                  </h5>
                  <p>Optimized websites for better search rankings</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 md:mb-8">
                <div className="inline-block bg-[#E7F9EF] rounded-lg p-4 w-18 h-18">
                  <FaMap className="text-primary text-3xl" />
                </div>
                <div>
                  <h5 className="text-2xl font-semibold mb-1">
                    Technical SEO optimized
                  </h5>
                  <p>Technical SEO excellence for optimal performance</p>
                </div>
              </div>
              <p>
                <Link
                  href="/contact-us"
                  className=" text-primary hover:text-black text-xl font-medium transition-all"
                >
                  Get A Quote
                </Link>
              </p>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* your expectation */}
      <section className="py-6 lg:py-10">
        <ContainerBodyLayout>
          <h2 className="text-5xl font-medium text-center mb-4 md:mb-10">
            Your Expectations from Us!
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="w-full md:w-6/12">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="inline-block bg-[#E7F9EF] rounded-lg p-4 w-18 h-18">
                  <FaMap className="text-primary text-3xl" />
                </div>
                <div>
                  <h5 className="text-2xl font-semibold mb-1">
                    Design from sketch to functional
                  </h5>
                  <p>
                    Our approach starts from a sketch to development, which
                    leads us to base a website on what users expect.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="inline-block bg-[#E7F9EF] rounded-lg p-4 w-18 h-18">
                  <FaMap className="text-primary text-3xl" />
                </div>
                <div>
                  <h5 className="text-2xl font-semibold mb-1">
                    Search Engine optimized
                  </h5>
                  <p>
                    We ensure all of the SEO functionality while designing your
                    business website.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="inline-block bg-[#E7F9EF] rounded-lg p-4 w-18 h-18">
                  <FaMap className="text-primary text-3xl" />
                </div>
                <div>
                  <h5 className="text-2xl font-semibold mb-1">
                    Optimized loading speed
                  </h5>
                  <p>
                    We ensure websites load fast and look great on all devices,
                    as 53% of mobile visitors leave slow-loading pages.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="inline-block bg-[#E7F9EF] rounded-lg p-4 w-18 h-18">
                  <FaMap className="text-primary text-3xl" />
                </div>
                <div>
                  <h5 className="text-2xl font-semibold mb-1">
                    Safest and secure website
                  </h5>
                  <p>
                    We provide top-grade protection for client websites, given
                    the average 94 daily attacks and 2,608 weekly bot visits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ContainerBodyLayout>
      </section>

      {/* portfolio */}

      {/* faq */}

      {/* cta */}
      <CTA maxWidth="lg" isDetails />
    </>
  );
};

export default WebApps;
