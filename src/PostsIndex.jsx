export function PostsIndex(props) {
  console.log(props.myPosts);
  return (
    <div id="postsIndex">
      <h1>All posts</h1>
      {props.myPosts.map((post) => (
        <div key={post.id} className="posts">
          <h4>{post.title}</h4>
          <img src={post.image} alt=""></img>
          <div>{post.body}</div>
          <button className="button">More info</button>
        </div>
      ))}
    </div>
  );
}
