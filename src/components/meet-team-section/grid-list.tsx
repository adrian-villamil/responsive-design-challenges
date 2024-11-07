import Link from "next/link";
import { GridListItem } from "./grid-list-item";

const members = [
  {
    name: 'Liam Novak',
    role: 'Software Engineer',
    image: '/meet-team-section/person_1@2x.png',
    bgColor: '#C1B6F8',
  },
  {
    name: 'Sophia Moretti',
    role: 'Business Development Manager',
    image: '/meet-team-section/person_2@2x.png',
    bgColor: '#EDACD2',
  },
  {
    name: 'Ethan Rossi',
    role: 'Business Development Manager',
    image: '/meet-team-section/person_3@2x.png',
    bgColor: '#9DC4F8',
  },
  {
    name: 'Isabella Ricci',
    role: 'UX Designer',
    image: '/meet-team-section/person_4@2x.png',
    bgColor: '#F8D8B0',
  },
  {
    name: 'Noah Conti',
    role: 'Content Creator',
    image: '/meet-team-section/person_5@2x.png',
    bgColor: '#86E7D4',
  },
];

export const GridList = () => {
  return (
    <div className="w-fit mx-auto rounded-3xl overflow-hidden grid grid-cols-[284px] sm:grid-cols-[repeat(2,_284px)] lg:grid-cols-[repeat(3,_284px)] xl:grid-cols-[repeat(4,_284px)] auto-rows-[288px] bg-[#F3F4F6] bg-[url('/meet-team-section/Background_decor.svg')] bg-no-repeat">
      <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-2 p-6 sm:p-8">
        <span className="text-[#3662E3]">Our team</span>
        <h1 className="text-[40px] font-medium my-[5px] tracking-[-0.01em] leading-10">Meet the brain</h1>
        <p className="max-w-[470px] text-[#394150] leading-5 tracking-[-0.01em]">{"We are proud to have them as part of our community and look forward to continuing to push the boundaries of what's possible in the world of digital art."}</p>
      </div>
      {members.map((member) => (
        <GridListItem key={member.image} {...member} />
      ))}
      <div className="col-start-1 row-start-auto sm:row-start-4 lg:row-start-3 xl:row-start-2 relative">
        <Link href={'#'} className="absolute left-8 bottom-8 pr-5 font-medium text-[#394150] bg-[url('/meet-team-section/arrow_up_right.svg')] bg-no-repeat bg-[right_70%]">See all members</Link>
      </div>
    </div>
  );
};