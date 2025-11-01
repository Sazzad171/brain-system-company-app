import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import ContainerBodyLayout from "./ContainerBodyLayout";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return <div className="bg-primary py-5">
    <ContainerBodyLayout>
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="md:w-1/2">
          <p className="text-white font-medium">&copy; 2025 Brain System. All Rights Reserved</p>
        </div>
        <div className="md:w-1/2">
          <div className="flex justify-end items-center gap-4">
            <div className="bg-secondary rounded-full">
              <Link href="/" className="text-white block p-2">
                <FaFacebookF />
              </Link>
            </div>
            <div className="bg-secondary rounded-full">
              <Link href="/" className="text-white block p-2">
                <FaXTwitter />
              </Link>
            </div>
            <div className="bg-secondary rounded-full">
              <Link href="/" className="text-white block p-2">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ContainerBodyLayout>
  </div>
}
