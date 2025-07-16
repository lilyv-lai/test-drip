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

                <div className="w-full flex justify-between items-center px-4">
                <p className={`${lora.className} text-xl text-[#43403A]`}>
                  questions • catering • events • parties
                </p>

                <div className="flex">
                <a href="https://www.instagram.com/dripcaphe_espressobar/" target="_blank" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                    </svg>
                  </a>

                  <a href="https://www.yelp.com/biz/drip-c%C3%A0-ph%C3%AA-annandale" target="_blank" className="ml-6 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Yelp</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 384 512">
                      <path fill-rule="evenodd" d="M42.9 240.3l99.6 48.6c19.2 9.4 16.2 37.5-4.5 42.7L30.5 358.5a22.8 22.8 0 0 1 -28.2-19.6 197.2 197.2 0 0 1 9-85.3 22.8 22.8 0 0 1 31.6-13.2zm44 239.3a199.5 199.5 0 0 0 79.4 32.1A22.8 22.8 0 0 0 192.9 490l3.9-110.8c.7-21.3-25.5-31.9-39.8-16.1l-74.2 82.4a22.8 22.8 0 0 0 4.1 34.1zm145.3-109.9l58.8 94a22.9 22.9 0 0 0 34 5.5 198.4 198.4 0 0 0 52.7-67.6A23 23 0 0 0 364.2 370l-105.4-34.3c-20.3-6.5-37.8 15.8-26.5 33.9zm148.3-132.2a197.4 197.4 0 0 0 -50.4-69.3 22.9 22.9 0 0 0 -34 4.4l-62 91.9c-11.9 17.7 4.7 40.6 25.2 34.7L366 268.6a23 23 0 0 0 14.6-31.2zM62.1 30.2a22.9 22.9 0 0 0 -9.9 32l104.1 180.4c11.7 20.2 42.6 11.9 42.6-11.4V22.9a22.7 22.7 0 0 0 -24.5-22.8 320.4 320.4 0 0 0 -112.3 30.1z" clip-rule="evenodd" />
                    </svg>
                  </a>
              </div>

              </div>
              </div>
            </div>


            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full max-w-7xl mx-auto px-6 py-12 mt-8">
                  {/* left column: instagram embed */}

                  <div style={{ width: '60%', height: '450px' }}>
                    <iframe
                      title="DRiP Ca Phe - Espresso Bar"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.045530193404!2d-77.1970862!3d38.8314181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64d9e81a5a8d3%3A0xa164802a4972245d!2sDRiP%20C%C3%A0%20Ph%C3%AA%20-%20Espresso%20Bar!5e0!3m2!1sen!2sus!4v1752682565793!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  {/* right column: text */}
                  <div className="w-full px-10 sm:w-2/3 bg-[#F2F2F2] flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center">
                      <p className={`${lora.className} font-semibold text-[#242831]`}>OUR CONTACTS</p>
                      <p className={`${lato.className} text-center font-semibold text-gray-600`}>
                            (703) 333-3117
                      </p>
                      <p className={`${lato.className} text-center font-semibold text-gray-600`}>         
                            drip.capheespressobar@gmail.com
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <p className={`${lora.className} font-semibold text-[#242831] mt-15`}>LOCATION</p>
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




            
      </div>
    );
}