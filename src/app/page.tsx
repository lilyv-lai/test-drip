import { lora } from './fonts';
import { lato } from './fonts';
import Link from 'next/link'
import Image from 'next/image';
import InstagramEmbed from '@/components/InstagramEmbed';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-black">

      {/* banner section */}
      <div className="relative w-full isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <Image
        alt="banner image of Drip Ca Phe"
        src="/images/DSC04762.jpg"
        fill
        className="object-cover object-[center_62%] -z-10"
        style={{ zIndex: -10 }}
        priority
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 items-center flex flex-col justify-center text-center">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <img
            src="\images\whitelogo.png"
            alt="Drip Ca Phe Logo"
            className="w-80 mx-auto mb-8"
          />

          <Link
            href="/menu"
            className={`${lora.className} font-bold bg-[#677D50] text-white px-6 py-3 rounded-full hover:bg-[#556842] transition-colors`}
          >
            View Menu
          </Link>
        </div>
      </div>
    </div>

      {/* about us section */}
      <div className="overflow-hidden bg-[#E7E7E7] w-full py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className={`${lora.className} text-base/7 font-semibold text-[#677D50]`}>cà phê [kah-fey] • coffee</h2>
                <p className={`${lato.className} mt-2 text-4xl font-semibold text-pretty text-[#242831] sm:text-5xl`}>
                  ABOUT US
                </p>

                <div className="mt-4 flex">
                  <a href="https://www.instagram.com/dripcaphe_espressobar/" target="_blank" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                    </svg>
                  </a>

                  <a href="https://www.yelp.com/biz/drip-c%C3%A0-ph%C3%AA-annandale" target="_blank" className="ml-6 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Yelp</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 384 512">
                      <path fill-rule="evenodd" d="M42.9 240.3l99.6 48.6c19.2 9.4 16.2 37.5-4.5 42.7L30.5 358.5a22.8 22.8 0 0 1 -28.2-19.6 197.2 197.2 0 0 1 9-85.3 22.8 22.8 0 0 1 31.6-13.2zm44 239.3a199.5 199.5 0 0 0 79.4 32.1A22.8 22.8 0 0 0 192.9 490l3.9-110.8c.7-21.3-25.5-31.9-39.8-16.1l-74.2 82.4a22.8 22.8 0 0 0 4.1 34.1zm145.3-109.9l58.8 94a22.9 22.9 0 0 0 34 5.5 198.4 198.4 0 0 0 52.7-67.6A23 23 0 0 0 364.2 370l-105.4-34.3c-20.3-6.5-37.8 15.8-26.5 33.9zm148.3-132.2a197.4 197.4 0 0 0 -50.4-69.3 22.9 22.9 0 0 0 -34 4.4l-62 91.9c-11.9 17.7 4.7 40.6 25.2 34.7L366 268.6a23 23 0 0 0 14.6-31.2zM62.1 30.2a22.9 22.9 0 0 0 -9.9 32l104.1 180.4c11.7 20.2 42.6 11.9 42.6-11.4V22.9a22.7 22.7 0 0 0 -24.5-22.8 320.4 320.4 0 0 0 -112.3 30.1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>

                <p className={`${lato.className} mt-6 text-lg/8 text-gray-600`}>
                  [insert text here]
                </p>
              </div>
            </div>

            {/* Image grid section */}
              <div className="grid grid-cols-3 gap-1 sm:p-4 h-[250px] sm:h-[500px] mb-5">
                {/* Large image on the left */}
                <div className="col-span-2 h-full relative">
                  <Image
                    alt="Inside of Drip Ca Phe"
                    src="/images/DSC04694.jpg"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Two stacked images with different heights */}
                <div className="flex flex-col gap-1 h-full">
                  <div className="h-[60%] relative overflow-hidden">
                    <Image
                      alt="Inside of Drip Ca Phe"
                      src="/images/DSC04676.jpg"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="h-[40%] relative overflow-hidden">
                    <Image
                      alt="Inside of Drip Ca Phe"
                      src="/images/DSC04669.jpg"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

          </div>
        </div>
        {/* <!-- Elfsight All-in-One Reviews | Untitled All-in-One Reviews --> */}
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div className="elfsight-app-4e7d4263-910c-45e0-8a67-c67d795f54a5 mt-20" data-elfsight-app-lazy></div>
      </div>

      {/* location and hours */}
      <div className="w-full flex h-[400px]">
        {/* left half */}
        <div className="hidden sm:flex w-1/2 bg-[#43403A] flex items-center justify-end px-6">
          <p className={`${lato.className} mt-2 text-4xl font-semibold text-pretty text-[#E7E7E7] sm:text-5xl`}>
                  LOCATION & HOURS
                </p>
        </div>

        {/* right half */}
        <div className="w-full px-10 sm:w-2/3 bg-[#F2F2F2] flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <p className={`${lora.className} font-semibold text-[#242831]`}>LOCATION</p>
            <p className={`${lato.className} text-center font-semibold text-gray-600`}>
                  4230 Annandale Rd Ste 160 Annandale, VA 22003
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className={`${lora.className} font-semibold text-[#242831] mt-15`}>HOURS</p>
            <p className={`${lato.className} font-semibold text-gray-600`}>
                  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-25 gap-y-16 lg:mx-0 lg:max-w-none grid-cols-2">
                  <div className="lg:pt-4 lg:pr-8">
                    <p>Mon</p>
                    <p>Tues-Sun</p>
                  </div>
                  <div className="lg:pt-4 lg:pr-8">
                    <p>8am-6pm</p>
                    <p>8am-8pm</p>
                  </div>
                  </div>
            </p>
          </div>
        </div>
      </div>

      {/* menu preview section */}
      <div className="overflow-hidden bg-[#E7E7E7] w-full py-24 sm:py-32">
        <div className="flex flex-col items-center">
            <p className={`${lora.className} text-base/7 font-semibold text-[#677D50] mt-2`}>explore our menu</p>
            <p className={`${lato.className} mt-2 text-4xl font-semibold text-pretty text-[#242831] sm:text-5xl`}>CÀ PHÊ</p>
            
            <div className="flex flex-wrap justify-center mt-10 gap-8">
              <div className="flex flex-col items-center group overflow-hidden">
                <Link href="/menu#signatures-lattes">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/041/924/414/non_2x/ai-generated-latte-in-coffee-cup-isolated-on-transparent-background-free-png.png"
                  alt="Latte"
                  className="w-40 h-40 sm:w-64 sm:h-64 object-cover mt-6 mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                </Link>
                <span className="relative group cursor-pointer">
                  <span className={`${lora.className} font-semibold text-[#242831] sm:text-lg transition-colors group-hover:text-[#677D50]`}>signatures</span>
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#677D50] transition-all group-hover:w-full duration-300"></span>
                </span>
              </div>


              <div className="flex flex-col items-center group overflow-hidden">
                <Link href="/menu#non-coffee">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/041/924/414/non_2x/ai-generated-latte-in-coffee-cup-isolated-on-transparent-background-free-png.png"
                  alt="Latte"
                  className="w-40 h-40 sm:w-64 sm:h-64 object-cover mt-6 mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                </Link>
                <span className="relative group cursor-pointer">
                  <span className={`${lora.className} font-semibold text-[#242831] sm:text-lg transition-colors group-hover:text-[#677D50]`}>non-coffee</span>
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#677D50] transition-all group-hover:w-full duration-300"></span>
                </span>
              </div>


              <div className="flex flex-col items-center group overflow-hidden">
                <Link href="/menu#cà-phê">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/041/924/414/non_2x/ai-generated-latte-in-coffee-cup-isolated-on-transparent-background-free-png.png"
                  alt="Latte"
                  className="w-40 h-40 sm:w-64 sm:h-64 object-cover mt-6 mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                </Link>
                <span className="relative group cursor-pointer">
                  <span className={`${lora.className} font-semibold text-[#242831] sm:text-lg transition-colors group-hover:text-[#677D50]`}>cà phê</span>
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#677D50] transition-all group-hover:w-full duration-300"></span>
                </span>
              </div>


              <div className="flex flex-col items-center group overflow-hidden">
                <Link href="/menu#espresso-bar">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/041/924/414/non_2x/ai-generated-latte-in-coffee-cup-isolated-on-transparent-background-free-png.png"
                  alt="Latte"
                  className="w-40 h-40 sm:w-64 sm:h-64 object-cover mt-6 mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                </Link>
                <span className="relative group cursor-pointer">
                  <span className={`${lora.className} font-semibold text-[#242831] sm:text-lg transition-colors group-hover:text-[#677D50]`}>espresso bar</span>
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#677D50] transition-all group-hover:w-full duration-300"></span>
                </span>
              </div>
            </div>

            <div className="mt-15">
              <Link href="/menu" className={`${lora.className} font-bold bg-[#677D50] text-white px-6 py-3 rounded-full hover:bg-[#556842] transition-colors`}>
                View Full Menu
              </Link>
            </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full max-w-7xl mx-auto px-6 py-12 mt-8">
      {/* left column: instagram embed */}
      <InstagramEmbed />

      {/* right column: text */}
      <div className="w-full lg:w-1/2 text-[#242831]">
      <h2 className={`${lora.className} text-base/7 font-semibold text-[#677D50]`}>our social medias</h2>
        <p className={`${lato.className} mt-2 text-4xl font-semibold text-pretty text-[#242831] sm:text-5xl`}>
                      Follow us on Instagram
                    </p>
        <p className={`${lato.className} mt-6 text-lg/8 text-gray-600`}>
                      [insert text here]
                    </p>
      </div>
    </div>

      


      

      







    </div>
    



  );
}