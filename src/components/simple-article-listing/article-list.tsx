import { ArticleListItem } from "./article-list-item";

const articles = [
  {
    title: 'Unlocking the Power of Cloud Computing: A Guide to Scalable Solutions',
    publishedAt: 'November 12, 2024',
    image: '/simple-article-listing/photo_1.png',
  },
  {
    title: 'The Future of AI: How Machine Learning is Revolutionizing Industries',
    publishedAt: 'November 12, 2024',
    image: '/simple-article-listing/photo_3.png',
  },
  {
    title: 'The Impact of 5G on Business: How Faster Networks are Transforming the Way We Work',
    publishedAt: 'November 12, 2024',
    image: '/simple-article-listing/photo_2.png',
  },
];

export const ArticleList = () => {
  return (
    <div className="flex flex-col gap-y-[52px]">
      {articles.map((article) => (
        <ArticleListItem key={article.image} {...article} />
      ))}
    </div>
  );
};