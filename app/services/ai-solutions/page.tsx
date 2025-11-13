import CTA from "@/components/common/sections/cta";
import ContainerBodyLayout from "@/components/layout/ContainerBodyLayout";
import Image from "next/image";
import { FaAngleDoubleRight, FaArrowCircleRight, FaStarOfLife } from "react-icons/fa";

export default function AiSolutionPage () {
  return <>
  {/* ocr heading */}
    <section className="py-6 lg:py-20">
      <ContainerBodyLayout>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-6/12">
            <Image
              src="/services/ai-solutions/1.png"
              alt="Logo"
              width={400}
              height={216}
              className="object-cover mx-auto"
            />
          </div>
          <div className="w-full md:w-6/12">
            <h1 className="text-[42px] font-medium my-3">
              Light OCR
            </h1>
            <div className="w-[70px] border-b-4 border-primary mb-5"></div>
            <h4 className="text-4xl mb-5">
              Automatic invoice data processing with AI
            </h4>
            <p className="text-xl mb-6 text-gray-600">
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
    <section className="py-6 lg:py-8">
      <ContainerBodyLayout maxWidth="xl">
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
                <h5 className="text-center font-semibold py-4 px-3">Scan Documents with the mobile App</h5>
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
            <div>
              <div className="border border-black">
                <Image
                  src={"/services/ai-solutions/3.png"}
                  alt="img"
                  width={554}
                  height={359}
                  className="object-cover"
                />
              </div>
              <div className="bg-[#88C273]">
                <h5 className="text-center font-semibold py-4 px-3">Preview and edit as needed</h5>
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
            <div>
              <div className="border border-black">
                <Image
                  src={"/services/ai-solutions/4.png"}
                  alt="img"
                  width={554}
                  height={359}
                  className="object-cover"
                />
              </div>
              <div className="bg-[#88C273]">
                <h5 className="text-center font-semibold py-4 px-3">Save data in your web or desktop account</h5>
              </div>
            </div>
          </div>
        </div>
      </ContainerBodyLayout>
    </section>

  {/* brain clerk */}
    <section className="py-6 lg:py-12">
      <ContainerBodyLayout>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-7/12">
            <Image
              src={"/services/ai-solutions/5.1.png"}
              alt="img"
              width={70}
              height={68}
              className="object-cover"
            />
            <h2 className="text-4xl my-5">Your Smart AI Assistant for Document Management</h2>
            <p className="text-xl text-gray-500 mb-4">BrainClerk turns messy, unstructured data into clean, structured formats fast. Whether it’s PDFs
              , scanned files, images, or forms, BrainClerk extracts key information and organizes it into Excel or database-ready 
              formats with ease.</p>
            <div className="flex flex-wrap gap-x-3 mb-5">
              {["Smart", "Faster", "Secure", "Effortless"].map((item, index) => 
                <div key={index} className="flex items-center gap-1">
                  <FaStarOfLife className="text-primary" />
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
              width={450}
              height={476}
              className="object-cover"
            />
          </div>
        </div>
      </ContainerBodyLayout>
    </section>

    {/* blens */}
    <section className="py-6 lg:py-12">
      <ContainerBodyLayout>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-5/12">
            <div className="shadow-lg border border-gray-100 rounded-2xl p-5">
              <Image
                src={"/services/ai-solutions/6.png"}
                alt="img"
                width={150}
                height={40}
                className="object-cover"
              />
              <h3 className="text-3xl font-medium mt-5 mb-3">Your Business Assistant</h3>
              <p className="text-gray-500 text-lg mb-5">Blens is the ultimate business management tool that seamlessly connects all your data sources,
                 delivers real-time, role-based insights through natural language, and empowers you to make smarter, 
                 faster decisions anytime, anywhere.</p>
              <ul className="mb-4">
                <li className="flex gap-3 items-center">
                  <div className="w-5">
                    <FaArrowCircleRight className="text-primary" /> 
                  </div>
                  Runs on WhatsApp, app, or desktop
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-5">
                    <FaArrowCircleRight className="text-primary" /> 
                  </div>
                  No tech skills needed
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-5">
                    <FaArrowCircleRight className="text-primary" /> 
                  </div>
                  Role-based data sharing
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-5">
                    <FaArrowCircleRight className="text-primary" /> 
                  </div>
                  Connects all your data sources, ERP, databases, files (Word, Excel, PDF), and scanned documents, into one clear view.
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-5">
                    <FaArrowCircleRight className="text-primary" /> 
                  </div>
                  Instantly syncs data across systems to keep your business information live and up-to-date.
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-5">
                    <FaArrowCircleRight className="text-primary" /> 
                  </div>
                  Upload any file—Blens reads, understands, guides
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-5">
                    <FaArrowCircleRight className="text-primary" /> 
                  </div>
                  Access financial health and forecasts—decide with confidence
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-7/12">
            <Image
              src={"/services/ai-solutions/6.1.png"}
              alt="img"
              width={500}
              height={513}
              className="object-cover ml-auto"
            />
          </div>
        </div>
      </ContainerBodyLayout>
    </section>

    {/* moina */}
    <section className="py-6 lg:py-10">
      <ContainerBodyLayout>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-6/12">
            <Image
              src={"/services/ai-solutions/7.png"}
              alt="img"
              width={625}
              height={700}
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-6/12">
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