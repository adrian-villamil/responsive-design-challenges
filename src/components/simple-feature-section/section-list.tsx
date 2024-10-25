import { SectionListCard } from "./section-list-card";

const sections = [
  {
    avatarContent: '✋',
    avatarColor: '#FCEED8',
    title: 'Collect Feedback at Multiple Touchpoints',
    description: 'Provide a comprehensive understanding of the customer experience.',
    image: '/simple-feature-section/photo_2.png',
  },
  {
    avatarContent: '🥅',
    avatarColor: '#DEE9FC',
    title: 'Ask Targeted and Specific Questions',
    description: 'Avoid vague or open-ended questions that may not yield actionable insights.',
    image: '/simple-feature-section/photo_1.png',
  },
  {
    avatarContent: '💬',
    avatarColor: '#FBE5E6',
    title: 'Prioritize and Respond to Feedback',
    description: "Communicate the changes or improvements you've made in response to their feedback.",
    image: '/simple-feature-section/photo_3.png',
  },
];

export const SectionList = () => {
  return (
    <div className="mt-12 mb-11 flex flex-wrap justify-center gap-12">
      {sections.map((section) => <SectionListCard key={section.title} {...section} />)}
    </div>
  );
};