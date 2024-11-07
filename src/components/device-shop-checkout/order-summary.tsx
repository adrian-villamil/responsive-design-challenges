export const OrderSummary = () => {
  return (
    <div className="pt-6 space-y-6">
      <form className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Enter coupon code"
          className="px-4 py-3 flex-1 border border-[#0000001f] rounded-lg bg-white placeholder:text-[#6C727F]"
        />
        <button className="px-4 py-3 rounded-lg text-white bg-[#1D1D1F]">Apply Coupon</button>
      </form>
      <div className="space-y-2">
        <div>
          <span className="text-[#6C727F] font-semibold">Sub total</span>
          <span className="text-[#6C727F] font-semibold float-right">$2597.00</span>
        </div>
        <div>
          <span className="text-[#6C727F] font-semibold">Tax</span>
          <span className="text-[#6C727F] font-semibold float-right">$623.28</span>
        </div>
        <div>
          <span className="font-semibold">Total</span>
          <span className="font-semibold float-right">$3220.28</span>
        </div>
      </div>
    </div>
  );
};