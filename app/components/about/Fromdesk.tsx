'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function FromTheDeskSection() {
  const [activeTab, setActiveTab] = useState<'ceo' | 'secretary' | 'principal'>('ceo');

  const content = {
    ceo: {
      name: 'Mr Anwar Pasha',
      designation: 'B.Com., LLB',
      image: '/images/ceo.svg',
      text: `It gives me immense pleasure when I realize that we are able to transform the vision of My Father in to a reality and bring light to thousands of life through the noble service of imparting EDUCATION. In the process we have overcome several hurdles and setbacks. But with courage and conviction we continued our journey and pioneered the concept of modern education. It is my earnest desire to constantly upgrade the quality of education at all levels and open new vistas in education. We are marching ahead with a motto of dedication, devotion & discipline towards achieving the stature of Secondary & senior secondary education. With the kind of motivation and support we have received over the years, we are committed and determined to achieve our goal.I feel proud when PRINCETON PUBLIC SCHOOL, my dream project makes progressive strides towards education and modernization, with holistic development as the top priorities. I wish the outstanding excellence will make PRINCETON PUBLIC SCHOOL shine as one of the best school in the city.`,
    },
    secretary: {
      name: 'Secretary Name',
      designation: 'Designation',
      image: '/secretary.jpg',
      text: 'Secretary message content goes here...',
    },
    principal: {
      name: 'Principal Name',
      designation: 'Designation',
      image: '/principal.jpg',
      text: 'Principal message content goes here...',
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-[100px] bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#4C231A] text-center">
          FROM THE DESK
        </h2>

        {/* Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          <button
            onClick={() => setActiveTab('ceo')}
            className={`py-4 text-white text-xl md:text-2xl font-semibold transition-all ${
              activeTab === 'ceo' ? 'bg-[#A64253]' : 'bg-[#A64253]/70 hover:bg-[#A64253]'
            }`}
          >
            CEO
          </button>
          <button
            onClick={() => setActiveTab('secretary')}
            className={`py-4 text-white text-xl md:text-2xl font-semibold transition-all ${
              activeTab === 'secretary' ? 'bg-[#F3A661]' : 'bg-[#F3A661]/70 hover:bg-[#F3A661]'
            }`}
          >
            Secretary
          </button>
          <button
            onClick={() => setActiveTab('principal')}
            className={`py-4 text-white text-xl md:text-2xl font-semibold transition-all ${
              activeTab === 'principal' ? 'bg-[#A8D47E]' : 'bg-[#A8D47E]/70 hover:bg-[#A8D47E]'
            }`}
          >
            Principal
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Side - Image */}
          <div className="flex-shrink-0">
            <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-3xl overflow-hidden bg-gray-900">
              <Image
                src={content[activeTab].image}
                alt={content[activeTab].name}
                fill
                className="object-cover grayscale"
              />
              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold">{content[activeTab].name}</h3>
                <p className="text-sm">{content[activeTab].designation}</p>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1 py-4 text-align-left">
            <p className="text-base md:text-lg text-gray-800 leading-relaxed whitespace-pre-line">
              {content[activeTab].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
