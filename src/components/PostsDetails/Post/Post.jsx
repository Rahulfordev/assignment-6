/* eslint-disable react/prop-types */
const Post = ({ post }) => {
  const { title, body } = post;
  return (
    <div className="post__container">
      <h3 className="post__title">Title: {title}</h3>
      <p className="post__body">Body: {body}</p>
    </div>
  );
};

export default Post;
