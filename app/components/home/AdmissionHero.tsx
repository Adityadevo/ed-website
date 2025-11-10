import Image from 'next/image';

type AdmissionsHeroProps = {
  title1?: string;
  title2?: string;
  subtitle?: string;
  showLead?: boolean;
  leadText?: string;
};

export default function AdmissionsHero({
  title1 = 'Admissions Open',
  title2 = '2025-26',
  subtitle = 'CBSE Syllabus',
  showLead = true,
  leadText = 'Lead',
}: AdmissionsHeroProps) {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Background Image */}
      <Image
        src="/images/admissions.jpg"
        alt="School Campus"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-start justify-center px-4 md:px-8 lg:px-[100px] text-white">
        {/* Main Heading - 96px */}
        {title1 && (
          <h1 className="text-5xl md:text-7xl lg:text-[96px] font-bold leading-tight mb-2 md:mb-4">
            {title1}
          </h1>
        )}
        {title2 && (
          <h2 className="text-5xl md:text-7xl lg:text-[96px] font-bold leading-tight mb-4 md:mb-8">
            {title2}
          </h2>
        )}

        {/* Subtitle - 36px */}
        {subtitle && (
          <p className="text-2xl md:text-3xl lg:text-[36px] font-semibold mb-6 md:mb-12">
            {subtitle}
          </p>
        )}
      </div>

      {/* Lead - 72px (Centered) */}
      {showLead && (
        <div className="absolute bottom-12 md:bottom-32 left-1/2 -translate-x-1/2 z-20">
          <h3 className="text-4xl md:text-6xl lg:text-[72px] font-bold text-white text-center">
            {leadText}
          </h3>
        </div>
      )}
    </section>
  );
}
