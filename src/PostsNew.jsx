export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div className="newpost">
          Title: <input type="text" />
        </div>
        <div className="newpost">
          Body: <input type="text" />
        </div>
        <button className="button" type="submit">Create post</button>
      </form>
    </div>
  );
}
