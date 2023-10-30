const PostItem = ({ item }) => {
  const { title, text, content, color, category, image } = item;

  return (
    <div
      className="new"
      style={{
        "--accent": color,
      }}
    >
      <div className="progress-text">
        <img src={image} alt="image" />
        <h2>{title}</h2>
        <p> {text}</p>
        <p> {content}</p>
        <span className="category-text"> {category}</span>
      </div>
    </div>
  );
};
export default PostItem;
