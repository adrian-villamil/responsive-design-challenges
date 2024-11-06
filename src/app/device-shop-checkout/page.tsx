import { Checkout } from '@/components/device-shop-checkout/checkout';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Device Shop Checkout',
  description: 'Device Shop Checkout Challenge from devchallenges.io',
};

const interFont = Inter({ subsets: ['latin'] });

export default function DeviceShopCheckoutPage() {
  return (
    <main className={`min-h-screen ${interFont.className} relative bg-[#F3F4F6] [&_*]:z-10`}>
      <div className='absolute top-0 left-0 z-0 w-full h-60 bg-[url("/device-shop-checkout/background-image@2x.png")] bg-center bg-cover bg-no-repeat'></div>
      <div className='pt-11 pb-10 flex justify-center items-center gap-x-[18px]'>
        <h1 className='text-2xl font-bold text-white'>Checkout</h1>
        <span className='px-3 py-[5px] rounded-xl text-xs font-semibold text-white bg-[#95AAD0]'>3 ITEMS</span>
      </div>
      <Checkout />
    </main>
  );
}