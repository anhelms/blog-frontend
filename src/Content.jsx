import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";

export function Content() {
  const [posts, setPosts] = useState([]); // React way
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {

    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts,[]);

  const handleCreatePost = (params) => {
    axios

    .post("http://localhost:3000/posts.json", params)
    .then((response) => {
      console.log(response.data);
      setPosts([...posts, response.dat]);
    })
    .catch((error) => {
      console.log(error.response.data.error);
    });
  }

  return (
    <div className= "container">
      <PostsNew onCreatePost={handleCreatePost}/>
      {/* <button onClick={handleIndexPosts}>Load Posts</button> */}
      <PostsIndex myPosts={posts} onShowPost={handleShowPost} /> 
      <Modal show={isPostsShowVisible} onClose={handleClose}> 
      <PostsShow post={currentPost} />
      </Modal>
    </div>
  );
}
