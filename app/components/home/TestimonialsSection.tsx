'use client'
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      image: '/images/Ravind Singh.jpeg',
      name: 'Mr. Ravind Singh',
      designation: 'Parent of Ayaan Singh & Aarna Singh',
      text: "Princeton School is one of the best institutions setting higher standards of education. The School is committed to providing education and also co-curricular activities that enhance students' creativity and knowledge. The focus on holistic development of students is commendable. The staff is good and cooperative, and the management is always supportive. I am extremely pleased with my children's progress.",
    },
    {
      image: '/images/Faruk Pasha.jpeg',
      name: 'Mr. Faruk Pasha',
      designation: 'Parent of Ayan Khan',
      text: "Princeton School has been a blessing for my son Ayan. The school encourages children to think independently and work collaboratively. The caring teachers and strong academic program have helped my child grow in confidence and character. The school's commitment to both academic excellence and personal development is truly impressive.",
    },
    {
      image: '/images/Rahamath P S.jpeg',
      name: 'Mrs. Rahamath P. S.',
      designation: 'Parent of Ayesha Khanum',
      text: 'The school perfectly balances academics with sports and arts. My daughter Ayesha looks forward to school every day, and we truly value the supportive and nurturing environment here. The teachers go above and beyond to ensure each child receives individual attention and care.',
    },
    {
      image: '/images/Sowmya H N.jpeg',
      name: 'Mrs. Sowmya H. N.',
      designation: 'Parent of Ayaan',
      text: "The teachers at Princeton School are extremely approachable, and the communication with parents is excellent. We have seen consistent academic progress and all-round development in our son Ayaan. The school's focus on both academics and co-curricular activities has helped him grow into a well-rounded individual.",
    },
    {
      image: '/images/Moula B.jpeg',
      name: 'Mr. Moula B.',
      designation: 'Parent of Mohammad Ayan',
      text: "Princeton School focuses on instilling strong values, discipline, and curiosity in its students. The various activities, projects, and guidance provided have shaped our son Mohammad Ayan into a confident and eager learner. We are grateful for the school's commitment to excellence in education.",
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
