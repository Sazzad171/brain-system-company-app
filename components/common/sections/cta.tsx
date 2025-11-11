import MotionDiv from "@/components/custom-animation";
import ContainerBodyLayout from "@/components/layout/ContainerBodyLayout";
import Link from "next/link";

export default function CTA () {
  return (
    <section className="py-10">
      <ContainerBodyLayout maxWidth="md">
        <MotionDiv type="bottomToTop" className="bg-primary rounded-2xl py-16 px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Have Any Project In Mind?</h1>
          <MotionDiv isButton className="mt-8">
            <Link href="/contact" className="bg-white text-primary font-semibold py-3 px-6 rounded-3xl inline-block">
              Say Hello!
            </Link>
          </MotionDiv>
        </MotionDiv>
      </ContainerBodyLayout>
    </section>
  )
}