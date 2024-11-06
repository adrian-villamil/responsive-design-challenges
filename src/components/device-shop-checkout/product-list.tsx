import Image from "next/image";

const products = [
  {
    name: 'iPhone 12 Pro',
    image: '/device-shop-checkout/Gold.png',
    color: 'Golden',
    price: '$999.00',
    quantity: 'x 1',
  },
  {
    name: 'Apple Watch',
    image: '/device-shop-checkout/Blue.png',
    color: 'Blue',
    price: '$399.00',
    quantity: 'x 1',
  },
  {
    name: 'iMac',
    image: '/device-shop-checkout/iMac=Front-1.png',
    color: 'Green',
    price: '$1199.00',
    quantity: 'x 1',
  },
];

export const ProductList = () => {
  return (
    <div className="pb-6 space-y-6">
      {products.map((product) => (
        <ProductListItem key={product.name} {...product} />
      ))}
    </div>
  );
};

interface ProductListItemProps {
  name: string;
  image: string;
  color: string;
  price: string;
  quantity: string;
}

const ProductListItem = ({ name, image, color, price, quantity }: ProductListItemProps) => {
  return (
    <div className="flex">
      <div
        style={{ '--image-url': `url("${image}")` } as React.CSSProperties}
        className="w-[100px] h-[100px] border border-[#0000001f] rounded-xl bg-white bg-[image:var(--image-url)] bg-auto bg-center bg-no-repeat"
      >
      </div>
      <div className="ml-6 flex flex-col flex-1">
        <span className=" font-semibold leading-none mb-3">{name}</span>
        <span className="flex-1 font-medium leading-none text-[#6C727F]">{color}</span>
        <span className="text-[#6C727F]">{quantity}</span>
      </div>
      <div className="flex flex-col justify-between">
        <span className="font-semibold leading-none">{price}</span>
        <div className="">
          <div className="w-6 h-6 float-right bg-[url('/device-shop-checkout/close-icon.svg')] bg-center bg-contain bg-no-repeat"></div>
        </div>
      </div>
    </div>
  );
};