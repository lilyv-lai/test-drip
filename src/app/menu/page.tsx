'use client'
import { useState } from 'react';
import { lora } from '../fonts';
import { lato } from '../fonts';
import Image from "next/image";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image?: string | null;
};

type MenuSections = Record<string, Record<string, MenuItem[]>>;

const menuSections = {
  drinks: {
    "cà phê": [
      {
        name: 'đen đá [den-da]',
        description: 'classic black iced coffee',
        price: '$5.50',
        image: '/images/denda.png',
      },
      {
        name: 'sữa đá [su-da]',
        description: 'classic Vietnamese iced coffee',
        price: '$6.00',
        image: '/images/caphesuada.png',
      },
      {
        name: 'xíu [xiu]',
        description: 'mini sữa đá, Vietnamese "café latte"',
        price: '$6.00',
        image: '/images/xiuvietnameselatte.png',
      },
      {
        name: 'muối [mui]',
        description: 'sea salt foam sữa đá',
        price: '$6.50',
        image: '/images/duacoconutcreamfoamcoffee.png',
      },
      {
        name: 'khèe [kheeee]',
        description: 'crème brulee foam sữa đá',
        price: '$6.50',
        image: '/images/kheeecremebrulevietcoffee.png',
      },
      {
        name: 'trứng [trung]',
        description: 'egg foam sữa đá',
        price: '$6.90',
        image: '/images/trungeggcoffee.png',
      },
    ],

    "espresso bar": [
      {
        name: 'double espresso',
        description: '2 oz strong espresso shot',
        price: '$3.80',
      },
      {
        name: 'americano',
        description: 'espresso with hot water',
        price: '$4.50',
      },
      {
        name: 'cortado',
        description: 'equal parts espresso and steamed milk',
        price: '$4.50',
      },
      {
        name: 'cappuccino',
        description: 'espresso, steamed milk, and foam',
        price: '$5.00',
        image: '',
      },
      {
        name: 'macchiato',
        description: 'espresso with a small amount of milk foam',
        price: '$5.00',
        image: '',
      },
      {
        name: 'café latte',
        description: 'espresso with steamed milk',
        price: '$5.50',
        image: '',
      },
    ],

    "cà phê - phin": [
      {
        name: 'sữa [w. condensed milk]',
        description: 'phin drip with condensed milk',
        price: '$5.00',
        image: '/images/caphephin.png',
      },
      {
        name: 'đen [black]',
        description: 'traditional black phin drip coffee',
        price: '$4.50',
      },
    ],

    "daily brew": [
      {
        name: 'drip coffee',
        description: 'house-brewed daily drip',
        price: '$3.80',
        image: '',
      },
      {
        name: 'pour over',
        description: 'hand-poured brew',
        price: '$4.70',
        image: '',
      },
      {
        name: 'french press',
        description: 'brewed in a French press',
        price: '$4.70',
        image: '',
      },
      {
        name: 'cold brew',
        description: 'slow-steeped cold coffee on tap',
        price: '$5.50',
        image: '',
      },
    ],

    "non-coffee": [
  {
    name: 'ube sea salt foam latte',
    description: 'sweet ube latte with sea salt foam',
    price: '$6.50',
    image: '/images/ubeseasaltfoamlatte.png',
  },
  {
    name: 'pandan sea salt foam latte',
    description: 'pandan-infused latte topped with sea salt foam',
    price: '$6.50',
    image: '/images/pandanseasaltfoamlatte.png',
  },
  {
    name: 'coco matcha cloud',
    description: 'matcha latte with coconut and cloud foam',
    price: '$6.50',
    image: '/images/cocomatcha.png',
  },
],

"teas": [
  {
    name: 'OG Thai tea w. sea salt foam',
    description: 'classic Thai tea topped with sea salt foam (red or green)',
    price: '$6.90',
    image: '/images/thaiteared.png',
  },
  {
    name: 'matcha latte',
    description: 'creamy green tea matcha latte',
    price: '$6.50',
    image: '/images/matchalatte.png',
  },
  {
    name: 'strawberry matcha latte',
    description: 'layered strawberry and matcha with milk',
    price: '$6.90',
  },
  {
    name: 'chai latte',
    description: 'spiced chai with steamed milk',
    price: '$6.00',
  },
  {
    name: 'Chiang Mai breeze',
    description: 'green Thai lemonade iced tea',
    price: '$6.20',
  },
],

"signatures lattes": [
  {
    name: 'ube espresso latte',
    description: 'ube-infused espresso latte',
    price: '$6.50',
    image: '/images/ubeexpressolatte.png',
  },
  {
    name: 'pandan espresso latte',
    description: 'earthy pandan espresso latte',
    price: '$6.50',
    image: '/images/pandanexpressolatte.png',
  },
  {
    name: 'dalgona café latte',
    description: 'whipped dalgona-style latte',
    price: '$6.50',
    image: '/images/dalgonacafelatte.png',
  },
  {
    name: 'liquid cocaine',
    description: 'white mocha + 2 shots + CaPheSuaDa + sea salt foam',
    price: '$7.20',
  },
  {
    name: 'mocha cloud espresso latte',
    description: 'chocolatey espresso with cloud foam',
    price: '$6.90',
  },
  {
    name: 'nutella espresso latte',
    description: 'espresso latte with nutella flavor',
    price: '$6.50',
  },
  {
    name: 'hazy white mocha latte',
    description: 'creamy white mocha with a bold twist',
    price: '$6.50',
  },
  {
    name: 'caramel espresso latte',
    description: 'classic espresso latte with caramel',
    price: '$6.50',
  },
]
  },

  food: {
    "Savory": [
      {
        name: 'Banh Mi Sandwich',
        description: 'Traditional Vietnamese sandwich with pickled veggies and pork.',
        price: '$6.50',
        image: '/images/mozarellapestobanhmi.png',
      },
    ],
    "Snacks": [
      {
        name: 'Spring Rolls',
        description: 'Fresh rolls with shrimp, vermicelli, and peanut sauce.',
        price: '$5.00',
      },
    ],
  },

  roasts: {
    "House Roasts": [
      {
        name: 'Drip Cà Phê House Blend',
        description: 'Smooth and bold Vietnamese roast.',
        price: '$12.00 / bag',
        image: '/images/coffeebean.png',
      },
    ],
    "Specialty": [
      {
        name: 'Single-Origin Robusta',
        description: 'Strong, earthy notes with low acidity.',
        price: '$14.00 / bag',
        image: '/images/coffeebean.png',
      },
    ],
  },
} satisfies MenuSections;


