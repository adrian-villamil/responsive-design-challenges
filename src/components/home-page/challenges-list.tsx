import { ChallengesListCard } from "./challenges-list-card";

const challenges = [
  {
    image: '/challenges/pricing-table.png',
    title: 'Pricing Table',
    pathname: '/pricing-table',
    challengeUrl: 'https://devchallenges.io/challenge/pricing-table-section-challenge',
  },
  {
    image: '/challenges/meet-team-section.png',
    title: 'Meet the Team Section',
    pathname: '/meet-team-section',
    challengeUrl: 'https://devchallenges.io/challenge/meet-the-team-section-challenge',
  },
  {
    image: '/challenges/simple-feature-section.png',
    title: 'Simple Feature Section',
    pathname: '/simple-feature-section',
    challengeUrl: 'https://devchallenges.io/challenge/simple-feature-section-challenge',
  },
  {
    image: '/challenges/join-our-newsletter.png',
    title: 'Join Our Newsletter',
    pathname: '/join-our-newsletter',
    challengeUrl: 'https://devchallenges.io/challenge/join-our-newsletter',
  },
  {
    image: '/challenges/simple-faq.png',
    title: 'Simple Frequently Asked Questions (FAQ)',
    pathname: '/simple-faq',
    challengeUrl: 'https://devchallenges.io/challenge/simple-faq-challenge',
  },
  {
    image: '/challenges/simple-homepage.png',
    title: 'Simple Homepage - Alarado',
    pathname: '/simple-homepage',
    challengeUrl: 'https://devchallenges.io/challenge/simple-hompage-alarado',
  },
  {
    image: '/challenges/contact-page.png',
    title: 'Contact Page',
    pathname: '/contact-page',
    challengeUrl: 'https://devchallenges.io/challenge/contact-page',
  },
  {
    image: '/challenges/testimonial-page.png',
    title: 'Testimonial Page',
    pathname: '/testimonial-page',
    challengeUrl: 'https://devchallenges.io/challenge/testimonial-page',
  },
  {
    image: '/challenges/business-blog-card.png',
    title: 'Business Blog Card',
    pathname: '/business-blog-card',
    challengeUrl: 'https://devchallenges.io/challenge/business-blog-card',
  },
  {
    image: '/challenges/minimal-blog-card.png',
    title: 'Minimal Blog Card',
    pathname: '/minimal-blog-card',
    challengeUrl: 'https://devchallenges.io/challenge/minimal-blog-card',
  },
];

export const ChallengesList = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20 pb-20 flex flex-wrap justify-center gap-8">
      {challenges.map((challenge) => <ChallengesListCard key={challenge.image} {...challenge} />)}
    </div>
  );
};