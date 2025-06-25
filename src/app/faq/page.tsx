import { lora } from '../fonts';
import { lato } from '../fonts';

const faqData = [
  {
    question: "[questions here]",
    answer: "[answers here]",
  },
  {
    question: "[questions here]",
    answer: "[answers here]",
  },
  {
    question: "[questions here]",
    answer: "[answers here]",
  },
];


export default function FAQ() {
  return (
      <div className="flex flex-col justify-start min-h-screen text-black">
        <div className="overflow-hidden bg-[#E7E7E7] w-full flex flex-col justify-end py-5 min-h-[200px] sm:min-h-[300px]">
          <div className="max-w-7xl w-full px-3 lg:px-4 mx-auto h-full flex flex-col justify-end">
            <h1 className={`${lato.className} mt-2 text-6xl sm:text-8xl font-semibold text-[#43403A]`}>
              FAQ
            </h1>
            <p className={`${lora.className} text-xl text-[#43403A]`}>
              frequently asked questions
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-6">
              <div className={`${lato.className} grid grid-cols-1 md:grid-cols-2 gap-6`}>
                <p className={`${lato.className} font-semibold text-[#43403A]`}>{faq.question}</p>
                <p className={`${lato.className} text-gray-700`}>{faq.answer}</p>
              </div>
              {index !== faqData.length - 1 && (
                <hr className="border-t-2 border-gray-300 mt-4" />
              )}
            </div>
          ))}
        </div>


      
      
      
      
                  
      </div>
    );
}