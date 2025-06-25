import { lora } from '../fonts';
import { lato } from '../fonts';

export default function Contact() {
  return (
      <div className="flex flex-col justify-start min-h-screen text-black">
            <div className="overflow-hidden bg-[#E7E7E7] w-full flex flex-col justify-end py-5 min-h-[200px] sm:min-h-[300px]">
              <div className="max-w-7xl w-full px-3 lg:px-4 mx-auto h-full flex flex-col justify-end">
                <h1 className={`${lato.className} mt-2 text-6xl sm:text-8xl font-semibold text-[#43403A]`}>
                  CONTACT
                </h1>
                <p className={`${lora.className} text-xl text-[#43403A]`}>
                  questions • catering • events • parties
                </p>
              </div>
            </div>




            
      </div>
    );
}