export const Form = () => {
  return (
    <form action="" className="sm:w-full xl:max-w-[810px] mx-auto mt-[70px] p-8 pb-28 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-x-[18px] gap-y-[22px] bg-[#F8FAFC]/20">
      <div className="flex flex-col">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" placeholder="Ethan Johnson" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="company-email">Company Email</Label>
        <Input type="text" id="company-email" placeholder="ethan@johnson.com" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="company-size">Company Size</Label>
        <Select>
          <option value="50-100">50-100 employees</option>
          <option value="100-150">100-150 employees</option>
          <option value="150-200">150-200 employees</option>
        </Select>
      </div>
      <div className="flex flex-col">
        <Label htmlFor="subject">Subject</Label>
        <Select>
          <option value="blp">Building Landing pages</option>
          <option value="ux/ui-d">UX/UI Design</option>
          <option value="dtp">Documenting The Project</option>
        </Select>
      </div>
      <div className="lg:col-span-2">
        <Label htmlFor="message">Message</Label>
        <textarea
          name="message"
          id="message"
          className="w-full h-52 mt-[3px] p-[22px] rounded-2xl font-bold"
          defaultValue={'50-100 employees'}
        >
        </textarea>
      </div>
      <button className="lg:col-span-2 w-full p-[22px] rounded-2xl text-xl font-bold text-[#4036A9] bg-white">
        Contact Sales
      </button>
    </form>
  );
};

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> { }

const Label = ({ ...props }: LabelProps) => {
  return (
    <label
      {...props}
      className="text-sm text-white"
    >
      {props.children}
    </label>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = ({ ...props }: InputProps) => {
  return (
    <input
      {...props}
      className="mt-[3px] p-[22px] rounded-2xl placeholder:text-[#CDD5E0]"
    />
  );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> { }

const Select = ({ ...props }: SelectProps) => {
  return (
    <select
      {...props}
      className="w-full mt-[3px] p-[22px] rounded-2xl font-bold appearance-none bg-[url('/contact-page/Expand_down.svg')] bg-no-repeat bg-[center_right_1.3rem]"
    >
      {props.children}
    </select>
  );
};