import { ContactForm } from "./contact-form";
import { OrderSummary } from "./order-summary";
import { ProductList } from "./product-list";

export const Checkout = () => {
  return (
    <div className="w-[calc(100%-80px)] xl:max-w-[1200px] mx-auto mb-10 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-md">
      <div className="flex-1 p-8 bg-[#F3F4F6] relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.04)] divide-y divide-[#0000001f]">
        <ProductList />
        <OrderSummary />
      </div>
      <div className="flex-1 p-8 bg-white">
        <h1 className="font-semibold leading-none">Contact Information</h1>
        <ContactForm />
      </div>
    </div>
  );
};