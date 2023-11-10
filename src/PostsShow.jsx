export function PostsShow(props) {
    props.post;
    return(
    <div>
        <h2>Blog Post</h2>
        <h4>{props.post.title}</h4>
        <p>Description: {props.post.body}</p>
    </div>
    );
}