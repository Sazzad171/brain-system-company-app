import MotionDiv from "@/components/custom-animation";
import ContainerBodyLayout from "@/components/layout/ContainerBodyLayout";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { FaEnvelope, FaLocationArrow, FaMapPin, FaPhoneAlt } from "react-icons/fa";
import { MdSupport } from "react-icons/md";

export default function Footer() {
  return <>
    <section className="py-6 lg:py-20">
      <ContainerBodyLayout maxWidth="xl">
        <MotionDiv type="bottomToTop" className="rounded-2xl shadow-lg border border-gray-100 p-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-4/12">
              <div className="bg-primary rounded-2xl overflow-hidden">
                <div className="relative flex flex-col justify-between md:min-h-[500px] bg-no-repeat bg-right-bottom bg-contain bg-[url('/contact/bg-1.webp')] p-4 md:p-10 bg-[length:300px_300px]">
                  <div className="absolute top-0 left-0 w-full h-full bg-[#88c27385] z-0"></div>
                  <div className="mb-4 z-[1]">
                    <h3 className="text-3xl text-white mb-2">Contact Information</h3>
                    <p className="text-lg text-white">We’ll create high-quality linkable content and build at least 40 high-authority.</p>
                  </div>
                  <div className="z-[1]">
                    <ul>
                      <li className="text-white flex gap-3 items-center mb-4">
                        <FaPhoneAlt /> 
                        <Link href={"tel: +8801799920150"}>+8801799920150</Link>
                      </li>
                      <li className="text-white flex gap-3 items-center mb-4">
                        <FaEnvelope /> 
                        <Link href={"mailto: info@brainsystemltd.com"}>info@brainsystemltd.com</Link>
                      </li>
                      <li className="text-white flex gap-3 items-center mb-4">
                        <FaMapPin /> 
                        <Link href={"#"}>Dhaka, Bangladesh</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-8/12">
              <form action="" className="px-6 lg:px-16 py-2">
                <TextField
                  label="Full Name"
                  type="text"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  size="small"
                  className="border-primary"
                />
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  size="small"
                  className="border-primary"
                />
                <TextField
                  label="Contact No."
                  type="text"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  size="small"
                  className="border-primary"
                />
                <TextField
                  label="Subject"
                  type="text"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  size="small"
                  className="border-primary"
                />
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  size="small"
                  className="!mt-4"
                />
                <button className="bg-primary text-white font-semibold py-3 px-6 rounded-md w-full mt-5">
                  Send
                </button>
              </form>
            </div>
          </div>
        </MotionDiv>
      </ContainerBodyLayout>
    </section>

    <section className="pb-6 lg:pb-20">
      <ContainerBodyLayout maxWidth="xl">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-4/12">
            <div className="rounded-xl p-5 mb-4 bg-[linear-gradient(180deg,_#4787FA5E_0%,_#4787FA00_100%)] w-[66px]">
              <MdSupport className="text-[#4787fa] text-3xl" />
            </div>
            <h4 className="text-xl font-bold mb-4">Help & Support</h4>
            <p>Email <Link href={"mailto: info@brainsystemltd.com"} className="text-[#046BD2]">info@brainsystemltd.com</Link> for help with a current product or service or refer to FAQs.</p>
          </div>
          <div className="w-full md:w-4/12">
            <div className="rounded-xl p-5 mb-4 bg-[linear-gradient(180deg,_#FEAA4745_0%,_#4787FA00_100%)] w-[66px]">
              <FaPhoneAlt className="text-[#D1345B] text-3xl" />
            </div>
            <h4 className="text-xl font-bold mb-4">Call Us</h4>
            <p>Call us to speak to a member of our team. <Link href={"tel: +8801799920150"} className="text-[#046BD2]">+8801799920150</Link></p>
          </div>
          <div className="w-full md:w-4/12">
            <div className="rounded-xl p-5 mb-4 bg-[linear-gradient(180deg,_#72C22742_0%,_#4787FA00_100%)] w-[66px]">
              <FaLocationArrow className="text-[#72C227] text-3xl" />
            </div>
            <h4 className="text-xl font-bold mb-4">PR</h4>
            <p>Get in touch with Affirm for media resources at <Link href={"mailto: info@brainsystemltd.com"} className="text-[#046BD2]">info@brainsystemltd.com</Link></p>
          </div>
        </div>
      </ContainerBodyLayout>
    </section>
  </>
}
