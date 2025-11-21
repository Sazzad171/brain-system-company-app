import MotionDiv from '@/components/custom-animation';
import ContainerBodyLayout from '@/components/layout/ContainerBodyLayout';
import Link from 'next/link';

type MaxWidthType = 'sm' | 'md' | 'lg' | 'xl';

interface ICtaProps {
  maxWidth?: false | MaxWidthType;
  isDetails?: boolean;
}

export default function CTA({ maxWidth = 'md', isDetails = false }: ICtaProps) {
  return (
    <section className="py-10">
      <ContainerBodyLayout maxWidth={maxWidth}>
        <MotionDiv
          type="bottomToTop"
          className="bg-primary rounded-2xl py-16 px-4 text-center"
        >
          <h1 className="text-4xl font-bold text-white">
            Have Any Project In Mind?
          </h1>
          {isDetails && (
            <p className="text-white text-lg mt-4">
              Discover the power of AI to transform your business operations,
              boost efficiency, and drive innovation.
            </p>
          )}
          <MotionDiv isButton className="mt-8">
            <Link
              href="/contact"
              className="bg-white text-primary font-semibold py-3 px-6 rounded-3xl inline-block"
            >
              Say Hello!
            </Link>
          </MotionDiv>
        </MotionDiv>
      </ContainerBodyLayout>
    </section>
  );
}
