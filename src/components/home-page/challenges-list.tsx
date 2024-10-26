import { ChallengesListCard } from "./challenges-list-card";

const challenges = [
  {
    image: '/challenges/simple-article-listing.png',
    title: 'Simple Article Listing',
    pathname: '/simple-article-listing',
    challengeUrl: 'https://devchallenges.io/challenge/simple-article-listing',
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