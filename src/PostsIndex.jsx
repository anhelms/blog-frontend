export function PostsIndex(props) {
  console.log(props.myPosts);
  return (
    <div id="postsIndex">
      <h1>All posts</h1>
      {props.myPosts.map((post) => (
        <div key={post.id} className="posts col-lg-4 col-md-6 col-12 my-3">
          <h4>{post.title}</h4>
          <img src={post.image} alt=""></img>
          {/* <div>{post.body}</div> */}
          <br></br>
          <button className="button btn-secondary" onClick={() => props.onShowPost(post)}>
            More info
            </button>
        </div>
      ))}
    </div>
  );
}
