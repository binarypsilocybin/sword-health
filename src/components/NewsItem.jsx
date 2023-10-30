const NewsItem = ({ item }) => {
  return (
    <>
      <div className="new">
        <div className="progress-text">
          <img src={item.image} alt="image" />
          <h3>{item.title}</h3>
          <p> {item.text}</p>
          <p> {item.content}</p>
          <p> {item.category}</p>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
