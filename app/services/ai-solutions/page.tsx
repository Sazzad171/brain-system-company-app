import CTA from "@/components/common/sections/cta";
import ContainerBodyLayout from "@/components/layout/ContainerBodyLayout";
import Image from "next/image";
import { FaAngleDoubleRight, FaArrowCircleRight } from "react-icons/fa";

export default function AiSolutionPage () {
  return <>
  {/* ocr heading */}
    <section className="py-6 lg:py-20">
      <ContainerBodyLayout>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-6/12">
            <Image
              src="/home/brain-clerk/1.png"
              alt="Logo"
              width={504}
              height={533}
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-6/12">
            <h1 className="text-[42px] font-medium my-5">
              Light OCR
            </h1>
            <h4>
              Automatic invoice data processing with AI
            </h4>
            <p className="mb-6">
              Light OCR is an AI powered tool that automatically 
              captures and extracts key invoice details, including 
              PO number, Invoice date, Line items, Invoice total, Description etc.
            </p>
            <ul className="mb-4">
              <li className="flex gap-3 items-center">
                <FaAngleDoubleRight className="text-primary" /> 
                Works with PDF files or images taken using a mobile phone or any camera
              </li>
              <li className="flex gap-3 items-center">
                <FaAngleDoubleRight className="text-primary" /> 
                Extracted data can be uploaded to ERP systems or exported to Excel and other file formats
              </li>
              <li className="flex gap-3 items-center">
                <FaAngleDoubleRight className="text-primary" /> 
                Users can preview and edit data before submitting
              </li>
              <li className="flex gap-3 items-center">
                <FaAngleDoubleRight className="text-primary" /> 
                Supports multi-page invoices for batch processing
              </li>
              <li className="flex gap-3 items-center">
                <FaAngleDoubleRight className="text-primary" /> 
                Compatible with English and Bengali documents
              </li>
              <li className="flex gap-3 items-center">
                <FaAngleDoubleRight className="text-primary" /> 
                Reads clear handwritten invoices
              </li>
            </ul>
          </div>
        </div>
      </ContainerBodyLayout>
    </section>

  {/* ocr steps */}
    <section className="py-6 lg:py-10">
      <ContainerBodyLayout>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-3/12">
            <div>
              <div className="border border-black">
                <Image
                  src={"/services/ai-solutions/2.png"}
                  alt="img"
                  width={554}
                  height={359}
                  className="object-cover"
                />
              </div>
              <div className="bg-[#88C273]">
                <h5 className="text-center text-lg font-semibold p-4">Scan Documents with the mobile App</h5>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/12 hidden md:block">
            <div>
              <Image
                src={"/services/ai-solutions/2.1.png"}
                alt="img"
                width={200}
                height={200}
                className="object-cover mx-auto"
              />
            </div>
          </div>
          <div className="w-full md:w-3/12">
          
          </div>
          <div className="w-full md:w-1/12 hidden md:block">
            <div>
              <Image
                src={"/services/ai-solutions/2.1.png"}
                alt="img"
                width={200}
                height={200}
                className="object-cover mx-auto"
              />
            </div>
          </div>
          <div className="w-full md:w-3/12">
          
          </div>
        </div>
      </ContainerBodyLayout>
    </section>

  {/* brain clerk */}
    <section className="py-6 lg:py-10">
      <ContainerBodyLayout>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-7/12">
            <Image
              src={"/services/ai-solutions/5.1.png"}
              alt="img"
              width={173}
              height={167}
              className="object-cover"
            />
            <h2 className="text-3xl my-4">Your Smart AI Assistant for Document Management</h2>
            <p className="text-xl">BrainClerk turns messy, unstructured data into clean, structured formats fast. Whether it’s PDFs
              , scanned files, images, or forms, BrainClerk extracts key information and organizes it into Excel or database-ready 
              formats with ease.</p>
            <div className="flex flex-wrap gap-x-3 mb-5">
              {["Smart", "Faster", "Secure", "Effortless"].map((item, index) => 
                <div key={index} className="flex gap-1">
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-star-of-life" viewBox="0 0 480 512" xmlns="http://www.w3.org/2000/svg"><path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"></path></svg>
                  <h6 className="font-semibold">{item}</h6>
                </div>
              )}
            </div>
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
              <li className="flex gap-3 items-center">
                <FaArrowCircleRight className="text-primary" /> 
                Provides strong file security with version tracking
              </li>
              <li className="flex gap-3 items-center">
                <FaArrowCircleRight className="text-primary" /> 
                Supports all major file types through a user-friendly dashboard
              </li>
            </ul>
          </div>
          <div className="w-full md:w-5/12">
            <Image
              src={"/services/ai-solutions/5.png"}
              alt="img"
              width={504}
              height={533}
              className="object-cover"
            />
          </div>
        </div>
      </ContainerBodyLayout>
    </section>

    {/* blens */}
    <section className="py-6 lg:py-10">
      <ContainerBodyLayout>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-4/12">
            <div className="shadow-lg border border-gray-100 rounded-xl p-4">
              <Image
                src={"/services/ai-solutions/6.png"}
                alt="img"
                width={271}
                height={166}
                className="object-cover"
              />
              <h3 className="text-3xl font-medium mt-5 mb-3">Your Business Assistant</h3>
              <p className="text-gray-400 text-lg">Blens is the ultimate business management tool that seamlessly connects all your data sources,
                 delivers real-time, role-based insights through natural language, and empowers you to make smarter, 
                 faster decisions anytime, anywhere.</p>
              <ul className="mb-4">
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Runs on WhatsApp, app, or desktop
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  No tech skills needed
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Role-based data sharing
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Connects all your data sources, ERP, databases, files (Word, Excel, PDF), and scanned documents, into one clear view.
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Instantly syncs data across systems to keep your business information live and up-to-date.
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Upload any file—Blens reads, understands, guides
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Access financial health and forecasts—decide with confidence
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-8/12">
            <Image
              src={"/services/ai-solutions/6.1.png"}
              alt="img"
              width={674}
              height={692}
              className="object-cover"
            />
          </div>
        </div>
      </ContainerBodyLayout>
    </section>

    {/* moina */}
    <section className="py-6 lg:py-10">
      <ContainerBodyLayout>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-4/12">
            <Image
              src={"/services/ai-solutions/7.png"}
              alt="img"
              width={625}
              height={700}
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-8/12">
            <div>
              <Image
                src={"/services/ai-solutions/8.png"}
                alt="img"
                width={220}
                height={128}
                className="object-cover"
              />
              <h3 className="text-3xl font-medium mt-5 mb-3">A smart Chatbot that Speaks Your Language</h3>
              <p>Moina is an intelligent chatbot designed to understand, assist, and respond to user queries in real time.</p>
              <p className="text-gray-400 text-lg">Blens is the ultimate business management tool that seamlessly connects all your data sources,
                 delivers real-time, role-based insights through natural language, and empowers you to make smarter, 
                 faster decisions anytime, anywhere.</p>
              <ul className="mb-4">
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Speaks Bengali
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Speak English
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Engage through text base conversation
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Interacts using natural voice communications
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  It serves a wide variety of industries and use cases & Also including
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContainerBodyLayout>
    </section>

    {/* moina play */}
    <section className="py-6 lg:py-20">
      <ContainerBodyLayout>
        <div className="mb-4">
          <Image
            src={"/services/ai-solutions/8.png"}
            alt="img"
            width={220}
            height={128}
            className="object-cover"
          />
          <h3 className="text-3xl font-medium mt-5 mb-3">Roles Moina Can Play</h3>
          <p>It serves a wide variety of industries and use cases, including:</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-6/12">
          
          </div>
          
        </div>
      </ContainerBodyLayout>
    </section>

    {/* proxy eyes */}
    <section className="py-6 lg:py-10">
      <ContainerBodyLayout>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-7/12">
            <div>
              <Image
                src={"/services/ai-solutions/9.png"}
                alt="img"
                width={242}
                height={127}
                className="object-cover"
              />
              <h3 className="text-3xl font-medium mt-5 mb-3">An AI powered smart Construction Monitoring System</h3>
              <p className="text-gray-400 text-lg">Proxy Eyes is an AI-powered smart construction monitoring system that uses 
                CCTV to help companies manage their construction projects more easily and safely.</p>
              <ul className="mb-4">
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  keeps track of materials
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  watches over worker safety
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  sends alerts for accidents or theft
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  shows how the work is progressing.
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  A user-friendly dashboard gives project managers
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-5/12">
            <div className="shadow-lg border border-gray-100 rounded-xl p-4">
              <Image
                src={"/services/ai-solutions/10.png"}
                alt="img"
                width={453}
                height={399}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </ContainerBodyLayout>
    </section>

    {/* proxy eyes steps */}
    <section className="py-6 lg:py-20">
      <ContainerBodyLayout>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-5/12">
            <div className="shadow-lg border border-gray-100 rounded-xl p-4">
              <Image
                src={"/services/ai-solutions/11.png"}
                alt="img"
                width={752}
                height={802}
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-7/12">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-full md:w-6/12 mb-4">

                <h5 className="text-lg font-semibold">faster decision-making</h5>
              </div>

            </div>
          </div>
        </div>
      </ContainerBodyLayout>
    </section>

    {/* ir tool */}
    <section className="py-6 lg:py-10">
      <ContainerBodyLayout>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-4/12 mb-3">
            <Image
              src={"/services/ai-solutions/12.png"}
              alt="img"
              width={305}
              height={210}
              className="object-cover"
            />
            <h3 className="text-4xl my-3">An Intelligent Reporting Tool</h3>
            <p className="text-lg text-gray-400">Pulse is an intelligent reporting tool designed to seamlessly integrate with any software solution,
               transforming how you generate reports. Unlike traditional reporting tools, Pulse understands natural language commands—so you simply ask,
                and it instantly creates reports.</p>
          </div>
          <div className="w-full md:w-4/12 mb-3">
            <Image
              src={"/services/ai-solutions/13.png"}
              alt="img"
              width={517}
              height={598}
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-4/12 mb-3">
            <ul className="mb-4">
              <li className="flex gap-3 items-center">
                <FaArrowCircleRight className="text-primary" /> 
                Doesn’t require programmers to write complex queries or build report logic
              </li>
              <li className="flex gap-3 items-center">
                <FaArrowCircleRight className="text-primary" /> 
                Creates reports from your instructions in plain English
              </li>
              <li className="flex gap-3 items-center">
                <FaArrowCircleRight className="text-primary" /> 
                Can be exported in any format you need
              </li>
              <li className="flex gap-3 items-center">
                <FaArrowCircleRight className="text-primary" /> 
                Speeds up the reporting process and minimizes human errors.
              </li>
              <li className="flex gap-3 items-center">
                <FaArrowCircleRight className="text-primary" /> 
                On-demand, accurate insights enhance strategic and operational decisions
              </li>
            </ul>
          </div>
        </div>
      </ContainerBodyLayout>
    </section>

    {/* agro rx */}
    <section className="py-6 lg:py-20">
      <ContainerBodyLayout>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-6/12">
            <Image
              src={"/services/ai-solutions/14.png"}
              alt="img"
              width={650}
              height={465}
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-6/12">
            <div>
              <Image
                src={"/services/ai-solutions/15.png"}
                alt="img"
                width={210}
                height={200}
                className="object-cover"
              />
              <h3 className="text-3xl font-medium my-4">An Intelligent Plant Doctor</h3>
              <p className="text-gray-400 text-lg mb-4">Agro Rx is a comprehensive solution designed to support farmers in every aspect of farming.</p>
              <ul className="mb-4">
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Accepts input in both Bangla and English.
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Farmers can speak or type their queries.
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Provides instant help on crop diseases, pesticides, and farming techniques.
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Farmers can send photos of affected plants for accurate diagnosis
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Automatically generates personalized treatment suggestions
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Available through any mobile phone by dialing a short code (e.g., 123) — no internet required
                </li>
                <li className="flex gap-3 items-center">
                  <FaArrowCircleRight className="text-primary" /> 
                  Availability: Get farming support anytime, anywhere.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContainerBodyLayout>
    </section>

    {/* cta */}
    <CTA/>
  </>
}