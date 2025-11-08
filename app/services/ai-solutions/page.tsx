import ContainerBodyLayout from "@/components/layout/ContainerBodyLayout";
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function AiSolutionPage () {
  return <>
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
  </>
}