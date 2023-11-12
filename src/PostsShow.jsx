export function PostsShow(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onUpdatePost(props.post.id,params);
        event.target.reset();
    };

    const handleClick = () => {
        props.onDestroyPost(props.post);
    };

    return(
    <div>
        <h2>Blog Post</h2>
        <h4>{props.post.title}</h4>
        <p>Description: {props.post.body}</p>
        <h2>Edit Post</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                Title: <input defaultValue={props.post.title} className="form-control" type="text" name="title" />
            </div>
            <div className="form-group">
                Description: <input defaultValue={props.post.body} className="form-control" type="text" name="body" />
            </div> 
            <div className="form-group">
                Image: <input defaultValue={props.post.image} className="form-control" type="text" name="image" />
            </div> 
            <button type="submit" className="btn btn-success">Update post</button>
        </form>
        <button onClick={handleClick} className="btn btn-danger">Destroy Post</button>
    </div>
    );
}