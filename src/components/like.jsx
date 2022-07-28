const Like = ({ isLiked, onLike }) => {
  return (
    <i
      class={`fa-${isLiked ? "solid" : "regular"} fa-heart`}
      style={{ cursor: "pointer" }}
      onClick={onLike}
    />
  );
};

export default Like;
