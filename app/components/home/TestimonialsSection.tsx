'use client'
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';


export default function TestimonialsSection() {
  const testimonials = [
    {
      image: '/images/Faruk Pasha.jpeg',
      name: 'Mr. FARUK PASHA',
      designation: 'Parent of Midhat Fatimah of Grade IV and Manha Maryam of Grade I (2025-26 Batch)',
      text: "Princeton Public School provides a safe and inspiring environment for students to learn, grow and discover their true potential. It shapes compassionate individuals for the future.",
    },
    {
      image: '/images/Ravind Singh.jpeg',
      name: 'Mr. RAVIND SINGH',
      designation: 'Parent of Veena Kuwar of Grade III (2025-26 Batch)',
      text: "Excellent coaching at a reasonable fee structure. Management is very good and excellent skilled teachers with good infrastructure. A very good school for overall development of a child. My child is doing well after joining this school. I am very much happy and satisfied with the school.",
    },
    {
      image: '/images/Rahamath P S.jpeg',
      name: 'Mrs. RAHAMATH P S',
      designation: 'Parent of Rehan Hussain of Grade IX and Rania Hussain of Grade VIII (2025-26 Batch)',
      text: "I see and feel both my children make leaps and bounds academically, socially and above all \"They are in safe hands\". The management, teachers and non-teaching staff are highly cooperative and treat children with utmost care, respect and pay attention individually. The annual events like sports, science-tech, food fest, educational tour and many more within affordable fee package make the bonding more strong. Happy to have such an institution in our society.",
    },
    {
      image: '/images/Moula B.jpeg',
      name: 'Mr. MOULA.B',
      designation: 'Parent of Syeda Uzma of Grade VIII (2025-26 Batch)',
      text: "Teachers' involvement in school events extends learning beyond the classroom and enriches the school community. It appears that classroom management is challenging to enhance study system.",
    },
    {
      image: '/images/Sowmya H N.jpeg',
      name: 'Mrs. SOWMYA H N',
      designation: 'Parent of Khushi N of Grade I and Abishai N of Grade II (2025-26 Batch)',
      text: "I am pleased to share and express my sincere appreciation for the school's consistent support and dedicated efforts in my children's overall development, both academically and in other activities (project works, skating, etc). They enjoy their learning experience and feel very comfortable in the school environment. We are grateful that they got excellent teachers and supportive friends.",
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);


  return (
    <section className="pt-16 px-4 md:px-8 lg:px-[100px] bg-[#F5F5E8]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-[#4C231A] leading-tight mb-12">
          Don't take our word for it!<br />
          Hear it from our <span className="italic">Parents!</span>
        </h2>


        {/* Main Content - Image and Text */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8">
          {/* Left Side - Main Image */
          }
          <div className="flex-shrink-0">
            <div className="relative w-full lg:w-[362px] h-[400px] lg:h-[488px] rounded-3xl overflow-hidden ">
              <Image
                src={testimonials[currentIndex].image}
                alt="Parent Testimonial"
                fill
                className="object-cover"
              />
            </div>
          </div>


          {/* Right Side - Content */}
          <div className="flex flex-col justify-between flex-1">
            {/* Testimonial Text */
            }
            <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
              {testimonials[currentIndex].text}
            </p>


            {/* Name and Next Button */
            }
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-[#4C231A]">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-600">{testimonials[currentIndex].designation}</p>


              </div>
              <button
                onClick={() => setCurrentIndex((idx) => (idx + 1) % testimonials.length)}
                className="flex items-center gap-2 text-[#4C231A] font-semibold hover:gap-4 transition-all"
              >
                NEXT
                <ArrowRight size={24} className="font-bold" strokeWidth={3} />
              </button>
            </div>


            {/* Thumbnail Images */
            }
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {testimonials
                .map((t, index) => ({ t, index }))
                .filter(({ index }) => index !== currentIndex)
                .slice(0, 4)
                .map(({ t, index }) => (
                  <div
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="relative w-full h-[150px] sm:h-[196px] rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform "
                  >
                    <Image
                      src={t.image}
                      alt={`Testimonial ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
