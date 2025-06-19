import { lora } from './fonts';
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-black">
      <h1 className="text-4xl font-bold mb-4">Drip Ca Phe</h1>
      <Link href="/menu" className={`${lora.className} font-bold bg-[#677D50] text-white px-6 py-3 rounded-full hover:bg-[#556842] transition-colors`}>
        View Menu
      </Link>
    </div>
  );
}