export default function Menu() {
  const [selected, setSelected] = useState<keyof typeof menuSections>('drinks');

  return (
    // menu banner
    <div className="flex flex-col justify-start min-h-screen text-black">
      <div className="overflow-hidden bg-[#E7E7E7] w-full flex flex-col justify-end py-5 min-h-[200px] sm:min-h-[300px]">
        <div className="max-w-7xl w-full px-3 lg:px-4 mx-auto h-full flex flex-col justify-end">
          <h1 className={`${lato.className} mt-2 text-6xl sm:text-8xl font-semibold text-[#43403A]`}>
            MENU
          </h1>
          <p className={`${lora.className} text-xl text-[#43403A]`}>
            brewed fresh
          </p>
        </div>
      </div>

    <div className="w-full max-w-6xl mx-auto px-4 text-center">
      {/* Top-level buttons */}
      <div className="sticky top-22 sm:top-25 z-50 bg-[#F2F2F2] py-4">
        {/* Top tabs */}
        <div className="flex justify-center items-center space-x-4 text-base sm:text-xl text-[#43403A] mb-2">
          {[
            { key: 'drinks', label: 'drinks' },
            { key: 'food', label: 'food' },
            { key: 'roasts', label: 'coffee beans' },
          ].map((tab, index, arr) => (
            <div key={tab.key} className="flex items-center">
              <button
                onClick={() => setSelected(tab.key as keyof typeof menuSections)}
                className={`${lora.className} relative transition-all duration-300 ${
                  selected === tab.key ? 'text-[#677D50]' : 'text-[#43403A]'
                } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-[#677D50] after:transition-all after:duration-300
                ${selected === tab.key ? 'after:w-full' : 'after:w-0'} hover:text-[#677D50] hover:after:w-full`}
              >
                {tab.label}
              </button>
              {index < arr.length - 1 && (
                <span className="mx-4 text-[#43403A]">•</span>
              )}
            </div>
          ))}
        </div>

        {/* Subheaders (conditional by tab) */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-7 mt-3">
          {Object.keys(menuSections[selected]).map((subsection) => (
            <a
              key={subsection}
              href={`#${subsection.replace(/\s+/g, '-').toLowerCase()}`}
              className={`${lora.className} text-sm sm:text-base text-[#43403A] hover:text-[#677D50] transition-colors`}
            >
              {subsection}
            </a>
          ))}
        </div>
      </div>

      {/* Subsections + Menu Items */}
      {Object.entries(menuSections[selected]).map(
        ([subsection, items]: [string, MenuItem[]]) => (
          <div key={subsection} className="mb-12 text-left">
            <hr className="border-t-2 border-gray-300 mb-4" />
            <h2
              id={subsection.replace(/\s+/g, '-').toLowerCase()}
              className={`${lato.className} text-2xl font-bold text-[#43403A] mb-4 text-center uppercase scroll-mt-58`}
            >
              {subsection}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
              {items.map((item: MenuItem) => {
                const src =
                  typeof item.image === 'string' && item.image.trim()
                    ? item.image
                    : null;

                const hasImage = !!src && (src.startsWith('/') || src.startsWith('http'));

                return (
                  <div key={item.name}>
                    {hasImage && (
                      <div className="relative mx-auto w-[120px] h-[120px] sm:w-64 sm:h-64">
                        <Image
                          src={src!}
                          alt={item.name}
                          fill
                          sizes="(max-width:640px) 120px, (max-width:1024px) 256px, 256px"
                          quality={70}
                        />
                      </div>
                    )}

                    <div className="p-4">
                      <h3 className={`${lato.className} text-sm sm:text-lg font-semibold text-[#43403A] text-center lowercase`}>
                        {item.name}
                      </h3>
                      <p className={`${lato.className} text-sm sm:text-lg font-semibold text-[#43403A] mb-1 text-center`}>
                        {item.price}
                      </p>
                      <p className={`${lato.className} text-xs sm:text-sm text-gray-600 text-center`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
        </div>
        </div>
      ))}
    </div>

      
      
     </div>

    );
}