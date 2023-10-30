import NewsItem from "./NewsItem";

const NewsList = ({ items }) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <>
            <NewsItem key={index} item={item} />
          </>
        );
      })}
    </>
  );
};

export default NewsList;
