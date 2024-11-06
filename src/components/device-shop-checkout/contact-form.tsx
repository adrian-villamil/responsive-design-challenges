export const ContactForm = () => {
  return (
    <form className="mt-8 space-y-7">
      <Input label="First & Last name" placeholder="Enter first & last name" />
      <Input label="Email Address" placeholder="Enter email address" />
      <div className="grid grid-cols-2 gap-x-6">
        <div>
          <label htmlFor="country" className="block mb-3 text-sm font-semibold text-[#6C727F]">Country</label>
          <select
            name="country"
            id="country"
            className={
              `w-full flex-1 px-4 py-[14px] border border-[#0000001f] rounded-lg placeholder:text-[#6C727F] font-medium
              appearance-none bg-[url('/device-shop-checkout/dropdown-arrow.svg')] bg-[position:calc(100%-18px)_center] bg-no-repeat
              bg-[#F3F4F6] relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.04)]`
            }
          >
            <option value="">Finland</option>
          </select>
        </div>
        <Input label="Postal Code" placeholder="00270" />
      </div>
      <button className="w-full px-4 py-[14px] text-white bg-[#1D1D1F] rounded-lg">Continue</button>
    </form>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, className, ...props }: InputProps) => {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="block mb-3 text-sm font-semibold text-[#6C727F]"
      >
        {label}
      </label>
      <input
        type="text"
        className="w-full px-4 py-[14px] bg-[#F3F4F6] relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.04)] border border-[#0000001f] rounded-lg placeholder:text-[#6C727F]"
        {...props}
      />
    </div>
  );
};